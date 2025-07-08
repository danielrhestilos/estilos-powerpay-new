import React, { useEffect, useState } from 'react'

const PowerpayTopHeader: unknown = () => {

  const [moheader, setMoheader] = useState('')

  useEffect(() => {

    /*

    Para usar los diferentes temas cambie el valor del atributo "theme" por alguno de los siguientes
  
    Colores disponibles 

    "white",
    "blue",
    "bluewhite",
    "black"

    */

    setMoheader(`
      <mo-header 
        mo-client-id="ck_D9Pt3c1TO4BgLq3foxmqMsQAZkr-Gn4hMT8FVXEVI30" 
        theme="bluewhite"
      ></mo-header>
    `)

  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: moheader }} />
    </>
  )
}

export default PowerpayTopHeader
