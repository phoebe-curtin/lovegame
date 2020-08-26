import React from 'react'
import ranks from '../../data/ranks.js'
import {Route, Link} from 'react-router-dom'


    const RankListing = ({match}) => {

        const {rank} = match.params
        console.log(ranks[rank])
      
        return (
        <div>
           <h2>ranked listing</h2>
             <ul>
                {Object.keys(ranks).map((name, key) => {return <li key={key}><Link to={`/list/${name}`}>{name}</Link></li>})}
             </ul>
                             
        </div>
        )

      }
  
 

export default RankListing