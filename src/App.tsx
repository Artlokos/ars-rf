import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter';
// import Search from './components/Search/Search';

function App() {
  return (
    <>
      <Router>
        
        {/* <Search /> */}
        <Navbar
          items={[
            { name: 'Новости', path: '/news' },
            { name: 'Афиша', path: '/posters' },
            { name: 'Справочник', path: '/consult' },
            { name: 'Погода', path: '/weather' },
            { name: 'Места', path: '/places' },
          ]}
        />
        <Header label="ArsTimes" />
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
