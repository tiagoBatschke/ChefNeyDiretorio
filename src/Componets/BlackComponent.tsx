import {FunctionComponent, ReactNode} from 'react'



interface BlackComponentProps {
    title:string,
    img:ReactNode
}
  
 

const BlackComponent:FunctionComponent<BlackComponentProps> =(props)=>{


    return ( 
        <div className='h-[48vh] bg-black  flex  flex-col items-center justify-center '>
        <h2 className='font-bold text-[2rem] text-center text-white'>{props.title}</h2>
        {props.img}
       </div>
    )
}


export default BlackComponent;