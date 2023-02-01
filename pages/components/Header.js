import Head from "next/head";
import Nav from "./Nav";

const Header = ()=>{
  return(
    <div>
      <Head>
        <title>Sahilnetic</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="Hey! This is Sahil(@Sahilnetic). Welcome to my website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="http://sahilnetic.xyz/" />
        <meta name="robots" content="index, follow" />
        
        <meta name="twitter:card" content="Hi! This is Sahil." />
        <meta name="twitter:site" content="@sahilnetic" />
        <meta name="twitter:creator" content="@sahilnetic" />
        <meta property="og:url" content="https://sahilnetic.xyz" />
        <meta property="og:title" content="Sahilnetic | My Portfolio Website" />
        <meta property="og:description" content="Hi! This is Sahil. I am a fullstack developer, and a cloud specialist. I love to contribute to open source projects. Checkout some of my projects." />
        <meta property="og:image" content="https://sahilnetic.xyz/evilcat.png" />










        
      </Head>
    <Nav />
    </div>
  )
}

export default Header;