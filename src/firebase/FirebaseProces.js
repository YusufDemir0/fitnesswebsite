import { auth } from "./FirebaseConfig.js";
import { db } from "./FirebaseConfig.js";
import React from "react";
import { Danisan, Admin } from "../components/Character.js";
import { toast } from "react-toastify";

// Firebase'i başlatma

function signup(email, password, ad) {
  console.log(getLoged());
  var loged = getLoged();
  console.log(loged);
  if (loged === 0) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Başarılı giriş
        const user = userCredential.user;
        console.log("Kayit başarili:", user);
        updateNavbar();
        var key = user.uid;
        var ogrenci = new Danisan(ad, "", email, "", "", "Danisan", key);

        db.ref("Danisan/ " + key).set(ogrenci);
      })
      .catch((error) => {
        // Giriş hatası
        console.error("Kayit hatasi:", error.message);
      });
  }
}

function Login(email, password) {
  console.log(getLoged());
  var loged = getLoged();
  console.log(loged);
  if (loged === 0) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Başarılı giriş
        const user = userCredential.user;
        console.log("Giriş başarili:", user);
        updateNavbar();
      })
      .catch((error) => {
        // Giriş hatası
        console.error("Giriş hatasi:", error.message);
      });
  }
}

function createAdmin() {
  /*
  console.log(getLoged());
  var loged = getLoged();
  console.log(loged);
  if (loged === 0) {
    auth
      .createUserWithEmailAndPassword("admin@gmail.com", "adminadmin")
      .then((userCredential) => {
        // Başarılı giriş
        const user = userCredential.user;
        console.log("Kayit başarili:", user);
        var admin = new Admin("admin", "admin@gmail.com", "admin");
        db.ref("Admin/").set(admin);
      })
      .catch((error) => {
        // Giriş hatası
        console.error("Kayit hatasi:", error.message);
      });
  }
*/
}
function Logout() {
  try {
    auth.signOut();
    console.log("Logout successful");
    updateNavbar();
  } catch (error) {
    console.error("Logout error", error);
  }

  return <></>;
}

function getLoged() {
  // Auth modülündeki kullanıcıyı al
  const user = auth.currentUser;
  // Eğer kullanıcı varsa (oturum açıksa), 1 döndür, yoksa 0 döndür
  return user ? 1 : 0;
}
function updateNavbar() {
  // Navbar'ı güncellemek için özel bir olay fırlat
  const event = new CustomEvent("logedUpdated", { detail: getLoged() });
  document.dispatchEvent(event);
}




function getType() {
  return new Promise((resolve, reject) => {
    if (auth.currentUser === null) {
      resolve(0);
    } else {
      const user = auth.currentUser;
      const userUID = user.uid;
      let userRef = db.ref("Danisan/ " + userUID);
      var type = "";

      userRef
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userDataFromDB = snapshot.val();
            type = userDataFromDB._type;
            resolve(type);
          } else {
            userRef = db.ref("Antrenor/ " + userUID);
            return userRef.once("value");
          }
        })
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userDataFromDB = snapshot.val();
            type = userDataFromDB._type;
            resolve(type);
          } else {
            resolve("test");
          }
        })
        .catch((error) => {
          console.error("Veri çekme hatası:", error);
          reject("Hata");
        });
    }
  });
}

function AddAnt(e,antid) {
  e.preventDefault();
  if (auth.currentUser === null) {
    return 0;
  }
  const user = auth.currentUser;
  const uid = user.uid;
  const messagesRef = db.ref("Danisan/ " + uid + "/Antrenor/AntrenorId");
  //const newMessageRef = messagesRef.push();
  messagesRef
    .set(antid)
    .then(() => {
      console.log("Antrenor başarıyla eklendi.");
      toast.success("Başarılı bir işlem gerçekleşti!");
    })
    .catch((error) => {
      console.error("Antrenor eklenirken hata oluştu:", error);
    });
  const defBeslenme = db
    .ref("Antrenor/ " + antid + "/BeslenmeProgrami/")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        const beslenmeData = snapshot.val();
        const progref0 = db.ref(
          "Danisan/ " + uid + "/Antrenor/BeslenmeProgrami"
        );
        progref0
          .set(Object.values(beslenmeData))
          .then(() => {
            console.log("Antrenor başarıyla eklendi.");
            toast.success("Başarılı bir işlem gerçekleşti!");
          })
          .catch((error) => {
            console.error("Antrenor eklenirken hata oluştu:", error);
          });
      } else {
        console.log("Beslenme verileri bulunamadı.");
      }
    })
    .catch((error) => {
      console.error("Veri çekme hatası:", error);
    });

  const defAntrenman = db
    .ref("Antrenor/ " + antid + "/AntrenmanProgrami/")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        const antrenmanData = snapshot.val();

        const progref1 = db.ref(
          "Danisan/ " + uid + "/Antrenor/AntrenmanProgrami"
        );
        progref1
          .set(Object.values(antrenmanData))
          .then(() => {
            console.log("Antrenor başarıyla eklendi.");
            toast.success("Başarılı bir işlem gerçekleşti!");
          })
          .catch((error) => {
            console.error("Antrenor eklenirken hata oluştu:", error);
          });
      } else {
        console.log("Antrenman verileri bulunamadı.");
      }
    })
    .catch((error) => {
      console.error("Veri çekme hatası:", error);
    });
}

export { getLoged, createAdmin, Logout, getType };
export { signup, updateNavbar, AddAnt };
export { Login };
