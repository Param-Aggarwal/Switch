import { useOutletContext } from "react-router-dom";


const Route1 = () => {
    const info  = useOutletContext();
    return <>
        <h3>This is nested route {(console.log(`context from parent is ${info}`), <small style={{fontSize: "11px"}}> ({info})</small>)}</h3>
        
    </> 
}

export default Route1;