import React from 'react'

class ShowProducts extends React.Component {

  render() {
    const productsComponents = []
    
    this
      .props
      .hits
      .forEach((product, idx) => {
        productsComponents.push(
          <li key={idx} className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
              <div className="media-body order-2 order-lg-1">
                <h5 className="mt-0 font-weight-bold mb-2">{product.name}</h5>
                <p className="font-italic text-muted mb-0 small">{product.description}</p>
                <div className="d-flex align-items-center justify-content-between mt-1">
                  <h6 className="font-weight-bold my-2">EUR {product.price}</h6>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star text-success"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star text-success"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star text-success"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star text-success"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star-o text-gray"></i>
                    </li>
                  </ul>
                </div>
              </div><img
                src={product.image}
                alt="Generic placeholder image"
                width="200"
                className="ml-lg-5 order-1 order-lg-2"/>
            </div>
          </li>

        )
      });
    return (
      <ul className="list-group shadow">
        {productsComponents}
      </ul>
    )
  }
}

export default ShowProducts