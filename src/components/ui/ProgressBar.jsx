export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-nura-border h-2 rounded-full overflow-hidden">
      <div 
        className="h-full bg-emerald-primary transition-all duration-300 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
