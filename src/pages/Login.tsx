import {FC, useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Password is required'),
});

interface LoginProps {
    redirectTo: string;
}

const Login: FC<LoginProps> = ({redirectTo}) => {
    const [error, setError] = useState('');
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: () => {

        }
    });

    return (
        <div className={"mx-auto my-3 p-3 w-4/5"}>
            <div className={"text-3xl font-semibold my-3"}>Login</div>
            <div className={"flex flex-row my-2"}>
                <input className={"bg-gray-100 rounded px-3 py-1 w-52"} type="text" placeholder="Email"/>
                <div className={"mx-3"}>Email error</div>
            </div>
            <div className={"flex flex-row my-2"}>
                <input className={"bg-gray-100 rounded px-3 py-1 w-52"} type="password" placeholder="Password"/>
                <div className={"mx-3"}>Pasword error</div>
            </div>
            <div>
                <button className={"flex-1 bg-orange-600 text-white rounded py-1 w-52"}>Register</button>
            </div>
        </div>
    );
}

export default Login;