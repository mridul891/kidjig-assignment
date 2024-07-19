import Nav from "../assets/Nav.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex h-10 justify-evenly items-center pt-10">
      <img src={Nav} alt="navbar" />

      <ul className="flex gap-10">
        <li>About</li>
        <li>Services</li>
        <li>Process</li>
        <li>Work</li>
        <li>Pricing</li>
        <li>FAQs</li>
      </ul>

      <Button title="Book a class" classes={"bg-white"} />
    </nav>
  );
};

export default Navbar;
