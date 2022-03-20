import  axios  from "axios";

export const signUpHandler = async () => {
    try {
        const response = await axios.post(`/api/auth/signup`, {
            firstName: "Adarsh",
            lastName: "Balika",
            email: "sainathsvm@gmail.com",
            password: "12345678",
        });
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
        console.log(error);
    }
};
