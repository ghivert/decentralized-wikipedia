import Web3 from 'web3'
import ContractInterface from '../build/contracts/Wikipedia.json'
import { connectEthereum } from '../store/reducers/root'

const connect = async dispatch => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    try {
      const [account] = await window.ethereum.enable()
      const contract = new window.web3.eth.Contract(
        ContractInterface.abi,
        ContractInterface.networks['5777'].address,
        { from: account }
      )
      dispatch(connectEthereum({ account, contract }))
    } catch (error) {
      console.error(error)
    }
  } else {
    console.log('Not Dapp browser.')
  }
}

export { connect }
