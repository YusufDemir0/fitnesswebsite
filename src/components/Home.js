import React from "react";
import { Link } from "react-router-dom";
import fImage from "../assets/f.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${fImage})` }}>
      <div className="main">
        <h1 className="display-4 fw-bold">Hoşgeldiniz</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-6 ">
            Birebir ve uzaktan fitness ve vücut geliştirme koçluğu, beslenme
            planı, kilo alma-verme
          </p>
          <p className="lead mb-4">
            <strong>Programın amacı:</strong> Bireylerin kişisel ihtiyaçlarını
            ve hedeflerini Bireylerin kişisel ihtiyaçlarını ve hedeflerini doğru
            analiz eden, ihtiyaç ve hedeflere yönelik en son bilimsel
            yaklaşımları referans alarak bireylere uygun egzersiz reçetesi
            programlayabilen kişisel ve mesleki bilgi ve becerilerini arttıran
            katılımcılar yetiştirmektir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
