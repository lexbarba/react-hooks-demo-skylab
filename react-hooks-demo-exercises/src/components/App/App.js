import React, { useState } from "react"
import Login from "../Login/index"
import Search from "../Search"
import Context from "../Context"
import { DemoContext } from "../DemoContext"
import Counter from '../Counter'
import ModalExample from '../ModalExample'

import "./index.sass"


export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [characters, setCharacters] = useState('')

  return (
  <DemoContext.Provider value={{ email, setEmail, password, setPassword, characters, setCharacters }}>  
    <main className="App container has-text-centered">
      <h1 className="margin title is-2">React Hooks Skylab Demo</h1>
      <div className="columns is-mobile is-multiline">
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="card-header title is-4">Log In Form (useState)</div>
              <div className="card-content">
                  <Login />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="card-header title is-4">Autofill Text (useContext)</div>
              <div className="card-content has-text-centered">
                  <Context />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-three-fifths">
          <div className="card">
            <div className="card-content">
              <div className="card-header title is-4">Search Form (useEffect)</div>
              <div className="card-content has-text-centered">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="card">
            <div className="card-content">
              <div className="card-header title is-4">Counter (useReducer)</div>
              <div className="card-content has-text-centered">
                  <Counter />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="card">
            <div className="card-content">
              <div className="card-header title is-4">Modal (Custom Hook)</div>
              <div className="card-content has-text-centered">
                  <ModalExample />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </DemoContext.Provider>  
  );
}
