import React, {useState,useEffect} from 'react'
import { ResponsiveBar } from '@nivo/bar'
import '../App.css'

function Lebron2016() {
    
    // make this an api call
    // all three buttons here, hide chart with useState?

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

   const stats = [{"stat" :"points" , "value": ""}, {"stat": "rebounds", value: ""}, {"stat": "assists", value: ""}]

    const sortedData = (data, nums) => {
      const finalData = nums.map((stat) => {
           if(Object.values(stat).includes("points")){
               return{
                   ...stat,
                   value: data[0].pts
               }
           } else if(Object.values(stat).includes("rebounds")){
            return{
                ...stat,
                value:data[0].reb
            }
           } else if(Object.values(stat).includes("assists")){
               return{
                   ...stat,
                   value:data[0].ast
               }
           }
        
       }) 
        return finalData
       
    }



    console.log(sortedData(season19,stats))
    // object with stat name as indexBy and stats as value, use axios to pull certain data points  out to make it more clean and readable ?





    return (
        <div class=" my-56 w-auto   h-120  " >
      <ResponsiveBar
        data={sortedData(season19,stats)}
        indexBy="stat"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        keys={["value"] }
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
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
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
        </div>
    )
}

export default Lebron2016
