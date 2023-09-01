import {
  useProductsListener,
  deleteProduct,
  addProduct,
} from '../config/firebase';

const Home = () => {
  const products = useProductsListener();

  return (
    <div>
      <button onClick={() => addProduct()}>Add product</button>
      {products.map((product) => (
        <div>
          <h2 key={product.id}>{product.name}</h2>
          <button onClick={() => deleteProduct(product.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
