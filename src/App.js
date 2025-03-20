import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import AppRoutes from './Routes/Routes';

function App() {
  return (
    <>
      <Header />
        <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
