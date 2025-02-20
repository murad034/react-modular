import React from "react";
import {Link} from "react-router-dom";
import logoHajj from "@/assets/custom/images/logo-hajj.webp"; // Import the logo image
import iconSearch from "@/assets/custom/images/icon-search.svg"; // Import the search icon
import iconUserImg from "@/assets/custom/images/icon-user-img.svg"; // Import the user icon
import "@/assets/plugins/bootstrap/css/bootstrap4.min.css";
import "@/assets/custom/css/custom-style.css";
import "@/assets/custom/css/custom-responsive.css";


const Header = () => {
    return (
        <header className="site-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="site-nav-box">
                        <div className="dash-head-left">
                            <button
                                className="navbar-toggler resView collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="site-nav-box">
                                <Link className="navbar-brand" to="/">
                                    <img src={logoHajj} alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="deskView header-search">
                            <div className="search-group">
                                <input
                                    name="search_anything"
                                    className="form-control"
                                    type="search"
                                    placeholder="Search Anything…."
                                    aria-label="Search"
                                />
                                <span className="search-icon">
                                    <img src={iconSearch} alt="Icon" />
                                </span>
                            </div>
                        </div>

                        <div className="nav-btn-group nav-user-profile">
                            <a href="#">
                                <span className="icon-notification"></span>
                            </a>

                            <div className="dropdown">
                                <div
                                    className="dropdown-toggle hajj-top-user"
                                    type="button"
                                    id="hajjUserInfo"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div className="dash-user-info flex-center">
                                        <div className="dash-user-picture">
                                            <img src={iconUserImg} alt="Image" />
                                        </div>
                                        <span className="dash-user-name deskView">
                                            সফিকুর রহমান সরকার
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="hajjUserInfo"
                                >
                                    <div className="user-info">
                                        <div className="user-avatar">
                                            <img src={iconUserImg} alt="Image" />
                                        </div>
                                        <div className="user-info-title mb-4">
                                            <h3>সফিকুর রহমান সরকার</h3>
                                            <span className="login-time">
                                                Last Login: 31 Dec 2023 | 02:34:54
                                            </span>

                                            <button className="btn btn-secondary mt-3">
                                                <i
                                                    className="fa fa-unlock-alt mr-1"
                                                    aria-hidden="true"
                                                ></i>{" "}
                                                Access Log
                                            </button>
                                        </div>
                                        <div className="user-btn-group">
                                            <button type="button" className="btn btn-success">
                                                Profile
                                            </button>
                                            <button type="button" className="btn btn-danger">
                                                Log out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;