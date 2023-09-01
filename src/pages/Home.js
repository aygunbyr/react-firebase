import { useDispatch, useSelector } from 'react-redux';

import { useProductsListener } from '../config/firebase';
import { addProduct, deleteProduct } from '../redux/productsSlice';

const Home = () => {
  useProductsListener();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <button onClick={() => dispatch(addProduct())}>Add product</button>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <button
            onClick={() => {
              dispatch(deleteProduct(product.id));
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
