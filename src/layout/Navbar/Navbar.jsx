import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaShoppingCart, FaRegUser, FaRegHeart } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import SearchOverlay from "../../components/SearchOverlay/SearchOverlay";

export default function Navbar() {
    const [seacrhOpen, setSeacrhOpen] = useState(false);
    
    const openSearch = () => setSeacrhOpen(true);
    const closeSearch = () => setSeacrhOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg  py-3 px-1 px-md-5 ">
        <div className="container-fluid">
          {/* Sol toggle */}
          <button
            className="btn d-lg-none me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>

          <Link to="/" className="navbar-brand mx-auto d-lg-none">
            <Logo />
          </Link>

          <div className="d-flex align-items-center ms-auto d-lg-none">
            <FaShoppingCart style={{ cursor: "pointer" }} />
          </div>

          {/* Desktop: logo solda, nav links ortada, cart icon sağda */}
          <Link to="/" className="navbar-brand d-none d-lg-block">
            <Logo />
          </Link>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav fw-bold">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {/* Shop Dropdown */}
              <li className="nav-item dropdown mx-2">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="shopDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                  <li>
                    <Link className="dropdown-item" to="/category/men">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/women">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/accessories">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/">
                  Blog
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/">
                  Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop: cart icon sağda */}
          <div className="d-flex gap-3 align-items-center ms-auto d-none d-lg-flex ">
            <IoSearch style={{ cursor: "pointer" }} onClick={openSearch} />
            <FaRegUser style={{ cursor: "pointer" }} />
            <FaRegHeart style={{ cursor: "pointer" }} />
            <FaShoppingCart style={{ cursor: "pointer" }} />
          </div>
        </div>
          </nav>
          <SearchOverlay show={seacrhOpen} onClose={closeSearch} />
    </>
  );
}
