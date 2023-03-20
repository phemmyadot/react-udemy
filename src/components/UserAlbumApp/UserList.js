import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, fetchUsers } from "../../store/userAlbumStore";
import Skeleton from "../Skeleton";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "../ExpandiblePanel";
import AlbumList from "./AlbumList";


const UsersList = () => {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector(({ users: { isLoading, data, error } }) => {
        return {
            isLoading, data, error
        }
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isLoading)
        return (
            <Skeleton times={4} className="h-10 w-80 m-auto" />
        );
    if (error)
        return (
            <div>Error fetching data.</div>
        );

    if (data.length < 1) {
        return (
            <div className="h-10 w-80 m-auto">No Users Found
            </div>
        );
    }
    const handleDeleteUser = (id) => dispatch(deleteUser({ id }));



    const renderedUsers = data.map((e) => {
        const header = <>
            <GoTrashcan className="cursor-pointer mr-2 text-red-500" onClick={() => handleDeleteUser(e.id)} />
            {e.name}
        </>;
        return (
            <div key={e.id} className="w-80 m-auto text-sm">
                <ExpandablePanel header={header}>
                        
                        <div className="px-2">
                                <AlbumList user={e} />
                        </div>
                </ExpandablePanel>
            </div>
        );
    })
    return (
        <div className="font-medium">
            {renderedUsers}
        </div>
    );

}

export default UsersList;