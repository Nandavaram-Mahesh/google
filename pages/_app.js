import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';
const progress = new ProgressBar({
  size:3,
  color:"#4285F4",
  className:"z-50",
  delay:100

});
Router.events.on('routeChangeStart',progress.start)
Router.events.on('routeChangeComplete',progress.finish)
Router.events.on('routeChangeComplete',progress.finish)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
