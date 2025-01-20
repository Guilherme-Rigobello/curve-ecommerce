import { catalog } from '../../utils/catalog';
import ProductCard from './ProductCard';

const ProductsContainer = ({ femaleProducts }) => {
  return (
    <section className='container flex flex-wrap justify-center mx-auto p-10 gap-10'>
      {(femaleProducts !== null
        ? catalog.filter((p) => p.feminine === femaleProducts)
        : catalog
      ).map((product) => (
        <ProductCard key={`product_${product.id}`} {...product} />
      ))}
    </section>
  );
};

export default ProductsContainer;
