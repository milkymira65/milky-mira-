
import './App.css';
import  Home_art from "./pic/Home_art1.png"
import  logo from "./pic/Group.png"
import  Git from "./pic/Git.png"
import  linkedin from "./pic/Linkedin.png"
import Instagram from "./pic/Instagram.png"

function App() {
  return (
    <div className="App ">
      <div className=' background w-[1920px] h-[1080px]  '>
        {/*Navbar*/}
         <div className='w-[100%] h-[180px] flex justify-between
space-x-[150px] items-center '>

              <div className=' m-[7%] w-[334px] h-[104px] flex items-center justify-center   '>
                <img src ={logo} alt="pic"/>
                <span className='front-[24px] front-[500] ml-[6%] text-2xl font-bold '>Matheus Campos</span>
              </div>
              
              <div className=' w-[856px] h-[70px] flex flex-row '>
                <ul className='flex space-x-[20%]  ml-[20px]  text-xl font-normal '>
                  <a herf="#">home</a>
                  <a herf="#">about</a>
                  <a herf="#">count</a>
                  <a herf="#">time</a>
                  <a herf="#">resume</a>
                  <a herf="#">end</a>
                </ul>
              </div>
         </div>
          {/*content*/}
          <div className='flex  justify-center  space-x-20'>


          {/*leftbox */}
          <div className ="flex flex-col space-y-[20%] w-[705px] h-[697px] " >

            <div className='w-[545px] h-[240px]  '>
              <p className='text-2xl font-normal'>Ola pessoas,</p>
              <p className='text-7xl font-black '>EU SOU UM <br/>PROGRAMADOR</p>
              <p className='text-2xl font-normal'>Saja bem-vindo ao meu portifolio web site</p>
            </div>

            <button className=' w-[310px] h-[65px] text-[24px] text-white front-900 border border-[#263138] bg-[#263138] rounded-[20px] '>saiba mais sobre mim</button>

            <div className='flex w-[600px] h-[130px] '>
              <img className="w-[40px] h-[38px] m-2" src = {Git} alt = 'git' href='' />
              <img className="w-[40px] h-[38px] m-2" src = {linkedin} alt ='linkedin' />
              <img className="w-[40px] h-[38px] m-2"  src = {Instagram} alt= 'instagram' />
            </div>

          </div>
        {/*Right box */}
          <div className=' flex justify-items-start w-[705px] h-[697px]'>
            <img src = {Home_art} alt="pic"></img>

            
          </div>
         </div>

      </div>
    </div>
  );
}

export default App;
