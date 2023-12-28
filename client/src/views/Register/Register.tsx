import FormWrapper from "@src/components/Form";
import { useState, ChangeEvent } from "react";
import { registerUser, userObjProps } from "@src/utils/requests";
import { Button, Input, Form } from "antd";

export function Register() {
  const [userData, setUserData] = useState<userObjProps>({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = () => {
    registerUser(userData);
    setUserData({
      email: "",
      password: "",
      username: "",
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <FormWrapper>
      <Form onFinish={handleSubmit}>
        <Form.Item>
          <Input
            size="large"
            placeholder="username"
            value={userData.username}
            name="username"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="email"
            size="large"
            placeholder="email"
            value={userData.email}
            name="email"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="password"
            size="large"
            value={userData.password}
            name="password"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="confirm your password"
            size="large"
            name="confirmPassword"
          />
        </Form.Item>
        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit">
            Join For Free
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
}
