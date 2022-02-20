//import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
   <BrowserRouter>
    <Switch>
    <Route exact path ='/' render={() => <LandingPage/>}/>    </Switch>
   </BrowserRouter>
  );
}

export default App;
 