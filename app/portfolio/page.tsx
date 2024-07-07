import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";

export default function Portfolio() {
  return (
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
          href="https://www.fangxingliu.com"
          className='text-font'
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  )
}
