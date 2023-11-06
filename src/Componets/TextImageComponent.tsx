import {FunctionComponent} from 'react'

const TextImageComponent:FunctionComponent =()=>{
    return ( 
    <>
    <div className='h-[10vh] bg-[#A5554D]  flex items-center justify-center'></div>
    <div className='bg-[#F0CD8C] h-[190vh] p-2 flex flex-col lg:flex-row items-center justify-evenly lg:h-[90vh]'>
      <div className='lg:w-[50%] w-[90%] lg:h-[50vh] flex flex-col items-center justify-evenly'>
        <p className='text-[2rem] flex items-center justify-center text-center font-bold text-[#DAACAC]'>O chef</p>
        <p className='w-[100%]  lg:h-[30%]  text-[#640A14] lg:w-[80%]  '>Meu objetivo é compartilhar tudo o que minha criatividade gastronômica concebe e desenvolve. Sou um baiano criado nos bastidores da cozinha, onde desde jovem fui inspirado por meus pais a desenvolver minha essência e paixão pela culinária. Essa jornada me levou a me tornar um chef de cozinha particular, uma profissão que eu exerço com amor desde 2016.</p>
        <p className='w-[100%]  lg:h-[30%]  text-[#640A14] lg:w-[80%]  '>Minha carreira me proporcionou a confiança e a habilidade para trabalhar com alimentos, garantindo uma experiência culinária excepcional para meus clientes. A arte da culinária é uma paixão que transcende o simples ato de cozinhar; é uma experiência que merece ser vivida em sua plenitude.</p>
        <p className='w-[100%]  lg:h-[30%]  text-[#640A14] lg:w-[80%]  '>Assim, tenho o compromisso constante de trazer essa experiência culinária para a sua mesa. Cada prato que preparo é uma manifestação da minha paixão e criatividade, elaborado com ingredientes de qualidade e uma pitada de amor. Estou pronto para transformar cada refeição em um momento de deleite e satisfação para todos aqueles que tenham o privilégio de saborear minhas criações gastronômicas.</p>
      </div>
      <img className='lg:w-[30rem] lg:h-[30rem] rounded-md' src="./src/assets/339997666_1001780797870060_8192517577258071711_n.jpg" alt="" />
          
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