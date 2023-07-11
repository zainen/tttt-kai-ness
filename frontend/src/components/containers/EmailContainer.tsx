import { Button } from "../reusable/Button";
import { TextInput } from "../reusable/TextInput";
import { useState } from "react";

import dotenv from 'dotenv';
dotenv.config();

export const EmailContainer = ({inputClassname, borderColour}: { inputClassname: string; borderColour: string }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    const params = {
      name: firstName + lastName,
      email,
      phone: phoneNumber,
      message
    }
    try {
      const response = await fetch(process.env.REACT_APP_EMAIL_SERVICE ?? '', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      })
      if (response.status === 200) {
        console.log('success')
        // setFirstName('')
        // setLastName('')
        // setEmail('')
        // setPhoneNumber('')
        // setMessage('')
      } else {

      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <h4 className="text-xl font-bold">Let's Connect!</h4>
        <div className="flex flex-col md:flex-col lg:flex-row  justify-between w-full mt-4"> 
          <TextInput required state={firstName} setState={setFirstName} name='first_name' className={`lg:mr-2 ${inputClassname}`} borderColour={borderColour} label="First Name"/> 
          <TextInput state={lastName} setState={setLastName} name='lastName' className={`${inputClassname}`} borderColour={borderColour} label="Last Name"/> 
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row  justify-between w-full mt-4"> 
          <TextInput required state={email} setState={setEmail} name='email' className={`lg:mr-2 ${inputClassname}`} borderColour={borderColour} label="Email"/> 
          <TextInput state={phoneNumber} setState={setPhoneNumber} name='phoneNumber' className={`${inputClassname}`} borderColour={borderColour} label="Phone Number"/> 
        </div>
        <div className="w-full mt-4"> 
          <TextInput required state={message} setState={setMessage} name='message' className={`w-full ${inputClassname}`} borderColour={borderColour} label="Message" textArea={true}/> 
        </div>
        <Button className={'text-primary-400 px-2 mt-4 text-lg'} action={handleSendEmail}>Submit</Button>
    </>
  )
}