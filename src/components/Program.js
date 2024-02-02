import React from "react";

function Program() {
  // Beslenme Programı Örneği
  const beslenmeProgrami = {
    pazartesi: "Sabah: Yulaf ezmesi, Öğle: Tavuk salatası, Akşam: Izgara somon",
    sali: "Sabah: Meyve smoothie, Öğle: Sebzeli makarna, Akşam: Yoğurtlu sebze yemeği",
    carsamba: "Sabah: Lor peyniri, Öğle: Izgara tavuk, Akşam: Quinoa salatası",
    persembe: "Sabah: Yumurta, Öğle: Ton balıklı sandviç, Akşam: Sebzeli kuskus",
    cuma: "Sabah: Muzlu smoothie, Öğle: Kırmızı mercimek çorbası, Akşam: Ispanaklı omlet",
    cumartesi: "Sabah: Badem ezmesi, Öğle: Sebzeli pilav, Akşam: Tavuklu wrap",
    pazar: "Sabah: Peynir tabağı, Öğle: Balık ızgara, Akşam: Yeşillik salata"
  };

  // Antrenman Programı Örneği
  const antrenmanProgrami = {
    pazartesi: "Sabah: 30 dakika koşu, Akşam: 45 dakika ağırlık antrenmanı",
    sali: "Sabah: Pilates, Akşam: Yüzme",
    carsamba: "Sabah: Yoga, Akşam: 60 dakika kardiyo",
    persembe: "Sabah: 45 dakika bisiklet, Akşam: Vücut ağırlığı egzersizleri",
    cuma: "Sabah: 20 dakika koşu, Akşam: 30 dakika ağırlık antrenmanı",
    cumartesi: "Sabah: Fitness sınıfı, Akşam: Yürüyüş",
    pazar: "Sabah: Dinlenme günü, Akşam: Hafif yürüyüş veya yoga"
  };

  return (
    <div>
      <h2>Beslenme Programı</h2>
      <table>
        <thead>
          <tr>
            <th>Gün</th>
            <th>Program</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(beslenmeProgrami).map(([gun, program]) => (
            <tr key={gun}>
              <td>{gun}</td>
              <td>{program}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Antrenman Programı</h2>
      <table>
        <thead>
          <tr>
            <th>Gün</th>
            <th>Program</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(antrenmanProgrami).map(([gun, program]) => (
            <tr key={gun}>
              <td>{gun}</td>
              <td>{program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Program;
