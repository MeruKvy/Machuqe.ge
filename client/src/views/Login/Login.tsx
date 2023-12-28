import React from 'react'
import Form from '@src/components/Form'
import axios from 'axios'
import { FormType_Enum, userObjProps } from '@src/components/Form/Form'

export  function Login() {

    const logInUser = (userData: userObjProps ) => {
        // try {
        //     const res = await axios.post('`${axiosInstance}`/auth/register',  userData )
        // } catch (error) {
        //     console.error('Registration failed:', error.response ? error.response.data : error.message);
        // }
        return null;
    }

  return (
    <Form  type={FormType_Enum.LOGIN} handleSubmit={logInUser} />
  )
}
