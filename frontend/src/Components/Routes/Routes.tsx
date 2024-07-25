import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import CompanyPage from "../../Pages/CompanyPage/CompanyPage";
import DesignGuide from "../../Pages/DesignGuide/DesignGuide";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import BalanceSheet from "../BalanceSheet/BalanceSheet";
import CashflowStatement from "../CashflowStatement/CashflowStatement";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import IncomeStatement from "../IncomeStatement/IncomeStatement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "design-guide", element: <DesignGuide /> },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "income-statement", element: <IncomeStatement /> },
          { path: "balance-sheet", element: <BalanceSheet /> },
          { path: "cashflow-statement", element: <CashflowStatement /> },
        ],
      },
    ],
  },
]);