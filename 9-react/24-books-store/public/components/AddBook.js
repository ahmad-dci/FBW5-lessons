import React, {useState, useRef} from 'react'

const AddBook = () => {
  const intialState = {
    bookTitle: '',
    bookDescription: ''
  }
  const [state,
    setState] = useState(intialState)

  const pdfFileInpRef = useRef()
  const imagesFileInpRef = useRef()

  return (
    <React.Fragment>
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
                  onChange={e => {
                  setState({
                    ...state,
                    bookDescription: e.target.value
                  })
                }}
                  className="form-control"
                  id="bookDescriptionInp">{state.bookDescription}</textarea>
              </div>
              <button className="btn btn-success mt-3">save</button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AddBook