import React, { useState, useEffect } from 'react'

import './global.css'
import './Sidebar.css'
import './Main.css'
import './App.css'

function App() {
  const [latitude, setLatitude]   = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 120000,
      } 
    )
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastre-se</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label type="number" htmlFor="latitude">Latitude</label>
              <input 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
            <label type="number" htmlFor="longitude">Longitude</label>
              <input 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)}
              />
            </div>              
          </div>

          <button type="submit">Salvar</button>       
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/57413904?v=4" alt=""/>
              <div className="user-info">
                <strong>Wellington Almeida</strong>
                <span>ReactJS, NodeJS, Ruby, Rails</span>
              </div>
            </header>
            <p>Entusiasta de tecnologia e apaixonado por programação.</p>
            <a href="https://github.com/siwjas" target="_blank" rel="noopener noreferrer">Perfil Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/57413904?v=4" alt=""/>
              <div className="user-info">
                <strong>Wellington Almeida</strong>
                <span>ReactJS, NodeJS, Ruby, Rails</span>
              </div>
            </header> 
            <p>Entusiasta de tecnologia e apaixonado por programação.</p>
            <a href="https://github.com/siwjas" target="_blank" rel="noopener noreferrer">Perfil Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/57413904?v=4" alt=""/>
              <div className="user-info">
                <strong>Wellington Almeida</strong>
                <span>ReactJS, NodeJS, Ruby, Rails</span>
              </div>
            </header>
            <p>Entusiasta de tecnologia e apaixonado por programação.</p>
            <a href="https://github.com/siwjas" target="_blank" rel="noopener noreferrer">Perfil Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/57413904?v=4" alt=""/>
              <div className="user-info">
                <strong>Wellington Almeida</strong>
                <span>ReactJS, NodeJS, Ruby, Rails</span>
              </div>
            </header>
            <p>Entusiasta de tecnologia e apaixonado por programação.</p>
            <a href="https://github.com/siwjas" target="_blank" rel="noopener noreferrer">Perfil Github</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App
