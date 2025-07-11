import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context';

const PowerpayPDP = () => {

  const { product } = useProduct()
  const [mopdp, setMopdp] = useState('')

  useEffect(() => {

    /*

    Para usar los diferentes temas cambie el valor del atributo "theme" por alguno de los siguientes
  
    Colores disponibles 

    "white",
    "blue",
    "bluewhite",
    "black"

    */
   console.log('product ', product);
   
    console.log("product?.priceRange?.sellingPrice?.highPrice ",product?.priceRange?.sellingPrice?.highPrice);
    
    setMopdp(`
      <mo-product-page 
        product-price="${product?.priceRange?.sellingPrice?.highPrice}" 
        mo-client-id="ck_D9Pt3c1TO4BgLq3foxmqMsQAZkr-Gn4hMT8FVXEVI30"
        theme="bluewhite" 
      ></mo-product-page>
    `)
    

  }, [])
  if(!product) return null
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: mopdp }} 
      style={{
        width:"100%"
      }}
      />
    </>
  )
}

export default PowerpayPDP
