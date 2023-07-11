export const Image = (props: {src: string; alt?: string; className?: string; svgFill?: string;}) => {
  return (
    <div className={props.className}>
      <img className={props.svgFill} src={props.src} alt={props.alt} />
    </div>
  )
}