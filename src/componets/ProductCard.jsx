
import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    const { images, title, price, category } = this.props.product;

    return (
      <div className="row " style={{ marginBottom: "20px", 
       }}>
        {images?.length > 0 &&
          images.slice(0, 3).map((img, index) => (
            <div className="col-12 col-md-4 product-card" key={index}>
              <img src={img} alt={title} className="w-75 product-img"

              style={{maxHeight: "200px" , maxWidth: "400px" }}
              />
              <div className="product-info  ">
                <h6 className='title'>{title}</h6>
                <h5>{category?.name}</h5>
                <h4 className='price'>{price} 💲</h4>

                <div className='d-flex gap-3 '>
                  <button className=" green ">Add Product</button>
                <button className="  red ">View product</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
