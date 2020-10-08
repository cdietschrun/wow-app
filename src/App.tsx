import * as React from "react";
import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const BlizzAPI = require('blizzapi');

function App()
{
  const [characterHeader, setCharacterHeader] = useState({} as any);

  React.useEffect(() => {
    getCharacterData();
  }, []);

  async function getCharacterData()
  {
    const BnetApi = new BlizzAPI({region:'us',
                                  clientId: process.env.REACT_APP_WOW_APP_CLIENT_ID, 
                                  clientSecret: process.env.REACT_APP_WOW_APP_SECRET_ID });

    const character_header = await BnetApi.query('/profile/wow/character/zuljin/tyegath', 
    { headers: { 'Battlenet-Namespace':'profile-us' } });
    setCharacterHeader(character_header);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chri22 Edit <code>src/App.js</code> and save to reload. points: {characterHeader['achievement_points']}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
