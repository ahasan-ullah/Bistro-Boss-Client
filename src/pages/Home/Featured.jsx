import SectionTitle from "../../components/SectionTitle";
import featuredImage from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-10">
      <SectionTitle heading={"Featured Items"} subHeading={"Check It Out"}></SectionTitle>
      <div className="md:flex justify-center items-center pt-12 pb-20 px-36">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2025</p>
          <p className="uppercase">Where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure aperiam, ipsa doloribus ex architecto provident temporibus eaque eligendi nesciunt. Delectus, deleniti saepe ipsam eius sit voluptates, accusantium provident laboriosam quis aliquid dolorum excepturi? Sit, sed rerum dolorem ratione repudiandae quisquam necessitatibus, sequi nulla vitae ipsa, incidunt aliquam quia maxime.</p>
          <button className="btn btn-outline">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;