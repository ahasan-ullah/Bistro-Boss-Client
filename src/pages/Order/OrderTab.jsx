import FoodCard from "../../components/FoodCard";
import { Swiper,SwiperSlide } from "swiper/react";
import {  Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
