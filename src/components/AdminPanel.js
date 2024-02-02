import React, { useState, useEffect } from "react";
import "../styles/AdminPanel.css";
import { db } from "../firebase/FirebaseConfig";
import { createDan, createAnt } from "./Admin";

const AdminPanel = () => {
  const [clients, setClients] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedPersonDetails, setSelectedPersonDetails] = useState(null);

  const handleSelectPerson = async (person) => {
    setSelectedPerson(person);
    console.log("test1");

    if (person._type === "Danisan") {
      console.log("test");
      try {
        const userSnapshot = await db.ref("Danisan/ ").once("value");
        const userDetails = userSnapshot.val();
        setSelectedPersonDetails(userDetails);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    } else {
      try {
        const userSnapshot = await db.ref("Antrenor/ ").once("value");
        const userDetails = userSnapshot.val();
        setSelectedPersonDetails(userDetails);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    }
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsSnapshot = await db.ref("Danisan/").once("value");
        const clientsData = clientsSnapshot.val();
        //console.log(Object.getOwnPropertyNames(clientsData));
        setClients(Object.values(clientsData));
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchClients();

    const fetchTrainers = async () => {
      try {
        const clientsSnapshot = await db.ref("Antrenor/").once("value");
        const clientsData = clientsSnapshot.val();
        setTrainers(Object.values(clientsData));
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchTrainers();
  }, []);

  const [updatedAd, setUpdatedAd] = useState("");
  const [updatedCinsiyet, setUpdatedCinsiyet] = useState("");
  const [updatedTelNo, setUpdatedTelNo] = useState("");
  const [updatedEposta, setUpdatedEposta] = useState("");
  const [updatedType, setUpdatedType] = useState("");
  const [updatedPic, setUpdatedPic] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Input adına göre ilgili state'i güncelle
    switch (name) {
      case "Ad":
        setUpdatedAd(value);
        break;
      case "Cinsiyet":
        setUpdatedCinsiyet(value);
        break;
      case "TelNo":
        setUpdatedTelNo(value);
        break;
      case "Eposta":
        setUpdatedEposta(value);
        break;
      case "Type":
        setUpdatedType(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (event) => {
    // Resim yükleme işlemleri...
  };

  const handleSaveChanges = () => {
    // Güncellenmiş verileri veritabanına yazma işlemleri
    if (selectedPerson) {
      console.log();
      //console.log(Object.getOwnPropertyNames(selectedUID));
      const personRef = db.ref(
        selectedPerson._type + "/ " + selectedPerson._uid + "/"
      );
      personRef
        .update({
          _ad: updatedAd,
          _cinsiyet: updatedCinsiyet,
          _telno: updatedTelNo,
          _eposta: updatedEposta,
          _type: updatedType,
          _pic: updatedPic,
        })
        .then(() => {
          console.log("Veri güncelleme başarılı");
        })
        .catch((error) => {
          console.error("Veri güncelleme hatası:", error);
        });
    }
  };

  return (
    <div className="admin-container">
      <div className="person-list">
        <div className="list-header">Danışanlar</div>
        <table>
          <thead>
            <tr>
              <th>Ad</th>
              <th>Email</th>
              <th>Cinsiyet</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client._uid} onClick={() => handleSelectPerson(client)}>
                <td>{client._ad}</td>
                <td>{client._eposta}</td>
                <td>{client._cinsiyet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="person-list">
        <div className="list-header">Antrenörler</div>
        <table>
          <thead>
            <tr>
              <th>Ad</th>
              <th>Email</th>
              <th>Cinsiyet</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer.id} onClick={() => handleSelectPerson(trainer)}>
                <td>{trainer._ad}</td>
                <td>{trainer._eposta}</td>
                <td>{trainer._cinsiyet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPerson && (
        <div className="selected-person-details">
          <h2>Seçilen Kişi: {selectedPerson._ad}</h2>
          <p>Ad Soyad: {selectedPerson._ad}</p>
          <div>
            <label htmlFor="textInput">Yeni Ad:</label>
            <input
              type="_ad"
              name="Ad"
              id="textInput"
              value={updatedAd}
              onChange={handleInputChange}
            />
          </div>
          <p>Cinsiyet: {selectedPerson._cinsiyet}</p>
          <div>
            <label htmlFor="textInput">Yeni Cinsiyet:</label>
            <input
              type="_cinsiyet"
              name="Cinsiyet"
              id="textInput"
              value={updatedCinsiyet}
              onChange={handleInputChange}
            />
          </div>
          <p>Telefon Numarası: {selectedPerson._telno}</p>
          <div>
            <label htmlFor="textInput">Yeni Telefon No:</label>
            <input
              type="_telno"
              name="TelNo"
              id="textInput"
              value={updatedTelNo}
              onChange={handleInputChange}
            />
          </div>
          <p>E-posta: {selectedPerson._eposta}</p>
          <div>
            <label htmlFor="textInput">Yeni Email:</label>
            <input
              type="_eposta"
              name="Eposta"
              id="textInput"
              value={updatedEposta}
              onChange={handleInputChange}
            />
          </div>
          <p>Kullanıcı Türü: {selectedPerson._type}</p>
          <div>
            <label htmlFor="textInput">Yeni Tür:</label>
            <input
              type="_type"
              name="Type"
              id="textInput"
              value={updatedType}
              onChange={handleInputChange}
            />
          </div>
          <img src={selectedPerson._pic} alt="Profil Resmi" />
          <div>
            <label htmlFor="imageInput">Resim Yükle:</label>
            <input
              type="_pic"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button onClick={handleSaveChanges}>Değişiklikleri Kaydet</button>
            <form onSubmit={(e) => createAnt( e,updatedAd, updatedEposta)}>
              <button type="submit">Antrenor Oluştur</button>
            </form>

            <form onSubmit={(e) => createDan(e, updatedAd, updatedEposta)}>
              <button type="submit">Danışan Oluştur</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
