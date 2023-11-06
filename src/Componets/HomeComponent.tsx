import {FunctionComponent} from 'react'



interface HomeComponentProps {

}
  
 

const HomeComponent:FunctionComponent<HomeComponentProps> =()=>{


    return ( 
      <>
      <div className=' bg-[#FFF0D4] h-[85vh] lg:h-[60vh] w-[100%]  flex flex-col items-center justify-evenly p-1'>
             <img src="./src/assets/Group9.png" className='text-[2rem] lg:h-[30rem] lg:w-[30rem] text-center font-bold text-[#DAACAC]'/> 
             <div className='w-[90%]  lg:w-[70%]  flex justify-evenly'>
               <button className='w-[30%] lg:w-[20%] lg:text-[2rem] text-[1.2rem] lg:text-center text-start font-bold text-[#DAACAC]'>O chef</button>
               <button className='w-[30%] lg:w-[20%] lg:text-[2rem] text-[1.2rem] lg:text-center text-start font-bold text-[#DAACAC]'>Trabalho</button>
               <button className='w-[30%] lg:w-[20%] lg:text-[2rem] text-[1.2rem] lg:text-center text-start font-bold text-[#DAACAC]'>Orçamento</button>
             </div>
      </div>
      <div className='bg-[#A5554D]  h-[1vh]'>
        <div className='bg-[#f0cd8cea] rounded-b-3xl  h-[1vh]'></div>
      </div>
      </>
    )
}


export default HomeComponent;