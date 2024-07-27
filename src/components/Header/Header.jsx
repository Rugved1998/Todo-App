
import Button from "../Button/Button"
import { useLocation } from 'react-router-dom'

export default function Header({onToggle,formMode}){
const location=useLocation();
   
return(
<header className="header">
{/* <button onClick={onToggle} className="btn">Test</button> */}
<h1 >Task Tracker</h1>
{location.pathname==='/' && (<Button color={formMode?"Red":"Green"} text={formMode?"Close":"Add"} onClick={onToggle} />)}
</header>
);

};


