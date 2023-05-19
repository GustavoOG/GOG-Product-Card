# GOG-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Gustavo Ortiz

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from 'gog-product-card'
```

```
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          //maxCount: 10
        }}>
        {
          ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
```