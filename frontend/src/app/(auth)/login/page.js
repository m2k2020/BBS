"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("person");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(`${API_BASE}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: identifier, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Login failed");

      localStorage.setItem("token", data.access);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Logged in successfully!");
      setIdentifier("");
      setPassword("");

      if (data.user.role === "donor") router.push("/portal/donor");
      else if (data.user.role === "hospital") router.push("/portal/hospital");
      else router.push("/portal/admin");
    } catch (err) {
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center font-display transition-colors duration-300 px-4">
      <div className="w-full max-w-md px-6 py-12">
        <div className="fixed top-6 right-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-primary/10 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-icons text-xl block dark:hidden">dark_mode</span>
            <span className="material-icons text-xl hidden dark:block">light_mode</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary mb-4 shadow-lg shadow-primary/20">
            <span className="material-icons text-white text-4xl">water_drop</span>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">BloodLink Unified</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Life-saving connections begin here.</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl shadow-primary/5 border border-zinc-100 dark:border-zinc-800 overflow-hidden">
          <div className="flex p-1 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg ${isLogin ? "bg-white dark:bg-zinc-800 text-primary shadow-sm" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg ${!isLogin ? "bg-white dark:bg-zinc-800 text-primary shadow-sm" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"}`}
            >
              Sign Up
            </button>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                Select Your Role
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { id: "person", icon: "person", label: "Person" },
                  { id: "hospital", icon: "local_hospital", label: "Hospital" },
                  { id: "clinic", icon: "medical_services", label: "Clinic" },
                  { id: "admin", icon: "admin_panel_settings", label: "Admin" },
                ].map((r) => (
                  <div key={r.id}>
                    <input
                      id={`role-${r.id}`}
                      name="role"
                      type="radio"
                      className="hidden"
                      checked={role === r.id}
                      onChange={() => setRole(r.id)}
                    />
                    <label
                      htmlFor={`role-${r.id}`}
                      className={`flex flex-col items-center justify-center p-3 border rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all ${
                        role === r.id ? "border-primary text-primary bg-[rgba(236,19,37,0.03)] dark:bg-[rgba(236,19,37,0.03)]" : "border-zinc-200 dark:border-zinc-700"
                      }`}
                    >
                      <span className="material-icons text-xl mb-1">{r.icon}</span>
                      <span className="text-[10px] font-bold uppercase">{r.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5" htmlFor="identifier">
                  Email or ID
                </label>
                <div className="relative">
                  <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">alternate_email</span>
                  <input
                    id="identifier"
                    name="identifier"
                    type="text"
                    placeholder="Enter your credentials"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="password">Password</label>
                  <a className="text-xs font-semibold text-primary hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="relative">
                  <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">lock_outline</span>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input id="remember" type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" />
                <label htmlFor="remember" className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">Keep me signed in</label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md shadow-primary/20 transform transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>{isLogin ? (loading ? "Signing in..." : "Sign In") : (loading ? "Registering..." : "Sign Up")}</span>
                <span className="material-icons text-lg">{isLogin ? "login" : "person_add"}</span>
              </button>

              {error && <p className="text-red-600 mt-2">{error}</p>}
              {success && <p className="text-green-600 mt-2">{success}</p>}
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                New organization? <a className="text-primary font-semibold hover:underline" href="#">Apply for registration</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6 text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></span>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></span>
            <a className="hover:text-primary transition-colors" href="#">Contact Support</a>
          </div>
          <div className="flex items-center space-x-2 text-zinc-400">
            <span className="material-icons text-sm">security</span>
            <span className="text-[10px] font-medium">Secured by BloodLink Infrastructure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
