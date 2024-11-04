import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import { UserProvider } from './components/UserProvider';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Main />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
