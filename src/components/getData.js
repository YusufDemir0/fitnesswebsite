import { auth, db } from '../firebase/FirebaseConfig';

async function danidbul() {
    try {
      const kullanicilarRef = db.ref("/Danisan");
  
      const snapshot = await kullanicilarRef.once('value');
  
      if (snapshot.exists()) {
        const kullaniciIDs = [];
        
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          kullaniciIDs.push(childKey);
        });
  
        console.log("Tüm Kullanıcı ID'leri:", kullaniciIDs);
        return kullaniciIDs;
      } else {
        console.log("Kullanıcı bulunamadı.");
        return [];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      return [];
    }
  }
export default danidbul;
 

async function antidbul() {
  try {
    var antRef = db.ref("/Antrenor");

    var snapshot = await db.get(antRef);

    if (snapshot.exists()) {
      var antIDs = Object.keys(snapshot.val());
      console.log("Tüm Kullanıcı ID'leri:", antIDs);
      return antIDs;
    } else {
      console.log("Kullanıcı bulunamadı.");
      return [];
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
}

export { danidbul, antidbul };
