import React,{useState} from "react";
import { Button, Htag, P, Tag, Rating } from '../components';
import { withLayout } from "@/layout/Lauout";



function Home():JSX.Element {

const [rating, setRating] = useState<number>(4);

  
  return (
    <>
      <Htag tag='h1'> Hello </Htag>

      <Button appearance='primary' arrow="right" className="dddddd" >Кнопка</Button>
      <Button appearance="ghost" arrow="right" >Кнопка</Button>

      <P size='l'>1111111</P>
      <P size="s">2222222</P>
      <P size='l'>3333333</P>

      <Tag tabIndex={0} className='SSSSS'>0</Tag>
      <Tag tabIndex={0} size='s' color='ghost'>0</Tag>
      <Tag tabIndex={0} size='m' color='grey'>0</Tag>
      <Tag color='green'>sss</Tag>
      <Tag color='red'>sss</Tag>
      <Tag href="https://app.netlify.com/teams/serjgrm/overview?_ga=2.222979544.2145851855.1677164288-1673040163.1676992353" color='primary'>sss</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>

    </>
  );
}


export default withLayout(Home);