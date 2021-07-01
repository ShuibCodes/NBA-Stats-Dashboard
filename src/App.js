import logo from './logo.svg';
import './App.css';
import NBA from './images/nba-logo-transparent.png'
import OKC from './images/Oklahoma_City_Thunder.svg.png'
import LAL from './images/1280px-Los_Angeles_Lakers_logo.svg.png'
import PHX from './images/phoenix-suns-logo-black-and-white-transparent.png'
import LAC from './images/1280px-The_official_logo_of_the_Los_Angeles_Clippers.svg.png'
import FinalsGame from './Charts/FinalsGame';

import Stats from './Stats/Stats'

function App() {
  return (
    <div >
    
 <body class="bg-white-400" >
    
    <div class="p-0  w-screen h-24 bg-red-600 flex py-4 justify-evenly   ">
   
      <button class="bg-blue-400 w-32  h-10 rounded px-8 py-1 cursor-pointer " >Players</button>
      <button class=" w-46 bg-blue-400   h-10 rounded px-6 py-1 cursor-pointer ">Eastern Conference</button>
      <button class=" w-46 bg-blue-400   h-10 rounded px-6 py-1 cursor-pointer  " >Western Conference</button>

       
  
    </div>


<div class="md:flex px-0">
  <div class=" h-full bg-red-600  w-48" >
  <form class=" relative top-16 px-3 rounded " action="/action_page.php" >
  <input class="h-10" type="text" id="fname" name="fname" placeholder="Search Team" />

</form>
    <img class="relative bottom-36  h-24 px-3 mx-10 mt-4 " src={NBA} alt="" ></img>
    <img class=" h-36 px-3 m-0 " src={PHX} alt="" ></img>
    <img class=" h-24  m-10 " src={OKC} alt="" ></img>
    <img class=" h-24 px-3 m-0 " src={LAL} alt="" ></img>
    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>
    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>

    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>
    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>

    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>

    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>

    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>

v
<img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>



  </div>
   <div class="  mx-20 w-screen ">
      <h4 class=" text-center text-3xl my-12 font-bold " >The 2016 NBA Finals</h4>
      <h5 class="text-center text-xl my-12 font-bold " > A Game 7 To Remember...</h5 >

     <div class="h-2/5 my-26  w-100" >
   

    <FinalsGame/>
    <Stats/>


     

     </div>

 
   </div>
</div>



 
</body>
    </div>
  );
}

export default App;
