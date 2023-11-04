import './App.css'
import HomeComponent from './Componets/HomeComponent'
import ImgComponent from './Componets/ImgComponent';
import BlackComponent from './Componets/BlackComponent';
import TextImageComponent from './Componets/TextImageComponent';


function App() {
  

  return (
    <div className='bg-red-500'>
      <HomeComponent 
        title='Chef ney'
        SubTitle='lorem ipsum !' 
        text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. A error porro voluptas eligendi tenetur? Numquam quisquam, laudantium commodi ab nam vitae at nostrum mollitia eum minus corrupti molestias placeat consequatur!' 
        button='Saiba mais!'
      />

      <ImgComponent 
      title='Lorem ipsum'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur debitis'
      img={<img className='h-[40vh]  opacity-70 w-[100%] z-0 rounded-md' src='src\assets\cozinha.png' alt="" />}/>

     <TextImageComponent
     title='Lorem ipsum'
     text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. A error porro voluptas eligendi tenetur? Numquam quisquam, laudantium commodi ab nam vitae at nostrum mollitia eum minus corrupti molestias placeat consequatur!'
     img={<img className='h-[40vh]  opacity-70 w-[100%] z-0 rounded-md' src='src\assets\cozinha.png' alt=""/>}
     button='Plano do evento' /> 

     <BlackComponent 
     img={<img className='h-[40vh] opacity-60 w-[100%] z-0 rounded-md' src="src\assets\images.jpeg" alt="" />}
     title='Ready?'/>

     <div className='h-[70vh] flex flex-col justify-evenly bg-[#fffdfd]'>
      <div className='w-[90%] ml-[5%]'>
        <div className='flex flex-row justify-between rotate-180' >
            <img className='h-[20vh] ml-4 transform rotate-45' src="src\assets\Ideias-Pe-de-Alface.webp" alt="" />
            <img className='h-[20vh] mr-4 transform -rotate-45' src="src\assets\Ideias-Pe-de-Alface.webp" alt="" />
        </div> 
        <h2 className=' h-[20vh]  flex items-center justify-center text-[2rem] font-bold text-center text-red-700'>How it works?...</h2>
        <div className='flex flex-row justify-between' >
          <img className='h-[20vh] ml-4 transform rotate-45' src="src\assets\Ideias-Pe-de-Alface.webp" alt="" />
          <img className='h-[20vh] mr-4 transform -rotate-45' src="src\assets\Ideias-Pe-de-Alface.webp" alt="" />
        </div> 
      </div>     
     </div>
    </div>
  );
}

export default App;