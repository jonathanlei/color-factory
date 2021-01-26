import { Link, useParams, Redirect } from "react-router-dom";


/**
 * ColorDetail renders detail page showing color
 *
 * props: isValidColor, parent fn checking if color name is valid
 * 
 * state: none
 *
 * App -> ColorDetail
 *
 **/

function ColorDetail({isValidColor}) {
  const { color } = useParams();

  // useEffect( function () {

  // });

  const styles = {
    backgroundColor: color,
    height: "500px",
    width: "500px",
  }

  if (!isValidColor(color)) return <Redirect to="/colors" />

  return (
    <div className="ColorDetail" style={styles}>
      {color.name}
      <Link to="/colors">Go back!</Link>
    </div>
  );
}

export default ColorDetail;
