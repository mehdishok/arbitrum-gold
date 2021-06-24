/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'

import type { IWETH9 } from '../IWETH9'

export class IWETH9__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): IWETH9 {
    return new Contract(address, _abi, signerOrProvider) as IWETH9
  }
}

const _abi = [
  {
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
