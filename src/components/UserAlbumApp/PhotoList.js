import { GoPlus, GoSync, GoTrashcan } from "react-icons/go";
import { useAddPhotoMutation, useFetchPhotosQuery, useRemovePhotoMutation } from "../../store/userAlbumStore";
import Skeleton from "../Skeleton";
import { faker } from "@faker-js/faker";


const PhotoList = ({album}) => {
    const { data, error, isLoading } = useFetchPhotosQuery(album.id);
    const [addPhoto] = useAddPhotoMutation();
    const [removePhoto] = useRemovePhotoMutation();
    let content = '';
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
            <div className=" m-auto">No Photos Found
            </div>
        );
    } else {
        content = data.map((e) => {
            return (
                <div key={e.id} className=" m-auto border rounded border-green-800 my-1">
                    <div className="d-flex justify-between p-2">
                        <div className="flex items-center ">
                        <GoTrashcan className="cursor-pointer mr-2 text-red-500" onClick={() => handleRemovePhoto(e)} />
                            <img src={e.url} alt="" />
                        </div>
                    </div>
                </div>
            );
        })
    } 

    const handleAddPhoto = (albumId) => {
        addPhoto({
            url: faker.image.abstract(150,150, true),
            albumId
        })
    }

    const handleRemovePhoto = (photo) => {
        removePhoto(photo)
    }
    console.log(data)
    return (
        <div className="px-2">

            <div className="d-flex justify-end my-5">
                <button onClick={() => handleAddPhoto(album.id)} className="text-sm" disabled={isLoading} style={{ background: "green", color: "white", cursor: "pointer", border: "none", padding: "10px" }}>
                    {isLoading ? <GoSync className="animate-spin" /> : <GoPlus />}
                </button>
            </div>
            <div className="border-t border-t-green-800"/>
           <div className="py-2"> {content}</div>
        </div>
    );
}

export default PhotoList;