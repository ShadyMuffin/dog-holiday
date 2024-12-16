import { useState } from "react";

import Form from "./Form";

function LoginButton() {
  const [signIn, setSignIn] = useState(false);

  const handleLogin = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="font-bold text-2xl font-mono p-2 rounded-lg hover:bg-gray-600 hover:text-yellow-300  ease-in-out mx-auto duration-300"
      >
        LOGIN
      </button>
      <div className="grid mx-auto">
        {signIn && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            {" "}
            <Form />{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginButton;
