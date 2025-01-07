interface IProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  return <main>{children}</main>;
};

export default AuthLayout;
