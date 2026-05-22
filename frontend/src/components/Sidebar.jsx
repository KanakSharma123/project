import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        StrategyAI
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/"
          className="hover:text-blue-400"
        >
          Dashboard
        </Link>

        <Link
          to="/new-project"
          className="hover:text-blue-400"
        >
          New Project
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;