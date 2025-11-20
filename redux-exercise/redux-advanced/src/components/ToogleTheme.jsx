import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Redux/Action';

function ToogleTheme() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    
    return (
        <div>
            <button onClick={() => dispatch(toggleTheme())} style={{ margin: "5px 50px" }}>Toggle theme</button>
            <span> Current Theme is {theme}</span>
        </div>
    );
}

export default ToogleTheme;