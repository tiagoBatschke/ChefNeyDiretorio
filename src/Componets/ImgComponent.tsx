import {FunctionComponent, ReactNode} from 'react'



interface ImgComponentProps {
    title?:string,
    text?:string,
    img:ReactNode
}
  
 

const ImgComponent:FunctionComponent<ImgComponentProps> =(props)=>{


    return ( 
        <div className='mb-7 w-[95%] ml-[2.5%] rounded-md h-[40vh] shadow-lg shadow-[#00000060] bg-black'>
        {props.img}
        <div className='z-30 h-[40vh] rounded-md -mt-[40vh] flex flex-col justify-evenly'>
          <h2 className='z-10 text-white text-center font-bold text-[1.4rem]'>{props.title}</h2>
          <div className='z-10 w-[95%] ml-[2.5%] bg-white p-2 rounded-md'>
            <p className='z-10  font-semibold text-lg text-center '>{props.text}</p>
          </div>
        </div>
      </div>
    )
}


export default ImgComponent;