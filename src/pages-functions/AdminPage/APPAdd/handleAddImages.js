import {ref, uploadBytesResumable} from "firebase/storage";
import {storageDB} from "../../../database/firebase-connect";

export const handleAddImages = (data,productId) => {

    for (let image of data.images){
        let fileRef = ref(storageDB,`/products/${productId}/${image.name}`);
        uploadBytesResumable(fileRef, image)
            .then(() => console.log('Картинка ' + image.name + ' загружена.'))
    }
}