import React from "react";
import ArticleList from '../component/articlelist';
import ArticleMenu from "../component/articlemenu";
import { Col, Row } from 'antd';

const tabList = {
    all: "全部",
    good: "精华",
    share: "分享",
    ask: "问答",
    job: "招聘"
}
const colorList = {
    good: "green",
    share: "red",
    ask: "purple",
    job: "gold"
}

class HomePage extends React.Component {
    render() {
        console.log(this.props)
        const {match} = this.props;
        const {tab} = match.params;
        return (
            <Row>
                <Col span={6}>
                    <ArticleMenu tab={tab} tabList={tabList}></ArticleMenu>
                </Col>
                <Col span={18}>
                    <ArticleList tab={tab} tabList={tabList} colorList={colorList}></ArticleList>
                </Col>
            </Row>
        )
    }
};

export default HomePage;