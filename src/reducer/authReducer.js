export const initialAuthState = {
    isLoggedIn: false,
    _id: "",
    email: "",
    encodedToken: "",
}

const authReducer = (authState, { type, payload }) => {

    switch (type) {
        case "SET_USER":
            return {
                isLoggedIn: true,
                _id: payload._id,
                email: payload.email,
                encodedToken: payload.encodedToken
            }
        case "LOGOUT": {
            return {
                isLoggedIn: false,
                _id: "",
                email: "",
                encodedToken: "",
            }
        }

        default:
            return authState;
    }

}

export { authReducer };

