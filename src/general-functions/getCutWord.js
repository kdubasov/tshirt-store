export const getCutWord = (word,length = 20) => {

    if (!word) return false;

    if (word.length > length){
        return word.slice(0,length) + "..."
    }else{
        return word
    }
}