import {set} from 'mongoose'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {myBooksPost} from '../services/api'
import ConfirmModal from './ConfirmModal'
const MyBooks = () => {

  const intialState = {
    booksElement: null,
    confirmModalShow: false,
    confirmModalElement: null,
    confirmModalPayLoad: null
  }
  const [state,
    setState] = useState(intialState)


    const deleteBtnClick = (bookId) => {
        setState({
            ...state,
            confirmModalShow: true,
            confirmModalPayLoad: bookId,
            confirmModalElement: <p>I hope you know what you are doing , this book gonna be deleted for ever</p>
          })
    }


  useEffect(() => {
    myBooksPost().then(data => {
      console.log(data);
      if (data != 2) {
        // job gonna be here
        const booksElement = data.map(book => {
          return (
            <div key={book._id} className="col-md-3">
              <div className="item">
                <img className="bookimage" src={book.imgs[0]} alt="img"/>
                <h3>
                  <Link to={"/admin/mybook/" + book._id}>{book.title}</Link>
                </h3>
                <h6>
                  <Link to={"/admin/mybook/" + book._id}>Edit</Link>&nbsp;&nbsp;&nbsp;<button onClick={()=>{deleteBtnClick(book._id)}} className="btn btn-danger">Delete</button>
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

  const closeCnfirmModal = () => {
    setState({
      ...state,
      confirmModalShow: false
    })
  }

  return (
    <React.Fragment>
      <ConfirmModal
        className="bg-danger"
        show={state.confirmModalShow}
        close={closeCnfirmModal}
        title="Confirm Delete"
        payload={state.confirmModalPayLoad}
        >
            {state.confirmModalElement}
        </ConfirmModal>
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