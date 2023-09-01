import { useDispatch, useSelector } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { useProductsListener, storage } from '../config/firebase';
import { addProduct, deleteProduct } from '../redux/productsSlice';
import { useEffect, useState } from 'react';

const imageRef = ref(storage, 'photos/image-name');

const Home = () => {
  useProductsListener();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const [url, setUrl] = useState(null);

  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => {
        setUrl(url);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div style={{ marginTop: 180 }}>
        <input
          type="file"
          onChange={(e) => {
            const file = e.currentTarget.files[0];
            // const imageRef = ref(storage, 'photos/image-name');
            uploadBytes(imageRef, file);
          }}
        />

        {url && <img src={url} width={240} alt="some" />}
      </div>

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
