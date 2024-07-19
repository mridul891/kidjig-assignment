import Nav from "../assets/Nav.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center lg:py-1 lg: bg-black ">
      <img src={Nav} alt="navbar" className="h-10 w-10"/>

      <ul className="flex gap-4 mx-2 lg:gap-10">
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
