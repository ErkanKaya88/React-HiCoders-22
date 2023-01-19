import React from "react";
import Swal from "sweetalert2";

function ParticipantTable({ participants, getData }) {
  const handleDelete = (pId) => {
    deletePerson(pId);
  };

  const deletePerson = async (pId) => {
    await fetch(`http://dev.hicoders.cloud/playground/api/v1/User/${pId}`, {
      method: "DELETE",
    });
    await getData();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <table className="text-light  table  table-hover table-bg table-bordered  table-responsive">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {participants.map((participant) => (
          <tr key={participant.id}>
            <td>{participant.id}</td>
            <td>{participant.first_name}</td>
            <td>{participant.last_name}</td>
            <td>{participant.email}</td>
            <td onClick={() => handleDelete(participant.id)}>
              <i className="bi bi-trash-fill bg-danger"></i>
            </td>
          </tr>
        ))}
        {/* participants...*/}
      </tbody>
    </table>
  );
}
export default ParticipantTable;
