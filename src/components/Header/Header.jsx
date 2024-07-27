import React from "react";
import Button from "../Button/Button"

export default function Header({onToggle,formMode}){

   
return(
<header className="header">
{/* <button onClick={onToggle} className="btn">Test</button> */}
<h1 >Task Tracker</h1>
<Button color={formMode?"Red":"Green"} text={formMode?"Close":"Add"} onClick={onToggle} />
</header>
);

};


