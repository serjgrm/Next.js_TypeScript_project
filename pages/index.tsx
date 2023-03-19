import React from "react";
import { Button, Htag, P } from '../components';

export default function Home():JSX.Element {
  return (
    <div>
      <Htag tag='h1'> Hello </Htag>

      <Button appearance='primary' arrow="right" className="dddddd" >Кнопка</Button>
      <Button appearance="ghost" arrow="right" >Кнопка</Button>

      <P size='l'>1111111</P>
      <P size="s">2222222</P>
      <P size='l'>3333333</P>


    </div>
  );
}


