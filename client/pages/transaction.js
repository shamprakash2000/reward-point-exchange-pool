import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container';

import {getContractbyName} from '../lib/getContractbyName';

function callContract(web3) {
    getContractbyName('SimpleStorage',web3)
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err)
    })

}
const Transaction = ({ web3,accounts,contract }) => {
    return (
        <button onClick={()=>callContract(web3)}>click Me</button>
    )
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ web3, accounts, contract}) =>{
    return(
        <Transaction web3={web3} accounts={accounts}/>
    )
}
    }
  />
)