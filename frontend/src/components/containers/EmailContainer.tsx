import { Button } from "../reusable/Button";
import { TextInput } from "../reusable/TextInput";
import { useState } from "react";

import dotenv from 'dotenv';
import { EmailParams } from "../../types";
import { validateEmailParams } from "../../helperFunctions/validateEmailParams";
dotenv.config();

export const EmailContainer = ({inputClassname, borderColour}: { inputClassname: string; borderColour: string }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [fade, setFade] = useState(true);
  const [showError, setShowError] = useState(false)
  const [showSuccess, setSuccess] = useState(false)

  const [error, setError] = useState('a');

  const handleErrorFade = () => {
    setShowError(!showError)
    setTimeout(() => {
      setFade(!fade)
    }, 500)
  }

  const handleSuccessFade = () => {
    setSuccess(!showSuccess)
    setTimeout(() => {
      setFade(!fade)
    }, 500)
  }

  const handleSendEmail = async () => {
    const params: EmailParams = {
      name: firstName + lastName,
      email,
      phone: phoneNumber,
      message
    };
    const missingParams = validateEmailParams(params)
    
    try {
      if (missingParams.length) {
        throw missingParams.join(', ')
      }
      const response = await fetch(process.env.REACT_APP_EMAIL_SERVICE ?? '', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      });
      if (response.status === 200) {
        handleSuccessFade()
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setMessage('')
      } else {

      }
    } catch (err) {
      console.log(err)
      handleErrorFade();
      setError("Error: Could not send");
      setTimeout(() => {
        setShowError(false);
        setError('')
      }, 5000)
    }
  }
  return (
    <div className="flex flex-col items-center h-fit max-w-xl w-full">
      <h4 className="text-xl font-bold">Let's Connect!</h4>
        <div className={`w-full rounded-md ${error && 'bg-red-warn'} ${showSuccess && 'bg-primary-100'} py-2 px-4 transition-all duration-500  ${showError || showSuccess ? 'opacity-80' : `opacity-0 translate-x-full ${fade && 'hidden'}`}`}>
          {showError && <div>
            <p className="text-end" onClick={handleErrorFade}>X</p>
            <p>{error}</p>
          </div>}
          {showSuccess && <div>
            <p className="text-end" onClick={handleSuccessFade}>X</p>
            <p>Sent</p>
          </div>}
        </div>
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
        <div className="w-full flex justify-center">

          <Button className={'text-primary-400 px-2 mt-4 text-lg w-fit'} action={handleSendEmail}>Submit</Button>
        </div>
    </div>
  )
}