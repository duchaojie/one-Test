import React from 'react'
import { Table, Divider, Button } from 'antd';
import axios from "axios";
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';

class FirstPage extends React.Component {
    state = {
        tableList: '',
        detail: '',
    }
    componentDidMount() {
        this.queryList();
    }
    queryList = () => {
        axios({
            method: 'GET',
            url: `/wkplat/prod/list.json?pageNum=1&pageSize=10&handleType=select`,
        }).then((res) => {
            this.setState({
                tableList: res.data.dataObject
            })
        }, (err) => {
            console.log(err);
        });
    }

    proxyRequest = () => {
        axios({
            method: 'GET',
            url: "/wkplat/mywork/getProductInfo.json"
        }).then((res) => {
            this.setState({
                detail: res.data.dataObject
            })
        }, (err) => {
            console.log(err);
        });
    }
    render() {
        console.log(this.state.detail);
        const { datas } = this.state.tableList;
        const columns = [{
            title: '产品名称',
            dataIndex: 'prodName',
        }, {
            title: '产品代码',
            dataIndex: 'prodCode',
        }, {
            title: '资产服务机构',
            dataIndex: 'managerOrgName',
        }, {
            title: '审批状态',
            dataIndex: 'approveStatus',
            // render: text => <span>{APPROVE_STATUS[text]}</span>,
        },
        {
            title: '操作',
            width: 180,
            render: (text, record) => (
                <span>
                    <Link to={`/lendingPool/productInfomation/edit/${record.abssqrProdCode}`}>编辑</Link>
                    <Divider type='vertical' />
                    <Link to={`/lendingPool/productInfomation/detail/${record.abssqrProdCode}`}>查看</Link>
                </span>
            ),
        }];
        return (
            <>
                <Button onClick={this.proxyRequest} type='primary'>服务代理请求</Button>
                <Link to="/first/add">
                    <Button type="primary" icon="plus" style={{ marginBottom: '20px' }}>新增产品</Button>
                </Link>
                <Table
                    bordered
                    columns={columns}
                    dataSource={datas}
                    rowKey="abssqrProdCode"
                    pagination={false}
                // loading={loading}
                // pagination={{
                //     onChange: this.handlePagination,
                //     total: getData.total,
                //     pageSize: limit,
                //     current: currPageNo,
                //     showTotal: (total) => `共[ ${total} ] 条`,
                // }}
                />
            </>
        );
    }
}

export default FirstPage