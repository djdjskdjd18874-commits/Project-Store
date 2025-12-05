import React, { Component } from 'react'
import { storeCollection } from '../static/data'
import ProductCard from '../componets/ProductCard'

export default class StoreCategory extends Component {
  constructor() {
    super();
    this.state = {
      CollectionData: storeCollection,
      productApiData: null
    };
  }

  componentDidMount() {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(responseData => responseData.json())
      .then(apiData => {
        this.setState({ productApiData: apiData });
      })
      
  }

  render() {
    return <>
      <section className='container-fluid     '>
        {this.state.productApiData &&
          this.state.productApiData.map((productItem) => (
              
          
            
                <div key={productItem.id} className='' >
              <ProductCard product={productItem} />
            </div>
             
        
          ))}
      </section>
      </>
    
  }
}
