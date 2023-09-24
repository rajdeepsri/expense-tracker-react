import classes from "./Details.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import editIcon from "../../../assets/edit.svg";

const Details = () => {
  return (
    <div className={classes.container}>
      <button className={classes.edit_btn}>
        <img src={editIcon} alt="edit" className={classes.btn} />
        <p>EDIT</p>
      </button>
      <Navbar />
      <div className={classes.details}>
        <SingleInfoDiv />
        <SingleInfoDiv />
        <SingleInfoDiv />
        <SingleInfoDiv />
        <SingleInfoDiv />
        <SingleInfoDiv />
        <SingleInfoDiv />
      </div>
    </div>
  );
};

const SingleInfoDiv = () => {
  return (
    <div className={classes.text_div}>
      <p className={classes.title}>Title</p>
      <p className={classes.info}>Cashback Offer - Payme</p>
    </div>
  );
};

export default Details;
