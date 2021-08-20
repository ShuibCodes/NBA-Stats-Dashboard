import React, {useMemo} from 'react'
import { ResponsiveLine } from '@nivo/line'
import FinalsGame from '../Charts/FinalsGame'
import EandWConferenceFinals from './ConferenceGames/EandWConferenceFinals'
import LebronStats from '../Stats/LebronStats'
import CurryStats from '../Stats/CurryStats'

  // Lebron, Curry, Wesbrook, KD 
  const lebron = [
    {
      "season": 2016,
      "pts":26.4,
    },
    {
      "season": 2017,
      "pts":27.5,
    },
    {
      "season": 2018,
      "pts":27.4,
    },
    {
      "season": 2019,
      "pts":25.3,
    },
    {
      "season": 2020,
      "pts":25,
    }

  
  ]
  
  const russ = [
    {
      "season": 2016,
      "pts":31.6,
    },
    {
      "season": 2017,
      "pts":25.4,
    },
    {
      "season": 2018,
      "pts":22.9,
    },
    {
      "season": 27.2,
      "pts":25.3,
    },
    {
      "season": 2020,
      "pts":22.2,
    }

  
  ]

  const curry  = [
    {
      "season": 2016,
      "pts":25.3,
    },
    {
      "season": 2017,
      "pts":26.4
    },
    {
      "season": 2018,
      "pts":27.3,
    },
    {
      "season": 2019,
      "pts":20.8,
    },
    {
      "season": 2020,
      "pts":32.0,
    }

  
  ]

  const kd = [
    {
      "season": 2016,
      "pts":25.1,
    },
    {
      "season": 2017,
      "pts":26.4,
    },
    {
      "season": 2018,
      "pts":26.0,
    },
    {
      "season": 2019,
      "pts":0,
    },

    {
      "season": 2020,
      "pts":26.9,
    },
   

  
  ]

function RoadToFinals() {

    
  const data = useMemo(
    () => [
      {
          "id": "Booker",
          "color": "hsl(232, 70%, 50%)",
          "data": [
        
           
          ]
        }
      ],
  
    []
  );


  
  

    return (


      
        <div>


        </div>
    )
}

export default RoadToFinals
