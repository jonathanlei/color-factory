import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Nav from './Nav';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';
import { useState } from "react";

// NOTE: changed this to a set for efficiency
const INITIAL_COLORS = new Set(["red", "green", "blue"]);

/** 
 * App
 * 
 * props:
 * 
 * state: colors, list of color strings
 * 
 * App -> Nav, ColorList, ColorForm, ColorDetail 
 **/  

function App() {
  const [colors, setColors] = useState(INITIAL_COLORS);

  /** updateColors updates the local state of color strings to show */
  function updateColors(colorData) {
      setColors(prevColors => {
        return new Set([
          ...prevColors,
          colorData.color
        ])
      })
  }  

  /** Checks if the color name exists to view detail page */ 
  function isValidColor(color) {
    return colors.has(color);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors}/>
          </Route>

          <Route exact path="/colors/new">
            <ColorForm updateColors={updateColors}/>
          </Route>

          <Route exact path="/colors/:color">
            <ColorDetail isValidColor={isValidColor}/>
          </Route>


          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
