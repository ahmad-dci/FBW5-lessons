import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import Oclock from './components/Oclock'
import getImages from './services/pixabay'
import ShowImages from './components/ShowImages'
class App extends React.Component {

    constructor(props) {
        super(props)
        // component refrences must be created on constructor
        this.blaspinnerRef = React.createRef()
    }

  state = {
    totalImages: null,
    imagesList: []
  }
  search = (searchWord, color) => {
    //console.log(searchWord); search proccess
    this.blaspinnerRef.current.classList.add('active')
    getImages(searchWord, color).then(data => {
        this.blaspinnerRef.current.classList.remove('active')
      console.log(data);
      this.setState({
        totalImages: data.total,
        imagesList: [...data.hits]
      })
    }).catch(error => {
        this.blaspinnerRef.current.classList.remove('active')
      console.log(error);
    })
  }
  render() {
    // let foundMessage = '' if (this.state.totalImages != null) {     foundMessage
    // = 'Found: ' + this.state.totalImages + ' Images' }
    return (
      <div className="ui segment">
        <Oclock/>
        <SearchBar text="Enter Search word" runSearch={this.search}/> {/* {foundMessage} */}
        {this.state.totalImages != null
          ? 'Found: ' + this.state.totalImages + ' Images'
          : ''}
        <ShowImages images={this.state.imagesList}/>
          <div ref={this.blaspinnerRef} className="ui  dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#container'))