import {FunctionComponent, ReactNode} from 'react'
import ImgButtonComponent from './ImgButtonComponent';



interface TextImageComponentProps {
    title?:string,
    text?:string,
    button?:string
    img:ReactNode
}
  
 

const TextImageComponent:FunctionComponent<TextImageComponentProps> =(props)=>{


    return ( 
    <>
    <div className='h-[15vh] bg-red-700  flex items-center justify-center'>
       <h2 className='font-bold text-[2rem] text-center text-white'>{props.title}</h2>
     </div>
    <div className='bg-[#f7f7ee] h-[90vh] flex flex-col justify-evenly'>
        <p className='w-[85%] ml-[5%] text-lg text-justify'>{props.text}</p>
        <ImgButtonComponent
          button={props.button}
          img={props.img}/>
      </div>
    </>
    )
}


export default TextImageComponent;