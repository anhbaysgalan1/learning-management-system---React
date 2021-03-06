import React, { Component } from "react";
import NavLink from '../App/NavLink'

export default class DashboardHeader extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <NavLink />
      </div>
    );
  }
}
