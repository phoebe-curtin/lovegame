import React from 'react'
import ranks from '../../data/ranks.js'
import {Route, Link} from 'react-router-dom'


const Nav = (props) => {

  
  return (
    <ul>
      {Object.keys(ranks).map((name, key) => {return <li key={key}><Link to={`/list/${name}`}>{name}</Link></li>})}
    </ul>
  )
  
}

export default Nav