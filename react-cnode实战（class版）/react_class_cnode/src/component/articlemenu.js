import React from "react";
import { Menu } from "antd";
import {Link} from "react-router-dom";

class ArticleMenu extends React.Component {
    state = {
        tab: "all"
    }
    componentDidMount() {
        this.setState({
            tab: this.props.tab
        })
    }
    render() {
        const { tabList } = this.props;
        const { tab } = this.state;
        return (
            <Menu
                theme="light"
                mode="vertical"
                selectedKeys={[tab]}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                onSelect={({key}) => {this.setState({tab: key})}}
            >
                {Object.entries(tabList).map(item => (
                    <Menu.Item key={item[0]}>
                        <Link to={`/${item[0]}`}>{item[1]}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        )
    };
};

export default ArticleMenu;