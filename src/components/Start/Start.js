import React,{useState} from 'react'
import IconsX from '../Icons/IconsX'
import IconsO from '../Icons/IconsO'
// function detect(e){
//     const element = document.getElementByI('x')
//     element.addEventListener("click",console.log("clicked"))
//     return null
    
// }

const Start = (bgColor1,bgColor2) => {
  const  [Color1,setColor1]= useState(bgColor1)
  const  [Color2,setColor2]= useState(bgColor2)
  function HandlerClick1() {
    setColor1("bg-slate-400")
    setColor2("bg-slate-900")
  }
  const HandlerClick2= ()=>{
    setColor1("bg-slate-900")
    setColor2("bg-slate-400")
  }
  return (
    <div className='flex items-center  h-screen w-screen ' >
      <div className='container flex flex-col items-center gap-6'>
        <div className='container_title flex' >
         <span >
         <IconsX color="blue" size="60px"/>
         </span>
         <span>
         <IconsO color="yellow" size="65px"/>
         </span>
        </div>
        <div className='card flex flex-col gap-4 rounded-2xl bg-slate-500 p-4  '>
            <div className='card_title'>
            Choose player x or o
            </div>  
            <div  className='bg-slate-900 start_player flex items-center  justify-between px-3 py-2 rounded-xl cursor-pointer '>
                <span   onClick={HandlerClick1} className= {Color1 +' mx-2 active:bg-violet-700 w-1/2 flex items-center justify-center px-3 py-2 rounded-xl cursor-pointer  dark:md:hover:bg-fuchsia-600'} > 
                    <IconsX color="aliceblue" size="50px"/>
                </span >
                <span onClick={HandlerClick2} className={Color2 +' mx-2 active:bg-violet-200 w-1/2 flex items-center justify-center px-3 py-2 rounded-xl cursor-pointer bg-slate-00 dark:md:hover:bg-fuchsia-600'}>

                <IconsO  color="aliceblue" size="50px"/>
                </span>
            </div>
            <div className='remarque' >
                X goes first
            </div>
        </div>
            <div  className='btn_start flex flex-col gap-2 border-none font-bold' >
                <button  className='btn uppercase py-2 px-6 rounded-xl cursor-pointer bg-yellow-300 hover:bg-yellow-400'>new game (vs player)</button>
                
                <button className='btn uppercase py-2 px-6 rounded-xl cursor-pointer bg-slate-400 hover:bg-slate-100'>new game (vs pc)</button>
            </div> 
      </div>
    </div>
  )
}

export default Start
