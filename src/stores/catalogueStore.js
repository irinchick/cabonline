import { action, observable, computed } from 'mobx'
import Api from "../utils/api";
import EmptyProduct from "../initial_data/product"

export class Store {
    @observable  _loading = false;
    @observable  products = [];
    @observable  assets = {};


    @action
    load() {
        this._loading = true;
        return Api.Products.all().then((response)=>{
           response.data.forEach((product) => {this.loadProduct(product.id)})
        })

    }

    @action
    loadProduct(id) {
        this._loading = true;
        return Api.Products.find(id).then((response)=>{
            this.products.push(this._formProductObject(response.data))
        })

    }
    @action
    loadAsset(id) {
        this._loading = true;
        return Api.Assets.find(id).then((response)=>{
            //this.posts = response.data.map(product => product.id)
            this.assets[id] = response.data.uri
        })

    }
    @action
    _formProductObject(data){
        let product = Object.assign({}, EmptyProduct);
        if(data.elements.length){
            data.elements.forEach((element)=>{
                if(element.name === 'main_image'){
                    this.loadAsset(element.value.id)
                }
                product[element.name] = element.value


            })
        }
        return product
    }

    @action
    productImages(){
        return this.assets
    }

}

const catalogueStore = new Store();
export default catalogueStore
