//import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <LandingPage />} />{' '}
        <Route path ='/home' render={() => <Home/>}/>   
			</Switch>
		</BrowserRouter>
	);
}

export default App;
