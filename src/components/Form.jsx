import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="place-self-center">
      <form
        onSubmit={handleSubmit}
        className="grid bg-slate-500 border border-yellow-400 p-14 text-center rounded-lg gap-4 text-xl uppercase text-yellow-400 font-semibold min-w-96 w-[600px]"
      >
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          className="rounded-xl h-10 bg-gray-600 pl-2"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          value={password}
          onChange={handlePassword}
          className="rounded-xl h-10 bg-gray-600 pl-2"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-600 hover:text-yellow-400 ease-in-out duration-300 font-bold w-24 p-1 place-self-center rounded-xl hover:bg-gray-600 mt-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Form;
