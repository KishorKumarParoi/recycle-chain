import * as dotenv from 'dotenv';
import { ethers } from 'ethers';
import { SimpleCounter__factory } from './../../standalone/simple-counter/typechain-types/factories/SimpleCounter__factory';
import { contractAddress } from './util';

// Load environment variables from .env file
dotenv.config();

const main = () => {
  // Define the HTTP and WebSocket URLs for the Sepolia testnet using Infura
  const sepoliaHttpUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY || ''}`;
  console.log('HTTP URL:', sepoliaHttpUrl);

  const sepoliaWssUrl = `wss://sepolia.infura.io/ws/v3/${process.env.INFURA_KEY || ''}`;
  console.log('WebSocket URL:', sepoliaWssUrl);

  // Create a WebSocket provider to connect to the Ethereum network
  const provider = new ethers.WebSocketProvider(sepoliaWssUrl);

  // Connect to the SimpleCounter contract using the provider
  const contract = SimpleCounter__factory.connect(contractAddress, provider);

  // Set up an event listener for the NumberIncremented event
  try {
    contract.on(contract.filters['NumberIncremented'], (updatedNumber) => {
      console.log('🎉 NumberIncremented:', updatedNumber);
    });

    console.log('🚀 Event: Number Incremented is listening...');
  } catch (error) {
    console.log(
      '❌ Event listener: (Number Incremented) failed to start with error:',
      error,
    );
  }

  // Set up an event listener for the NumberDecremented event
  try {
    contract.on(contract.filters['NumberDecremented'], (updatedNumber) => {
      console.log('🎉 NumberDecremented:', updatedNumber);
    });

    console.log('🚀 Event: Number Decremented is listening...');
  } catch (error) {
    console.log(
      '❌ Event listener: (Number Decremented) failed to start with error:',
      error,
    );
  }
};

// Call the main function to start the event listeners
main();
