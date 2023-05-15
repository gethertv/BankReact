import axios, { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import {
    BtnPage,
    TableCell,
    TableHeader,
    TableRow,
    TransactionAmount,
    TransactionTable,
    TransactionTitle,
} from "./TransactionElemetns";

const Transaction = () => {
    const [transactions, setTransactions] = useState<any[]>([]);
    const [page, setPage] = useState<number>(0);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);

    const axiosInstance: AxiosInstance = axios.create({
        baseURL: "http://localhost:8080/api/v1/transactions",
        headers: {
            common: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        },
    });

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axiosInstance.get("", {
                    params: {
                        page,
                    },
                });
                setHasNextPage(response.data.length > 0);
                if(response.data.length <= 0)
                {
                    setPage(page-1);
                    return;
                }

                setTransactions(response.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchTransactions();
    }, [page]);

    const accountNumber: string | null = localStorage.getItem("numberAccount");

    const handlePageChange = (newPage: number) => {
        if (newPage >= 0 && hasNextPage) {
            setPage(newPage);
        }
    };

    const backPage = (newPage: number) => {
        if (newPage >= 0) {
            setPage(newPage);
        }
    };

    return (
        <>
            <h2>Transakacje</h2>
            <TransactionTable style={{background: "#fff"}}>
                <thead>
                <tr>
                    <TableHeader>Tytuł</TableHeader>
                    <TableHeader>Adres</TableHeader>
                    <TableHeader>Odbiorca</TableHeader>
                    <TableHeader>Kwota</TableHeader>
                    <TableHeader>Data</TableHeader>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                        <TableCell>
                            <TransactionTitle>{transaction.title}</TransactionTitle>
                        </TableCell>
                        <TableCell>{transaction.address}</TableCell>
                        <TableCell>
                            {transaction.toUser.firstname} <span />
                            {transaction.toUser.lastname}
                        </TableCell>
                        <TableCell>
                            <TransactionAmount
                                highlighted={
                                    transaction.fromUser.bankAccountNumber === accountNumber
                                }
                            >
                                {transaction.amount}
                            </TransactionAmount>
                        </TableCell>
                        <TableCell>
                            {new Date(transaction.createdAt).toLocaleString()}
                        </TableCell>
                    </TableRow>
                ))}
                </tbody>
            </TransactionTable>
            <div style={{margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", textAlign: "center", fontWeight: "600", fontSize: "24px", marginTop: "20px", alignItems: "center"}}>
                <BtnPage onClick={() => backPage(page - 1)}>Poprzednia</BtnPage>
                <span> Strona: {page+1} </span>
                <BtnPage onClick={() => handlePageChange(page + 1)}>
                    Następna
                </BtnPage>
            </div>
        </>
    );
};

export default Transaction;
