//import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu=()=>{
  const axiosPublic=useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [loading,setLoading]=useState(true);
  // useEffect(() => {
  //   fetch("https://bistro-boss-server-sand-eight.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  // return [menu,loading];
  const {data: menu=[],isPending,refetch}=useQuery({
    queryKey: ['menu'],
    queryFn: async()=>{
      const res=await axiosPublic.get('/menu');
      return res.data;
    }
  })
  return [menu,isPending,refetch];
}
export default useMenu;