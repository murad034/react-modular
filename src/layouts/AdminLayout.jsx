import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="wrapper site-main">
            {/* Header */}
            <Header />

            <div className="hajj-dashboard-content">
                <div className="container-fluid">
                    <div className="hajj-dashboard-container">
                        {/* Sidebar */}
                        <Sidebar />

                        {/* Main Content */}
                        <main className="dash-content-main">
                            <Outlet />
                        </main>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AdminLayout;
