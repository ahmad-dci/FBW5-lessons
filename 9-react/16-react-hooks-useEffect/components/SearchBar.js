import React, {useState, useEffect} from 'react'
import getData from '../services/Wikipedia'

const SearchBar = () => {

  const [searchWord, setSearchWord] = useState('')
  const [articles, setArticles] = useState([])

  const onSearchInpChange = (e) => {
    console.log(e.target.value);
    setSearchWord(e.target.value)
    //getData(e.target.value).then(data => {     console.log(data); })
  }

  // useEffect(() => {     console.log('I will be called in first time and in
  // every update'); }) useEffect(() => {     console.log('I am gonna becalled
  // ONLY for the first time'); }, [])

  useEffect(() => {
    // console.log('I am gonna be called for the first time and when "searchWord in
    // the state"  is changed');
    if (searchWord) {
      getData(searchWord).then(data => {
        console.log(data);
        setArticles([...data.query.search])
      })
    }

  }, [searchWord])

  const artilcesElements = articles.map(article => {
    return (
      <div key={article.pageid} className="card">
        <div className="card-header">
          {article.title}
        </div>
        <div className="card-body">
          
          <p className="card-text">{article.snippet} </p>
          <a href={`https://en.wikipedia.org?curid=${article.pageid}`} target="_blank" className="btn btn-primary">Open In Wikipedia</a>
        </div>
      </div>
    )
  })

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
          onChange={(e) => {
          onSearchInpChange(e)
        }}
          value={searchWord}/>
      </div>

      <div className="col-sm-12">
          {artilcesElements}
      </div>

    </div>
  )
}

export default SearchBar