import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function About() {
  return (
    <div className="flex justify-center">
      <Card className="bg-primary text-font">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Fangxing Liu</p>
            <p className="text-small text-default-500">fangxingliu.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Hi, I'm a commputer science student who loves to develop and make
            things. 
            <br/>By contributing to to <Link className="text-secondary" href="https://github.com/SoilPlanter/Android">Soil Planter</Link> and taking part at 
            the <Link className="text-secondary" href="https://www.linkedin.com/posts/itestra_codingcamp-softwareengineering-teamwork-ugcPost-7175864298076872704-c6Dl?utm_source=share&utm_medium=member_desktop">Itestra Coding Camp</Link>
            I learned a lot about project management and developing in a team.
            <br />I also really enjoy taking part at hackathons in order to meet interesting
            people and create cool and impactful projects with them.
            <br /><br />I love watching and talking about movies in my freetime. Here is the 
            <Link href="https://letterboxd.com/Fangoling/"
            className="text-secondary"
             > Link to my Letterboxd</Link> if you are interested 
          </p>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
}
