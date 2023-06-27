import { EmailContainer } from "./EmailContainer";
import { SubscribeContainer } from "./SubscribeContainer";
import { Image } from "./reusable/Image";

export const Footer = () => {
  console.log("HERE", process.env)
  return (
    <div className="w-full py-10 h-fit flex justify-around bg-primary-300 text-ttt-200">
      <SubscribeContainer />
      <EmailContainer />
      <div className=" flex ">
        <Image src={`/img/facebook.svg`}/>
        <Image src={`/img/instagram.svg`}/>
        <Image src={`/img/linkedin.svg`}/>
        <Image src={`/img/pinterest.svg`}/>
      </div>
    </div>
  )
}