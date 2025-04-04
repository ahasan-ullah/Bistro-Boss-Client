import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign } from "react-icons/fa";
import { FaJediOrder, FaUser } from "react-icons/fa6";
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome</span> {user.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="h-8 w-8"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUser className="h-8 w-8"></FaUser>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.user}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="h-8 w-8"></FaBook>
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>


        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaJediOrder className="w-8 h-8"></FaJediOrder>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.order}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
