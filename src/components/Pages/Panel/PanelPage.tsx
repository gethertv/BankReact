import Transaction from "../../Transaction/Transaction";
import {
    BalanceTitle, BalanceValue,
    MenuLeft,
    MenuLinks, MenuPanel, MenuTop,
    PanelBox,
    PanelContainer,
    SettingsIcon,
    TransactionIcon,
    TransferIcon
} from "./PanelElements";
import Balance from "./Balance";
import {useLocation} from "react-router-dom";
import CreateTransaction from "../../Transaction/CreateTransaction";

const PanelPage = () => {

    const location = useLocation();
    const { pathname } = location;


    return(
        <>
            <PanelBox>
                <PanelContainer>
                    <MenuLeft>
                        <MenuPanel>
                            <MenuTop>
                                Stan konta

                            </MenuTop>
                            <BalanceTitle>
                                AKTUALNE SALDO:
                            </BalanceTitle>
                            <BalanceValue>
                                <Balance /> PLN
                            </BalanceValue>
                        </MenuPanel>
                        <MenuPanel>
                            <MenuTop>
                                Menu
                            </MenuTop>
                            <MenuLinks to='/panel'>
                                <TransactionIcon />   Panel
                            </MenuLinks>
                            <MenuLinks to='/panel/transfer'>
                                <TransferIcon /> Przelew
                            </MenuLinks>
                            <MenuLinks to='/panel/settings'>
                                <SettingsIcon />Ustawienia
                            </MenuLinks>
                        </MenuPanel>
                    </MenuLeft>
                    <div>
                        <MenuPanel>
                            <MenuTop>
                                NUMER KONTA

                            </MenuTop>
                            <BalanceTitle>
                                NUMER KONTA
                            </BalanceTitle>
                            <BalanceValue>
                                {localStorage.getItem("numberAccount")}
                            </BalanceValue>
                        </MenuPanel>
                        {pathname === "/panel" &&
                            <Transaction />
                        }
                        {pathname === "/panel/transfer" &&
                            <CreateTransaction />
                        }
                    </div>

                </PanelContainer>
            </PanelBox>

        </>
    );
}


export default PanelPage;