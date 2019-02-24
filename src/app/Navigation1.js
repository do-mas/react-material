import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

function PermanentDrawerLeft(props) {
    const {classes} = props;

    return (
        <Router>
            <div>
                <div className={classes.content}>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        anchor="left"
                    >
                    </Drawer>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                Permanent drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>

                </div>
                <main>
                    <Route path="/login" component={Login}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/studio" component={Studio}/>
                    <Route path="/teacher" component={Teacher}/>
                    <Route path="/member" component={Member}/>
                </main>
            </div>
        </Router>
    );
}

PermanentDrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);


const Dashboard = () => (
    <div>
        <h2>Dashboard Here</h2>
    </div>
);

const Login = () => (
    <div>
        <h2>Login here</h2>
    </div>
);

const Studio = () => (
    <div>
        <h2>Studio Here</h2>
    </div>
);

const Teacher = () => (
    <div>
        <h2>Teachers Here</h2>
    </div>
);

const Member = ({match}) => (
    <div>

        <h2>Members Here</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
)
const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

// export default BasicExample
// export default withStyles(styles)(PermanentDrawerLeft);