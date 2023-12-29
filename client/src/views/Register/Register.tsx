import FormWrapper from "@src/components/Form";
import { useState, ChangeEvent } from "react";
import { registerUser, userObjProps } from "@src/utils/requests";
import { Button, Input, Form } from "antd";
import { Rule } from "rc-field-form/lib/interface";
import { Slink } from "@src/assets/global.styled";

export function Register() {
  const [userData, setUserData] = useState<userObjProps>({
    email: "",
    password: "",
    username: "",
  });

  const validatePassword: Rule = {
    validator: async (_, value) => {
      const regex =
        /^(?=.*[A-Z])(?=(?:.*\d.*){3,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

      if (!value || regex.test(value)) {
        return Promise.resolve();
      }

      return Promise.reject(
        "Password must have at least one capital letter, three numbers, and one symbol."
      );
    },
  };

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
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter your username",
            },
            { whitespace: true, message: "Avoid using space ;)" },
            { min: 3, message: "username must be a bit longer" },
          ]}
          hasFeedback
        >
          <Input
            size="large"
            placeholder="username"
            value={userData.username}
            name="username"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            { type: "email" },
          ]}
          hasFeedback
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
          rules={[
            {
              required: true,
            },

            {
              validator: validatePassword.validator,
            },
          ]}
        >
          <Input.Password
            placeholder="password"
            size="large"
            value={userData.password}
            name="password"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Passwords don't match :/");
              },
            }),
          ]}
        >
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
          <p className="mt-2">
            Or <Slink to="/login">login</Slink>
          </p>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
}
