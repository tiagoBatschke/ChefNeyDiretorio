import {FunctionComponent} from 'react'



interface HomeComponentProps {

}
  
 

const HomeComponent:FunctionComponent<HomeComponentProps> =()=>{


    return ( 
      <>
      <div className='bg-[#FFF0D4]'>
        <div className='bg-[#FFF0D4] h-[65vh] lg:h-[65vh] w-[100%] lg:w-[70%] lg:ml-[15%] flex flex-col lg:flex-row items-center justify-evenly p-1'>
          <img src="assets\Group9.png" className='text-[2rem] lg:h-[50rem] lg:w-[50rem] text-center font-bold'/>
          <div className='w-[100%] lg:w-[40%]'>
              <div className='lg:w-[100%] w-[101%] lg:ml-0 -ml-[0.5%] bg-[#F0CD8C] lg:h-[30vh] h-[10vh] -mt-[10vh] lg:mt-0 lg:rounded-2xl rounded-b-3xl flex flex-col items-center justify-evenly'>
                  <div className='w-[90%]  lg:w-[70%] h-[100%]  flex lg:flex-col items-center justify-evenly'>
                    <button className='w-[32%] bg-[#A5554D]  rounded-3xl shadow-md shadow-[#65322d] lg:w-[60%] lg:h-[5vh] flex flex-row justify-center items-center p-2'><img className='lg:w-[40%]' src="/src/assets/Chef.png" alt="" /></button>
                    <button className='w-[32%] bg-[#A5554D]  rounded-3xl shadow-md shadow-[#65322d] lg:w-[60%] lg:h-[5vh] flex flex-row justify-center items-center p-2'><img className='lg:w-[40%]' src="/src/assets/Orçamento.png" alt="" /></button>
                    <button className='w-[32%] bg-[#A5554D]  rounded-3xl shadow-md shadow-[#65322d] lg:w-[60%] lg:h-[5vh] flex flex-row justify-center items-center p-2'><img className='lg:w-[40%]' src="/src/assets/Trabalhos.png" alt="" /></button>
                  </div>
              </div>
          </div> 
        </div>
      </div>
      </>
    )
}


export default HomeComponent;