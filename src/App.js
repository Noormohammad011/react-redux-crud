import React from 'react'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <div className='py-5'>
          <Switch>
            <Route exact path='/' component={Contact} />
            <Route exact path='/contacts/add' component={AddContact} />
            <Route exact path='/contacts/add/:id' component={EditContact} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
