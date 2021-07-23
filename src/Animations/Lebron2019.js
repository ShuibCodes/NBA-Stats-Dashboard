import React, {useState,useEffect} from 'react'
import '../Stats/Stats.scss'
import { ResponsiveBar } from '@nivo/bar'
import '../App.css'

function Lebron2019() {



    const [open, setOpen] = useState(false)
    const [open20, setOpen20] = useState(false)
    const [open21, setOpen21] = useState(false)
    const [year,setYear] = useState(0)

    
    // make this an api call
    // all three buttons here, hide chart with useState?
    // use object or an approach that ommits the use of 3 state variables
    // for animation, just change the state variable?

 // seaons stats 


   const season19= [
        {
            "games_played": 67,
            "player_id": 237,
            "season": 2019,
            "min": "34:34",
            "fgm": 9.6,
            "fga": 19.45,
            "fg3m": 2.21,
            "fg3a": 6.34,
            "ftm": 3.94,
            "fta": 5.69,
            "oreb": 0.96,
            "dreb": 6.85,
            "reb": 7.81,
            "ast": 10.21,
            "stl": 1.16,
            "blk": 0.55,
            "turnover": 3.9,
            "pf": 1.76,
            "pts": 25.34,
            "fg_pct": 0.493,
            "fg3_pct": 0.348,
            "ft_pct": 0.693
        }
    ]

    const season20 = [
        
            {
                "games_played": 45,
                "player_id": 237,
                "season": 2020,
                "min": "33:24",
                "fgm": 9.38,
                "fga": 18.29,
                "fg3m": 2.31,
                "fg3a": 6.33,
                "ftm": 3.96,
                "fta": 5.67,
                "oreb": 0.64,
                "dreb": 7.02,
                "reb": 7.67,
                "ast": 7.78,
                "stl": 1.07,
                "blk": 0.56,
                "turnover": 3.73,
                "pf": 1.56,
                "pts": 25.02,
                "fg_pct": 0.513,
                "fg3_pct": 0.365,
                "ft_pct": 0.698
            }
        
    ]
    


    const season21= [
        
        {
            "games_played": 45,
            "player_id": 237,
            "season": 2020,
            "min": "33:24",
            "fgm": 9.38,
            "fga": 18.29,
            "fg3m": 2.31,
            "fg3a": 6.33,
            "ftm": 3.96,
            "fta": 5.67,
            "oreb": 0.64,
            "dreb": 7.7,
            "reb": 7.8, 
            "ast": 7.78,
            "stl": 1.07,
            "blk": 0.56,
            "turnover": 3.73,
            "pf": 1.56,
            "pts": 25.00,
            "fg_pct": 0.513,
            "fg3_pct": 0.365,
            "ft_pct": 0.698
        }
    
]











    const stats = [{"stat" :"points" , ppg: ""}, {"stat": "rebounds", ast: ""}, {"stat": "assists", reb: ""}]

        const sortedData = (dataset, nums) => {
        const finalData = nums.map((stat) => {

      
            if(Object.values(stat).includes("points")){
                return{
                    ...stat,
                    ppg: dataset[0].pts
                }
            } else if(Object.values(stat).includes("rebounds")){
                return{
                    ...stat,
                    reb:dataset[0].reb
                }
            } else if(Object.values(stat).includes("assists")){
                return{
                    ...stat,
                    ast:dataset[0].ast
                }
            }
            
        })     
        
   // function that loops thru all years , (put yyears into an array) and goes back to original year 

        setInterval(() => {
     
                setDataset(season21)

    
          }, 2000)

        clearInterval()
      
            return finalData
        
        }


      
    // console.log(sortedData(season20,stats))
   
    const [dataset, setDataset] = useState(season19);
    


  



//    const yearChanger = (data) => {
//     const interval =  setInterval(() => {
//         setDataset(season20)
//         console.log(dataset)
//       }, 5000);
      
//        return () => clearInterval(interval);
//    }

//    console.log(yearChanger())


   
         

  
    
    






// needs refactoring

    const handle19 = () => {
        setOpen(!open);
        setOpen20(false)
        setOpen21(false)
    }
    

    const handle20 = () => {
        setOpen20(!open20);
        setOpen(false)
 
        setOpen21(false)


    }
    const handle21 = () => {
        setOpen21(!open21);
        setOpen(false)
        setOpen20(false)

    }
    
    

    return (
        <>
        <div style={{padding:"20px"}} >
            <div className="title-container" >
                <h3 className="no23" >Small Forward: Lebron James</h3>
            </div>

        <div className="container  flex " >
           <button className="skewBtn blue" onClick={handle19} >2019</button>
           <button className="skewBtn blue" onClick={handle20} >2020</button>
           <button className="skewBtn blue" onClick={handle21} >2021</button>

         </div>
       
        </div>
     

       
        {
            open ? 
            <div class="  w-auto h-96  " >
<ResponsiveBar
  data={ sortedData(dataset,stats)}
  indexBy="stat"
  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  padding={0.3}
  keys={["ppg", "ast", "reb"] }
  valueScale={{ type: 'linear' }}
  indexScale={{ type: 'band', round: true }}
  valueFormat={{ format: '', enabled: false }}
  colors={{ scheme: 'nivo' }}
  defs={[
      {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
      },
      {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
      }
  ]}

  borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
  axisTop={null}
  axisRight={null}
  axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'stats',
      legendPosition: 'middle',
      legendOffset: 40
  }}
  axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -40
  }}
  labelSkipWidth={12}
  labelSkipHeight={12}
  labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
  legends={[
      {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
              {
                  on: 'hover',
                  style: {
                      itemOpacity: 1
                  }
              }
          ]
      }
  ]}
/>
  </div> : <></>
        } 
        
        </>
    )
}

export default Lebron2019


