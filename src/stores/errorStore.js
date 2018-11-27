import { action, observable } from 'mobx'
import { BlogData } from '../utils/data'
export class Store {


    @action
    load() {

    }

    @action
    reset(){

    }


}

const errorStore = new Store();
export default errorStore
