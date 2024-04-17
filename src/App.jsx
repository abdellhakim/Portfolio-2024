import { PiChatsCircleFill } from "react-icons/pi";



function App() {
  

  return (
    <>
    <div >
      <div className='navbar flex  justify-center mt-[3%] '>
        <ul className='flex gap-6 bg-[#121111] py-[10px] px-[25px] text-[#FFFFFF] rounded-[500px] '>
          <li> <a href="#"> Home</a></li>
          <li> <a href="#"> Services</a></li>
          <li> <a href="#"> Projects</a></li>
          <li> <a href="#"> Contact</a></li>
         
        </ul>
      </div>

      <div className="herosec flex  flex-col items-center mt-[80px] ">
        <h1 className="text-white text-[40px] ">Hi There,</h1>
        <h1 className="text-white font-bold text-[55px]">I’m <span className="text-[#CEFF02]"> Abdelhakim Ait Dabel</span></h1>
        <h1 className="text-white text-[43px]">I am a Web Developer | UX/UI Designer </h1>
        <p className="text-white text-[18px] font-thin px-[25%] text-center">A human first amet consectetur. Malesuada non etiam commodo nibh elit faucibus nisl nec dictum. Euismod tempor diam tristm eget aliquam et molestie. Est gravida mi nunc sit et nunc sed lacus pellentesquea.</p>
        <button className="my-6 bg-[#CEFF02] px-5 py-2 rounded-[10px] font-bold"> Download CV </button>
        <button className=" text-[#CEFF02] flex items-center gap-2 text-[18px] font-bold "> <PiChatsCircleFill /> Let’s chat </button>

      </div>



    </div>



    </>
  )
}

export default App
