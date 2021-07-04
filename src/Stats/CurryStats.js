import React from 'react'
import LBJ from './PlayerImages/curry-copy.jpg'
import './Stats.css'

export default function Stats() {
    const curry  = [
 
            {
                "id": 774832,
                "ast": 2,
                "blk": 1,
                "dreb": 5,
                "fg3_pct": 0.286,
                "fg3a": 14,
                "fg3m": 4,
                "fg_pct": 0.316,
                "fga": 19,
                "fgm": 6,
                "ft_pct": 1.0,
                "fta": 1,
                "ftm": 1,
                "game": {
                    "id": 33921,
                    "date": "2016-06-19T00:00:00.000Z",
                    "home_team_id": 10,
                    "home_team_score": 89,
                    "period": 4,
                    "postseason": true,
                    "season": 2015,
                    "status": "Final",
                    "time": " ",
                    "visitor_team_id": 6,
                    "visitor_team_score": 93
                },
                "min": "39:16",
                "oreb": 0,
                "pf": 4,
                "player": {
                    "id": 115,
                    "first_name": "Stephen",
                    "height_feet": 6,
                    "height_inches": 3,
                    "last_name": "Curry",
                    "position": "G",
                    "team_id": 10,
                    "weight_pounds": 190
                },
                "pts": 17,
                "reb": 5,
                "stl": 1,
                "team": {
                    "id": 10,
                    "abbreviation": "GSW",
                    "city": "Golden State",
                    "conference": "West",
                    "division": "Pacific",
                    "full_name": "Golden State Warriors",
                    "name": "Warriors"
                },
                "turnover": 4
            }
        ]



    return (
        <div class="flex mr-20" >

            <div>
                <img class="h-100  " src={LBJ} ></img>
            </div>

        <div style={{position:"relative", top:"5rem"}}  >
                 <h3 className="stats-title py-3" >{curry[0].pts} Points</h3>
            <h3  className="stats-title whitespace-nowrap py-3" >{curry[0].reb} Rebounds</h3>

            <h3 className="stats-title py-3" >{curry[0].ast} Assists</h3>

        </div>
           
        </div>
    )
}
