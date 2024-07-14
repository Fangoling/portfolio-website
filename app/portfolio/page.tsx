import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Spacer } from "@nextui-org/react";


const projectItems = [
  { key: 'portfolio', name: 'My portfolio website', link: 'fangxingliu.com',
      description:'The portfolio website you are currently visiting. Built using NextJS with NextUI.',
      source: 'https://github.com/Fangoling/portfolio-website'},
  { key: 'soilplanter', name: 'Soil Planter', link: '', 
      description:'An android app which is used to control an intelligent plant pot. Developed using Android Jetpack Compose.',
      source: 'https://github.com/SoilPlanter'},
  { key: 'brainrotgpt', name: 'BrainRot GPT', link: '', 
      description:'An App, which turns a transcript of video to a Video with subtitles and a narrator, summarizing its content. Developed using Python and Chainlit.',
      source: 'https://github.com/Fangoling/BrainRotGPT'},
  { key:'hellofresh', name: 'HACKATUM 2023 - Hello Fresh', link: '', 
      description:'A fullstack webapp that recommends you your next order according to your search behaviour. Developed using Javascript, NextJS and NodeJS',
      source: 'https://github.com/Fangoling/HackaTUM-23---Hello-Fresh'},
] 

export default function Portfolio() {
  return (
  <div className='flex flex-wrap justify-center gap-4'>
    {projectItems.map(({key, name, link, description, source}) => (
      <Card className="max-w-xs bg-primary text-font" key={key}>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-large">{name}</p>
            <p className="text-small text-default-500">{link}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p>
            {description}
          </p>
        </CardBody>
        <Divider/>
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href={source}
            className='text-font'
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    ))}
    </div>
  )
}
