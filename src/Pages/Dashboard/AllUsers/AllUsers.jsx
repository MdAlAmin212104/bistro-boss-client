import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", ],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
    console.log(user);
    axiosSecure.patch(`/user/admin/${user}`)
      .then(res => {
        if(res.data.modifiedCount > 0){
          refetch()
          Swal.fire({
            title: "Your admin set success!",
            text: "Your file has been updated.",
            icon: "success",
          });
        }
      })
  }

  const handleDelete = id => {
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
          axiosSecure.delete(`/user/${id}`)
          .then(res => {
              if(res.data.deletedCount > 0){
                  refetch()
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                  });
              }
              
            })
          .catch(err => console.error(err))
        }
      })
  }
  return (
    <div>
      <div className="flex justify-evenly my-6">
        <h1 className="text-4xl">All Users</h1>
        <h1 className="text-4xl">Total Users {users.length}</h1>
      </div>
      <div className="overflow-x-auto px-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === "admin"
                     ? "Admin"
                      : <button
                      onClick={()=>handleMakeAdmin(user._id)}
                      className="btn btn-lg bg-orange-400"
                    >
                      <FaUsers className="text-white" />
                    </button>
                  }
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-lg bg-orange-400"
                  >
                    <FaTrashAlt className="text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
