import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

export const useAddTransaction = () => {
  const transactionRef = collection(db, "transactions");
  const addTransaction = async (
    description,
    transactionAmount,
    transactionType
  ) => {
    try {
      await addDoc(transactionRef, {
        userID,
        description,
        transactionAmount,
        transactionType,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      alert("error occured, please try again");
      console.log(error);
    }
  };

  return { addTransaction };
};
