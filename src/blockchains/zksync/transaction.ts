import axios from 'axios';
import { Transaction } from './types.ts';

const apiEndpoint = 'https://block-explorer-api.mainnet.zksync.io/api';

const getTransactions = async (address: string): Promise<Transaction[]> => {
  const transactions: Transaction[] = [];
  const offset = 1000;
  let lastBlock = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      const response = await axios.get(apiEndpoint, {
        params: {
          module: 'account',
          action: 'txlist',
          address,
          startblock: lastBlock,
          endblock: 99999999999999,
          sort: 'asc',
          offset,
        },
      });
      if (response.status === 200) {
        if (response.data.status === '0') {
          console.error('Error occurred while retrieving transactions:', response.data.message);
          return transactions;
        }
        transactions.push(...response.data.result);
        if (response.data.result.length < offset) {
          return transactions;
        }
        const lastTransaction = response.data.result[response.data.result.length - 1];
        lastBlock = lastTransaction.blockNumber;
      } else {
        console.error('Error occurred while retrieving transactions.');
      }
    } catch (error) {
      console.error('Error occurred while making the request:', error);
      break;
    }
  }

  return transactions;
};

export { getTransactions };
