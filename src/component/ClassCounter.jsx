/* eslint-disable react/no-direct-mutation-state */
import { Box,Button, Container, Paper } from '@material-ui/core';
import { Add, Clear, Remove } from '@material-ui/icons';
import './style.css';
import { Component } from "react";
class ClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    };
  }


  addMe = () => {
    this.setState({ count: this.state.count + 1 });
  };

  subtMe = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetMe = () => {
   
    this.setState({ count:  0 });
  };

  render() {
    return (
  <Container className="flex-container">
   <Paper className="m-t-1">
          <Box p={2}>
            <Box className="p-x-1 m-x-1 big-font">
            <Button onClick={this.addMe} variant="contained" color="primary" >
                    <Add />
                </Button>
            </Box>

            <Paper className="p-x-1 m-x-1 big-font" square>{this.state.count}</Paper>
                 <Box className="p-x-1 m-x-1 big-font">
                 <Button onClick={this.subtMe}variant="contained" color="primary">
                      <Remove />
                  </Button>
                 </Box>
            
                <Button  onClick={this.resetMe} variant="contained">
                    <Clear />
              </Button> 
              </Box>
      </Paper>
  </Container>
    );
  }
}

export default ClassCounter;