import { useParams } from "react-router-dom";

const Route2 = () => {
    const { id } = useParams();
    return <>
        <h3>This is route {id}</h3>
        
    </>
}

export default Route2;