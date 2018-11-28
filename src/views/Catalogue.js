import React, { Component } from 'react';
import '../assets/styles/App.css';
import { observer } from 'mobx-react'
import catalogueStore from '../stores/catalogueStore'

@observer
class Catalog extends Component {
    componentWillMount(){
       catalogueStore.load()
    }
    render() {
        if (catalogueStore.products) {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">sdsdf</h1>
                    </header>
                    {catalogueStore.products.map(product => <ProductItem key={product.id} product={product} /> )}
                </div>
            )
        }
        else return <span />
    }

}

export default Catalog;

@observer
class ProductItem extends Component {

    render() {
            const product = this.props.product;
            let images = catalogueStore.productImages();
            let productImage = product.main_image ? images[product.main_image.id] : null;
            console.log(images, productImage, product.main_image.id)
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">{product.name}</h1>
                        <img src={productImage} />
                    </header>

                </div>
            )
    }

}




