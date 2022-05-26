import './App.css';
import Header from './file/Header';
import Footer from './file/footer';
import Layout from './file/Layout';
import Main from './file/main';

function App() {
  return (
    <>
      <Header />
      <div id="layoutSidenav">
        <Layout />
        <div id="layoutSidenav_content">
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
