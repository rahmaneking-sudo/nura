import { useEffect, useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Volume2, VolumeX } from 'lucide-react'
import { useQuizStore } from '@/store/quizStore'
import { useAuthStore } from '@/store/authStore'
import { useVoiceSpeech } from '@/hooks/useVoiceSpeech'
import { saveModuleScore } from '@/firebase/firestore'
import { MODULES } from '@/data'
import OptionButton from '@/components/quiz/OptionButton'
import ExplicationBlock from '@/components/quiz/ExplicationBlock'
import ProgressBar from '@/components/ui/ProgressBar'
import { shuffle } from '@/utils/shuffle'
import toast from 'react-hot-toast'

export default function Quiz() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { speak, stop } = useVoiceSpeech()
  const user = useAuthStore(s => s.user)
  const { questionActuelle, tentatives, scoreConnaissance, scoreCompatibilite,
    setModule, nextQuestion, addTentative, addScore, addReponse, terminer } = useQuizStore()

  const module = MODULES[moduleId]
  const questions = useMemo(() => module ? shuffle([...module.questions]) : [], [module])
  const question = questions[questionActuelle]
  const [optionStates, setOptionStates] = useState({})
  const [explicationVisible, setExplicationVisible] = useState(false)
  const [isVocalOn, setIsVocalOn] = useState(false)

  useEffect(() => { if (moduleId) setModule(moduleId) }, [moduleId, setModule])

  useEffect(() => {
    setOptionStates({})
    setExplicationVisible(false)
    if (isVocalOn && question) speak(question.question)
  }, [questionActuelle, isVocalOn, question, speak])

  const handleOptionClick = (option) => {
    if (option.correct !== false && (option.correct || question.type === 'compatibilite')) {
      setOptionStates(s => ({ ...s, [option.texte]: 'correct' }))
      addScore(question.type, question.type === 'compatibilite' ? option.poids : 1)
      addReponse({ questionId: question.id, reponse: option.texte, correct: true })
      setExplicationVisible(true)
      setExplicationVisible(true)
    } else {
      addTentative()
      setOptionStates(s => ({ ...s, [option.texte]: 'wrong' }))
      if (tentatives + 1 >= 2) {
        const bonneReponse = question.options.find(o => o.correct)
        if (bonneReponse) setOptionStates(s => ({ ...s, [bonneReponse.texte]: 'correct' }))
        setExplicationVisible(true)
        setExplicationVisible(true)
      } else {
        toast('Essaie encore — tu as une dernière chance !', { icon: '💡' })
      }
    }
  }

  if (!module || !question) return null

  return (
    <>
      <Helmet>
        <title>{module.titre} — Nura Quiz Islamique</title>
      </Helmet>
      <div className="min-h-screen bg-nura-bg px-4 py-8 max-w-2xl mx-auto">
        <ProgressBar value={(questionActuelle + 1) / questions.length * 100} />
        <div className="flex items-center justify-between mt-4 mb-6">
          <span className="text-xs text-nura-muted font-medium">
            Question {questionActuelle + 1} / {questions.length}
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-light text-emerald-primary text-xs px-3 py-1 rounded-full font-medium">
              {question.categorie}
            </span>
            <button onClick={() => { setIsVocalOn(!isVocalOn); isVocalOn ? stop() : speak(question.question) }}
              className="p-2 rounded-full hover:bg-emerald-light transition-colors">
              {isVocalOn ? <Volume2 size={18} className="text-emerald-primary" /> : <VolumeX size={18} className="text-nura-muted" />}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={questionActuelle}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}>
            <h2 className="text-lg font-medium text-nura-text leading-relaxed mb-6">
              {question.question}
            </h2>
            <div className="flex flex-col gap-3">
              {shuffle([...question.options]).map((option, i) => (
                <OptionButton key={i} option={option}
                  onClick={handleOptionClick}
                  state={optionStates[option.texte] || 'idle'}
                  disabled={explicationVisible || optionStates[option.texte] === 'wrong'}
                />
              ))}
            </div>
            <ExplicationBlock question={question} visible={explicationVisible}
              correct={Object.values(optionStates).includes('correct')} />
            {explicationVisible && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
                className="mt-6 flex justify-end"
              >
                <button
                  onClick={() => {
                    const nextIndex = questionActuelle + 1;
                    if (nextIndex >= questions.length) {
                      terminer();
                      if (user) {
                        const finalScore = Object.values(optionStates).includes('correct') ? scoreConnaissance + 1 : scoreConnaissance;
                        saveModuleScore(user.uid, moduleId, finalScore, scoreCompatibilite);
                      }
                      navigate(`/resultats/${moduleId}`);
                    } else {
                      nextQuestion();
                    }
                  }}
                  className="bg-emerald-primary text-white font-medium px-6 py-3 rounded-full shadow-nura hover:bg-emerald-dark transition-all"
                >
                  {questionActuelle + 1 >= questions.length ? 'Terminer le module' : 'Question suivante'}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
