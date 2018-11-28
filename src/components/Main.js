import React from "react";
import { Switch, Route, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import Employees from "../Employees/Employees";
import Companies from "../Companies/Companies";
import Login from "../Login/Login.js";
import JobsView from "../JobsView/Jobs.js";
import JobAssignment from "../JobAssignment/JobAssignment.js";
import Submit from "../ReviewSubmission/Submit.js";
import Timesheets from "../Timesheets/Jobs";
import ClientJobs from "../ClientJobs/ClientJobs"
import ViewHistory from "../ViewHistory/ViewHistory.js";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import UserRegistration from "../Registration/UserRegistration.js";
import ClientRegistration from "../Registration/ClientRegistration.js";
const Main = props => {
    const adminOnly = ["ROLE_ADMIN"];
    const allUsers  = ["ROLE_ADMIN", "ROLE_EMPLOYEE"];
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <Route render={({location}) => (
            <Switch location={location}>
                <Route exact path="/login" render={(props) => 
                <Login 
                    removeError={removeError}
                    errors={errors}
                    onAuth={authUser}
                    {...props}
                />} />
                <Route exact path="/employees" component={withAuth(adminOnly, Employees)} />
                <Route exact path="/companies" component={withAuth(adminOnly,Companies)} />
                <Route exact path="/jobsview" component={withAuth(adminOnly, JobsView)} />
                <Route exact path="/jobassign" component={withAuth(allUsers, JobAssignment)} />
                <Route exact path="/review" component={withAuth(allUsers, Submit)} />
                <Route exact path="/clientJobs" component={withAuth(allUsers, ClientJobs)}/>
                <Route exact path="/timesheets" component={withAuth(allUsers, Timesheets)}/>
                <Route exact path="/viewhistory" component={withAuth(allUsers, ViewHistory)}/>
                <Route exact path="/clientregistration" component={withAuth(allUsers, ClientRegistration)}/>
                <Route exact path="/userregistration" component={withAuth(allUsers, UserRegistration)}/>
            </Switch>
        )} />
    )
}

function mapStateToProps(state) {
    return {
      currentUser: state.currentUser,
      errors: state.errors
    };
}
  
export default withRouter(
    connect(mapStateToProps, { authUser, removeError })(Main)
);