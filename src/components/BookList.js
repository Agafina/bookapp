import React, {  useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const BookList = () => {
        const {isLightTheme, light, dark} = useContext(ThemeContext)
        const theme = isLightTheme ? light :dark;
    return ( 
        <div className='booklist' style={{color:theme.syntax, background:theme.bg}}>
                    <ul>
                        <li style={{background:theme.ui}}>The way of kings</li>
                        <li style={{background:theme.ui}}>Taken away by lightening</li>
                        <li style={{background:theme.ui}}>Trying to make things better</li>
                    </ul>
                </div>
     );
}
 
export default BookList;