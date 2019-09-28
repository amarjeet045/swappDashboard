import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Account from '../views/Account';
import Addmaps from '../views/Addmaps';
import Checkins from '../views/Checkins';
import Dashboard from '../views/Dashboard';
import Maplist from '../views/Maplist';
import Members from '../views/Members';
import ProspectList from '../views/ProspectList';
import Setting from '../views/Setting';
import SharedProspect from '../views/SharedProspect';
export default class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path ="/" component = {Dashboard}/>
                    <Route exact path ="/account" component = {Account}/>
                    <Route exact path ="/setting" component = {Setting}/>
                    <Route exact path ="/members" component = {Members}/>
                    <Route exact path ="/checkin" component = {Checkins}/>
                    <Route exact path ="/maplist" component = {Maplist}/>
                    <Route exact path ="/addmaps" component = {Addmaps}/>
                    <Route exact path ="/sharedprospect" component = {SharedProspect}/>
                    <Route exact path ="/prospectlist" component = {ProspectList}/>
                </Switch>
            </Router>
        )
    }
}
