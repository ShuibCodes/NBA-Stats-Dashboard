import React, {useMemo} from 'react'
import { ResponsiveLine } from '@nivo/line'

const booker_line = [
  {
    "season": 2015,
    "pts":26.97,
  },
  {
    "season": 2016,
    "pts":22,
  },
  {
    "season": 2017,
    "pts":25,
  },
  {
    "season": 2018,
    "pts":26.5,
  },
  {
    "season": 2019,
    "pts":26.1,
  },
  {
    "season": 2020,
    "pts":25.55,
  },
  {
    "season": 2021,
    "pts":26.56,
  },

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


function BookerLine() {

  
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
  




  const filteredData = (data, nbaData) => {
    const newData = data[0].data.push(...nbaData)
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
  
  return data
  
  }
  
 const booker = filteredData(data,booker_line)
 const durant = filteredData(data,kd)
  console.log(booker.push(...durant))


    return (
        <div  style={{height:"400px", width:"900px"}} >
             <ResponsiveLine
        data={filteredData(data,booker_line)}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: '30', stacked: true, reverse: false }}
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
                translateX: 126,
                translateY: -33,
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

export default BookerLine
