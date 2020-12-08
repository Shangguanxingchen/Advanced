import React from 'react';
import { Col, Layout, Row } from "antd";
import Container from './container';
import { Link } from 'react-router-dom';
import { navs } from '../router/router_list';
import Nav from './nav';

function Header() {
  return <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <Container>
      {/* <h1 id="logo">
              <Link to="/">KKB-CNode</Link>
            </h1> */}
      <Row>
        {/* <Col xs={24} sm={12}>1</Col>
                <Col xs={24} sm={12}>2</Col> */}
        <Col span={4}>
          <h1 id="logo">
            <Link to="/">KKB-CNode</Link>
          </h1>
        </Col>
        <Col span={20}>
          <Nav
            navs={navs}
            getSelected={(location) => {
              const { pathname } = location;
              return navs.findIndex(item => {
                return item.to === pathname;
              })
            }}
            theme = "dark"
          />
        </Col>
      </Row>
    </Container>
  </Layout.Header>
}

export default Header;