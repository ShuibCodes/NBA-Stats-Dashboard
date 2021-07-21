import React from 'react'
import FinalsGame from '../Charts/FinalsGame'
import EandWConferenceFinals from './ConferenceGames/EandWConferenceFinals'
import LebronStats from '../Stats/LebronStats'
import CurryStats from '../Stats/CurryStats'



function RoadToFinals() {

    





    return (
        <div>
        <div>
        <h4 class=" text-center text-3xl my-12 font-bold " >The 2016 NBA Playoffs</h4>
      <h5 class="text-center text-xl my-12 font-bold " > The Cleveland Cavaliers Road To The Finals </h5 >
        </div>

          <EandWConferenceFinals/>
          <FinalsGame/>
          <LebronStats/>
         <CurryStats/>

        </div>
    )
}

export default RoadToFinals
