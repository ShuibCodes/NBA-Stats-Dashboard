import React from 'react'
import { ResponsivePie } from '@nivo/pie'


export default function FinalsGame() {

   // home team 
   const nba =  [
    {
        "id": 33921,
        "date": "2016-06-19T00:00:00.000Z",
        "home_team": {
            "id": 10,
            "abbreviation": "GSW",
            "city": "Golden State",
            "conference": "West",
            "division": "Pacific",
            "full_name": "Golden State Warriors",
            "name": "Warriors"
        },
        "home_team_score": 89,
        "period": 4,
        "postseason": true,
        "season": 2015,
        "status": "Final",
        "time": " ",
        "visitor_team": {
            "id": 6,
            "abbreviation": "CLE",
            "city": "Cleveland",
            "conference": "East",
            "division": "Central",
            "full_name": "Cleveland Cavaliers",
            "name": "Cavaliers"
        },
        "visitor_team_score": 93
    }
]

const nbaObj = nba[0].home_team

console.log(nba)
let homeScore = nba[0].home_team_score
let Hname = nbaObj.name


 homeScore = {
   ...nbaObj,
   value :  homeScore,
   id: Hname
 }

 console.log(homeScore)

 // Visitor team 
 const nbaObjVisitor = nba[0].visitor_team
console.log(nbaObjVisitor)

let visitorScore = nba[0].visitor_team_score
let Vname = nbaObjVisitor.name

console.log(Vname)

 visitorScore = {
   ...nbaObjVisitor,
   value :  visitorScore,
   id: Vname
 }

 console.log(visitorScore)


 const newData = [
    {...homeScore},
    {...visitorScore}
  ];

console.log(newData)


    return (
        <>
             <ResponsivePie 
        data={newData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
       
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
      
        </>
    )
}
