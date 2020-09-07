import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar' 
import getData from './services/pixabay'
import ShowImages from './components/ShowImages'

class App extends React.Component{

    state = {
        results: []
    }



    search = (keyWord) => {
        if(keyWord) {
            getData(keyWord, 4, 1).then(data => {
                console.log(data);
                this.setState({results: [...data.hits]})
            })
        } else {
            this.setState({results: []})
        }
    }

    render(){
        return(
            <div className="container">
                <SearchBar runSearch={this.search} />
                {this.state.results.length ? <ShowImages images={this.state.results} /> : ''}
                
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))