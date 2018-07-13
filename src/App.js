import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';

import Navbar from './components/navbar';
import Main from './components/main';
import Bottombar from './components/bottombar';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
      return(
          <div>
            <Layout>
               <Header className="App-header"><Navbar/></Header>
               <Content className="Content"><Main/></Content>
               <Footer className="App-footer"><Bottombar/></Footer>
             </Layout>
          </div>
      )
  }
}

export default App;