import React, { Component } from "react"
import { Link } from "react-router-dom"
import NavLink from '../App/NavLink'

export default class CourseHeader extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h2 className="h2">Course</h2>
        <NavLink />
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/courses/edit/NEW">
            <button className="btn btn-sm btn-outline-secondary">
              ADD NEW
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
