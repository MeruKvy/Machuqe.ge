
import { Form } from "@src/components/Form";
import { FormType_Enum } from "@src/components/Form/Form";

export function Register() {

  const registerUser = () => {
    return ""
  }

  return (
      <Form type={FormType_Enum.REGISTER} handleSubmit={registerUser} />
  );
}
