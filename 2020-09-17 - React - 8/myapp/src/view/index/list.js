import React, { useEffect } from "react";
import qs from "qs";
import { List, Avatar, Row, Col } from "antd"
import { useSelector } from "react-redux";
import { useLocation, Link, useHistory } from "react-router-dom";
import { useTopics } from "../../store/action";
import { UserOutlined } from '@ant-design/icons';
import moment from "moment";
import "moment/locale/zh-cn";
function lastAt(time) {
  return moment(time).fromNow();
}
function IndexList() {
  const { loading, data, limit } = useSelector(state => state.topics);
  const getData = useTopics();
  const { search } = useLocation();
  const {push} = useHistory();
  const { page=1, tab="all" } = qs.parse(search.slice(1));
  useEffect(() => {
    getData(page, tab, limit);
  }, [page, tab])
  return <List
    loading={loading}
    dataSource={data}
    renderItem={item => {
      // console.log(item);
      return <List.Item
        style={{
          margin: '0 20px',
          padding: '10px 20px'
        }}
      >
        <Row style={{
          width: "100%"
        }}>
          <Col
            span={2}
          >
            <Link to={"/user/" + item.author.loginname}>
              <Avatar
                icon={<UserOutlined />}
                src={item.author.avatar_url}
                title={item.author.loginname}
              />
            </Link>
          </Col>
          <Col span={16}>
            <Link to={`/topic/`+item.id}>{item.title}</Link>
          </Col>
          <Col 
            span={6}
            style={{
              textAlign:"right"
            }}
          >
              {lastAt(item.last_reply_at)}
          </Col>
        </Row>
      </List.Item>
    }}
    pagination={{
      position:"bottom",
      total: 1000,
      pageSize: 10,
      current: page-0,
      showQuickJumper: true,
      showSizeChanger: false,
      onChange(page){
        push(`/?tab=${tab}&page=${page}`)
      }
    }}
  />
}

export default IndexList;