# BBVA PowerPay Widgets

Proceso de instalación e imeplementación del componente "PowerPay widgets" en entornos VTEX IO.

## Instalación

Luego de adquirir la app en VTEX App Store se debe instalar en el ambiente deseado:
Una vez instalada, se debe configurar el token de identificación provisto por PowerPay en la configuración de la aplicación.

## Implementación

Ya habiendo configurado el componente, se debe declarar el mismo en el archivo **manifest.json** como "peerDependency".

    "peerDependencies": {
        "powerpaypartnerpe.powerpay-widgets": "0.x"
    },

Luego se deben configurar la llamada a los bloques pertinentes

- [Script Global](#scriptglobal)
- [Top Header](#topheader)
- [Banner](#banner)
- [Cálculo de cuotas en PDP](#pdp)

La implementación de los bloques es opcional y debe adaptarse acorde al diseño de cada tienda.

### <div name="scriptglobal">Script Global</div>

En el archivo **JSONC** que contenga la estructura del header de la tienda (`"header-layout"`) se debe declarar la llamada al script `"powerpay-script"`.
**Ejemplo:**

      "header-layout.desktop": {
        "children": [
          "powerpay-script",
          "mo-header",
          "flex-layout.row#1-desktop",
          "flex-layout.row#3-desktop",
          "sticky-layout#4-desktop"
        ]
      },

### <div name="topheader">Top Header</div>

![Ejemplo de visualización Top Header](https://powerpaypartnerpe.vtexassets.com/assets/vtex.file-manager-graphql/images/0cee521c-d0b5-4a70-828b-802f671b8dfe___9c4d3a26b4f4bbf2d84e9434ab72c7e5.png)

Al igual que el script, el Top Header se debe declarar dentro del header de la tienda (`"header-layout"`) declarando como hijo al bloque `"mo-header"`.
Ejemplo:

      "header-layout.desktop": {
        "children": [
          "powerpay-script",
          "mo-header",
          "flex-layout.row#1-desktop",
          "flex-layout.row#3-desktop",
          "sticky-layout#4-desktop"
        ]
      },

### <div name="topheader">Banner</div>

![Ejemplo de visualización Banner](https://powerpaypartnerpe.vtexassets.com/assets/vtex.file-manager-graphql/images/18bfeab2-1773-4b6c-8e09-d32b5c361c11___090c7932b80879d4ce7db9ec24a59989.png)

Para la implementación del módulo de banner, el mismo puede ser implementado en cualquier sección teniendo en cuenta que el mismo está diseñado para ocupar el 100% del ancho de la pantalla, este se declara como `"mo-banner"` dentro del archivo **JSONC** deseado.
**Ejemplo:**

    "store.home": {
        "blocks": [
            "list-context.image-list#demo",
            "flex-layout.row#deals",
            "__fold__",
            "rich-text#shelf-title",
            "flex-layout.row#shelf",
            "info-card#home",
            "rich-text#question",
            "rich-text#link",
            "mo-banner",
            "newsletter"
        ]
    },

### <div name="pdp">Cálculo de coutas en PDP</div>

![Ejemplo de visualización Cuotas PDP](https://powerpaypartnerpe.vtexassets.com/assets/vtex.file-manager-graphql/images/ec954b28-6492-4d5d-9c28-acea8da8bffc___707a1a8169134781cae28da6626c9467.png)

Para la implementación del módulo de cálculo de cuotas, el mismo debe ser implementado en la **página de detalle de producto**, preferentemente cercano al precio del producto; este se declara como `"mo-product-page"` dentro del archivo **JSONC** deseado.
**Ejemplo:**

    "flex-layout.col#right-col": {
        "props": {
            "preventVerticalStretch": true,
            "rowGap": 0
        },
        "children": [
            "flex-layout.row#product-name",
            "product-rating-summary",
            "flex-layout.row#list-price-savings",
            "flex-layout.row#selling-price",
            "product-installments",
            "product-separator",
            "product-identifier.product",
            "sku-selector",
            "mo-product-page",
            "product-quantity",
            "product-assembly-options",
            "product-gifts",
            "flex-layout.row#buy-button"
        ]
    },

## Authors

- [PowerPay Perú](https://powerpay.pe/)
