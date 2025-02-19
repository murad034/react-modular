import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white p-4 h-screen">
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul>
                <li>
                    <Link to="/user" className="block py-2 hover:bg-gray-700">User</Link>
                </li>
                <li>
                    <Link to="/bank" className="block py-2 hover:bg-gray-700">Bank</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
