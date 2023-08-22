import { useEffect } from 'react';
import { signUp, signIn } from './config/firebase';

const App = () => {
  useEffect(() => {
    signIn('joe@gmail.com', '1234567')
      .then(() => {
        console.log('done');
      })
      .catch((e) => {
        console.log(e);
      });
    // signUp('Joe', 'joe@gmail.com', '1234567')
    //   .then(() => {
    //     console.log('done');
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);

  return <div>App</div>;
};

export default App;
