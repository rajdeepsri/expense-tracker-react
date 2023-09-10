import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import "./styles.css";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

export const ExpenseTracker = () => {
  const navigate = useNavigate();

  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotal } = useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();
  const { balance, totalIncome, totalExpenses } = transactionTotal;

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(description, transactionAmount, transactionType);
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>Hello {name}, Expense Tracker</h1>
          {profilePhoto && (
            <div className="profile">
              <img
                className="profile-photo"
                src={profilePhoto}
                alt="profilePhoto"
              />
              <button className="sign-out-button" onClick={signUserOut}>
                Sign out
              </button>
            </div>
          )}
          <div className="balance">
            <h3>Your Balance</h3>
            {balance < 0 ? <h2>-${balance * -1}</h2> : <h2>${balance}</h2>}
          </div>
          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>${totalIncome}</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>${totalExpenses}</p>
            </div>
          </div>
          <form className="add-transaction" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              onChange={(e) => setTransactionType(e.target.value)}
              checked={transactionType === "expense"}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              onChange={(e) => setTransactionType(e.target.value)}
              checked={transactionType === "income"}
            />
            <label htmlFor="income">Income</label>
            <button type="submit">Add Transaction</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3>Transactions</h3>
        <ul>
          {transactions.length > 0 &&
            transactions.map((item) => {
              const { description, transactionAmount, transactionType } = item;
              return (
                <li>
                  <h4>{description}</h4>
                  <p>
                    ${transactionAmount} : <span>{transactionType}</span>{" "}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
