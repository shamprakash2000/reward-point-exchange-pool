import { Button, Card, CardContent, Typography } from "@mui/material";
import { Alert } from "@mui/material";
import Dropdown from "./DropDown";
import { Grid } from "@mui/material";

export default function Swap({totalBalance,cost,allToken,coinName,accounts,web3,reward,Balances}){
    return(
    <>
    {console.log(cost,totalBalance)}
    {cost<=totalBalance?
        <>
        <h3>Swap Tokens</h3>
        <Dropdown allToken={allToken} coinName={coinName} accounts={accounts} web3={web3} reward={reward} Balances={Balances}/>
        </>
    :
        <Alert severity="error">Not Enough Token is Avilable plese pay through UPI/Card</Alert>}
    </>
    );
}