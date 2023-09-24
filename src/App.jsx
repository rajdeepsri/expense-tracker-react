import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/tracker/Dashboard/Dashboard";
import AddTransaction from "./pages/tracker/Add Transaction/AddTransaction";
import Details from "./pages/tracker/Details/Details";
import AllTransactionType from "./pages/tracker/AllTransactionType/AllTransactionType";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddTransaction />
            </ProtectedRoute>
          }
        />
        <Route
          path="/details"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/all"
          element={
            <ProtectedRoute>
              <AllTransactionType />
            </ProtectedRoute>
          }
        />
        <Route path="/login" exact element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
