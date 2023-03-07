import React, { useEffect } from "react";
import Layout from "../../Components/layout/Layout";
import ProductList from "../../Components/product/ProductList";
import ProductSummary from "../../Components/product/ProductSummary";
import Sidebar from "../../Components/sidebar/Sidebar";

const Dashboard = () => {
return (
    <div>
      <Sidebar>
      <Layout>
      <ProductSummary  />
      <ProductList />
      </Layout>
      </Sidebar>
    </div>
  );
};

export default Dashboard;