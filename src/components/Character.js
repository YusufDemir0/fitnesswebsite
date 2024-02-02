/*Karakter Türleri  */

class Danisan {
  constructor(ad, cinsiyet, eposta, telno, pic, type,uid) {
    this._ad = ad;
    this._cinsiyet = cinsiyet;
    this._eposta = eposta;
    this._telno = telno;
    this._pic = pic;
    this._type = type;
    this._uid = uid;
  }
  get type() {
    return this._type;
  }
  set type(in_type) {
    this._type = in_type;
  }

  get ad() {
    return this._ad;
  }
  set ad(in_ad) {
    this._ad = in_ad;
  }


  get cinsiyet() {
    return this._cinsiyet;
  }
  set cinsiyet(in_cinsiyet) {
    this._cinsiyet = in_cinsiyet;
  }

  get eposta() {
    return this._eposta;
  }
  set eposta(in_eposta) {
    this._eposta = in_eposta;
  }

  get telno() {
    return this._telno;
  }
  set telno(in_telno) {
    this._telno = in_telno;
  }

  get pic() {
    return this._pic;
  }
  set pic(in_pic) {
    this._pic = in_pic;
  }
}
class Antrenor {
  constructor(ad, cinsiyet, eposta, telno, pic, type,uid) {
    this._ad = ad;
    this._cinsiyet = cinsiyet;
    this._eposta = eposta;
    this._telno = telno;
    this._pic = pic;
    this._type = type;
    this._uid = uid;
  }
  get type() {
    return this._type;
  }
  set type(in_type) {
    this._type = in_type;
  }

  get ad() {
    return this._ad;
  }
  set ad(in_ad) {
    this._ad = in_ad;
  }


  get cinsiyet() {
    return this._cinsiyet;
  }
  set cinsiyet(in_cinsiyet) {
    this._cinsiyet = in_cinsiyet;
  }

  get eposta() {
    return this._eposta;
  }
  set eposta(in_eposta) {
    this._eposta = in_eposta;
  }

  get telno() {
    return this._telno;
  }
  set telno(in_telno) {
    this._telno = in_telno;
  }

  get pic() {
    return this._pic;
  }
  set pic(in_pic) {
    this._pic = in_pic;
  }
}

class Admin {
  constructor(ad, eposta, type) {
    this._ad = ad;
    this._eposta = eposta;
    this._type = type;
  }
  get type() {
    return this._type;
  }
  set type(in_type) {
    this._type = in_type;
  }

  get ad() {
    return this._ad;
  }
  set ad(in_ad) {
    this._ad = in_ad;
  }

  get eposta() {
    return this._eposta;
  }
  set eposta(in_eposta) {
    this._eposta = in_eposta;
  }

}


export {Danisan};
export {Antrenor};
export {Admin};
