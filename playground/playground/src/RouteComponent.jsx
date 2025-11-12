import App from "./App";
import Route1 from "./Route1"
import Route2 from "./Route2"
import NestedRoute from "./NestedRoute"
import { Route, Routes  } from 'react-router-dom'


const RouteComponent = () => {
    return ( 
        <> 
            <Routes>
                <Route path="/" element={<h5>This is Header</h5>} />    
            </Routes>
            <Routes>
                <Route path="/home" element={<App />}>
                    <Route index  element={<Route1 />}/>
                    <Route path="nested" element={ <NestedRoute />} />
                    <Route path=":id" element={ <Route2 />} />
                </Route>
            </Routes>
        </>
    )
}

export default RouteComponent;