import classes from "../Dashboard/Dashboard.module.css";
import plusIcon from "../../../assets/plus.svg";
import Transaction from "../../../components/Card/Transaction";
import Navbar from "../../../components/Navbar/Navbar";

const AllTransactionType = () => {
  return (
    <div className={classes.container}>
      <img className={classes.add_new_icon} src={plusIcon} alt="plus" />
      <Navbar />
      {/* overall info */}
      <div className={classes.container_div}>
        <div className={classes.balance}>
          <p className={classes.flow_title}>TOTAL EXPENSE</p>
          <p className={classes.flow_price}>-$23,000</p>
        </div>
      </div>
      {/* recent transaction */}
      <div className={classes.container_div}>
        <p className={classes.title}>All Expenses</p>
        <div className={classes.transactions}>
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default AllTransactionType;
