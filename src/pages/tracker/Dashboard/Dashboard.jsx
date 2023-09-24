import classes from "./Dashboard.module.css";
import downIcon from "../../../assets/green_down.svg";
import upIcon from "../../../assets/red_up.svg";
import plusIcon from "../../../assets/plus.svg";
import Transaction from "../../../components/Card/Transaction";
import Navbar from "../../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <img className={classes.add_new_icon} src={plusIcon} alt="plus" />
      <Navbar />
      {/* overall info */}
      <div className={classes.container_div}>
        <div className={classes.balance}>
          <p className={classes.flow_title}>TOTAL BALANCE</p>
          <p className={classes.flow_price}>$23,000</p>
        </div>
        <div className={classes.income_exp}>
          <div className={classes.sub_income_exp}>
            <img className={classes.green_icon} src={downIcon} alt="downIcon" />
            <div className={classes.total_text_div}>
              <p className={classes.flow_title}>TOTAL INCOME</p>
              <p className={classes.flow_price}>+$23,000</p>
            </div>
          </div>
          <div className={classes.sub_income_exp}>
            <img className={classes.red_icon} src={upIcon} alt="upIcon" />
            <div className={classes.total_text_div}>
              <p className={classes.flow_title}>TOTAL EXPENSE</p>
              <p className={classes.flow_price}>-$23,000</p>
            </div>
          </div>
        </div>
      </div>
      {/* recent transaction */}
      <div className={classes.container_div}>
        <p className={classes.title}>Recent Transaction</p>
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

export default Dashboard;
