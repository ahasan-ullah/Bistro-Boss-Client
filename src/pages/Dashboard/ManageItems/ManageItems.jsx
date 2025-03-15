import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();
  return (
    <div>
      <SectionTitle
        heading={"Manage all items"}
        subHeading={"Hurry Up"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                
              </td>
              <td>Purple</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
