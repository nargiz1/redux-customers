import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'

function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/customers")
      .then((res) => setCustomers(res.data));
  }, []);

  const dispatch = useDispatch();

  const addToFav = (customer)=> {
    dispatch({ type: 'ADD_TO_FAVOURITES', payload: customer })
  }

  return (
    <>
      <table>
        <thead></thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.id}</td>
              <td>{customer.companyName}</td>
              <td>{customer.address?.country}</td>
              <td>
                <button onClick={()=>addToFav(customer)}>💕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Customers;
