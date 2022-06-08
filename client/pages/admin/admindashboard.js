import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Web3Container from '../../lib/Web3Container';
import Er from '../../components/Er'
import {getContractbyName} from '../../lib/getContractbyName';

const AdminDashBoard = ({accounts,web3})=>{
    return(
        <>
        <h1>Admin dashboard</h1>
        </>
    )

}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ web3,accounts }) => {
        return(      
        <>
        { accounts.length!=0 ? <AdminDashBoard accounts={accounts} web3={web3}/>: <Er/>}
        </>
        
        )
    }}
  />
)