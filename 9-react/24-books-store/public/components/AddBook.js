import React, {useState, useRef} from 'react'

import PopUpModal from './PopUpModal'

const AddBook = () => {
  const intialState = {
    bookTitle: '',
    bookDescription: '',
    modalElement: null,
    showModal: false,
    modalTitle: ''
  }
  const [state,
    setState] = useState(intialState)

  const pdfFileInpRef = useRef()
  const imagesFileInpRef = useRef()


  const bookSaveBtnClick = e => {
    e.preventDefault()
    if (state.bookTitle.trim() ==='' || 
        state.bookDescription.trim() === '' || 
        pdfFileInpRef.current.files.length === 0 || 
        imagesFileInpRef.current.files.length === 0){
          const errorElement = (
            <ul>
              {state.bookTitle.trim() ==='' ? <li>please enter book title</li> : null}
              {state.bookDescription.trim() === ''  ? <li>please enter book Description</li> : null}
              {pdfFileInpRef.current.files.length === 0  ? <li>please upload the book pdf file</li> : null}
              {imagesFileInpRef.current.files.length === 0  ? <li>please upload at least one Image</li> : null}
            </ul>
          )
          setState({
            ...state,
            modalElement: errorElement,
            showModal: true,
            modalTitle: 'Entries Errors'
          })
        }
  }
  const closeModal = () => {
    setState({
      ...state,
      showModal: false
    })
  }
  return (
    <React.Fragment>
      <PopUpModal 
        show={state.showModal} 
        close={closeModal} 
        className="bg-danger"
        title={state.modalTitle}
        >
          {state.modalElement}
        </PopUpModal>
      <div className="breadcrumb">
        <div className="container">
          <a className="breadcrumb-item" href="index.html">Home</a>
          <span className="breadcrumb-item active">Register</span>
        </div>
      </div>
      <section className="static about-sec">
        <div className="container">
          <h1>My Account / Add Book</h1>
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
                  value={state.bookTitle}
                  onChange={e => {
                  setState({
                    ...state,
                    bookTitle: e.target.value
                  })
                }}
                  id="bookTitleInp"
                  type="text"
                  className="form-control"
                  placeholder="Book Title"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Book Images</label>
                <input
                  ref={imagesFileInpRef}
                  id="exampleFormControlFile1"
                  type="file"
                  className="form-control-file"
                  multiple
                  accept="image/x-png,image/gif,image/jpeg"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Book PDF</label>
                <input
                  ref={pdfFileInpRef}
                  id="exampleFormControlFile1"
                  type="file"
                  className="form-control-file"
                  accept="application/pdf"/>
              </div>
              <div className="form-group">
                <label htmlFor="bookDescriptionInp">Book Description</label>
                <textarea
                  value={state.bookDescription}
                  onChange={e => {
                  setState({
                    ...state,
                    bookDescription: e.target.value
                  })
                }}
                  className="form-control"
                  id="bookDescriptionInp"></textarea>
              </div>
              <button onClick={bookSaveBtnClick} className="btn btn-success mt-3">save</button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AddBook