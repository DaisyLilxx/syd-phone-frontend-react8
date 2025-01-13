import "~/assets/css/login.less";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Index from "./views/index";
import LimitCalculationEdit from "./views/limitCalculation/limitCalculationEdit";
import ProductList from "./views/productList/productList";
import ProductDetail from "./views/productList/productDetail";
import Login from "./views/login/login";
import CompleteMess from "./views/completeMess/completeMess";
import Result from "./views/result/result";
import ResultList from "./views/result/resultList";
import CustomerService from "./views/customerService/customerService";
import TabIndex from "./views/tabIndex/index";
import My from "./views/my/my";
function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Index />,
      children: [],
    },
    {
      path: "/limitCalculationEdit",
      element: <LimitCalculationEdit />,
      children: [],
    },
    {
      path: "/productList",
      element: <ProductList />,
      children: [],
    },
    {
      path: "/productDetail",
      element: <ProductDetail />,
      children: [],
    },
    {
      path: "/login",
      element: <Login />,
      children: [],
    },
    {
      path: "/completeMess",
      element: <CompleteMess />,
      children: [],
    },
    {
      path: "/result",
      element: <Result />,
      children: [],
    },
    {
      path: "/resultList",
      element: <ResultList />,
      children: [],
    },
    {
      path: "/customerService",
      element: <CustomerService />,
      children: [],
    },
    {
      path: "/my",
      element: <My />,
      children: [],
    },
    {
      path: "/tabIndex",
      element: <TabIndex />,
      children: [],
    },
  ]);

  return element;
}

export default App;
