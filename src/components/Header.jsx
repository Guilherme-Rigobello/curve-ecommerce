// REACT ICON
import { GiClothes } from 'react-icons/gi';
import UserButtons from './UserButtons';
// ROUTER
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const completeHeader = (
    <header className='flex justify-between items-center py-6 px-8 sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 text-xl z-10'>
      <Link to='/'>
        <h1 className='flex items-center text-3xl max-sm:text-xl font-semibold'>
          <span className='pr-2 text-3xl'>
            <GiClothes />
          </span>
          Curve's 
        </h1>
      </Link>
      <UserButtons />
    </header>
  );

  const simpleHeader = (
    <header className='flex justify-between items-center py-6 px-8 sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 text-xl z-10'>
      <Link to='/'>
        <h1 className='flex items-center text-2xl font-semibold'>
          <span className='pr-2 text-3xl'>
            <GiClothes />
          </span>
          Curve's E-commerce
        </h1>
      </Link>
    </header>
  );

  return <>{pathname === '/' ? completeHeader : simpleHeader}</>;
};

export default Header;
