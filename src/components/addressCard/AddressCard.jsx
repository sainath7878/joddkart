import { useAddress } from "../../context/address-context";
import "./addressCard.css";

function AddressCard({ address }) {
  const {
    addressState: { addresses },
    selectAddressHandler,
  } = useAddress();

  return (
    <div className="address-container">
      <label className="address-label">
        <input
          type="radio"
          name="address"
          className="mr-sm address-input"
          onChange={() => selectAddressHandler(address)}
          checked={addresses.selectedAddress._id === address._id}
        />
        <h1 className="fs-m">{address.name}</h1>
        <p className="fs-s">{address.street}</p>
        <p className="fs-s">
          {address.city}, {address.state}, {address.country}
        </p>
        <p className="fs-s">Phone Number:- {address.phone}</p>
      </label>
    </div>
  );
}

export { AddressCard };
