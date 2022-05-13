import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import PhotoMetrics from './pages/PhotoMetrics/PhotoMetrics'

function App() {
	return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/user" exact component={HomePage} />
          <Route path="/user/photo" component={PhotoMetrics} /> 
          
        </Switch>
      </BrowserRouter>
	);
}

export default App;
