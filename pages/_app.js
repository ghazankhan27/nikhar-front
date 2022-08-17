import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="px-8 py-4">
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default MyApp;
