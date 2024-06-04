import React, { RefObject, useEffect, useRef } from 'react'

export default function Fmtext(props) {
// console.log(props,"ppppppppppppppppp");
const mytext: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
// console.log(props,"oo");

useEffect(()=>{
  if (props.text && props.text!=="") {
    mytext.current!.innerHTML=props.text;
  }
})

 if ( props.text&&  props.text!=="") {
  return  ( <div ref={mytext} style={{"color":"#333"}}></div>) 
 }
 else{
  return (  <h4 style={{"textAlign":"center"}}>该FM暂无原文</h4> )
 }
}
