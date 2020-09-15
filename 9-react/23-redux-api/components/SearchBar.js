import React from 'react'

import getData from '../services/pixabay'

class SearchBar extends React.Component {

    state ={
        searchWord: ''
    }


    onSearchInpChange = (e) => {
        this.setState({
            searchWord: e.target.value
        })
    }

    onSearchBtnClick = () => {
        getData(this.state.searchWord, 10, 1).then(data => {
            console.log(data);
        })
    }

  render() {
    return (
      <div className="input-group mb-3 mt-3">
        <div className="input-group-prepend">
          <button onClick={this.onSearchBtnClick} className="btn btn-outline-secondary" type="button">Search</button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Word"
          value={this.state.searchWord}
          onChange={this.onSearchInpChange}
          />
      </div>
    )
  }
}

export default SearchBar