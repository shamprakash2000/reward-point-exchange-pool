import React from 'react'
import getWeb3 from './getWeb3'
import getContract from './getContract'
//contract reference
import SimpleStorage from '../../build/contracts/SimpleStorage.json'
import NewCoin from '../../build/contracts/NewCoin.json'


export default class Web3Container extends React.Component {
  state = { web3: null, accounts: null, contract: null };

  async componentDidMount () {
    try {
      const web3 = await getWeb3()
      const accounts = await web3.eth.getAccounts()
  
      //get conttract instance
      const contract = await getContract(web3, SimpleStorage);
      this.setState({ web3, accounts, contract })
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.log(error)
    }
  }

  render () {
    const { web3, accounts, contract } = this.state
    return web3 && accounts
      ? this.props.render({ web3, accounts, contract })
      : this.props.renderLoading()
  }
}
