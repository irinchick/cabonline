
/**
 * Created by irynazirukina on 2018-05-17.
 */
import { action, observable } from 'mobx'
import { BlogData } from '../utils/data'
export class Store {
    @observable  _loading = false;
    @observable  posts = [];

    @action
    load() {
        this._loading = true;
        this.posts = BlogData;
    }

    @action
    reset(){

    }


}

const blogStore = new Store();
export default blogStore
