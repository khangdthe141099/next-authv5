import { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;
