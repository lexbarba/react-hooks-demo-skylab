import React, { Component } from 'react'
import Login from '../Login'
import Search from '../Search'
import Context from '../DemoContext'
import {DemoContext} from '../DemoContext'

import './index.sass'

class App extends Component {

  state

  render() {
    
    return <main className="App container has-text-centered">
      <h1 className="title is-2">React Hooks Skylab Demo</h1>
        <div className="columns is-mobile is-multiline">
          <div className="column is-half is-offset-one-quarter">
            <div className="card">
              <div className="card-content">
                <div className="card-header title is-4">Log In Form</div>
                <div className="card-content">
                <DemoContext.Provider value ={{email, password}}>
                    <Login />
                  </DemoContext.Provider>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half is-offset-one-quarter">
            <div className="card">
              <div className="card-content">
                <div className="card-header title is-4">Search Form</div>
                <div className="card-content has-text-centered">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half is-offset-one-quarter">
            <div className="card">
              <div className="card-content">
                <div className="card-header title is-4">useContext</div>
                <div className="card-content has-text-centered">
                  <DemoContext.Provider value ={{email, password}}>
                    <Context />
                  </DemoContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>  
  }
}

export default App
