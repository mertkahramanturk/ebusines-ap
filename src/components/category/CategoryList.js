import React, { Component } from "react";
import { ListGroup, ListGroupItem, Row, Col, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryListAction from "../../redux/actions/categoryListAction";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <Row style={{boxShadow:"2px 2px 4px #000000"}}>
          <Col xs="12">
            <Table>
              <thead>
                <tr>
                  <th>Week Number</th>
                  <th>Class Name</th>
                  <th>Slayt</th>
                  <th>Quizzes</th>
                </tr>
              </thead>
              <tbody>
                {this.props.categories.map((category) => (
                  <tr key={category.id}>
                    <th scope="row">{category.id}</th>
                    <td>{category.categoryName}</td>
                    <td>
                      <a
                        style={{ textDecoration: "none" }}
                        href={category.link}
                      >
                        {category.slayt}
                      </a>
                    </td>
                    <td>
                      <a
                        style={{ textDecoration: "none" }}
                        href={category.Quiz}
                      >
                        Let's Practice{" "}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryListAction.getCategoriesSuccess,
        dispatch
      ),
    },
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
