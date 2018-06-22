const AdminReducer = (state = {}  , action) => {
    switch(action.type) {
        case 'SEND_DATA_TO_ADMIN':
            return action.payload
    };
    return state;
};


export default AdminReducer;