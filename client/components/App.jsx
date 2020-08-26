import React from 'react'
import Home from './Home'
import Nav from './Nav'
import { Route } from 'react-router-dom'
import RankListing from './RankListing'

const App = () => {
  return (
    <div>
      <h1>Navigating the taxonomic ranks</h1>
      <Route path="/" component={Nav}/>
      <Route exact path="/" component={Home}/>
      <Route path='/list/:rank' component={RankListing} />
     
      
      
    </div>
    
  )
}

export default App
