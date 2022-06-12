import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react"
import { toast } from "react-toastify";
import { globalReducer, initialState } from "../reducer/globalReducer";
import { useAuth } from "./auth-context";


const AddressContext = createContext();

function AddressProvider({ children }) {
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [addressState, addressDispatch] = useReducer(globalReducer, initialState);

    const { authState: { encodedToken } } = useAuth();


    const addAddressHandler = async (address, setAddress) => {
        if (encodedToken) {
            try {
                const response = await axios.post("/api/user/address",
                    {
                        address
                    },
                    {
                        headers: {
                            authorization: encodedToken
                        }
                    }
                )
                if (response.status === 201) {
                    addressDispatch({ type: "SET_ADDRESS", payload: response.data.addressList })
                    toast.success("Address Added");
                    setAddress(() => ({
                        name: "",
                        street: "",
                        city: "",
                        state: "",
                        country: "",
                        phone: "",
                    }))
                    setShowAddressModal(prev => !prev);
                }
            }
            catch (err) {
                toast.error(err.response.data.errors[0]);
            }
        }
        else {
            toast.info("Please login");
        }
    }
    const selectAddressHandler = (address) => {
        addressDispatch({ type: "SET_SELECTED_ADDRESS", payload: address });
    }
    return (
        <AddressContext.Provider value={{ showAddressModal, setShowAddressModal, addressDispatch, addressState, addAddressHandler, selectAddressHandler }}>
            {children}
        </AddressContext.Provider>
    )
}

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };