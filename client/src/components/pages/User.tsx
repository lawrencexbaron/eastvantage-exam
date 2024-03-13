import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const User = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/fetch-users");
      const data = await res.json();
      setUsers(data.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl border px-3 py-2 overflow-y-auto">
        <div className="flex justify-between mb-2">
          <h1 className="text-2xl font-bold">Users</h1>
          <Link to="/" className=" px-3 py-1 rounded hover:text-blue-600">
            Create User
          </Link>
        </div>
        <table className="table-auto w-full shadow-sm overflow-y-auto">
          <thead className="bg-gray-50 overflow-y-auto">
            <tr className="text-sm border-b">
              <th className="px-3 py-2 capitalize">First Name</th>
              <th className="px-3 py-2 capitalize">Middle Name</th>
              <th className="px-3 py-2 capitalize">Last Name</th>
              <th className="px-3 py-2 capitalize">Email</th>
              <th className="px-3 py-2 capitalize">Role</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {users.map((user: any) => (
              <tr
                className="text-center overflow-y-auto border-b cursor-pointer hover:bg-gray-50 text-sm"
                key={user.id}
              >
                <td className="px-3 py-2">{user.first_name}</td>
                <td className="px-3 py-2">{user.middle_name}</td>
                <td className="px-3 py-2">{user.last_name}</td>
                <td className="px-3 py-2">{user.email}</td>
                <td className="px-3 py-2 capitalize">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
