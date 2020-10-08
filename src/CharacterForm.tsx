import * as React from "react";
import './App.css';
import { useState } from "react";

function CharacterForm()
{
  function handleSubmit()
  {
    console.log("submittedxc")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export { CharacterForm as CharacterForm };
