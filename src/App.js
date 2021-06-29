import logo from './logo.svg';
import './App.css';
import Houston from './images/nba-logo-transparent.png'
function App() {
  return (
    <div >
 <body class="bg-white-400" >
    
    <div class="p-0  w-screen h-24 bg-red-700 flex py-4 justify-evenly   ">
   
      <h3 class="bg-blue-300 w-32  h-10 rounded px-8 py-1 " >Players</h3>
      <h3 class=" w-46 bg-blue-300   h-10 rounded px-6 py-1">Eastern Conference</h3>
      <h3 class=" w-46 bg-blue-300   h-10 rounded px-6 py-1" >Western Conference</h3>

  
  
    </div>


<div class="md:flex px-0">
  <div class=" h-screen bg-red-700  w-48" >
   
    <img class="p-4 h-48 px-3 m-10" src={Houston} alt="" ></img>
  </div>
   <div class="w-48 mx-20 py-24 ">
     <div>
      <p>Lorem, ipsum dolorefe sit amet consectetur adipisicing elit. Numquam quia eum quo quod incidunt, earum expedita ut ullam! Consectetur nesciunt magnam tempora ab commodi facere, ipsum deleniti soluta minus reiciendis!</p>
     </div>
    
     <img class="p-4 h-48 px-3 m-10" src={Houston} alt="" ></img>

   </div>
</div>



 
</body>
    </div>
  );
}

export default App;
