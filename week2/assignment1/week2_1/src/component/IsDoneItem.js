import React, { useState } from "react";

function IsDoneItem() {
  const [isdoneList, setisdoneList] = useState([
    "milk",
    "english exam",
    "js practical exam",
  ]);
  return (
    <div>
      <ul class="list-group" data-testid="is-done-item">
        {isdoneList.map((gorev) => (
          <li className="list-group-item d-flex justify-content-between text-decoration-line-through">
            {gorev}
            <i className="bi bi-trash3 text-danger "></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IsDoneItem;
