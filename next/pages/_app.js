import { getAllProducts } from '@/actions/ProductAction';
import Navbar from '@/components/navbar/Navbar';
import { store } from '@/Store';
import '@/styles/globals.css'
import "@/styles/hi.css";
import connectionDb from '@/utils/db';
import { Provider, useDispatch } from 'react-redux';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
