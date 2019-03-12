import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PipelineIcon from "@material-ui/icons/FilterList";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Board from "../../Components/Board";
import Avatar from "@material-ui/core/Avatar";
import { openSnack, openAlert } from "../../actions";
import { addDeal, openDealModal } from "../../Components/Board/actions";

import { openDrawer, closeDrawer, changeSection } from "./actions";
import DealModal from "../../Components/DealModal";

const mapStateToProps = state => {
  return {
    deals: state.dealsReducer,
    open: state.routeReducer.open,
    section: state.routeReducer.section
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSnack: (type, message) => dispatch(openSnack(type, message)),
    openAlert: (message, alertFunction) =>
      dispatch(openAlert(message, alertFunction)),
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    changeSection: section => dispatch(changeSection(section)),
    addDeal: () => dispatch(addDeal()),
    openDealModal: type => dispatch(openDealModal(type))
  };
};

const drawerWidth = 280;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "space-between"
  },
  avatar: {
    margin: 10
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class PersistentDrawerLeft extends React.Component {
  render() {
    const {
      classes,
      theme,
      open,
      openDrawer,
      closeDrawer,
      changeSection,
      section
    } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={openDrawer}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {"Название компании"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <Avatar
              alt="Неманова Анна Сергеевна"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TNh87d2_yMhP44u9QtVmzcuZO5eG6zBAI1Z7BZkTTLl1ajwX"
              className={classes.avatar}
            />
            {"Неманова"}
            <br />
            {"Анна Сергеевна"}
            <IconButton onClick={closeDrawer}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => changeSection("Pipeline")}>
              <ListItemIcon>
                <PipelineIcon />
              </ListItemIcon>
              <ListItemText primary={"Воронка"} />
            </ListItem>
            <ListItem button onClick={() => changeSection("Reports")}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Отчеты"} />
            </ListItem>
            <ListItem button onClick={() => changeSection("Statistics")}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Статистика"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => changeSection("Settings")}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Настройки"} />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {section === "Pipeline" && (
            <div>
              <Board withScrollableColumns />
              <Fab
                className={classes.fab}
                color="primary"
                onClick={() => this.props.openDealModal("insert")}
              >
                <AddIcon />
              </Fab>
              <DealModal />
            </div>
          )}
          {section === "News" && <div />}
          {section === "Reports" && <div />}
          {section === "Statistics" && <div />}
          {section === "Settings" && <div />}
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(PersistentDrawerLeft));
// export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
