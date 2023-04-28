import {
    ExchangeBar,
    ExchangeContainer,
    ExchangeTable,
    ExchangeTBody,
    ExchangeTr,
    ExchangeTHead, ExchangeTh, ExchangeDataTr, ExchangeDataTh, ImageInvesting, ExchangeInfo, TextInvesting
} from "./ExchangeElements";
import axios from "axios";
import {useEffect, useState} from "react";

const Exchange = () => {

    const [exchangeData, setExchangeData] = useState([]);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(
                    "http://api.nbp.pl/api/exchangerates/tables/C/today/"
                );
                const responseExchange = response.data[0].rates;
                setExchangeData(responseExchange);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRates();
    }, []);

    return (
        <>
            <ExchangeBar>
                <ExchangeContainer>
                    <ExchangeTable>
                        <ExchangeTHead>
                            <ExchangeTr>
                                <ExchangeTh>Nazwa</ExchangeTh>
                                <ExchangeTh>Skrot</ExchangeTh>
                                <ExchangeTh>Kupowanie</ExchangeTh>
                                <ExchangeTh>Sprzedawanie</ExchangeTh>
                            </ExchangeTr>
                        </ExchangeTHead>
                        <ExchangeTBody>
                            {exchangeData.map((rate, index) => {
                                //console.log(rate);
                                const bool = index % 2 === 0
                                return (
                                    <ExchangeDataTr>
                                        <ExchangeDataTh isEven={bool}>{rate["currency"]}</ExchangeDataTh>
                                        <ExchangeDataTh isEven={bool}>{rate["code"]}</ExchangeDataTh>
                                        <ExchangeDataTh isEven={bool}>{rate["ask"]}</ExchangeDataTh>
                                        <ExchangeDataTh isEven={bool}>{rate["bid"]}</ExchangeDataTh>
                                    </ExchangeDataTr>
                                );
                            })}
                        </ExchangeTBody>
                    </ExchangeTable>
                    <ExchangeInfo>
                        <TextInvesting>
                            Kursy walut
                        </TextInvesting>
                        <ImageInvesting  />
                    </ExchangeInfo>
                </ExchangeContainer>
            </ExchangeBar>
        </>

    );
}

export default Exchange;