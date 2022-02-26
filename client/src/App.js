//import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Detail from './components/LandingPage';
import Home from './components/Home';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={() => <LandingPage />} />
				<Route exact path="/home" component={() => <Home />} />
				<Route  path='/details/:idPais' render = {() => <Detail />}/>
				<Route  path='/activities' render = {() => <Detail />}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
