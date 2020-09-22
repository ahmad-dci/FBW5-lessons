import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Shop = () => {


    const intialState = {
        books: []
    }
    const [state, setState] = useState(intialState)

    useEffect(() => {
        
    }, [])


    return(
        <React.Fragment>
            <div className="breadcrumb">
        <div className="container">
            <Link className="breadcrumb-item" to="/">Home</Link>
            <span className="breadcrumb-item active">Shop</span>
        </div>
    </div>
    <section className="static about-sec">
        <div className="container">
            <h2>recently added books to our store</h2>
            <div className="recent-book-sec">
                <div className="row">
                    
                    <div className="col-md-3">
                        <div className="item">
                            <img className="bookimage" src="<%= books[i].imgs[0]%>" alt="img" />
                            <h3><a href="/book/<%=books[i].title.trim().replace(/ /g, '_')%>/<%=books[i].id%>">books[i].title</a></h3>
                            <h6><a href="/book/<%=books[i].title.trim().replace(/ /g, '_')%>/<%=books[i].id%>">Download</a></h6>
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
    )
}


export default Shop