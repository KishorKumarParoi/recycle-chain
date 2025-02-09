import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  defaultNetwork: 'sepolia',
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY || ''}`,
      accounts: [process.env.PRIVATE_KEY || ''],
    },
  },
};

export default config;
