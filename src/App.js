import logo from './logo.svg';
import './App.css';
import NBA from './images/nba-logo-transparent.png'
import OKC from './images/Oklahoma_City_Thunder.svg.png'
import LAL from './images/1280px-Los_Angeles_Lakers_logo.svg.png'
import PHX from './images/phoenix-suns-logo-black-and-white-transparent.png'
import LAC from './images/1280px-The_official_logo_of_the_Los_Angeles_Clippers.svg.png'
import FinalsGame from './Charts/FinalsGame';

import Lebron2019 from './Animations/Lebron2019'
import Booker from './Animations/Booker'
import Stats from './Stats/LebronStats'
import CurryStats from './Stats/CurryStats'
import EandWConferenceFinals from './Charts/ConferenceGames/EandWConferenceFinals';
import {BrowserRouter, Link, Switch ,Route} from 'react-router-dom'
import RoadToFinals from './Charts/RoadToFinals';
import BookerLine from './Animations/BookerLine'
function App(props) {
  // fetch("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=57&season=2016&season=2018", {
  
  
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.error(err);
  // })
 
 

  return (
    <div >
    <BrowserRouter>
    <Switch>

  
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

   <Link to="/"><img class="relative bottom-36  h-24 px-3 mx-10 mt-4 " src={NBA} alt="" ></img></Link>
  
    <Link to='/Booker'>

    </Link>

    <img class=" h-24  m-10 " src={OKC} alt="" ></img>
    
    <Link to='/Lebron2019' >
    <img class=" h-24 px-3 m-0 " src={LAL} alt="" ></img>
    </Link>
   
    
   
    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>
    <Link to='/Booker'>
    <img class=" h-36 px-3 m-0 " src={PHX} alt="" ></img>
    </Link>
    <img class=" h-24  m-10 " src={OKC} alt="" ></img>
    <img class=" h-24 px-3 m-0 " src={LAL} alt="" ></img>
    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>    <img class=" h-36 px-3 m-0 " src={PHX} alt="" ></img>
    <img class=" h-24  m-10 " src={OKC} alt="" ></img>
    <img class=" h-24 px-3 m-0 " src={LAL} alt="" ></img>
    <img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>
v
<img class=" h-24 px-4 my-10 " src={LAC} alt="" ></img>



  </div>
   <div class="  mx-20 w-screen ">
      {/* <h4 class=" text-center text-3xl my-12 font-bold " >The 2019 NBA Playoffs</h4>
      <h5 class="text-center text-xl my-12 font-bold " > The Cleveland Cavaliers Road To The Finals</h5 > */}

     <div class=" my-26 h-120 w-100" >
   
      
     <Route path='/BookerLine' >
            <BookerLine/>
        </Route>
     <Route path='/Lebron2019' >
            <Lebron2019/>
        </Route>
        <Route path='/Booker' >
            <Booker/>
        </Route>
      
    <Route path='/' exact>
      <RoadToFinals/>
      <EandWConferenceFinals/>
    </Route>
   
     
  
     </div>

  
   </div>
</div>



 
</body>
 </Switch>
</BrowserRouter>

    </div>
  );
}

export default App;





// const data = [{
//   "team": "Cleveland Cavaliers", 
//   "Love": 20,
//    "Thomspon": 2,
//    "Smith": 15,
//   "Irving": 30,
//  }
// ]
