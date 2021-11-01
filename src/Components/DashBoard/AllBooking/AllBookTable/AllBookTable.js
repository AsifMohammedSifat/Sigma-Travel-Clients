import React from "react";
import { useState } from "react";

const AllBookTable= (props) => {
  const {
    _id,
    userName,
    userEmail,
    destinationName,
    price,
    days,
    nights,
    status,
    phone
  } = props.data;
  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{phone}</td>
      <td>{destinationName}</td>
      <td>
        {days} Days - {nights} Nights
      </td>
      <td>${price}</td>
      
    </tr>
  );
};


export default AllBookTable;