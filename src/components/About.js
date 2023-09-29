import react from react;
import {BrowseRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Header from './components/About';
import Header from './components/Portfolio';
import Header from './components/Contact';



function App(){
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={About} />
                    <Route path='/portfolio' component={portfolio} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        </Router>
    )
}

export default App