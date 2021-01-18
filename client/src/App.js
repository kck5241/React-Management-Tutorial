import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

/*
1) constructor()를 불러오고

2) componentWillMount()되기 전에 componentWillMount() 함수를 불러와 지고

3) render() 실재로 component를 하면

4) componentDidMount() 함수가 불어와 진다.

*/

/*
props or state => shouldComponentUpdate()
component에 props 혹은 state가 변경되면 shouldComponentUpdate() 함수등이 사용되어
render() 함수를 불러와서 view를 갱신해주게 된다.
*/

class App extends Component {

  state = {
    customers: "",
    completed: 0 
  }

  // API서버에 접근해서 데이터를 받아오는 작업은 componentDidMount에서 해줄 수 있다
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
    const { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        this.state.customers ? this.state.customers.map(c => {
          return (
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          day={c.day}
          gender={c.gender}
          job={c.job}
          />
          );
        }) : 
        <TableRow>
          <TableCell colSpan="6" align="center">
            <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
          </TableCell>
        </TableRow>
        }
        </TableBody>
      </Table>
    </Paper>
  );
  }
}

export default withStyles(styles)(App);
