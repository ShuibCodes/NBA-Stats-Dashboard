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
  
  const westbrook = [
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
      "season": 2019,
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

    
 
        
  
  const durantSet=  [ {
    "id": "K Durant",
    "color": "hsl(22, 70%, 50%)",
    "data": [
     
      
    ]
  }
  ]

    
  const LebronSet=  [ {
    "id": "L James",
    "color": "hsl(22, 70%, 50%)",
    "data": [
     
      
    ]
  }
  ]
  const CurrySet=  [ {
    "id": "S Curry",
    "color": "hsl(22, 70%, 50%)",
    "data": [
     
      
    ]
  }
  ]
  const RussSet=  [ {
    "id": "R Westbrook",
    "color": "hsl(22, 70%, 50%)",
    "data": [
     
      
    ]
  }
  ]
  
    const filteredData = (data, nbaData) => {
      const newData = data[0].data.push(...nbaData)
      console.log(data)
      const fd = data[0].data
      console.log(data)
      const newFd = fd.map((e) => Object.keys(fd[0])) 
      console.log(fd)
      // replacing with x and y 
      var i;
      for(i = 0; i < fd.length; i++){
          fd[i].x = fd[i]['season'];
          fd[i].y = fd[i]['pts'];
         
    }
    console.log(data)
    return data
    
    }
  
  
  
    
  const kevin = filteredData(durantSet,kd)
  const russ = filteredData(RussSet,westbrook)
  const steph= filteredData(CurrySet,curry)
  const james= filteredData(LebronSet,lebron)
  
  russ.push(kevin[0])
  russ.push(steph[0])
  russ.push(james[0])
  
  

    return (

      <div  style={{height:"350px", width:"900px", padding:"0px", position:"relative", right:"20px"}} >
      <ResponsiveLine
 data={russ}
 margin={{ top: 50, right: 110, bottom: 50, left: 60 }}  

 xScale={{ type: 'point' }}
 yScale={{ type: 'linear', min: '10', max: '130', stacked: true, reverse: false }}
 axisTop={null}
 axisRight={null}
 axisBottom={{
     orient: 'bottom',
     tickSize: 5,
     tickPadding: 5,
     tickRotation: 0,
     legend: 'seasons',
     legendOffset: 36,
     legendPosition: 'middle'
 }}
 axisLeft={{
     orient: 'left',
     tickSize: 5,
     tickPadding: 5,
     tickRotation: 0,
     legend: 'points',
     legendOffset: -40,
     legendPosition: 'middle'
 }}
 pointSize={10}
 pointColor={{ theme: 'background' }}
 pointBorderWidth={2}
 pointBorderColor={{ from: 'serieColor' }}
 pointLabelYOffset={-12}
 useMesh={true}
 legends={[
     {
         anchor: 'right',
         direction: 'column',
         justify: false,
         translateX: 105,
         translateY: -10,
         itemsSpacing: 0,
         itemDirection: 'left-to-right',
         itemWidth: 80,
         itemHeight: 20,
         itemOpacity: 0.75,
         symbolSize: 12,
         symbolShape: 'circle',
         symbolBorderColor: 'rgba(0, 0, 0, .5)',
         effects: [
             {
                 on: 'hover',
                 style: {
                     itemBackground: 'rgba(0, 0, 0, .03)',
                     itemOpacity: 1
                 }
             }
         ]
     }
 ]}
/>
 </div>
    )
}

export default RoadToFinals
