import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  InlineDatePicker
} from "material-ui-pickers";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { closeDealModal, changeDealField } from "../Board/actions";
import ruLocale from "date-fns/locale/ru";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const mapStateToProps = state => ({
  dealModalStatus: state.boardReducer.dealModalStatus,
  name: state.boardReducer.name,
  email: state.boardReducer.email,
  phone: state.boardReducer.phone,
  contact: state.boardReducer.contact,
  company: state.boardReducer.company,
  price: state.boardReducer.price,
  type: state.boardReducer.dealModalType,
  newTask: state.boardReducer.newTask
});
const mapDispatchToProps = dispatch => ({
  closeDealModal: () => dispatch(closeDealModal()),
  onChangeDealField: (field, text) => dispatch(changeDealField(field, text))
});

const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing.unit
  },
  formContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  formBlock: {
    width: "49%"
    // display:"flex"
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
});

class DealModal extends React.Component {
  state = {
    // tommorow
    selectedDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    currentLocale: "ru",
    gilad: false,
    jason: false,
    antoine: false,
    tasks: [
      {
        id: 1,
        name: "create stuff",
        status: false,
        date: new Date(Date.now() + 24 * 60 * 60 * 1000)
      },
      {
        id: 2,
        name: "do stuff",
        status: false,
        date: new Date(Date.now() + 24 * 60 * 60 * 1000)
      }
    ]
  };

  
  getTaskIndex = task =>
    this.state.tasks.reduce((taskIndex, item, index) => {
      return (taskIndex = item.id === task.id ? index : taskIndex);
    }, -1);
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  handleChange = task => event => {
    let tasks = [...this.state.tasks];
    tasks[this.getTaskIndex(task)].status = event.target.checked;
    this.setState({ tasks });
  };
  render() {
    const { classes } = this.props;
    const { gilad, jason, antoine } = this.state;
    return (
      <React.Fragment>
        <Dialog
          fullScreen
          open={this.props.dealModalStatus}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.props.closeDealModal}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Сделка
              </Typography>
              <Button color="inherit" onClick={this.props.closeDealModal}>
                Сохранить
              </Button>
            </Toolbar>
          </AppBar>
          {/* <DialogTitle id="form-dialog-title">Сделка</DialogTitle> */}
          <DialogContent className={classes.formContent}>
            <div className={classes.formBlock}>
              <TextField
                margin="dense"
                id="name"
                label="Название сделки"
                type="text"
                defaultValue={this.props.name}
                fullWidth
                onChange={e =>
                  this.props.onChangeDealField("name", e.target.value)
                }
              />
              <TextField
                margin="dense"
                id="contact"
                label="Контактное лицо"
                type="text"
                defaultValue={this.props.contact}
                fullWidth
                onChange={e =>
                  this.props.onChangeDealField("contact", e.target.value)
                }
              />
              <TextField
                margin="dense"
                id="Email"
                label="Email Address"
                type="email"
                defaultValue={this.props.email}
                fullWidth
                onChange={e =>
                  this.props.onChangeDealField("email", e.target.value)
                }
              />
              <TextField
                margin="dense"
                id="phone"
                label="Телефон"
                type="text"
                defaultValue={this.props.phone}
                fullWidth
                onChange={e =>
                  this.props.onChangeDealField("phone", e.target.value)
                }
              />
              <TextField
                margin="dense"
                id="price"
                label="Цена сделки"
                type="text"
                defaultValue={this.props.price}
                fullWidth
                onChange={e =>
                  this.props.onChangeDealField("price", e.target.value)
                }
              />
              <TextField
                margin="dense"
                id="company"
                label="Компания"
                type="text"
                defaultValue={this.props.company}
                fullWidth
                onChange={e =>
                  this.props.onChangeDealField("company", e.target.value)
                }
              />
            </div>
            <div className={classes.formBlock}>
              <div className={`${classes.formBlock} ${classes.formContent}`}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Новая Задача"
                  type="text"
                  value={this.props.newTask}
                  fullWidth
                  onKeyPress={e => {
                    if (e.key === "Enter") {
                      this.props.onChangeDealField("newTask", "");
                    }
                  }}
                  onChange={e => {
                    // console.log(e.keyPressed);
                    this.props.onChangeDealField("newTask", e.target.value);
                  }}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                  <InlineDatePicker
                    margin="dense"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    fullWidth
                    label="Срок задачи"
                  />
                </MuiPickersUtilsProvider>
                <Button
                  onClick={() => this.props.onChangeDealField("newTask", "")}
                >
                  Добавить
                </Button>
              </div>
              <FormLabel component="legend">Список задач</FormLabel>
              <FormGroup>
                {this.state.tasks.map(task => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={task.status}
                          onChange={this.handleChange(task)}
                          value={task.name}
                        />
                      }
                      label={task.name}
                    />
                  );
                })}

                {/* <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                  <InlineDatePicker
                    margin="dense"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    fullWidth
                    label="Срок задачи"
                  />
                </MuiPickersUtilsProvider> */}
                {/* <FormControlLabel
                  control={
                    <Checkbox
                      checked={jason}
                      onChange={this.handleChange("jason")}
                      value="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={this.handleChange("antoine")}
                      value="antoine"
                    />
                  }
                  label="Antoine Llorca"
                /> */}
              </FormGroup>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeDealModal} color="primary">
              Отменить
            </Button>
            <Button onClick={this.props.closeDealModal} color="primary">
              {this.props.type === "update" && "Обновить"}
              {this.props.type === "insert" && "добавить"}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DealModal));
