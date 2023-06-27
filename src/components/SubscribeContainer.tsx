import { Button } from "./reusable/Button";
import { TextInput } from "./reusable/TextInput";

export const SubscribeContainer = () => {
  return (
    <div className="md:flex md:flex-col items-center">
      <h4 className="text-xl pb-4">Get My Monthly Health Tips</h4>
      <TextInput className="w-full" containerClassName="w-full" label="Full Name"/> 
      <TextInput className="w-full" containerClassName='w-full' label="Email"/> 
      <Button className={'text-primary-400 px-2 mt-4 text-lg'} action={() => {alert('todo')}}>Submit</Button>
    </div>
  )
}