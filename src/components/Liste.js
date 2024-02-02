import React, { useState, useEffect } from "react";
import ryanImage from "../assets/ryan.jpeg";
import "../styles/Menu.css";
import { db } from "../firebase/FirebaseConfig";
import { ListeItem } from "./ListeItem";
import cenkImage from "../assets/ryan.jpeg";
import oziImage from "../assets/ryan.jpeg";
import edaImage from "../assets/ryan.jpeg";
import margotImage from "../assets/ryan.jpeg";
import jimImage from "../assets/ryan.jpeg";
// import "../styles/Menu.css";
export const Liste = () => {

  const idlist = [
    "Bi9nzQALSLReYFBbtNr8ZYEmNgn2",
    "CQ4ABIGd94U4Lr066PWhyv0d9Ec2",
    "P9xdJfkl1zN91dU6TUyEnkZfaAE3",
    "dmx5DLSjSOZh7j8Eex2YpHekoSm1",
    "pfwRiPFPm1eOno8JnqQX5ec5ysX2",
    "rT2ssjZ8CYXV6Z945s5RyhllMP52",
  ];
  const namelist = ["Ant1", "Ant2", "Ant3", "Ant4", "Ant5", "denemeant"];

  return (
    <div className="menuList">
      <ListeItem
        img={ryanImage}
        title={namelist[0]}
        info="Yaş: 30 Erkek"
        antid={idlist[0]}
        description="Spor ve sağlıklı yaşam antrenörü olarak, bireylere özel egzersiz programları, beslenme önerileri ve yaşam tarzı değişiklikleri konusunda rehberlik ediyorum. Amacım, müşterilerimin fiziksel ve zihinsel sağlıklarını artırmak, enerji seviyelerini yükseltmek ve sürdürülebilir yaşam tarzı alışkanlıkları geliştirmelerine yardımcı olmaktır."
      />
      <ListeItem
        img={oziImage}
        title={namelist[1]}
        info="Yaş: 28 Erkek"
        antid={idlist[1]}
        description="Kişisel gelişim ve fitness uzmanı olarak, bireylerin hem bedensel hem de zihinsel potansiyellerini maksimize etmelerine yardımcı oluyorum. Özel dersler, motivasyonel konuşmalar ve kişisel gelişim stratejileri üzerine odaklanarak, müşterilerimin hedeflerine ulaşmalarına rehberlik ediyorum."
      />
      <ListeItem
        img={cenkImage}
        title={namelist[2]}
        info="Yaş: 34 Erkek"
        antid={idlist[2]}
        description="Sporcu performans koçu olarak, amatör ve profesyonel sporcuların fiziksel ve zihinsel performanslarını artırmalarına yardımcı oluyorum. Bireysel antrenman programları, mental dayanıklılık çalışmaları ve rekabet stratejileri ile sporcuların en üst düzeyde performans sergilemelerine katkıda bulunuyorum."
      />
      <ListeItem
        img={edaImage}
        title={namelist[3]}
        info="Yaş: 26 Kadın"
        antid={idlist[3]}
        description="Grup fitness eğitmeni olarak, motivasyonu yüksek ve eğlenceli bir ortamda grup antrenmanları düzenliyorum. Cardio, direnç ve esneklik egzersizlerini içeren derslerimde, katılımcıları güçlendirmek, form kazandırmak ve sağlıklı bir yaşam tarzına yönlendirmek amacıyla çalışıyorum."
      />
      <ListeItem
        img={jimImage}
        title={namelist[4]}
        info="Yaş: 41 Erkek"
        antid={idlist[4]}
        description="Yoga ve meditasyon instrüktörü olarak, öğrencilere beden-mindera bağlantısını güçlendirmeleri ve içsel huzur bulmaları için rehberlik ediyorum. Yoga asanaları, nefes teknikleri ve meditasyon uygulamaları ile ruhsal dengeyi desteklemeyi hedefliyorum."
      />
      <ListeItem
        img={margotImage}
        title={namelist[5]}
        info="Yaş: 32 Kadın"
        antid={idlist[5]}
        description="Fonksiyonel antrenman uzmanı olarak, günlük yaşam aktivitelerine odaklanan, bireylerin fonksiyonel hareket yeteneklerini artırmayı amaçlayan programlar oluşturuyorum. Vücut ağırlığı egzersizleri, denge çalışmaları ve esneklik rutinleri ile müşterilerimin günlük yaşamlarında daha etkili ve sağlıklı olmalarına yardımcı oluyorum."
      />
    </div>
  );
};
