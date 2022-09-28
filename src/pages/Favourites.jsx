import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Favourites() {
  const customers = useSelector((state) => state.favouriteReducer);

  const dispatch = useDispatch()

  const empty = ()=> {
    dispatch({ type: 'EMPTY', payload: '' })
  }

  const remove = (customer) => {
    dispatch({ type: 'REMOVE_FAVOURITE', payload: customer })
  }


  return (
    <div>
        <button onClick={()=> empty()}>Empty</button>
      <table>
        <thead></thead>
        <tbody>
          {customers?.map((customer, index) => (
            <tr key={index}>
              <td>{customer.id}</td>
              <td>{customer.companyName}</td>
              <td>{customer.address?.country}</td>
              <td>
                <button onClick={()=>remove(customer)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favourites;
