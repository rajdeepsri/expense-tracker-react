import classes from "./Transaction.module.css";
import tvIcon from "../../assets/tv.svg";

const Transaction = () => {
  return (
    <div className={classes.card}>
      <div className={classes.icon_div}>
        <img src={tvIcon} alt="icon" />
      </div>
      <div className={classes.transaction_title_div}>
        <h6 className={classes.transaction_title}>Cashback Offer</h6>
        <p className={classes.type}>Entertainment</p>
      </div>
      <div className={classes.transaction_info_div}>
        <p className={classes.amount}>+$30</p>
        <p className={classes.date}>Aug 30, 2023</p>
      </div>
    </div>
  );
};

export default Transaction;
