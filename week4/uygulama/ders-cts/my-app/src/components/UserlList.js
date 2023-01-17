import React from "react";

function UserlList({ user }) {
  return (
    <div>
      <ul>
        {user.map((person) => (
          <li>
            {person.username} : {person.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserlList;
