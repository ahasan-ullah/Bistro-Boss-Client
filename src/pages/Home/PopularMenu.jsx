import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

import useMenu from "../../hooks/useMenu"

const PopularMenu = () => {
  const [menu]=useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      
      <div className="flex items-center justify-center mt-4">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
