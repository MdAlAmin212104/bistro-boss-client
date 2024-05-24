import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItem = () => {
  const [menu] = useMenu();
  const handleDelete = id => {
    console.log(id);
  }
  return (
    <div className="bg-[#F3F3F3] pb-4">
      <SectionTitle subHeading="Hurry Up!" heading="MANAGE ALL ITEMS" />
      <div className="bg-white m-6 rounded-xl">
        <div className="overflow-x-auto">
          <table className="table mb-4">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                menu.map((item, idx) => <tr key={item._id}>
                    <td> {idx + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                    <button
                      onClick={()=>handleEdit(item._id)}
                      className="btn btn-lg bg-[#D1A054]"
                    >
                      <FaEdit className="text-white" />
                    </button>
                    </td>
                    <td>
                    <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-lg bg-red-500"
                  >
                    <FaTrashAlt className="text-white" />
                  </button>
                    </td>
                  </tr>
                  )
              }
              
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
