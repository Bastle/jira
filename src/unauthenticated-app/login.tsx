import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";

export const LoginScreen = () => {
  const { login } = useAuth();
  // const form = useForm()
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        rules={[{ required: true, message: "请输入用户名" }]}
        name="username"
      >
        <Input placeholder="用户名" id="username" />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "请输入密码" }]}
        name="password"
      >
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
