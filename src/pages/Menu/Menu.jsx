import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu]=useMenu();
  const dessert=menu.filter(item=>item.category==='dessert');
  const soup=menu.filter(item=>item.category==='soup');
  const salad=menu.filter(item=>item.category==='salad');
  const pizza=menu.filter(item=>item.category==='pizza');
  const offered=menu.filter(item=>item.category==='offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>

      <MenuCategory items={dessert} title={"Dessert"} coverImage={dessertImg}></MenuCategory>

      <MenuCategory items={pizza} title={"Pizza"} coverImage={pizzaImg}></MenuCategory>

      <MenuCategory items={soup} title={"Soup"} coverImage={soupImg}></MenuCategory>

      <MenuCategory items={salad} title={"Salad"} coverImage={saladImg}></MenuCategory>

      <MenuCategory items={offered} title={"Offered"} coverImage={menuImg}></MenuCategory>
    </div>
  );
};

export default Menu;