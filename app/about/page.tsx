import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function About() {
  return (
    <div className='flex justify-center'>
      <Card className="bg-primary text-font">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Fangxing Liu</p>
            <p className="text-small text-default-500">fangxingliu.com</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum quos! Et porro aliquid quae error sapiente omnis voluptates debitis blanditiis, quasi alias recusandae, maiores dolor ut dolores molestiae vero?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum quos! Et porro aliquid quae error sapiente omnis voluptates debitis blanditiis, quasi alias recusandae, maiores dolor ut dolores molestiae vero?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum quos! Et porro aliquid quae error sapiente omnis voluptates debitis blanditiis, quasi alias recusandae, maiores dolor ut dolores molestiae vero?
          </p>
        </CardBody>
        <Divider/>
      </Card>
    </div>
  )
}
