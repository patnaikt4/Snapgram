import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;


  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ): (
        <>
          <section className = "flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section> 

            <img
              src="/assets/images/side-img.svg"
              alt="logo"
              className="hidden x1:block h-screen w-1/2 object-cover bg-no-repeat" // I had to remove hidden and x1:block because it wouldn't show up on my machine, But I ideally want it to be that way
            />
        </>
      )}
    </>
  );
}

export default AuthLayout