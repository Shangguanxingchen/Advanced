import React from "react";
import { List, Avatar,Tag } from "antd";
import axios from "axios";
import {fromNow, locate} from "silly-datetime";
const { Item } = List;
locate("zh-cn");

class ArticleList extends React.Component {
    state = {
        data: [],
        page: 1
    }
    getData = (page,tab) => {
        axios.get(`./topics?page=${page}&tab=${tab}&limit=${15}`).then(
            (res) => {
                this.setState({
                    data: res.data.data
                })
            }
        )
    }
    componentDidMount() {
        this.getData(1,this.props.tab ?? "all");
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.tab !== this.props.tab) {
            this.getData(1, nextProps.tab);
            return false;
        }
        return true;
    }
    render() {
        const {data} = this.state;
        const {tabList,colorList} = this.props;
        return(
            <List pagination={{
                pageSize:15,
                total:200,
                onChange:(page)=>{
                    this.setState({
                        page
                    });
                    this.getData(page,"all")
                }
            }}>
                {data.map(item => (
                    <Item key={item.id} actions={[`回复:${item.reply_count}`,`访问:${item.visit_count}`]}>
                        <Item.Meta 
                            avatar={<Avatar src={item.author.avatar_url}/>}
                            title={<div>
                                <Tag color={(item.top||item.good) ? "green" :colorList[item.tab]}>
                                    {item.top?"置顶":item.good?"精华":tabList[item.tab]}
                                </Tag>
                                <span>{item.title}</span>
                            </div>}
                            description={<div>
                                <span className="username">{item.author.loginname}</span>
                                <span>最后回复时间:{fromNow(item.last_reply_at)}</span>
                            </div>}
                        >
                        </Item.Meta>
                    </Item>
                ))}
            </List>
        )
    }
};

export default ArticleList;