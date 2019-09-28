import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './Main';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import '../assests/CSS/header.css';
class HeaderNavigation extends Component {
    render() {
        return (
            <div className="demo-big-content">
    <Layout>
        <Header className="header"title="SWAPP" scroll style={{}}>
       
        </Header>
        <Drawer className="drawer" title="SWAPP" style={{ backgroundImage: "radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% )",color:"#fff"}}>
            <Navigation>
                
                <a href="/account" style={{color:"#fff"}}>Account</a>
                <a href="/setting" style={{color:"#fff"}}>Setting</a>
                <a href="/members" style={{color:"#fff"}}>Members</a>
                <a href="/checkin" style={{color:"#fff"}}>CheckIns</a>
                <a href="/maplist" style={{color:"#fff"}}>MaplIst</a>
                <a href="/addmap" style={{color:"#fff"}}>AddMaps</a>
                <a href="/sharedprospect" style={{color:"#fff"}}>SharedProspect</a>
                <a href="/prospectlist" style={{color:"#fff"}}>ProspectList</a>
              
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
        )
    }
}
export default HeaderNavigation;
