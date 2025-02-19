import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex flex-col flex-grow">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="p-4 flex-grow">
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default AdminLayout;
