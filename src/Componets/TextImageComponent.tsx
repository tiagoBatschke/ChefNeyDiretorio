import {FunctionComponent} from 'react'

const TextImageComponent:FunctionComponent =()=>{
    return ( 
    <>
    <div className='lg:bg-gradient-to-l bg-gradient-to-t from-[#E98A54]  to-[#e2cab358] h-[220vh] flex flex-col lg:flex-row items-center justify-evenly lg:h-[90vh]'>
      <div className='lg:w-[50%] w-[90%] lg:h-[80vh] -mt-[20%] lg:mt-0 flex flex-col items-center justify-evenly'>
        <p className='text-[4rem] flex items-center justify-center text-center font-bold text-[#ab8989]'>O Chef</p>
        <p className='w-[100%] mt-[5%] lg:mt-0 text-center lg:text-justify lg:text-[1rem] font-semibold text-[#640A14] lg:w-[80%]'>Meu objetivo é entregar tudo que minha criatividade gastronômica cria edesenvolve. Sou Baiano criado dentro da cozinha, sendo sempre incentivado pelos meus pais e criando essa essência e paixão pela gastronomia. Por esta razão sou chefe de cozinha particular desde 2016, amando minha profissão, tendo a criatividade e segurança com os alimentos para melhor servir aos meus clientes. A  arte da culinária é um extasê a ser vivido, por isso tenho em mente sempre trazer essa experiência para servir em sua mesa.</p>
        <p className='w-[100%] mt-[5%] lg:mt-0 text-center lg:text-justify lg:text-[1rem] font-semibold text-[#640A14] lg:w-[80%]'>Minha carreira me proporcionou a confiança e a habilidade para trabalhar com alimentos, garantindo uma experiência culinária excepcional para meus clientes. A arte da culinária é uma paixão que transcende o simples ato de cozinhar; é uma experiência que merece ser vivida em sua plenitude.</p>
        <p className='w-[100%] mt-[5%] lg:mt-0 text-center lg:text-justify lg:text-[1rem] font-semibold text-[#640A14] lg:w-[80%]'>Assim, tenho o compromisso constante de trazer essa experiência culinária para a sua mesa. Cada prato que preparo é uma manifestação da minha paixão e criatividade, elaborado com ingredientes de qualidade e uma pitada de amor. Estou pronto para transformar cada refeição em um momento de deleite e satisfação para todos aqueles que tenham o privilégio de saborear minhas criações gastronômicas.</p>
      </div>
      <img className='w-[80%] lg:w-[30rem] lg:h-[30rem] rounded-3xl' src="/src/assets/339997666_1001780797870060_8192517577258071711_n.jpg" alt="" /> 
    </div>

    {/* <div className='lg:bg-gradient-to-l bg-gradient-to-t from-[#E98A54]  to-[#e2cab358] h-[220vh] flex flex-col lg:flex-row-reverse items-center justify-evenly lg:h-[90vh]'>
      <div className='lg:w-[45%] w-[90%] lg:h-[80vh] -mt-[20%] lg:mt-0 flex flex-col items-center justify-evenly'>
        <p className='w-[100%] mt-[5%] lg:mt-0 text-center lg:text-justify lg:text-[1.3rem] font-semibold text-[#640A14] lg:w-[80%]'>Meu objetivo é entregar tudo que minha criatividade gastronômica cria edesenvolve. Sou Baiano criado dentro da cozinha, sendo sempre incentivado pelos meus pais e criando essa essência e paixão pela gastronomia. Por esta razão sou chefe de cozinha particular desde 2016, amando minha profissão, tendo a criatividade e segurança com os alimentos para melhor servir aos meus clientes. A  arte da culinária é um extasê a ser vivido, por isso tenho em mente sempre trazer essa experiência para servir em sua mesa.</p>
        <p className='w-[100%] mt-[5%] lg:mt-0 text-center lg:text-justify lg:text-[1.3rem] font-semibold text-[#640A14] lg:w-[80%]'>Minha carreira me proporcionou a confiança e a habilidade para trabalhar com alimentos, garantindo uma experiência culinária excepcional para meus clientes. A arte da culinária é uma paixão que transcende o simples ato de cozinhar; é uma experiência que merece ser vivida em sua plenitude.</p>
        <p className='w-[100%] mt-[5%] lg:mt-0 text-center lg:text-justify lg:text-[1.3rem] font-semibold text-[#640A14] lg:w-[80%]'>Assim, tenho o compromisso constante de trazer essa experiência culinária para a sua mesa. Cada prato que preparo é uma manifestação da minha paixão e criatividade, elaborado com ingredientes de qualidade e uma pitada de amor. Estou pronto para transformar cada refeição em um momento de deleite e satisfação para todos aqueles que tenham o privilégio de saborear minhas criações gastronômicas.</p>
      </div>
      <div className='w-[45%] flex justify-center'>
        <img className='w-[80%] lg:w-[30rem] lg:h-[30rem] rounded-3xl' src="./src/assets/340203353_3505945099732008_12459781892357340_n.jpg" alt="" />
      </div>
          
    </div> */}
    <div className='bg-[#A55D56] h-[6rem] p-2 flex justify-evenly items-center'>
      <div><img className='w-[3rem] h-[4rem]' src="/src/assets/instaImg.svg" alt="" /></div>
      <div><img className='w-[3rem] h-[3rem]mt-[1rem]' src="/src/assets/email.svg" alt="" /></div>
      <div><img className='w-[3rem] h-[3rem]mt-[1rem]' src="/src/assets/whatsapp.svg" alt="" /></div>
    </div>
    </>
    )
}


export default TextImageComponent;