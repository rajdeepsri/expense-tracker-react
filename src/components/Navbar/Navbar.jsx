import dropdown from "../../assets/dropdown.svg";
import bulb from "../../assets/bulb.svg";
import three_dots from "../../assets/three_dots.svg";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.inner_div}>
        <p className={classes.nav_title}>Dashboard</p>
        <img src={dropdown} alt="key_down" />
      </div>
      <div className={classes.inner_div}>
        <img src={bulb} alt="key_down" />
        <img src={three_dots} alt="key_down" />
      </div>
    </nav>
  );
};

export default Navbar;
