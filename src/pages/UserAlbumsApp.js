import { faker } from "@faker-js/faker";
import { Provider, useDispatch, useSelector } from "react-redux";
import UsersList from "../components/UserAlbumApp/UserList";
import { addUser, store } from "../store/userAlbumStore";
import { GoPlus, GoSync } from "react-icons/go";


const UserAlbumsApp = () => {
    return (
        <Provider store={store}>
            <UserAlbumPage />
        </Provider>
    );
}

const UserAlbumPage = () => {
    const dispatch = useDispatch();
    const  isLoading  = useSelector(({ users: { isLoading } }) => isLoading);
    const handleAddUser = () => { 
        dispatch(addUser(
            {
                name: faker.name.fullName()
            }
        ))
    }
    return (
        <div>
            <div className="d-flex justify-between mr-2 my-5">
                <span></span>
                <h1>User Albums</h1>
                <button onClick={() => handleAddUser()} disabled={isLoading} style={{ background: "green", color: "white", cursor: "pointer", border: "none", padding: "10px" }}>
                  {isLoading?<GoSync className="animate-spin"/>:  <GoPlus/>}
                </button>
            </div>
            <UsersList />
        </div>
    );
}

export default UserAlbumsApp;