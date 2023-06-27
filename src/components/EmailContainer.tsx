import { Button } from "./reusable/Button";
import { TextInput } from "./reusable/TextInput";

export const EmailContainer = () => {
  return (
    <div className="md:flex md:flex-col items-center md:w-1/3">
    <h4 className="text-xl">Let's Connect!</h4>
    <div className="flex justify-between w-full mt-4"> 
      <TextInput className="" label="First Name"/> 
      <TextInput label="Last Name"/> 
    </div>
    <div className="flex justify-between w-full mt-4"> 
      <TextInput label="Email"/> 
      <TextInput label="Phone Number"/> 
    </div>
    <div className="w-full mt-4"> 
      <TextInput label="Message" textArea={true}/> 
    </div>
    <Button className={'text-primary-400 px-2 mt-4 text-lg'} action={() => {alert('todo')}}>Submit</Button>
  </div>
  )
}