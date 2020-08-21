import React, { Component } from 'react';
import UserStore from './Stores/userStore';
import LoginForm from './Components/LoginForm';
import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import './App.css';
import { Layout, Header, Textfield, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './Components/Main';


class App extends Component {
  render() {
    return (
    
      <div style={{height: '1000px', position: 'relative'}}>
      <Layout fixedHeader fixedDrawer>
        <Header title="QE 411 AND SOME!">
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
            </Header>
            {/* <HeaderRow>
                <Navigation>
                    <Link to="/tools">Tools</Link>
                    <Link to="/automation">Automation</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/procedures">Procedures</Link>
                    <Link to="/helpful">TEST</Link>
                    
                </Navigation>
            </HeaderRow> */}
    
        <Drawer title="Menu">
            <Navigation>
                    <Link to="/tools">Tools</Link>
                    <Link to="/automation">Automation</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/procedures">Procedures</Link>
                    <Link to="/helpful">Testing QBO/BMT</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}


export default App;
