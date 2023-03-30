"use client"

import './globals.scss'
import {Header} from "@/components/Header"
import {Footer} from "@/components/Footer"



const MainLayout = ({ children }) => {

  return (
    <html lang="en">
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
export default MainLayout