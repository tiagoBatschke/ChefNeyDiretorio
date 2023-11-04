import {FunctionComponent, ReactNode} from 'react'



interface ImgButtonComponentProps {
    title?:string,
    button?:string,
    img:ReactNode
}
  
 

const ImgButtonComponent:FunctionComponent<ImgButtonComponentProps> =(props)=>{


    return ( 
        <div className='w-[95%] ml-[2.5%] rounded-md h-[40vh] shadow-lg shadow-[#00000060] bg-black'>
        {props.img}
        <div className='z-30 h-[30vh]  rounded-md -mt-[35vh] flex flex-col items-center  justify-between'>
          <h2 className='z-10 text-white text-center font-bold text-[1.4rem]'>{props.title}</h2>
          <button className='z-10 text-center text-white bg-red-500 border-red-500 border-[1px] w-[60%] p-2 rounded-md font-semibold text-[1.2rem]'  type="button">{props.button}</button>
        </div>
      </div>
    )
}


export default ImgButtonComponent;