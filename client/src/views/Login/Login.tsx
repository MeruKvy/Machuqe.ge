import FormWrapper from "@src/components/Form";
import { useState, ChangeEvent } from "react";
import { logInUser, userObjProps } from "@src/utils/requests";
import { Button, Input, Form, } from "antd";
import { Slink } from "@src/assets/global.styled";


export function Login() {
  const [form] = Form.useForm();

  const [userData, setUserData] = useState<userObjProps>({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      await logInUser(userData, form);
      setUserData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
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
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input
            type="email"
            size="large"
            placeholder="email"
            value={userData.email}
            name="email"
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            placeholder="password"
            size="large"
            value={userData.password}
            name="password"
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item className="text-center mt-2">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <p className="mt-2">
            Or <Slink to="/register">register</Slink>
          </p>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
}
