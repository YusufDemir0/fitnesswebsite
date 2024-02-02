import { db } from "../firebase/FirebaseConfig";
import { Antrenor,Danisan } from "./Character";
import { auth } from "../firebase/FirebaseConfig";

function createAnt(e,ad, email) {
  e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, "sifresifre")
      .then((userCredential) => {
        // Başarılı giriş
        const user = userCredential.user;
        console.log("Kayit başarili:", user);
        var key1 = user.uid;
        var antrenor = new Antrenor(ad, "", email, "", "", "Antrenor",key1);
        const defAntrenman = [
          "Mekik",
          "Mekik",
          "Mekik",
          "Mekik",
          "Mekik",
          "Mekik",
          "Mekik",
        ];
        const defBeslenme = [
          "Muz",
          "Muz",
          "Muz",
          "Muz",
          "Muz",
          "Muz",
          "Muz",
        ];
        db.ref("Antrenor/ " + key1).set(antrenor);
        db.ref("Antrenor/ " + key1).child("AntrenmanProgrami").set(defAntrenman);
        db.ref("Antrenor/ " + key1).child("BeslenmeProgrami").set(defBeslenme);
      })
      .catch((error) => {
        // Giriş hatası
        console.error("Kayit hatasi:", error.message);
      });
  }

  function createDan(e,ad, email) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, "sifresifre")
      .then((userCredential) => {
        // Başarılı giriş
        console.log(email+ad)
        const user = userCredential.user;
        console.log("Kayit başarili:", user);
        var danisan = new Danisan(ad, "", email, "", "", "Danisan");
        var key1 = user.uid;
        db.ref("Danisan/ " + key1).set(danisan);
      })
      .catch((error) => {
        // Giriş hatası
        console.error("Kayit hatasi:", error.message);
      });
  }

export { createAnt,createDan };
