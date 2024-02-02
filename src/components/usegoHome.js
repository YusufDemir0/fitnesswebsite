

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoged } from '../firebase/FirebaseProces';

function useGoHomeOnChange() {
  const navigate = useNavigate();

  useEffect(() => {;

    if (getLoged === 1) {
      // Eğer loged değeri 1 ise, anasayfaya yönlendir
      navigate('/');
    }
  }, /*[getLoged]*/); // getLoged fonksiyonunun her değişiminde useEffect'i tetikle

  return null; // Bu hook'un bir komponent olması gerekiyor, bu nedenle null döndürüyoruz
}

export default useGoHomeOnChange;
