import { action, observable } from 'mobx'
import Api from "../utils/api";


export class Store {
    @observable  _loading = false;
    @observable  posts = [];

    @action
    load() {
        this._loading = true;
        return Api.Products.all().then((response)=>{
            this.posts = response.data.map(product => product.id)
        })

    }


}

const blogStore = new Store();
export default blogStore
