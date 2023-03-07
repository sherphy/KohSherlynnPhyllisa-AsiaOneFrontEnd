import React, {Component} from 'react'
import Banner from './Banner';
import Body from './Body';
import './App.css'
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default App;