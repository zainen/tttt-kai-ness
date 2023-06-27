
export const TextInput = ({label, className, handler, textArea = false, containerClassName}: {handler?: (value: string) => void; label?: string; className?: string; textArea?: boolean, containerClassName?: string}) => {
  return (
    <>
      {textArea ?
        <div className={`flex flex-col w-full ${containerClassName}`}>
          <label>{label}</label>
          <textarea className={`resize-none md:h-36 h-20 scrol bg-primary-300 border-b focus:outline-none border-b-ttt-100 overflow-visible sscrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 ${className}`} onChange={(e) => (console.log(e.target.value))} />
        </div>
        :
        <div className={`flex flex-col ${containerClassName}`}>
          <label>{label}</label>
          <input className={`bg-primary-300 border-b focus:outline-none border-b-ttt-100 ${className}`} type="text" onChange={handler ? (e) => handler(e.target.value) : () => {}} />
        </div>
      }
    </>
  )
}