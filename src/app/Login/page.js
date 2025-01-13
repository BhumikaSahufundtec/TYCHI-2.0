// app/login/page.js (or pages/login.js depending on your setup)
export default function Login() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          
          {/* Form that uses a POST method to send credentials to /api/login */}
          <form action="/api/login" method="POST">
            <div className="mb-4">
              <label 
                htmlFor="username" 
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label 
                htmlFor="password" 
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }
  