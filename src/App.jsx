import { Toaster } from 'react-hot-toast';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';

const App = () => {
  return (
    <>
    
    <SignUp />
    <Toaster  
        position='top-center'
        toastOptions={{
            succes: {duration : 2000},
            error: {duration : 2000}
        }}
    />
    </>
  );
}


export default App