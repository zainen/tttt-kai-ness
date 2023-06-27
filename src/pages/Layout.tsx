import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Layout = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}