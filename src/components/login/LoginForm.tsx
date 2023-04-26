import {useFormik} from "formik";
import axios, {AxiosError} from "axios";
import { useSignIn } from "react-auth-kit";
const LoginForm = () => {

    const signIn = useSignIn();

    const onSubmit = async (values: any) => {
        console.log("#1");

        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/auth/authenticate",
                values
            );

            signIn({
                token: response.data.access_token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { email: values.email}
            });

        } catch (err) {
            console.log(err);
        }

    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                id="email"
                placeholder="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <input
                type="password"
                id="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <input
                type="submit"
                id="sumbit"
                value="Zaloguj sie!"
            />
        </form>
    );
}

export default LoginForm;