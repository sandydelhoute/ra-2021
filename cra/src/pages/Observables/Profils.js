import Axios from "axios";
import {makeAutoObservable} from 'mobx';

class Profile{
    usersUrl = 'https://61669f4013aa1d00170a65df.mockapi.io/users';
    name=''
    _users = [];
    constructor(){
        makeAutoObservable(this);
        this.fetchUsers();
        console.log(this._user);
    }
    fetchUsers(){
        Axios.get(this.usersUrl)
        .then((result)=>{
            console.log(result.data);  
            this.users = result.data;
        }
        ).catch();
    }
    get users(){
        console.log(this._users)
        return this._users;
    }
    set users(value){
        this._users = value;
    }
}
export default new Profile();