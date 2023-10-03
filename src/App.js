import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Party from './components/app/Party';
import PartyFollower from './components/app/PartyFollower';


class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    {/*<Route path="/" component={Party}/>*/}
                    {/*<Route path="/party" component={Party}/>*/}
                    <Route path="/party/join" component={PartyFollower}/>
                </div>
            </Router>

        );
    }
}

export default App;
