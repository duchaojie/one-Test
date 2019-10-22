
/*
* 产品信息 - 新增
* */

import React from 'react';
// import { stringify } from 'qs'
import { Link } from 'react-router-dom';
// import { routerRedux } from '';
import {
    Form,
    Row,
    Col,
    Input,
    Divider,
    Button,
    message,
    Select,
} from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';

// import SearchSelect from 'components/SearchSelect';
import FiveClassify from './FiveClassify';

const formItemLayout = {
    labelCol: {
        sm: { span: 8 },
    },
    wrapperCol: {
        sm: { span: 16 },
    },
};
const colSpan = 8;
const FormItem = Form.Item;

@Form.create()

class AddProduct extends React.Component {

    componentDidMount() {
        // const { match, dispatch } = this.props;
        // const { prodCode } = match.params;
        // dispatch({
        //     type: 'lendingPool/getPermitRuleDetail',
        //     payload: {},
        // });
        // if (prodCode) {
        //     dispatch({
        //         type: 'lendingPool/queryPermitRuleDetail',
        //         payload: {
        //             abssqrProdCode: prodCode,
        //             work: false,
        //         },
        //     });
        // }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { form, match } = this.props;
        const { prodCode } = match.params;
        form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    abssqrProdCode: prodCode,
                    prodCode: values.prodCode,
                    prodName: values.prodName,
                    managerOrgCode: values.managerOrgCode,
                    productRiskClList: [
                        {
                            riskCl: '1',
                            ovdDays: values.maxNormal,
                        },
                        {
                            riskCl: '2',
                            ovdDays: values.maxFollow,
                        },
                        {
                            riskCl: '3',
                            ovdDays: values.maxSecondary,
                        },
                        {
                            riskCl: '4',
                            ovdDays: values.maxSuspicious,
                        },
                        {
                            riskCl: '5',
                            ovdDays: values.loss,
                        },
                    ],
                };
                axios.post('/wkplat/prod/edit.json', params).then((res) => {
                    if (res && res.success) {
                        message.success('提交成功', 1);
                    }
                }, (err) => {
                    console.log(err);
                });
            }
        });
    }

    render() {
        const { form, detailData, loading } = this.props;
        // const { prodName, prodCode, managerOrgCode, productRiskCls = [] } = detailData;
        // const { prodName, prodCode, } = detailData;
        const { getFieldDecorator } = form;
        return (
            <>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={colSpan}>
                            <FormItem label="产品名称">
                                {getFieldDecorator('prodName', {
                                    // initialValue: prodName,
                                    rules: [
                                        { required: true, message: '请填写产品名称' },
                                    ],
                                })(
                                    <Input maxLength={20} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={colSpan}>
                            <FormItem label="产品代码">
                                {getFieldDecorator('prodCode', {
                                    // initialValue: prodCode,
                                    rules: [
                                        { required: true, message: '请填写产品代码' },
                                    ],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={colSpan}>
                            <FormItem label="资产服务机构">
                                {getFieldDecorator('managerOrgCode', {
                                    // initialValue: managerOrgCode,
                                    rules: [
                                        { required: true, message: '请选择资产服务机构' },
                                    ],
                                })(
                                    <Select>
                                        <Select.Option value='managerOrgCode01'>机构1</Select.Option>
                                        <Select.Option value='test0001'>机构2</Select.Option>
                                        <Select.Option value='123'>机构3</Select.Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Divider orientation="left" dashed>五级分类逾期天数</Divider>
                    {/* <FiveClassify form={form} initialData={productRiskCls} /> */}
                    <FiveClassify form={form} />
                    <FormItem wrapperCol={{ offset: 10 }}>
                        <Link to="/first"><Button>取消</Button></Link>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: 20 }} loading={loading}>提交</Button>
                    </FormItem>
                </Form>
            </>
        );
    }
}

export default AddProduct;

