import './App.css';
import { useNavigate } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import route from './route';
import Header from './Header';

const App = () => {
  const content = useRoutes(route);

  return (
    <div>      <Header/>

      {content}
    </div>
  );
};

export default App;
