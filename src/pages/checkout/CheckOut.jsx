import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AddressCard, AddressModal, Amount } from "../../components";
import { useAddress, useAuth, useProducts } from "../../context";
import { useDocument } from "../../hooks/useDocument";
import "./checkOutPage.css";

function CheckOut() {
  useDocument("Checkout");
  const {
    state: { cart },
  } = useProducts();

  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    addressDispatch,
    addressState: {
      addresses: { address, selectedAddress },
    },
    showAddressModal,
    setShowAddressModal,
  } = useAddress();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/address", {
          headers: {
            authorization: encodedToken,
          },
        });
        if (response.status === 200) {
          addressDispatch({
            type: "SET_ADDRESS",
            payload: response.data.addressList,
          });
        }
      } catch (err) {
        toast.error(err.response.data.errors[0]);
      }
    })();
  }, [encodedToken, addressDispatch]);

  useEffect(() => {
    if (cart && cart.length === 0) {
      navigate("/products");
    }
  }, [cart]);

  useEffect(() => {
    if (
      selectedAddress &&
      Object.keys(selectedAddress).length === 0 &&
      address.length > 0
    )
      addressDispatch({
        type: "SET_SELECTED_ADDRESS",
        payload: address[0],
      });
  }, [address]);

  return (
    <>
      {showAddressModal && <AddressModal />}
      <h1 className="text-align-center fs-xl">
        Checkout ({cart.length}) items
      </h1>
      <div className="title-underline"></div>
      <div className="checkout-container">
        <div className="delivery-address">
          <div className="address-title">
            <h1 className="fs-m">Select a Delivery address</h1>
            <button
              className="btn btn-secondary fs-s"
              onClick={() => setShowAddressModal((prev) => !prev)}
            >
              Add new Address
            </button>
          </div>
          {address &&
            address.length > 0 &&
            address.map((singleAddress) => {
              return (
                <AddressCard address={singleAddress} key={singleAddress._id} />
              );
            })}
        </div>

        <div className="price-details">
          {cart && cart.length > 0 && (
            <>
              <h1 className="text-align-center fs-m mb-sm">Order Details</h1>
              <div className="title-underline"></div>
              <ul className="checkout-item-list mb-sm">
                <li>
                  <div className="checkout-item-details">
                    <h1 className="fs-m">Item</h1>
                    <h1 className="fs-m">Quantity</h1>
                  </div>
                </li>
                {cart.map((cartItem) => {
                  return (
                    <li key={cartItem._id}>
                      <div className="checkout-item-details">
                        <p className="fs-s">{cartItem.name}</p>
                        <p className="fs-s">{cartItem.qty}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          <div className="deliver-to">
            <h1 className="fs-m text-align-center mb-sm">DELIVER TO</h1>
            <div className="title-underline"></div>
            {selectedAddress && (
              <div className="selected-address mb-sm">
                <h1 className="fs-m">{selectedAddress.name}</h1>
                <p className="fs-s">{selectedAddress.street}</p>
                <p className="fs-s">
                  {selectedAddress.city}, {selectedAddress.state},{" "}
                  {selectedAddress.country}
                </p>
                <p className="fs-s">Phone Number:- {selectedAddress.phone}</p>
              </div>
            )}
          </div>
          <Amount />
        </div>
      </div>
    </>
  );
}

export { CheckOut };
