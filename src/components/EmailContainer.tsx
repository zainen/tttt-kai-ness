import { Button } from "./reusable/Button";
import { TextInput } from "./reusable/TextInput";
import { useState } from "react";


export const EmailContainer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const handleSendEmail = async () => {
    const params = {
      from_name: firstName + lastName,
      from_email: email,
      from_phone: phoneNumber,
      message
    }
    try {
    } catch (err) {
      console.log('todo', err)
    }
  }
  return (
    <div className="md:flex md:flex-col items-center md:w-1/3">
      <h4 className="text-xl">Let's Connect!</h4>
        <div className="md:flex justify-between w-full mt-4"> 
          <TextInput required state={firstName} setState={setFirstName} name='first_name' className="md:mr-2" label="First Name"/> 
          <TextInput state={lastName} setState={setLastName} name='lastName' className='' label="Last Name"/> 
        </div>
        <div className="md:flex justify-between w-full mt-4"> 
          <TextInput required state={email} setState={setEmail} name='email' className="md:mr-2" label="Email"/> 
          <TextInput state={phoneNumber} setState={setPhoneNumber} name='phoneNumber' className="" label="Phone Number"/> 
        </div>
        <div className="w-full mt-4"> 
          <TextInput required state={message} setState={setMessage} name='message' className='w-full' label="Message" textArea={true}/> 
        </div>
        <Button className={'text-primary-400 px-2 mt-4 text-lg'} action={handleSendEmail}>Submit</Button>
    </div>
  )
}