// Login Form Component

import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Styled from 'styled-components';
import {userLogin} from '../../redux/actions';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {UserLoginAction} from "../../types/actions";

const StyledForm = Styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const StyledInputLabelWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

const StyledInput = Styled.input` 
    outline: none;
     &.error {
        outline: 1px solid red;
    }
`;

const StyledLabel = Styled.label`
    text-align: left;
`;

const StyledFormFooter = Styled.div`
    display: flex;
    justify-content: flex-start;
`;

const StyledSubmitButton = Styled.button`
    justify-content: flex-start;
    display: flex;
    &:disabled {
        background-color: lightgray;
    }
`;

const StyledInfoError = Styled.span` 
    color: lightgray;
    font-size: 0.8rem;
`;

interface LoginProps {
    userLogin: (userName: string) => UserLoginAction
}

interface ISetSubmitting {
    setSubmitting: (isSubmitting: boolean) => void;
}

type Props = LoginProps & RouteComponentProps;

class Login extends React.Component<Props, any> {
    private handleSubmitFormik(values: { email: string, password: string }, {setSubmitting}: ISetSubmitting): void {
        setSubmitting(true);
        setTimeout(() => {
            this.props.userLogin(values.email);
            setSubmitting(false);
            this.props.history.push('/game-finder');
        }, 500);
    }

    render() {
        const loginFormik = (<Formik
            initialValues={{email: '', password: ''}}
            onSubmit={this.handleSubmitFormik.bind(this)}
            validationSchema={Yup.object().shape({
                email: Yup.string().email().required('Required'),
                password: Yup.string().required('Required')
                    .min(8, "Password must contain 8 characters.")
                    .matches(/(?=.*[0-9])/, "Password must contain a number.")
            })}>
            {props => {
                const {
                    values, touched, errors, isSubmitting,
                    handleChange, handleBlur, handleSubmit
                } = props;
                const form = (<StyledForm onSubmit={handleSubmit}>
                    <StyledInputLabelWrapper>
                        <StyledLabel htmlFor="email">Email</StyledLabel>
                        <StyledInput
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="email"
                            type="email"
                            value={values.email}
                            className={(errors.email && touched.email) ? 'error' : ''}
                        />
                        <StyledInfoError hidden={(!errors.email || !touched.email)}>{errors.email}</StyledInfoError>
                    </StyledInputLabelWrapper>
                    <StyledInputLabelWrapper>
                        <StyledLabel htmlFor="password">Password</StyledLabel>
                        <StyledInput
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="password"
                            type="password"
                            value={values.password}
                            className={(errors.password && touched.password) ? 'error' : ''}
                        />
                        <StyledInfoError
                            hidden={(!errors.password || !touched.password)}>{errors.password}</StyledInfoError>
                    </StyledInputLabelWrapper>
                    <StyledFormFooter>
                        <StyledSubmitButton type="submit" disabled={isSubmitting}>Send</StyledSubmitButton>
                    </StyledFormFooter>
                </StyledForm>);
                return form;
            }}
        </Formik>);
        return loginFormik;
    }
}

export default withRouter(connect(null, {userLogin})(Login));
