import { Outlet } from 'react-router-dom';

// import StyledNavbar from '../components/StyledNavbar';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    
    <h2>products</h2>
      <Outlet />
  
    {/* <Footer /> */}
    </>
  );
};
export default Home;