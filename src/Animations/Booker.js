import React, {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
  } from "react";
  import "../Stats/Stats.scss";
  import { ResponsiveBar } from "@nivo/bar";
  import "../App.css";
  import { useInterval } from 'use-interval';
  import booker from '../images/booker.png'
import BookerLine from "./BookerLine";
  
  // Moved all this static data out of the component so that
  // rerenders dont need to re compute it again.
const season15 = [{
    "games_played": 76,
            "player_id": 57,
            "season": 2015,
            "min": "27:43",
            "fgm": 4.83,
            "fga": 11.41,
            "fg3m": 1.3,
            "fg3a": 3.8,
            "ftm": 2.83,
            "fta": 3.37,
            "oreb": 0.36,
            "dreb": 2.11,
            "reb": 2.46,
            "ast": 2.63,
            "stl": 0.58,
            "blk": 0.26,
            "turnover": 2.11,
            "pf": 2.96,
            "pts": 13.79,
            "fg_pct": 0.423,
            "fg3_pct": 0.343,
            "ft_pct": 0.84
}]
  const season16 = [ { 
    "games_played": 78,
    "player_id": 57,
    "season": 2016,
    "min": "35:00",
    "fgm": 7.77,
    "fga": 18.35,
    "fg3m": 1.88,
    "fg3a": 5.19,
    "ftm": 4.71,
    "fta": 5.65,
    "oreb": 0.59,
    "dreb": 2.6,
    "reb": 3.19,
    "ast": 3.44,
    "stl": 0.92,
    "blk": 0.27,
    "turnover": 3.09,
    "pf": 3.1,
    "pts": 22.13,
    "fg_pct": 0.423,
    "fg3_pct": 0.363,
    "ft_pct": 0.832
}]


const season17 = [{
    "games_played": 54,
    "player_id": 57,
    "season": 2017,
    "min": "34:32",
    "fgm": 8.43,
    "fga": 19.52,
    "fg3m": 2.72,
    "fg3a": 7.11,
    "ftm": 5.35,
    "fta": 6.09,
    "oreb": 0.48,
    "dreb": 4.04,
    "reb": 4.52,
    "ast": 4.69,
    "stl": 0.87,
    "blk": 0.26,
    "turnover": 3.59,
    "pf": 3.11,
    "pts": 24.93,
    "fg_pct": 0.432,
    "fg3_pct": 0.383,
    "ft_pct": 0.878
}]

const season18 = [{
    "games_played": 64,
    "player_id": 57,
    "season": 2018,
    "min": "35:02",
    "fgm": 9.16,
    "fga": 19.61,
    "fg3m": 2.11,
    "fg3a": 6.47,
    "ftm": 6.14,
    "fta": 7.09,
    "oreb": 0.61,
    "dreb": 3.53,
    "reb": 4.14,
    "ast": 6.77,
    "stl": 0.88,
    "blk": 0.2,
    "turnover": 4.13,
    "pf": 3.13,
    "pts": 26.56,
    "fg_pct": 0.467,
    "fg3_pct": 0.326,
    "ft_pct": 0.866

}]

  const season19 = [
    {
        "games_played": 70,
        "player_id": 57,
        "season": 2019,
        "min": "35:52",
        "fgm": 8.96,
        "fga": 18.34,
        "fg3m": 2.01,
        "fg3a": 5.69,
        "ftm": 6.69,
        "fta": 7.27,
        "oreb": 0.41,
        "dreb": 3.81,
        "reb": 4.23,
        "ast": 6.51,
        "stl": 0.69,
        "blk": 0.26,
        "turnover": 3.79,
        "pf": 3.04,
        "pts": 26.61,
        "fg_pct": 0.488,
        "fg3_pct": 0.354,
        "ft_pct": 0.919
    },
  ];
  
  const season20 = [
    {
        "games_played": 67,
        "player_id": 57,
        "season": 2020,
        "min": "33:52",
        "fgm": 9.3,
        "fga": 19.21,
        "fg3m": 1.88,
        "fg3a": 5.54,
        "ftm": 5.07,
        "fta": 5.85,
        "oreb": 0.51,
        "dreb": 3.69,
        "reb": 4.19,
        "ast": 4.31,
        "stl": 0.78,
        "blk": 0.24,
        "turnover": 3.07,
        "pf": 2.7,
        "pts": 25.55,
        "fg_pct": 0.484,
        "fg3_pct": 0.34,
        "ft_pct": 0.867
    },
  ];
  
  const season21 = [
    {
        "reb": 4.2,
        "ast": 4.3,
        "pts": 25.6
    },
  ];
  
  function Booker() {
    const [open, setOpen] = useState(false);
    const [open20, setOpen20] = useState(false);
    const [open21, setOpen21] = useState(false);
    // storing table data in state
    const [data, setData] = useState({});
    // keeping a reference of the current idx via a ref as we dont want it to change with re renders unless
    // we want it to.
    const idx = useRef(0);
    // memoizing these 2 constants
    
    const seasons = useMemo(() => [season15, season16, season17, season18,season19, season20, season21], []);
    const stats = useMemo(
      () => [
        { stat: "points", ppg: "" },
        { stat: "rebounds", ast: "" },
        { stat: "assists", reb: "" },
      ],
      []
    );
    // storing dataset
    const [dataset, setDataset] = useState([]);
  

    // change year function using useRef and usecallback 

    // converted this function to use a useCallback as its dependant
    // on seasons
    const yearChanger = useCallback(() => {
      // idx = useRef()
      // increase the current index by 1
      idx.current = idx.current += 1;
      // check if the current index is greater than the amount of seasons
      // we have
      if (idx.current >= seasons.length) {
        // reset index currently at 0 stored in useRef so no rerenders 
        idx.current = 0;
        setDataset(seasons[idx.current]);
        console.log(idx.current)
      } else {
        setDataset(seasons[idx.current]);
        console.log(idx.current)

      }
    }, [seasons]);
  

    // change data set depending on year (adding stats)

    const sortedData = useCallback((dataset, nums) => {
      // added some checks to make sure we actually have a dataset
      if (dataset && dataset.length) {
        const finalData = nums.map((stat) => {
          if (Object.values(stat).includes("points")) {
            return {
              ...stat,
              ppg: dataset[0].pts,
            };
          } else if (Object.values(stat).includes("rebounds")) {
            return {
              ...stat,
              reb: dataset[0].reb,
            };
          } else if (Object.values(stat).includes("assists")) {
            return {
              ...stat,
              ast: dataset[0].ast,
            };
          }
        });
  
        return finalData;
      }
      // return null if we dont have a dataset
      return null;
    }, []);
  
  
  
    // update the data every 2 seconds using the useInterval hook
    useInterval(() => {
      yearChanger();
    }, 2000);
  
    useEffect(() => {
      // compute the table data
      const data = sortedData(dataset, stats);
      // set the table data
      setData(data);
    }, [dataset, sortedData, stats]);


   
const [layout , setLayout] = useState("horizontal")

    
    const changeLayout = () => {
        if(layout === "horizontal"){
          setLayout("vertical")
        } else if(layout == "vertical"){
          setLayout("horizontal")

        }
    }

    return (
      <>
        <div style={{ padding: "20px" }}>
        <div class="flex">
        <div className="title-container">
            <h3 className="no23">Shooting Guard: Devin Booker</h3>
            <p  class="text-lg" > 2016 - 2021</p>

          </div>
          <img  class="flex-1 px-32 md:px-0   relative  right-32 md:left-8  w-10 h-64 " src={booker} alt="booker"></img>
        </div>
         
  
          <div className="container  flex "> 
      
          </div>
        </div>
      <button class="bg-blue-300 w-46  h-10 ml-10  rounded px-2 py-1 cursor-pointer w- whitespace-nowrap "  onClick={changeLayout} > Change Orientation </button>
        <div class="w-auto h-96 mr-24 relative right-8">
          {data ? (
            <ResponsiveBar
              data={data}
              indexBy="stat"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              maxValue={40}
              layout={layout}
              keys={["ppg", "ast", "reb"]}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              valueFormat={{ format: "", enabled: false }}
              colors={{ scheme: "nivo" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "stats",
                legendPosition: "middle",
                legendOffset: 40,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "",
                legendPosition: "middle",
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          ) : null}
        </div>
        <div>
          <BookerLine/>
        </div>
      </>
    );
  }
  
  export default Booker;