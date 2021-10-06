import Layout from '../components/Layout'
import ThemeContextProvider from '../context/ThemeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <ThemeContextProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
      </ThemeContextProvider>
    </div>
  ) 
  
}

export default MyApp
