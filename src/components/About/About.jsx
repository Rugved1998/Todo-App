import { Link } from 'react-router-dom';


export default function About(){

return(
<div style={aboutStyle}>
      <h4>Version 1.0.0</h4>
      <Link to='/'>Go Back</Link>
    </div>
);

};

const aboutStyle={
  display:"flex",
  alignItems:"center",
  flexDirection:"column"
}