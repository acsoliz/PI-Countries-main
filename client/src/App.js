//import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';
import Home from './components/Home';
import Activity from './components/Activity';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={() => <LandingPage />} />
				<Route exact path='/home' component={() => <Home />} />
				<Route exact path='/countries/:id' component = {() => <Detail />}/>
				<Route path='/activity' component = {() => <Activity />}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
