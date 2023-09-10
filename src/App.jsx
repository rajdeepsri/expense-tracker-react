import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/Index";
import { ExpenseTracker } from "./pages/tracker/Index";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route
            path="expense-tracker"
            element={
              <ProtectedRoute>
                <ExpenseTracker />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
