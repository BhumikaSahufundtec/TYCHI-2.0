'use client';
export default function Sidebar() {
    return (
      <aside className="w-25 h-screen bg-gray-800 text-white p-4 ">
        <nav>
          <ul>
          
          <li>
              <a href="/Configurations" className="block py-2 px-4 hover:bg-gray-700">
              Configurations
              </a>
            </li>
            <li>
              <a href="/Trades" className="block py-2 px-4 hover:bg-gray-700">
               Trades
              </a>
            </li>
            <li>
              <a href="/Pricing" className="block py-2 px-4 hover:bg-gray-700">
               pricing
              </a>
            </li><li>
              <a href="/Reports" className="block py-2 px-4 hover:bg-gray-700">
               Reports
              </a>
            </li>
            <li>
              <a href="/Reconciliation" className="block py-2 px-4 hover:bg-gray-700">
               Reconciliation
              </a>
            </li>
            <li>
              <a href="/Bookclosure" className="block py-2 px-4 hover:bg-gray-700">
               Bookclosure
              </a>
            </li>
            <li>
              <a href="/Chart of Accounts" className="block py-2 px-4 hover:bg-gray-700">
               General Ledger
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
  