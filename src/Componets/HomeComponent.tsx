import {FunctionComponent} from 'react'



interface HomeComponentProps {

}
  
 

const HomeComponent:FunctionComponent<HomeComponentProps> =()=>{


    return ( 
      <>
      <div className=' bg-[#FFF0D4] h-[85vh] lg:h-[60vh] w-[100%]  flex flex-col justify-evenly p-1'>
             <p className='text-[2rem] h-[65vh] lg:h-[40vh] text-center font-bold text-[#DAACAC]'>Logo</p> 
             <div className='w-[80%] ml-[10%] flex justify-evenly'>
               <button className='w-[20%] lg:text-[2rem] text-[1.2rem] text-center font-bold text-[#DAACAC]'>O chef</button>
               <button className='w-[20%] lg:text-[2rem] text-[1.2rem] text-center font-bold text-[#DAACAC]'>Trabalho</button>
               <button className='w-[20%] lg:text-[2rem] text-[1.2rem] text-center font-bold text-[#DAACAC]'>Orçamento</button>
             </div>
      </div>
      <div className='bg-[#A5554D]  h-[1vh]'>
        <div className='bg-[#f0cd8cea] rounded-b-3xl  h-[1vh]'></div>
      </div>
      </>
    )
}


export default HomeComponent;