import React, { useEffect, useState } from 'react'

const PowerpayBanner = () => {

  const [mobanner, setMobanner] = useState('')

  useEffect(() => {

    /*

    Para usar los diferentes temas cambie el valor del atributo "theme" por alguno de los siguientes
  
    Colores disponibles 

    "white",
    "blue",
    "bluewhite",
    "black"

    */

    setMobanner(`
      <mo-banner 
        mo-client-id="ck_yB0IBOWB-SK638VTgF3yfJAFUqjLb8YLzWbR6XlmugY"
        theme="white"
      ></mo-banner>
    `)
  
  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: mobanner }} />
    </>
  )
}

export default PowerpayBanner
