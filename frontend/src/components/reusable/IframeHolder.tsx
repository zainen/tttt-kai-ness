import { Card } from "./Card";

export const PodcastYoutube = (props: { url: string; orderReverse?: boolean; title: string; description: string; }) => {
  return (
    <Card className={`m-4 bg-primary-100 flex flex-col justify-center items-center md:flex-row ${props.orderReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <iframe 
        className="w-full h-60"
        src={props.url} 
        title={props.url} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
      <div className="w-full flex flex-col justify-center items-center text-primary-400 p-4 md:p-10 ">
        <h2 className="font-bold text-xl text-center">{props.title}</h2>
        <p className="text-center text-lg">{props.description}</p>
      </div>
    </Card>
  )
}

export const PodcastSpotify = (props: { url: string; orderReverse?: boolean; title: string; description: string; }) => {
  return (
    <Card className={`m-4 bg-primary-100 flex flex-col justify-center items-center md:flex-row ${props.orderReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <iframe 
        style={{borderRadius: '12px'}}
        src={props.url} 
        width="100%" 
        height="352" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        title={props.url}
      ></iframe>
      <div className="w-full flex flex-col justify-center items-center text-primary-400 p-4 md:p-10 ">
        <h2 className="font-bold text-xl text-center">{props.title}</h2>
        <p className="text-center text-lg">{props.description}</p>
      </div>
    </Card>
  )
}