import React, {Component} from 'react'
import Banner from './Banner';
import Body from './Body';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Body/>
            </div>
        )
    }
}

export default App;