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
                                  clientId: 'fcfe325a7c74445e8e7f5a27ca66520f', 
                                  clientSecret: 'kOrHT94U3YWLwr9cx874ui3H8t5Ok4jK' });
    const accessToken = await BnetApi.getAccessToken();
    console.log(accessToken);

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
