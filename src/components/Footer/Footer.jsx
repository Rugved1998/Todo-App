import { Link } from 'react-router-dom';


export default function Footer(){

return(
<footer style={footerStyle}>
    <p>Copyright by Rugved 2024</p>
    <Link to='/about'>About</Link>
</footer>
);

};

const footerStyle={
    backgroundColor:"grey"
}