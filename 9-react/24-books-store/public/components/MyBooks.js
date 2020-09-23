import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import {myBooksPost} from '../services/api'
const MyBooks = () => {

  useEffect(() => {
    myBooksPost().then(data => {
      console.log(data);
      if (data != 2) {
        // job gonna be here
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

              <div className="col-md-3">
                <div className="item">
                  <img className="bookimage" src="<%= books[i].imgs[0]%>" alt="img"/>
                  <h3>
                    <a href="/admin/mybook/<%=books[i].id%>">
                      books[i].title</a>
                  </h3>
                  <h6>
                    <a href="/admin/mybook/<%=books[i].id%>">Edit</a>&nbsp;&nbsp;&nbsp;<a className="showDeleteModalBtn" bookid="<%=books[i].id%>" href="#">Delete</a>
                  </h6>
                </div>
              </div>

            </div>
            <div className="btn-sec">
              <button className="btn gray-btn">load More books</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>