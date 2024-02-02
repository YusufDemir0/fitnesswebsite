// Navbar.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { updateNavbar } from "../firebase/FirebaseProces";
import { getLoged } from "../firebase/FirebaseProces";
import { auth } from "../firebase/FirebaseConfig";
import { getType } from "../firebase/FirebaseProces";

const Navbar = () => {
  const [loged1, setLogedState] = useState(getLoged());
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // loged değeri değiştiğinde state'i güncelle
    setLogedState(getLoged());
    // Custom event'e dinleyici ekle
    document.addEventListener("logedUpdated", handleLogedUpdated);

    // Temizlik işlemi (componentWillUnmount)

    const fetchUserType = async () => {
      try {
        const type = await getType();
        setUserType(type);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserType();
    return () => {
      document.removeEventListener("logedUpdated", handleLogedUpdated);
    };
  }, [loged1]);
  const handleLogedUpdated = (event) => {
    // Event'in detayından loged değerini al ve state'i güncelle
    setLogedState(event.detail);
  };
  let loged = getLoged();

  //console.log(getType());

  const handleLogout = async (event) => {
    event.preventDefault();
    loged = getLoged();

    if (loged === 1) {
      try {
        auth.signOut();
        console.log("Logout successful");
        updateNavbar();
      } catch (error) {
        console.error("Logout error", error);
      }
    }
    updateNavbar();
  };

  return (
    <div className="navbar">
      <div className="main">
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/ant">Antrenor</Link>
          <Link to="/video">Video</Link>
          <Link to="/program">Programlar</Link>
        </div>

        {loged === 0 ? (
          <div className="unloged">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        ) : (
          <div className="loged">
            <div>
              {userType === "Danisan" ? (
                <Link to="/user">Kullanıcı</Link>
              ) : userType === "Antrenor" ? (
                <Link to="/antsc">Antrenör</Link>
              ) : (
                // Diğer durumları buraya ekleyebilirsiniz
                <Link to="/adminsc">Admin</Link>
              )}
            </div>

            <Link to="/ChatApp">Mesajlar</Link>
            <button
              type="submit"
              onClick={handleLogout}
              className="btn btn-dark"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
