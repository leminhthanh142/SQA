import React from 'react';
import { Stack } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    height: 48,
    padding: '0 30px'
  },
  button: {
    background: 'green'
  }
});
export class BookTable extends React.Component {
  constructor() {
    super();
    this.state = {
      guestNo: '',
      tableNo: '',
      date: '',
      tableType: '',
      phoneNo: '',
      message: ''
    };
  }
  handleChangeGuestNo = (event) => {
    let guestNo = this.state.guestNo;
    guestNo = event.target.value;
    this.setState({ guestNo });
  };
  handleChangeTableNo = (event) => {
    let tableNo = this.state.tableNo;
    tableNo = event.target.value;
    this.setState({ tableNo });
  };
  handleChangeDate = (event) => {
    let date = this.state.date;
    date = event.target.value;
    this.setState({ date });
  };
  handleChangeTableType = (event) => {
    let tableType = this.state.tableType;
    tableType = event.target.value;
    this.setState({ tableType });
  };
  handleChangePhoneNo = (event) => {
    let phoneNo = this.state.phoneNo;
    phoneNo = event.target.value;
    this.setState({ phoneNo });
  };
  handleChangeMessage = (event) => {
    let message = this.state.tableNo;
    message = event.target.value;
    this.setState({ message });
  };
  render() {
    const classes = useStyles();
    return (
      <>
        <Stack direction={'row'} className={classes.container}>
          <div>
            <img src="/images/bookTable.png" />
          </div>
          <Stack>
            <h2>Book a table</h2>
            <p>
              Making a reservation at Délicious restaurant is easy and takes just a couple of
              minutes.
            </p>
            <Stack direction={'row'}>
              <input
                type="text"
                name="guestNo"
                value={this.state.guestNo}
                onChange={this.handleChangeGuestNo}
              />
              <input
                type="text"
                name="tableNo"
                value={this.state.tableNo}
                onChange={this.handleChangeTableNo}
              />
            </Stack>
            <Stack direction={'row'}>
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChangeDate}
              />
              <input
                type="number"
                name="tableType"
                value={this.state.tableType}
                onChange={this.handleChangeTableType}
              />
            </Stack>
            <input
              type="text"
              name="phoneNo"
              value={this.state.phoneNo}
              onChange={this.handleChangePhoneNo}
            />
            <button>Send Request</button>
          </Stack>
        </Stack>
      </>
    );
  }
}
