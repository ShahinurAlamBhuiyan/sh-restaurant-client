import Layout from '../components/Layout'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import store from '../redux/store'
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}
export default MyApp