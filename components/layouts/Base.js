import Navbar from '../Navbar'
import Footer from '../Footer'
//import Main from '../Main'
//import Alert from '../PreviewAlert'
import { cookies, draftMode } from "next/headers"


export default function Base({ children }) {

  
  const preview = draftMode().isEnabled
  return (
    <>
        {preview}

      <Navbar />
      {children}
      <Footer />
    </>
  )
}