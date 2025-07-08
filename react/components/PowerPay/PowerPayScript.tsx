import React from 'react'
import { Helmet } from 'vtex.render-runtime'

const PowerPayScript = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://components-bnpl-pe-bbva-production.moprestamo.com/css/config.css"
        />
        <script
          type="module"
          src="//components-bnpl-pe-bbva-production.moprestamo.com/cdn/dist/powerpay-components/powerpay-components.esm.js"
        />
      </Helmet>
    </>
  )
}

export default PowerPayScript
