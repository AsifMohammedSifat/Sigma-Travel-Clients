import React from "react";
import { useState } from "react";

const TableRow = (props) => {
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
  const [nowStatus, setNowStatus] = useState(status);
  const handleDelete = () => {
    const x = window.confirm("Do you want to cancel your booking?");
    if (x) {
      fetch(`https://fast-gorge-50252.herokuapp.com/booked`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          deleteId: _id,
        }),
      })
        .then((res) => res.json())
        .then(() => props.deleteOrder(_id));
    }
  };
  const handleStatus = (status) => {
    if (status === nowStatus) return;
    const x = window.confirm("Do you want to change the status?");
    if (x) {
      fetch(`https://fast-gorge-50252.herokuapp.com/booked`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          updateId: _id,
          status: status,
        }),
      })
        .then((res) => res.json())
        .then(() => setNowStatus(status));
    }
  };
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
      {props.edit ? (
        <td>
          <div className="dropdown">
            <button
              className={`btn dropdown-toggle ${nowStatus}`}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {nowStatus}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  onClick={() => handleStatus("PENDING")}
                  className="dropdown-item"
                  style={{backgroundColor:'red',text:'white'}}
               
                >
                  PENDING
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleStatus("APPROVED")}
                  className="dropdown-item "
                  style={{backgroundColor:'green',text:'white'}}
                >
                  APPROVED
                </button>
              </li>
            </ul>
          </div>
        </td>
      ) : (
        <td className={status}>{status}</td>
      )}
      <td className="text-center">
        <button className="rounded-3 bg-dark fs-5 text-danger p-2" onClick={handleDelete}>
        <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;