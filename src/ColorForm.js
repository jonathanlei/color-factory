import { useState } from "react";

import { useHistory } from "react-router-dom";

/**
 * ColorForm renders form to add new color
 *
 * state: formData object like { color }
 * 
 *
 * App -> ColorList -> [Link (for different colors) ...]
 *
 **/

function ColorForm({updateColors}) {
  // NOTE: color can just be string, not nested in an object
  const [formData, setFormData] = useState({
    color: "",
  })
  const history = useHistory();

  /** Handler function for submitting new color */  
  function handleSubmit(evt) {
    evt.preventDefault();
    updateColors(formData);

    setFormData({color: ""});
    history.push("/colors");
  }

  /** Handler for updating color input */  
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="color"
        id="color"
        placeholder="type color here."
        value={formData.color} 
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  );
}

export default ColorForm;
