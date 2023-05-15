import { useState, useEffect } from "react";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import axios from "axios";

const Balance = () => {
    const [balance, setBalance] = useState(null);
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser();

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/api/v1/users',
        headers: {
            common: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    });

    useEffect(() => {
        const fetchBalance = async () => {
            if (!isAuthenticated()) return;

            const id = auth()?.id;

            axiosInstance.get(`/${id}/balance`)
                .then(response => {
                    const balance = response.data;
                    console.log('Saldo użytkownika:', balance);
                    setBalance(balance);
                })
                .catch(error => {
                    console.log(error);
                });
        };

        fetchBalance();
    }, [isAuthenticated, auth]);

    if (!isAuthenticated()) {
        return null;
    }

    return (
        <div>
            Saldo: {balance}
        </div>
    );
};

export default Balance;