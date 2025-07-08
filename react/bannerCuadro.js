import React, { useEffect, useState } from 'react'
import Style from "./bannerCuadro.css"
const Img2 = "/arquivos/image-iva.png"
const bannerCuadro = ({titleSection, link, image}) => {


    return (
        <>
            <div className={Style.caja_banner_cuadro}>

            <a href={link?link:"#"}><img className={Style.bannerImg} src={image?image:Img2} alt={titleSection} /></a>
                  <h3 className={Style.TituloTextoCuadro}>{titleSection?titleSection:"Título sección"}</h3>
            </div>
        </>
    )
}
bannerCuadro.schema = {
  title: 'banner Cuadrado con Texto',
  description: 'banner Cuadrado con Texto',
  type: 'object',
  properties: {
    titleSection: {
      title: 'Título',
      description:
        "Solo puede colocar texto, máximo 20 caracteres o se desborda, si deja el texto vacío se colocará por defecto 'Título sección'",
      type: 'string',
      default: 'Título sección',
    },
    link: {
        title: "Link de la imagen",
        type: 'string',
        default: '#',
    },
    image: {
      title: 'Imágen de fondo',
      description:
        "Imagen que se visualizará en la versión de escritorio y mobile de la página, el tamaño recomendado de la imagen es de 310 X 288 o la misma proporcion.",
      type: 'string',
      default: '/arquivos/image-iva.png',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
  },
};

export default bannerCuadro
