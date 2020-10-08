import * as React from "react";
import logo from './logo.svg';
import {CharacterForm} from "./CharacterForm";
import './App.css';
import { useState } from "react";

const BlizzAPI = require('blizzapi');

function App()
{
  const [characterHeader, setCharacterHeader] = useState({} as any);
  const [activeTitle, setActiveTitle] = useState({} as any);

  React.useEffect(() => {
    getCharacterData();
  }, []);

  async function getCharacterData()
  {
    const BnetApi = new BlizzAPI({region:'us',
                                  clientId: process.env.REACT_APP_WOW_APP_CLIENT_ID, 
                                  clientSecret: process.env.REACT_APP_WOW_APP_SECRET_ID });

    const access_token = await BnetApi.getAccessToken();

    const character_header = await BnetApi.query('/profile/wow/character/zuljin/tyegath', 
    { headers: { 'Battlenet-Namespace':'profile-us' } });
    setCharacterHeader(character_header);

    // const titles = await fetch(character_header['titles'].href + '&access_token=' + access_token + '&locale=en_US').then(response => response.json());
    // console.log(titles['active_title']['name']);
    // setActiveTitle(titles['active_title']);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CharacterForm />
        <p>
          Achievement points: {characterHeader['achievement_points']} <br></br>
          {/* Active title: {activeTitle['name']} */}
        </p>

      </header>
    </div>
  );
}

export default App;
