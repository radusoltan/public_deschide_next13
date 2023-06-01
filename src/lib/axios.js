import Axios from "axios"
import * as https from "https";
// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Forwarded-Proto': 'https'
  },
  withCredentials: true,
  rejectUnauthorized: false
})

export default axios
