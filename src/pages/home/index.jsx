import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/features/userSlice";

const Home = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <div className="container"><br /><br />
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gray-500 text-white">
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Age</th>
            <th className="py-3 px-4 text-left">Profession</th>
            <th className="py-3 px-4 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="py-2 px-4">{u.name}</td>
              <td className="py-2 px-4">{u.age}</td>
              <td className="py-2 px-4">{u.profession}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => dispatch(deleteUser(i))}
                  className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Home);
