import { Outlet } from 'react-router-dom';
import { Header } from '../components/containers/Header';
import { Footer } from '../components/containers/Footer';

export const Layout = () => {
  return (
    <div className='overflow-auto flex flex-col min-h-screen justify-between'>
      <div className='h-full'>

        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}