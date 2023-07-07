import { Outlet } from 'react-router-dom';
import { Header } from '../components/containers/Header';
import { Footer } from '../components/containers/Footer';

export const Layout = () => {
  return (
    <div className='overflow-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}