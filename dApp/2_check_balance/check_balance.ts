import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"

const publicKey = new PublicKey("4DvhcVUk4nbFGk33GHJiFoH8mBQ2rLhzfE4SnQu1DJvY");
const connection = new Connection(clusterApiUrl("devnet"));
const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`The balance for the wallet [${publicKey}] is [${balanceInSOL}SOL]!`);