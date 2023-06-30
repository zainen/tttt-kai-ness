export const Image = (props: {src: string; alt?: string; className?: string}) => {
  return (
    <div className={props.className}>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}