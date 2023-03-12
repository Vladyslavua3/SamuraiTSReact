import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormsControls";
import { maxLengthCreator, minLengthCreator, requiredField } from "../../utils/validators/validator";


type FormDataType ={
  login:string
  password:string
  rememberMe:boolean
}

const maxLengthMail = maxLengthCreator(25);
const minLengthMail = minLengthCreator(8);

const maxLengthPassword = maxLengthCreator(20);
const minLengthPassword = minLengthCreator(6);



export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'}
               type={'email'}
               name={'login'}
               component={Input}
               validate={[requiredField,maxLengthMail,minLengthMail]}
        />
      </div>
      <div>
        <Field placeholder={'Password'}
               type={'password'}
               name={'password'}
               component={Input}
               validate={[requiredField,maxLengthPassword,minLengthPassword]}
        />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)


 const Login = () => {
  const onSubmit = (formData:FormDataType) => {
    console.log(formData);
  }

  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login