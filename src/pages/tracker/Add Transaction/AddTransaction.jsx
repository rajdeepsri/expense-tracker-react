import Navbar from "../../../components/Navbar/Navbar";
import classes from "./AddTransaction.module.css";

const AddTransaction = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <form className={classes.form}>
        <input type="text" placeholder="Title" className={classes.input} />
        <input type="text" placeholder="Amount" className={classes.input} />
        <input
          type="text"
          placeholder="Transaction Type"
          className={classes.input}
        />
        <input type="text" placeholder="Tags" className={classes.input} />
        <input type="date" placeholder="When" className={classes.input} />
        <input type="text" placeholder="Note" className={classes.input} />
        <button className={classes.btn}>ADD TRANSACTION</button>
      </form>
    </div>
  );
};

export default AddTransaction;
