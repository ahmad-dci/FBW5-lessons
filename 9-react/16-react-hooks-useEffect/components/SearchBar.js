import React, {useState} from 'react'

const SearchBar = () => {
    
    const [searchWord, setSearchWord] = useState('')

    const onSearchInpChange = (e) => {
        console.log(e.target.value);
        setSearchWord(e.target.value)
    }
  return (
    <div className="row">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Type somthing to search"
          onChange={(e) => {onSearchInpChange(e)}}
          value={searchWord}
          />
      </div>
    </div>
  )
}

export default SearchBar