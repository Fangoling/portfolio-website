"use client";
import React from "react";
import { useState } from "react";
import { Input, Spacer, Button } from "@nextui-org/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value: String) => value.match(/^[A-Z0-9._%]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const isInvalid = (prop: String, value: String) => {
    if (value === "") return false;

    if (prop === "email") {
      return !validateEmail(email)
    }

    return value.length === 0;
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name, email, message
    }

    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  const emailItems = [
    { label: "Name", type: "text", value: name, setter: setName },
    { label: "Email", type: "email", value: email, setter: setEmail },
    { label: "Message", type: "text", value: message, setter: setMessage },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {emailItems.map(({label, type, value, setter}) => (
        <div key={label} className="max-w-xl w-full">
          <Input
          type={type}
          label={label}
          value={value}
          isInvalid={isInvalid(type, value)}
          color={isInvalid(type, value) ? "danger" : "secondary"}
          className="max-w-xl"
          onValueChange={setter}
          />
          <Spacer y={4}/>
        </div>
      ))}
      <Button color="secondary" onClick={(e) => {handleSubmit(e)}}>
        Send
      </Button>
    </div>
  );
}
