import {FC} from "react";
import * as Yup from 'yup';
import YupPassword from "yup-password";

YupPassword(Yup);

const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .required('Nick is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .minUppercase(1, 'Password must contain at least one uppercase letter')
        .minNumbers(1, 'Password must contain at least one number')
        .minSymbols(1, 'Password must contain at least one symbol')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
});

interface RegisterProps {
    redirectTo: string;
}

const Register: FC<RegisterProps> = ({redirectTo}) => {
    return (
        <div className={"flex flex-row mx-auto my-3 p-3 w-4/5"}>
            <div>
                <div className={"text-3xl font-semibold my-3"}>Register</div>
                <div className={"flex flex-row my-2"}>
                    <input className={"bg-gray-100 rounded px-3 py-1 w-52"} type="text" placeholder="Username"/>
                    <div className={"mx-3"}>Nick error</div>
                </div>
                <div className={"flex flex-row my-2"}>
                    <input className={"bg-gray-100 rounded px-3 py-1 w-52"} type="text" placeholder="Email"/>
                    <div className={"mx-3"}>Email error</div>
                </div>
                <div className={"flex flex-row my-2"}>
                    <input className={"bg-gray-100 rounded px-3 py-1 w-52"} type="password" placeholder="Password"/>
                    <div className={"mx-3"}>Pasword error</div>
                </div>
                <div className={"flex flex-row my-2"}>
                    <input className={"bg-gray-100 rounded px-3 py-1 w-52"} type="password"
                           placeholder="Confirm password"/>
                    <div className={"mx-3"}>Confirm password error</div>
                </div>
                <div>
                    <button className={"flex-1 bg-orange-600 text-white rounded py-1 w-52"}>Register</button>
                </div>
            </div>
            <div className={"mx-auto py-12"}>
                Password rules:
                <ul>
                    <li>-At least 8 characters</li>
                    {/*TODO lowercase?*/}
                    <li>-One small letter</li>
                    {/*TODO uppercase?*/}
                    <li>-One big letter</li>
                    <li>-One number</li>
                    {/*TODO special?*/}
                    <li>-One non-standard character</li>
                </ul>
            </div>
        </div>
    );
}

export default Register;