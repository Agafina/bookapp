
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle.js';
import AuthContexProvider from './context/AuthContext.js';
import BookContextProvider from './context/BookContext.js';
import ThemeContextProvider from './context/ThemeContext';


function App() {
  return (
    <div className="App">
    <AuthContexProvider>
    <ThemeContextProvider>
        <Navbar />
        <BookContextProvider>
           <BookList />
        </BookContextProvider>
        <ThemeToggle />
     </ThemeContextProvider>
     </AuthContexProvider>
    </div>
  );
}

export default App;
