import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error | null) => void;
}) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync();
  const handleSubmit = (values: { username: string; password: string }) => {
    run(login(values)).catch((err) => {
      console.log("err: ", err);
      onError(err);
    });
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
        <LongButton loading={isLoading} htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
