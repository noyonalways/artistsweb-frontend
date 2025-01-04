interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: IProps) => {
  return (
    <button className={`btn ${className}`}>
      <span>
        <div>{children}</div>
        <div>{children}</div>
      </span>
    </button>
  );
};

export default Button;
