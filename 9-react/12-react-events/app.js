import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import Oclock from './components/Oclock'

class App extends React.Component{
    search = (searchWord) => {
        console.log(searchWord);
        // search proccess
    }
    render(){
        let obj = {
            text: 'Enter you search key',
            something: 'it is something'
        }
        return(
            <div>
                <Oclock />
                <SearchBar text="Enter Search word" runSearch={this.search}  />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))