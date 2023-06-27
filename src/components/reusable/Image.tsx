export const Image = (props: {src: string; alt?: string}) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}