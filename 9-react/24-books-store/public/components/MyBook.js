import React, {useEffect, useState, useRef} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import {getBookPost} from '../services/api'

const MyBook = () => {
  const params = useParams()
  const history = useHistory()


  const pdfSpanRef = useRef()
  const pdfInputRef = useRef()

  const initialState = {
    book: null
  }
  const [state,
    setState] = useState(initialState)

  useEffect(() => {
    getBookPost(params.id).then(data => {
      console.log(data);
      switch (data) {
        case 2:
          console.log('server error');
          break;
        case 10:
          history.push('/login')
          break;

        default:
          setState({
            ...state,
            book: data
          })
          break;
      }

    })

  }, []);
  

  const deleteImgClick = (image, e) => {
    e.preventDefault()
    const newBook = {...state.book}
    newBook.imgs.splice(newBook.imgs.indexOf(image), 1)
    setState({
      ...state,
      book: newBook
    })
  }

  const pdfDeleteClick = e => {
    e.preventDefault()
    pdfSpanRef.current.remove()
    pdfInputRef.current.disabled = false
  }

  if (state.book) {
    const imagesElement = state
      .book
      .imgs
      .map((image, idx) => {
        return (
          <div key={idx} className="col-md-3">
            <a href="#" className="deleteImg" onClick={(e) => {deleteImgClick(image, e)}}>X</a>
            <img className="bookimg" src={image} alt=""/>
          </div>
        )
      })
    return (
      <React.Fragment>
        <div className="breadcrumb">
          <div className="container">
            <Link className="breadcrumb-item" to="/admin">Dashboard</Link>
            <span className="breadcrumb-item active">{state.book.title}</span>
          </div>
        </div>
        <section className="static about-sec">
          <div className="container">
            <h1>My Account / Edit Book</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only fiveLorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
            </p>
            <div className="form">
              <form>
                <div className="form-group">
                  <label htmlFor="bookTitleInp">Book Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bookTitleInp"
                    placeholder="Book Title"
                    value={state.book.title}/>
                </div>
                <div className="form-group">
                  <label htmlFor="bookImgsInp">Book Images</label>
                  <div className="row">
                    {imagesElement}
                  </div>
                  <input
                    type="file"
                    className="form-control-file"
                    multiple
                    id="bookImgsInp"
                    accept="image/x-png,image/gif,image/jpeg"/>
                </div>
                <div className="form-group">
                  <label htmlFor="bookPdfInp">Book PDF</label>
                  <span ref={pdfSpanRef} className="badge badge-default">{state.book.pdfUrl.substr(state.book.pdfUrl.lastIndexOf('/')+1)}
                    <a href="#" id="deletePdf" onClick={e => {pdfDeleteClick(e)}}>X</a>
                  </span>
                  <input
                    ref={pdfInputRef}
                    type="file"
                    className="form-control-file"
                    id="bookPdfInp"
                    accept="application/pdf"
                    disabled/>
                </div>
                <div className="form-group">
                  <label htmlFor="bookDescriptionInp">Book Description</label>
                  <textarea className="form-control" id="bookDescriptionInp" value={state.book.description}></textarea>
                </div>
                <button className="btn btn-success mt-3">save</button>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  } else {
    return (
      <div>Loading ....</div>
    )
  }
}

export default MyBook