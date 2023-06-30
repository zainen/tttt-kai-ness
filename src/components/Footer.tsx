import { EmailContainer } from "./EmailContainer";
import { SubscribeContainer } from "./SubscribeContainer";
import { Image } from "./reusable/Image";

export const Footer = () => {
  return (
    <div className="w-full px-4 md:px-0 py-10 h-fit md:flex md:justify-around bg-primary-300 text-tttt-200">
      <SubscribeContainer />
      <EmailContainer />
      <div className="flex ">
        <Image src={`/img/facebook.svg`}/>
        <Image src={`/img/instagram.svg`}/>
        <Image src={`/img/linkedin.svg`}/>
        <Image src={`/img/pinterest.svg`}/>
      </div>
    </div>
  )
}