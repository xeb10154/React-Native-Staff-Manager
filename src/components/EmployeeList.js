import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    console.log('willMount');
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps is the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    console.log('willReceive');
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // result example { shift: 'Monday', name: 'John', id: '1sfjq2' }
  });
  console.log(employees);
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
