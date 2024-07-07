import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function About() {
  return (
    <Card className="max-w-[100px] bg-primary text-font">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Fangxing Liu</p>
          <p className="text-small text-default-500">fangxingliu.com</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>
          Under construction.
        </p>
      </CardBody>
      <Divider/>
    </Card>
  )
}
