import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Spacer } from "@nextui-org/react";

export default function Portfolio() {
  return (
    <div>
    <Card className="max-w-[100px] bg-primary text-font">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">My portfolio website</p>
          <p className="text-small text-default-500">fangxingliu.com</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>
          Just another portfolio website.
        </p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/Fangoling/portfolio-website"
          className='text-font'
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
    <Spacer y={4}/>
    <Card className="max-w-[100px] bg-primary text-font">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">BrainRot GPT</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>
          Eine Chainlit App, welche ein Transkipt von einem Meeting in ein Video umwandelt und mit Untertiteln vorliest. 
        </p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/Fangoling/BrainRotGPT"
          className='text-font'
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}
