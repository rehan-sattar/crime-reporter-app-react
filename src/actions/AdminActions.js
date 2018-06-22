import firebase from "firebase";
const getDataFromDbForAdmin = (payload) => {
   
    return {
        type: 'SEND_DATA_TO_ADMIN',
        payload
    };
};


export const fetchDataFromDbForAdmin = () => {
    return (dispatch) => {
        firebase.database().ref('reports').on('value' , (snapshot) => {
            dispatch(getDataFromDbForAdmin(snapshot.val()))
        });
    };
};
