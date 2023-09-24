import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

const ExpenseTracker = () => {
  const navigate = useNavigate();

  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotal } = useGetTransactions();
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
      <Dashboard />
    </>
  );
};

export default ExpenseTracker;
