import { Container } from '@components/Container'

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'T-Shirts',
      imageSrc: 'https://www.bulkapparel.com/image/fashion-wear/16813_f_fm.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Hoodies',
      imageSrc: 'https://www.bulkapparel.com/image/fashion-wear/19539_f_fm.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Polos',
      imageSrc: 'https://www.bulkapparel.com/image/fashion-wear/18514_f_fm.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Hats',
      imageSrc: 'https://www.bulkapparel.com/image/fashion-wear/4332_fm.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
export function Products() {
    return (
    <section
        id="products"
        aria-label="products"
        className="bg-white py-4 sm:py-4"
      >
    <Container>
      <div className="bg-white">
        <h1 className='text-center leading-6 text-3xl text-gray-400'>Products</h1>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
         
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
    </section>
    )
  }
  