import { Link } from "react-router-dom";
import { LoginForm } from "../forms/UserLoginForm";

export const LoginPage: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto px-4">
      <div className="flex flex-col">
        <div>
          <div className="font-bold text-xl mb-4">Login</div>
        </div>
        <div className="text-end text-sm">
          <LoginForm />
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
