import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BlogProvider } from "@/context/BlogContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlogProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </BlogProvider>
  );
}
