import { useEffect,useRef } from "react";
import VanillaTilt from 'vanilla-tilt';

const vanillOpt = {
    max:25,
    speed:400,
    glare:true,
    "Max-glare":0.5
}
export const UseRef = ()=>
{
  useEffect(()=>{
    console.log(domRef.current);
    VanillaTilt.init(domRef.current,vanillOpt);
  },[])   
const domRef = useRef(null);
return <div ref={domRef}  className='p-3 bg-info text-light'></div>
}