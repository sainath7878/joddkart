import { useState } from "react";
import { toast } from "react-toastify";
import { BiXLg } from "../../assets/icons/Icons";
import { useAddress } from "../../context";
import "./addressModal.css";

function AddressModal() {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    phone: "",
  });

  const { addAddressHandler, setShowAddressModal } = useAddress();

  const savehandler = () => {
    const { name, street, city, state, country, phone } = address;
    if (!name || !street || !state || !country || !phone) {
      toast.error("Please fill all the fields");
    } else if (phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
    } else if (name.trim().length <= 0) {
      toast.error("Name cannot be empty");
    } else if (street.trim().length <= 0) {
      toast.error("Street/House Number cannot be empty");
    } else if (city.trim().length <= 0) {
      toast.error("City cannot be empty");
    } else if (state.trim().length <= 0) {
      toast.error("State cannot be empty");
    } else if (country.trim().length <= 0) {
      toast.error("Country cannot be empty");
    } else {
      addAddressHandler(address, setAddress);
    }
  };
  const addDummyAddressHandler = () => {
    setAddress(() => ({
      name: "Akash",
      street: "New Colony Lane 1",
      city: "Rayagada",
      state: "Odisha",
      country: "India",
      phone: "1234567891",
    }));
  };

  return (
    <form className="address-modal form">
      <div className="close-cta-container">
        <h1 className="fs-m">Address</h1>
        <button
          className="close-cta"
          type="button"
          onClick={() => {
            setAddress(() => ({
              name: "",
              street: "",
              city: "",
              state: "",
              country: "",
              phone: "",
            }));
            setShowAddressModal((prev) => !prev);
          }}
        >
          <BiXLg className="fs-m" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter your Name"
        className="form-input"
        value={address.name}
        onChange={(e) =>
          setAddress((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Enter your House/Street Number"
        className="form-input"
        value={address.street}
        onChange={(e) =>
          setAddress((prev) => ({ ...prev, street: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Enter your City"
        className="form-input"
        value={address.city}
        onChange={(e) =>
          setAddress((prev) => ({ ...prev, city: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Enter your State"
        className="form-input"
        value={address.state}
        onChange={(e) =>
          setAddress((prev) => ({ ...prev, state: e.target.value }))
        }
      />
      <input
        type="number"
        placeholder="Enter your Phone Number"
        className="form-input"
        value={address.phone}
        onChange={(e) =>
          setAddress((prev) => ({ ...prev, phone: e.target.value }))
        }
      />
      <select
        name=""
        id=""
        className="form-input"
        value={address.country}
        onChange={(e) =>
          setAddress((prev) => ({ ...prev, country: e.target.value }))
        }
      >
        <option value="" disabled>
          --Select Country--
        </option>
        <option value="India">India</option>
        <option value="Nepal">Nepal</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Maldives">Maldives</option>
        <option value="Pakistan">Pakistan</option>
      </select>
      <div className="address-cta">
        <button
          type="button"
          className="btn btn-secondary-outline fs-s"
          onClick={addDummyAddressHandler}
        >
          Add Dummy Address
        </button>
        <button
          type="button"
          className="btn btn-secondary fs-s"
          onClick={savehandler}
        >
          Save Address
        </button>
      </div>
    </form>
  );
}

export { AddressModal };
