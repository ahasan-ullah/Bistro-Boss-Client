import { Link } from "react-router-dom";
import Cover from "../../components/Cover";
import MenuItem from "../../components/MenuItem";
const MenuCategory = ({ items, title, coverImage }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImage} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4">
          Show More
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
