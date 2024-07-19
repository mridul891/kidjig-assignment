import Nav from "../assets/Nav.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center py-1 bg-black ">
      <img src={Nav} alt="navbar" />

      <ul className="flex gap-10">
        <li>About</li>
        <li>Services</li>
        <li>Process</li>
        <li>Work</li>
        <li>Pricing</li>
        <li>FAQs</li>
      </ul>

      <div className="shadow-half-screen">
        <Button
          title="Book a class"
          classes={
            "border border-1 border-[#6881FF] rounded-lg p-3 font-semibold "
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
