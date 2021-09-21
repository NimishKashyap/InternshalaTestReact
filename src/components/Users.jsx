import React from "react";

// const usersArray = [
//     {
//         name: "Nimish",
//         email: "kashyap.nimish8@gmail.com",
//     },
//     {
//         name: "Nimish",
//         email: "kashyap.nimish8@gmail.com",
//     },
//     {
//         name: "Nimish",
//         email: "kashyap.nimish8@gmail.com",
//     },
// ];
function Users() {
    const users = JSON.parse(localStorage.getItem("users"));
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Users;
