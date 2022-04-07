export const initialAuthState = {
    isLoggedIn: false,
    _id: "",
    email: "",
    encodedToken: "",
    toast: {
        type: "",
        msg: "",
        toastState: false
    },
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
        case "LOGOUT":
            return {
                isLoggedIn: false,
                _id: "",
                email: "",
                encodedToken: "",
            }

        case "SET_TOAST":
            return { ...authState, toast: { type: payload.type, msg: payload.msg, toastState: payload.toastState } }

        default:
            return authState;
    }

}

export { authReducer };

