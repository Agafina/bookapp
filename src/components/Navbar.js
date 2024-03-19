import React, {  useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {Authenticated, toggleAuth} = useContext(AuthContext)
    const theme = isLightTheme ? light : dark
    return ( 
        <nav style={{background: theme.ui, color:theme.syntax}} >
            <h1>Context App</h1>
            <div style={{display: 'inline'}} onClick={toggleAuth}>{
                Authenticated ? 'logged in' : 'logged out'
                }</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>books</li>
            </ul>
        </nav>
     );
}
 
export default Navbar;