//NEXT IMPORT
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import { Main } from "next/document";

// WAGMI/RAINDOW-KIT IMPORT
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

// CHAKRA IMPORT
import { Box, Button } from "@chakra-ui/react";

export default function Home() {
  const walletConection = () => {};

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="flex" justifyContent="center" fontSize="4xl">
        🌞 SolarSwap
      </Box>
      <Button onClick={walletConection}>{/* <ConnectButton /> */}</Button>
    </>
  );
}
