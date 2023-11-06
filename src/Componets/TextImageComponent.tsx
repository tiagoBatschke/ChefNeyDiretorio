import {FunctionComponent, ReactNode} from 'react'



interface TextImageComponentProps {

}
  
 

const TextImageComponent:FunctionComponent<TextImageComponentProps> =(props)=>{


    return ( 
    <>
    <div className='h-[10vh] bg-[#A5554D]  flex items-center justify-center'>
       
     </div>
    <div className='bg-[#F0CD8C] p-2 flex flex-col justify-evenly lg:h-[30vh]'>
        <p className='text-[2rem] w-[100%]  flex items-center justify-center text-center font-bold text-[#DAACAC]'>O chef</p>
        <p className='w-[90%] ml-[5%]  text-[#640A14] lg:w-[40%] lg:ml-[30%] '>Meu objetivo é entregar tudo que minha criatividade gastronômica cria e
          desenvolve. Sou Baiano criado dentro da cozinha, sendo sempre incentivado pelos
          meus pais e criando essa essência e paixão pela gastronomia. Por esta razão sou
          chefe de cozinha particular desde 2016, amando minha profissão, tendo a
          criatividade e segurança com os alimentos para melhor servir aos meus clientes. A
          arte da culinária é um extasê a ser vivido, por isso tenho em mente sempre trazer
          essa experiência para servir em sua mesa</p>
    </div>
    <div className='bg-[#f0cd8c72] p-2 flex justify-evenly items-center'>
      <div className=' w-[3rem] h-[3rem] bg-[#640A14]'></div>
      <div className=' w-[3rem] h-[3rem] bg-[#640A14]'></div>
      <div className=' w-[3rem] h-[3rem] bg-[#640A14]'></div>
    </div>
    </>
    )
}


export default TextImageComponent;