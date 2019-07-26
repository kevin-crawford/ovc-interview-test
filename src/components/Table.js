import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "./Cell";
import getData from "../redux/actions/dataActions";

export class Table extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { headings, user } = this.props;

    const theadMarkup = (
      <tr data-testid="heading" className="heading">
        {headings.map((heading, index) => (
          <Cell key={`heading-${index}`} content={heading} header={true} />
        ))}
      </tr>
    );

    const tbodyMarkup = user.data.map((user, index) => (
      <tr data-testid="row" key={`row-${index}`}>
        <td data-testid="username">{user.name}</td>
        <td>
          <a data-testid="email" href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </td>
        <td data-testid="city">{user.address.city}</td>
        <td data-testid="company">{user.company.name}</td>
      </tr>
    ));

    return (
      <table className="Table">
        <thead>{theadMarkup}</thead>
        <tbody data-testid="body">{tbodyMarkup}</tbody>
      </table>
    );
  }
}

// map our redux store/state to the component props
const mapStateToProps = state => ({
  user: state.data
});

export default connect(
  mapStateToProps,
  { getData }
)(Table);
