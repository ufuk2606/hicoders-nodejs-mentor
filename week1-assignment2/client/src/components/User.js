import React, { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);
  const [userWithId, setUserWithId] = useState([]);

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/users");
    const commingData = await response.json();
    setUsers(commingData);
  };

  const getUsersWithId = async (pId) => {
    const response = await fetch("http://localhost:8080/users/" + pId);
    const commingData = await response.json();
    setUserWithId(commingData);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mt-1">
            {user.name}{" "}
            <button
              className="bg-success text-white rounded p-2 border-0"
              onClick={() => getUsersWithId(user.id)}
            >
              Select
            </button>{" "}
          </li>
        ))}
      </ul>
      {userWithId.length !== 0 && (
        <p className="ms-3">
          Email of the selected user: <strong>{userWithId.email}</strong>
        </p>
      )}
    </>
  );
}

export default User;
