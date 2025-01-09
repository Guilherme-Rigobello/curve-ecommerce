// REACT ICON
import { PiPinwheelBold  } from "react-icons/pi";
import UserButtons from './UserButtons';

const Header = () => {
  return (
    <header className='flex justify-between items-center py-6 px-8 sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 text-xl z-10'>
      <a href='/'>
        <h1 className='flex items-center text-2xl font-semibold'>
          <span className='pr-2'>
            <PiPinwheelBold  />
          </span>
          Curve's Place
        </h1>
      </a>
      <UserButtons />
    </header>
  );
};

export default Header;
