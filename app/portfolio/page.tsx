import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Spacer } from "@nextui-org/react";

export default function Portfolio() {
  return (
  <div className='flex flex-wrap justify-center gap-4'>
    <Card className="max-w-xs bg-primary text-font">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">My portfolio website</p>
          <p className="text-small text-default-500">fangxingliu.com</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>
          This portfolio website. 
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
    <Spacer x={4} y={4}/>
    <Card className="max-w-xs bg-primary text-font">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">BrainRot GPT</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>
          A Chainlit App, which turns a transcript of video to a Video with subtitles and a narrator, summarizing its content.
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
    <Spacer x={4} y={4}/>
    <Card className="max-w-xs bg-primary text-font">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">HACKATUM 2023 - Hello Fresh Project</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>
          A webapp that recommends you your next order according to your search behaviour.
        </p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/Fangoling/HackaTUM-23---Hello-Fresh"
          className='text-font'
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}
