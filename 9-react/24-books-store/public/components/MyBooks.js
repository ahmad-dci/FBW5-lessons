import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {myBooksPost} from '../services/api'
const MyBooks = () => {

    const intialState = {
        booksElement: null
    }
    const [state, setState] = useState(intialState)


  useEffect(() => {
    myBooksPost().then(data => {
      console.log(data);
      if (data != 2) {
        // job gonna be here
        const booksElement = data.map(book => {
            return(
                <div key={book._id} className="col-md-3">
                <div className="item">
                  <img className="bookimage" src={book.imgs[0]} alt="img"/>
                  <h3>
                    <Link to={"/admin/mybook/"+book._id}>{book.title}</Link>
                  </h3>
                  <h6>
                    <Link to={"/admin/mybook/"+book._id}>Edit</Link>&nbsp;&nbsp;&nbsp;<button className="btn btn-danger"  >Delete</button>
                  </h6>
                </div>
              </div>
            )
        })
        setState({
            ...state,
            booksElement
        })
      }
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <React.Fragment>
      <div className="breadcrumb">
        <div className="container">
          <Link className="breadcrumb-item" to="/admin">Dashboard</Link>
          <span className="breadcrumb-item active">My Books</span>
        </div>
      </div>
      <section className="static about-sec">
        <div className="container">

          <h2>My books</h2>
          <div className="recent-book-sec">
            <div className="row">

              {state.booksElement}

            </div>
            <div className="btn-sec">
              <button className="btn gray-btn">load More books</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default MyBooks