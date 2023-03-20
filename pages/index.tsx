import React from "react";
import { Button, Htag, P, Tag, Rating } from '../components';

export default function Home():JSX.Element {



  
  return (
    <div>
      <Htag tag='h1'> Hello </Htag>

      <Button appearance='primary' arrow="right" className="dddddd" >Кнопка</Button>
      <Button appearance="ghost" arrow="right" >Кнопка</Button>

      <P size='l'>1111111</P>
      <P size="s">2222222</P>
      <P size='l'>3333333</P>
      <Tag className='SSSSS'>sss</Tag>
      <Tag size='s' color='ghost'>sss</Tag>
      <Tag size='m' color='grey'>sss</Tag>
      <Tag color='green'>sss</Tag>
      <Tag color='red'>sss</Tag>
      <Tag href="https://app.netlify.com/teams/serjgrm/overview?_ga=2.222979544.2145851855.1677164288-1673040163.1676992353" color='primary'>sss</Tag>
      <Rating rating={4}></Rating>

    </div>
  );
}


