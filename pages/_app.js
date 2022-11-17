import Layout from "../common/Layout";
import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
