import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormsControls";
import { maxLengthCreator, minLengthCreator, requiredField } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { loginTC } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/reduxStore";
import style from '../common/FormControls/FormsControls.module.css'
import { getUserAuth, getUserId } from "../../redux/selectors/authSelector";


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
      {
        props.error && <div className={style.formError}>
          {props.error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)



type MapStateToPropsType = {
  isAuth: boolean
  userId: number | null

}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

  return {
    isAuth: getUserAuth(state),
    userId: getUserId(state),
  }
}

 const Login = (props:any) => {
  const onSubmit = (formData:FormDataType) => {
    props.loginTC(formData.email,formData.password,formData.rememberMe)
  }


  if(props.isAuth) return <Redirect to={'/profile'}/>

  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default connect(mapStateToProps,{loginTC})(Login)