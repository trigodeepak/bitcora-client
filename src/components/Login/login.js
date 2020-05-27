import React from "react";
import {connect} from "react-redux";
import {searchText} from "../../store/actions/actions";
import {Button, Form, Input, Checkbox, Col, Row} from "antd";
import "./styles.scss";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


class LoginUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: true,
            showSignupForm: false,
        }
    }

    onFinish = (values) => {
        alert(JSON.stringify(values));
        this.props.history.push("/home");

    };

    onFinishsignUp = (values) => {
        alert(JSON.stringify(values));
        this.props.history.push("/home");

    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    onShow = (field) => {
        if(field==='login'){
        this.setState({showLoginForm: true,showSignupForm: false})
        }
        else
            this.setState({showLoginForm: false,showSignupForm: true});

    };

    render() {
        return (
            <div>
                <Row>
                    <Col offset={6} span={6}>
                        <Button onClick={()=>this.onShow('login')}>
                            Login
                        </Button>
                    </Col>
                    <Col offset={6} span={6}>
                        <Button onClick={()=>this.onShow('signup')}>
                            Sign Up
                        </Button>
                    </Col>
                </Row>
                {this.state.showLoginForm && !this.state.showSignupForm &&
                <div className="login-warp login-component">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </div>}
                
                {!this.state.showLoginForm && this.state.showSignupForm &&
                <div className="login-warp login-component">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinishsignUp}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </div>}
                
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {};

};
export default connect(mapStateToProps, {searchText})(LoginUser);
