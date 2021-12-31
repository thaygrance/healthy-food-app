import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Register } from './pages/Register/index';
import GlobalStyle from './styles/global'

function App() {

  return (
    <Router>
      <Routes>
        <Route  path="/" element={ <Home /> } />
        <Route  path="/register" element={ <Register /> } />
      </Routes>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
