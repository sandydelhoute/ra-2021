import Profils from './Profils';
import { observer } from 'mobx-react-lite';


const UserCard = ({ id, name, avatar }) => {
    return <div className="col-4 col-md-3 col-lg-2">
        <div class="row">
            <label>{name}</label>
        </div>
        <div class="row">
            <img src={avatar} alt='text' />
        </div>
    </div>
}
const UserList = observer(() =>
    console.log(Profils) || Profils.users.map((user, index) => {
        return <UserCard key={index} {...user}>
        </UserCard>

    }));

export const Observables = () => {
    return <div>
        <h1>profils</h1>
        <div className="row">
            <UserList />
        </div>
    </div>
}