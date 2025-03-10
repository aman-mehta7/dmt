import { FC, useState, useEffect } from "react";
import { Form, Button, Checkbox, FormProps, Input, message } from "antd";
import {
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import type { CheckboxProps } from "antd";
import { login } from "../../redux/actions/auth"; 
import { useAppDispatch } from "../../hooks/useTypedSelectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootAppState } from "../../redux/store";

type FieldType = {
  email: string;
  password: string;
  remember: string;
};

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const [remember, setRemember] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootAppState) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/app/dashboard`);
    }
  }, [isAuthenticated, navigate]);
  
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (!remember) return;
    const { email, password } = values;
    dispatch(login(email, password));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    message.error(`Failed: ${errorInfo}`);
  };

  const onChange: CheckboxProps["onChange"] = (e) =>
    setRemember(e.target.checked);

  return (
    <Form
      name="basic"
      style={{ maxWidth: 440 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={`w-full`}
    >
      <Form.Item<FieldType>
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          size="large"
          id="email"
          name="email"
          placeholder="Email"
          prefix={<UserOutlined className={`text-gray`} />}
          className={`p-3 hover:border-primary focus-within:border-primary`}
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          id="password"
          name="password"
          placeholder="Password"
          prefix={<LockOutlined className={`text-gray`} />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          className={`p-3 hover:border-primary focus-within:border-primary`}
        />
      </Form.Item>

      <Form.Item<FieldType> name="remember">
        <Checkbox onChange={onChange}>
          <p className={`text-xs text-gray font-normal`}>Remember me</p>
        </Checkbox>
      </Form.Item>

      <Button
        htmlType="submit"
        className={`bg-primary p-2 h-auto rounded-lg text-white text-base font-semibold w-full`}
      >
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;
