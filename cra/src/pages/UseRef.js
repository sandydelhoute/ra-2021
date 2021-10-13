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
  const domRef = useRef(null);
  //Component did mount
  useEffect(()=>{
    const titleRef= domRef.current;
    VanillaTilt.init(titleRef,vanillOpt);
   
    return ()=>{
      console.log("destructor");
      titleRef.vanillaTilt.destroy();
    }
  },[])   

return <div ref={domRef}  className='p-3 bg-info text-light'></div>
}