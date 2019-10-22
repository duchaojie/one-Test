import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './index.less';

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.mainDiv}>
                <Form onSubmit={this.handleSubmit} className={style.loginform} >
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <>
                                <Checkbox>Remember me</Checkbox>
                                <a className={style.loginformforgot} href='https://ant.design' >Forgot password</a>
                                <Button type="primary" htmlType="submit" className={style.loginformbutton}><Link to='/first'>Login</Link></Button>
                                <a href='https://ant.design' >register now!</a>
                            </>
                        )}

                    </Form.Item>
                </Form >
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({})(Login);

export default WrappedNormalLoginForm;