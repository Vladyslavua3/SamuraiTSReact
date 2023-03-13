import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormsControls";
import { maxLengthCreator, minLengthCreator, requiredField } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { loginTC } from "../../redux/authReducer";


type FormDataType ={
  email:string
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
               name={'email'}
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


 const Login = (props:any) => {
  const onSubmit = (formData:FormDataType) => {
    props.loginTC(formData.email,formData.password,formData.rememberMe)
  }

  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default connect(null,{loginTC})(Login)