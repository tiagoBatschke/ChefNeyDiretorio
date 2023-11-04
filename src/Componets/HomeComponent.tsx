import {FunctionComponent} from 'react'



interface HomeComponentProps {
    title:string,
    SubTitle:string,
    text:string,
    button:string
}
  
 

const HomeComponent:FunctionComponent<HomeComponentProps> =(props)=>{


    return ( 
     <div className=' bg-red-500 h-[85vh]  w-[100%]  flex flex-col justify-evenly p-1'>
          <p className='text-[2rem] text-center font-bold text-white'>Logo</p>
          <div className='h-[20%] flex flex-col justify-evenly'>
            <h1 className='text-[1.5rem] font-semibold text-center text-white'>{props.title}</h1>
            <h2 className='text-[1.5rem] font-semibold text-center text-white'>{props.SubTitle}</h2>
          </div>
          <p className='text-[1.3rem] text-center text-white'>{props.text}</p>
          <button className='text-center text-white border-[1px] w-[40%] ml-[30%] p-2 rounded-md font-semibold text-[1.2rem]'  type="button">{props.button}</button>
        </div>
    )
}


export default HomeComponent;