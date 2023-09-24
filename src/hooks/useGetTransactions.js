import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionTotal, setTransactionTotal] = useState({
    balance: 0.0,
    totalIncome: 0.0,
    totalExpenses: 0.0,
  });

  const getTransactions = async () => {
    let unsubscribe;
    try {
      const transactionRef = collection(db, "transactions");
      const queryTransactions = query(
        transactionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        let totalIncome = 0;
        let totalExpenses = 0;

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });

          if (data.transactionType === "expense")
            totalExpenses += Number(data.transactionAmount);
          else totalIncome += Number(data.transactionAmount);
        });

        let balance = totalIncome - totalExpenses;
        setTransactions(docs);
        setTransactionTotal({
          balance,
          totalIncome,
          totalExpenses,
        });
      });
    } catch (error) {
      alert("error occurred, can't retrieve data");
      console.log(error);
    }
    return () => unsubscribe();
  };

  // useEffect(() => {
  //   getTransactions();
  // }, []);

  return { transactions, transactionTotal };
};
