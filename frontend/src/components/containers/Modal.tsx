import { Card } from "../reusable/Card";
import { EmailContainer } from "./EmailContainer";

export const ModalPopup = (props: {onClose: () => void;}) => {
  
  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <Card className="z-20 border-none bg-primary-200 max-w-xl w-full  sm:rounded-xl">
        <div className="flex justify-end" >

          <button className="hover:text-tttt-200 text-right" onClick={props.onClose}>X</button>
        </div>
        <EmailContainer borderColour="" inputClassname="" />
      </Card>
    </div>
  )
}