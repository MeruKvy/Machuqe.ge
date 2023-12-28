import Form from "@src/components/Form";
import { FormType_Enum } from "@src/components/Form/Form";
import { registerUser } from "@src/utils/requests";

export function Register() {
  return <Form type={FormType_Enum.REGISTER} handleSubmit={registerUser} />;
}
