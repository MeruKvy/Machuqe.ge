import React from 'react'
import Form from '@src/components/Form'
import { FormType_Enum } from '@src/components/Form/Form'

export  function Login() {

    const logInUser = () => {
        return null
    }

  return (
    <Form  type={FormType_Enum.LOGIN} handleSubmit={logInUser} />
  )
}
