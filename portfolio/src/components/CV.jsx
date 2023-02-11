import React from 'react'
import {Page, Document} from 'react-pdf'

function CV() {

  return (
    <Document file={'../../public/cv.pdf'} title="mmaghakian_cv" author="Matthew Maghakian" subject="mmaghakian CV February 2023 pdf" >
        <Page size="A4" className="px-10 p-10 m-10" pageNumber={1} />
        
    </Document>
  )
}

export default CV