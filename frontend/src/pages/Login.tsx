import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-lg border border-white/10 bg-white/5 p-6 shadow-2xl">
        <h1 className="text-3xl font-black">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-300">Login to continue building in CreateX.</p>
        <div className="mt-6 space-y-4">
          <input className="h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 text-sm outline-none focus:border-blue-500" placeholder="Email" />
          <input className="h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 text-sm outline-none focus:border-blue-500" placeholder="Password" type="password" />
          <Link to="/dashboard" className="block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-black text-white">
            Login
          </Link>
        </div>
        <p className="mt-5 text-sm text-slate-300">
          New to CreateX? <Link className="font-bold text-blue-300" to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
