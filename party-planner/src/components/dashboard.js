import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Link to="/shopping-list/1">
        <button>Party 1</button>
      </Link>
    </>
  );
};

export default Dashboard;
