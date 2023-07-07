import { useState } from "react";
import { Button } from "../reusable/Button";
import { TextInput } from "../reusable/TextInput";

export const SubscribeContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="md:flex md:flex-col items-center md:mr-14">
      <h4 className="text-xl pb-4">Get My Monthly Health Tips</h4>
      <form action="" className="w-full mx-2">
        <TextInput
          required
          name="fullName"
          className="w-full"
          containerClassName="w-full"
          label="Full Name"
          state={name}
          setState={setName}
        />
        <TextInput
          required
          name="email"
          className="w-full"
          containerClassName="w-full"
          label="Email"
          state={email}
          setState={setEmail}
        />
        <Button
          className={"text-primary-400 px-2 mt-4 text-lg"}
          action={() => {
            alert("todo");
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};