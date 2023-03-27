export const isImage = (url: String | undefined): boolean => {
    if (url!.split(".").indexOf("png") > 0) {
        return true;
    }
    if (url!.split(".").indexOf("jpg") > 0) {
        return true;
    }
    else return false;
};