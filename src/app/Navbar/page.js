"use client";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-center space-x-4">
       
        <li>
          <a href="/dashboard" className="hover:underline">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/trades" className="hover:underline">
            Trades
          </a>
        </li>
        <li>
          <a href="/reports" className="hover:underline">
            Reports
          </a>
        </li>
        <li>
          <a href="/settings" className="hover:underline">
            Settings
          </a>
        </li>
        <li>
          <a href="/profile" className="hover:underline">
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}
