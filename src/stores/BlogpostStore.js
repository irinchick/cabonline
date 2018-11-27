import { action, observable } from 'mobx'
import { BlogData } from '../utils/data'
import Api from "../utils/api";


export class Store {
    @observable  _loading = false;
    @observable  posts = [];

    @action
    load(id) {
        this._loading = true;
        return Api.Products.find(id).then((response)=>{
        })

    }


}

const blogPostStore = new Store();
export default blogPostStore
