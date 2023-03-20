import { GoPlus, GoSync, GoTrashcan } from "react-icons/go";
import { useAddAlbumMutation, useFetchAlbumsQuery, useRemoveAlbumMutation } from "../../store/userAlbumStore";
import ExpandablePanel from "../ExpandiblePanel";
import Skeleton from "../Skeleton";
import { faker } from "@faker-js/faker";
import PhotoList from "./PhotoList";


const AlbumList = ({ user }) => {

    const { data, error, isLoading } = useFetchAlbumsQuery(user.id);
    const [addAlbum] = useAddAlbumMutation();
    const [removeAlbum] = useRemoveAlbumMutation();
    const handleDeleteAlbum = (album) => {
        console.log(album);
        removeAlbum(album);
     }
    let content = ''
    if (isLoading)
        content = (
            <Skeleton times={2} className="h-10 m-auto" />
        );
    if (error)
        content = (
            <div>Error fetching data.</div>
        );

    if ((data ?? []).length < 1) {
        content = (
            <div className=" m-auto">No Albums Found
            </div>
        );
    } else {

        content = (data ?? []).map((e) => {
            const header = <>
                <GoTrashcan className="cursor-pointer mr-2 text-red-500" onClick={() => handleDeleteAlbum(e)} />
                {e.title}
            </>;
            return <div key={e.id} >

                <ExpandablePanel header={header}>
                   <div className="px-2">
                   <PhotoList album={e}/>
                   </div>
                </ExpandablePanel></div>;
        })
    }

    const handleAddAlbum = (id) =>
        addAlbum({
            title: faker.commerce.productName(),
            userId: id
        });


    return (
        <div className="px-2">
            <div className="d-flex justify-end my-5">
                <button onClick={() => handleAddAlbum(user.id)} className="text-sm" disabled={isLoading} style={{ background: "green", color: "white", cursor: "pointer", border: "none", padding: "10px" }}>
                    {isLoading ? <GoSync className="animate-spin" /> : <GoPlus />}
                </button>
            </div>
            <div className="border-t border-t-green-800"/>
           <div className="py-2"> {content}</div>
        </div>
    );
}

export default AlbumList;