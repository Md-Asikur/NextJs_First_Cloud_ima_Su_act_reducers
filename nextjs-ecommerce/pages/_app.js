import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
import { store } from '../Store';
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      
        <Layout>
          <Component {...pageProps} />
        </Layout>

    </DataProvider>
  );
}

export default MyApp
