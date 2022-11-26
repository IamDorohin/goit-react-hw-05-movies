import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderContainer } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <HeaderContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
