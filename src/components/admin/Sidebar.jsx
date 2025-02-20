import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import {
  FaHome,
  FaPlane,
  FaFileInvoice,
  FaCalendarAlt,
  FaChartLine,
  FaChevronDown,
} from "react-icons/fa";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard"); // Track active menu
  const [submenuOpen, setSubmenuOpen] = useState(null); // Track which submenu is open
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu item

  // Menu items data with multiple submenus
  const menuItems = [
    {
      id: "dashboard",
      icon: FaHome,
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      id: "flight",
      icon: FaPlane,
      text: "Flight",
      link: "/flights",
    },
    {
      id: "pay-order",
      icon: FaFileInvoice,
      text: "Pay Order Received",
      link: "/pay-orders",
    },
    {
      id: "reservation",
      icon: FaCalendarAlt,
      text: "Reservation",
      link: "/reservation",
    },
    {
      id: "user",
      icon: FaFileInvoice,
      text: "User",
      submenu: [
        {
          id: "user list",
          icon: FaCalendarAlt,
          text: "User List",
          link: "/user",
        },
        {
          id: "demo",
          icon: FaFileInvoice,
          text: "Demo",
          link: "/demo",
        },
      ],
    },
    {
      id: "bank",
      icon: FaChartLine,
      text: "Bank",
      link: "/bank",
    },
    {
      id: "report",
      icon: FaChartLine,
      text: "Report",
      link: "/reports",
    },
  ];

  // Toggle submenu visibility
  const handleSubmenuToggle = (id) => {
    setSubmenuOpen(submenuOpen === id ? null : id); // Toggle submenu visibility
  };

  // Set active submenu item
  const handleMenuClick = (itemId) => {
    setActiveMenu(itemId);      // Set the active menu
    setActiveSubmenu(null); // Unset the active submenu
  };

  // Set active submenu item
  const handleSubmenuClick = (subItemId) => {
    setActiveSubmenu(subItemId); // Set the active submenu
    setActiveMenu(null);   // Unset the active menu
  };


  return (
    <aside id="navbarCollapse" className="dash-sidebar collapse">
      <div className="dash-navbar">
        {menuItems.map((item) => (
          <div
            className={`dash-menu-item ${activeMenu === item.id ? "active" : ""} ${
              item.submenu ? "dd-submenu-item" : ""
            }`}
            key={item.id}
          >
            {item.submenu ? (
              <>
                <Link
                  to="#"
                  className="dash-menu-text collapsed"
                  onClick={() => handleSubmenuToggle(item.id)}
                >
                  <Icon as={item.icon} w={5} h={5} />
                  <span className="dm-text">{item.text}</span>
                  <span className="dash-arrow-icon">
                    <Icon as={FaChevronDown} />
                  </span>
                </Link>

                {/* Custom Collapse for Submenus */}
                <div
                  className={`dash-submenu ${submenuOpen === item.id ? "show" : ""}`}
                  style={{
                    display: submenuOpen === item.id ? "block" : "none",
                  }}
                >
                  <VStack align="start" spacing={1} paddingLeft={4} >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.link}
                        className={`dash-menu-text dash-sub-menu-item ${activeSubmenu === subItem.id ? "active" : ""}`}
                        onClick={() => handleSubmenuClick(subItem.id)} // Set active submenu on click
                      >
                        <Icon as={item.icon} w={5} h={5} />
                        <span className="dm-text">{subItem.text}</span>

                      </Link>
                    ))}
                  </VStack>
                </div>
              </>
            ) : (
              <Link
                to={item.link}
                className="dash-menu-text"
                onClick={() => handleMenuClick(item.id)}
              >
                <Icon as={item.icon} w={5} h={5} />
                <span className="dm-text">{item.text}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
