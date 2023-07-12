import { useState } from "react";
import { Button } from "../reusable/Button";
import { TextInput } from "../reusable/TextInput";

export const SubscribeContainer = () => {
  // TODO LATER
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col items-center md:mr-14">
      <h4 className="text-xl pb-4">Get My Monthly Health Tips</h4>
      <form action="" className="w-full mx-2">
        <TextInput
          required
          name="fullName"
          className="w-full bg-primary-400"
          borderColour="border-b-tttt-200"
          containerClassName="w-full"
          label="Full Name"
          state={name}
          setState={setName}
        />
        <TextInput
          required
          name="email"
          className="w-full bg-primary-400"
          borderColour="border-b-tttt-200"
          containerClassName="w-full"
          label="Email"
          state={email}
          setState={setEmail}
        />
        <div className="flex justify-center">
          <Button
            className={"text-primary-400 px-2 mt-4 text-lg w-fit"}
            action={() => {
              alert("todo");
            }}
            >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};