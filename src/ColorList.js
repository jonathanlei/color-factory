import { Link } from 'react-router-dom';

import "./ColorList.css";

/** 
 * ColorList renders list of colors that link to ColorDetail
 *  and has a link to a ColorForm 
 * 
 * props: colors, a list of color names like: ["red",...]
 * 
 * state: none
 * 
 * App -> ColorList -> [Link (for different colors) ...]
 * 
 **/  

function ColorList({colors}) {

  return (
    <div className="ColorList">
      <p>Please select a color.</p>
      <ul>
        {Array.from(colors).map(color => <Link to={`/colors/${color}`} key={color}>{color}</Link>)}
      </ul>
    </div>
  );
}

export default ColorList;
