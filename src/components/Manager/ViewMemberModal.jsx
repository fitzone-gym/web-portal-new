import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export const ViewMemberModal = ({ member, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <IoCloseSharp />
        </span>
        <div>
          <h2>Member Details</h2>
          <p>Full Name: {member.first_name} {member.last_name}</p>
          <p>Address: {member.address}</p>
          <p>Weight: {member.weight}</p>
          <p>Height: {member.height}</p>
          <p>Sugar Level: {member.suger_level}</p>
          <p>Cholestrol Level: {member.cholestrol_level}</p>
          <p>Blood Presure: {member.blood_presure}</p>
          {/* <p>Diabe: {member.}</p> */}
          {/* Add more member details here */}
        </div>
      </div>
    </div>
  );
};
