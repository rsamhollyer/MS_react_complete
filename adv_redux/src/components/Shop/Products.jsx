import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 6,
    title: 'Something',
    description: 'This is my first product',
  },
  {
    id: 2,
    price: 45,
    title: 'Another Expense',
    description: 'Oh my this is pricey',
  },
];

const Products = () => (
  <section className={classes.products}>
    <h2>Buy your favorite products</h2>
    <ul>
      {DUMMY_PRODUCTS.map(({ id, title, description, price }) => (
        <ProductItem
          key={id}
          id={id}
          title={title}
          price={parseFloat(price)}
          description={description}
        />
      ))}
    </ul>
  </section>
);

export default Products;
