import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/FirebaseConfig';

function UserScreen() {
  const [beslenmeList, setBeslenmeList] = useState([]);
  const [antrenmanList, setAntrenmanList] = useState([]);
  const [userData, setUserData] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState({
    _ad: '',
    _cinsiyet: '',
    _telno: '',
    _eposta: '',
    _type: '',
    _pic: ''
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userUID = user.uid;

        // Beslenme tablosu verileri
        const beslenmeRef = db.ref("Danisan/ "+userUID+"/Antrenor/BeslenmeProgrami/");
        beslenmeRef.once('value')
          .then((snapshot) => {
            if (snapshot.exists()) {
              const beslenmeData = snapshot.val();
              setBeslenmeList(Object.values(beslenmeData));
            } else {
              console.log("Beslenme verileri bulunamadı.");
            }
          })
          .catch((error) => {
            console.error("Veri çekme hatası:", error);
          });

        // Antrenman tablosu verileri
        const antrenmanRef = db.ref("Danisan/ "+userUID+"/Antrenor/AntrenmanProgrami/");
        antrenmanRef.once('value')
          .then((snapshot) => {
            if (snapshot.exists()) {
              const antrenmanData = snapshot.val();
              setAntrenmanList(Object.values(antrenmanData));
            } else {
              console.log("Antrenman verileri bulunamadı.");
            }
          })
          .catch((error) => {
            console.error("Veri çekme hatası:", error);
          });

        // Kullanıcı verileri
        const userRef = db.ref("Danisan/ "+userUID);
        userRef.once('value')
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userDataFromDB = snapshot.val();
              setUserData(userDataFromDB);
              setUpdatedUserData(userDataFromDB);
            } else {
              console.log("Kullanıcı verileri bulunamadı.");
            }
          })
          .catch((error) => {
            console.error("Veri çekme hatası:", error);
          });
      } else {
        console.log("Oturum açmış bir kullanıcı bulunamadı.");
        setBeslenmeList([]);
        setAntrenmanList([]);
        setUserData(null);
        setUpdatedUserData({
          _ad: '',
          _cinsiyet: '',
          _telno: '',
          _eposta: '',
          _type: '',
          _pic: ''
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    
  if(auth.currentUser===null){return 0;}
    const userUID = auth.currentUser.uid;
    const userRef = db.ref("Danisan/ "+userUID);

    userRef.update(updatedUserData)
      .then(() => {
        console.log("Kullanıcı bilgileri güncellendi.31");
      })
      .catch((error) => {
        console.error("Veri güncelleme hatası:", error);
      });
  };

  return (
    <div>
      <div>
        <h2>Beslenme Tablosu</h2>
        <table>
          <thead>
            <tr>
              <th>Gün</th>
              <th>Yemek</th>
            </tr>
          </thead>
          <tbody>
            {beslenmeList.map((yemek, index) => (
              <tr key={index}>
                <td>{index + 1}. Gün</td>
                <td>{yemek}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Antrenman Programı</h2>
        <table>
          <thead>
            <tr>
              <th>Gün</th>
              <th>Antrenman</th>
            </tr>
          </thead>
          <tbody>
            {antrenmanList.map((antrenman, index) => (
              <tr key={index}>
                <td>{index + 1}. Gün</td>
                <td>{antrenman}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {userData ? (
        <div>
          <h2>Merhaba, {userData._ad}!</h2>
          <p>Cinsiyet: {userData._cinsiyet}</p>
          <p>Telefon Numarası: {userData._telno}</p>
          <p>E-posta: {userData._eposta}</p>
          <p>Kullanıcı Türü: {userData._type}</p>
          <img src={userData._pic} alt="Profil Resmi" />
          
          {/* Güncelleme için giriş kutuları */}
          <input type="text" name="_ad" value={updatedUserData._ad} onChange={handleChange} placeholder="Yeni Adınız" />
          <input type="text" name="_cinsiyet" value={updatedUserData._cinsiyet} onChange={handleChange} placeholder="Yeni Cinsiyetiniz" />
          <input type="text" name="_telno" value={updatedUserData._telno} onChange={handleChange} placeholder="Yeni Telefon Numaranız" />
          <input type="text" name="_eposta" value={updatedUserData._eposta} onChange={handleChange} placeholder="Yeni E-posta Adresiniz" />
          <input type="text" name="_type" value={updatedUserData._type} onChange={handleChange} placeholder="Yeni Kullanıcı Türünüz" />
          <input type="text" name="_pic" value={updatedUserData._pic} onChange={handleChange} placeholder="Yeni Profil Resminiz" />

          {/* Bilgileri güncelleme butonu */}
          <button onClick={handleUpdate}>Bilgileri Güncelle</button>
        </div>
      ) : (
        <p>Oturum açmış bir kullanıcı bulunamadı.</p>
      )}
    </div>
  );
}

export default UserScreen;
