const AdminReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEND_DATA_TO_ADMIN':
            return action.payload
            break;
        case 'Admin_Login':
            let flag = false;
            if (action.payload.email === "admin@gmail.com" && action.payload.password === "admin") {
                flag = true;
            }
            if (flag) {
                console.log('Admin logged in');
                return {
                    status: 'ok'
                }
            } else {
                console.log('Admin logout!')
            }
    }
    return state;
};



export default AdminReducer;