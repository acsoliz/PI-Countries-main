import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';

function App() {
	return (
		<BrowserRouter>
		<div classname="App">
			<Switch>
				<Route exact path="/" render={() => <LandingPage />} />
				<Route exact path="/home" render={() => <Home />} />				
			</Switch>
		</div>
		</BrowserRouter>
	);
}

export default App;
