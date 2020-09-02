import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import Oclock from './components/Oclock'
import getImages from './services/pixabay'
import ShowImages from './components/ShowImages'
class App extends React.Component{
    state = {totalImages: null, imagesList: []}
    search = (searchWord) => {
        console.log(searchWord);
        // search proccess
        getImages(searchWord).then(data => {
            console.log(data);
            this.setState({totalImages: data.total, imagesList: [...data.hits]})
        }).catch(error => {
            console.log(error);
        })
    }
    render(){
        // let foundMessage = ''
        // if (this.state.totalImages != null) {
        //     foundMessage = 'Found: ' + this.state.totalImages + ' Images'
        // }
        return(
            <div>
                <Oclock />
                <SearchBar text="Enter Search word" runSearch={this.search}  />
                {/* {foundMessage} */}
                {this.state.totalImages != null ? 'Found: ' + this.state.totalImages + ' Images' : ''}
                <ShowImages images={this.state.imagesList} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))