function dolarTl(dolar, dolarAlisKur) {
  return dolar * dolarAlisKur;
}

function tlDolar(tl, dolarSatisKur) {
  return tl / dolarSatisKur;
}

function euroTl(euro, euroAlisKur) {
  return euro * euroAlisKur;
}

function tlEuro(tl, euroSatisKur) {
  return tl / euroSatisKur;
}

function sterlinTl(sterlin, sterlinAlisKur) {
  return sterlin * sterlinAlisKur;
}

function tlSterlin(tl, sterlinSatisKur) {
  return tl / sterlinSatisKur;
}

function dolarEuro(dolar, euroSatisKur) {
  var dolarAlisKuru = SpreadsheetApp.getActiveSheet()
    .getRange("$M2")
    .getValue();
  //dolarTl fonksiyonu ile önce tl'ye çevirldi.
  return dolarTl(dolar, dolarAlisKuru) / euroSatisKur;
}

function euroDolar(euro, dolarSatisKur) {
  var euroAlisKuru = SpreadsheetApp.getActiveSheet().getRange("$M3").getValue();
  return euroTl(euro, euroAlisKuru) / dolarSatisKur;
}

function dolarSterlin(dolar, sterlinSatisKur) {
  var dolarAlisKur = SpreadsheetApp.getActiveSheet().getRange("$M2").getValue();
  return dolarTl(dolar, dolarAlisKur) / sterlinSatisKur;
}

function sterlinDolar(sterlin, dolarSatisKur) {
  var sterlinAlisKur = SpreadsheetApp.getActiveSheet()
    .getRange("$M4")
    .getValue();
  //return sterlinAlisKur;
  return sterlinTl(sterlin, sterlinAlisKur) / dolarSatisKur;
}

function siraNumarasiBul(data, target) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var r = sheet.getRange(2, 4).getValue();
  sheet.getRange(4, 9).setValue(sheet.getRange(r, 2).getValue());
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Sayfa 1 için toplam nakit ve coinler//
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function toplamDolarHesapla(islemRange, dolarRange, islemDurumuRange) {
  var toplamDolar = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Alış" && islemDurumuRange[i][0]) {
      toplamDolar -= dolarRange[i][0];
    } else if (islemRange[i][0] === "Satış" && islemDurumuRange[i][0]) {
      toplamDolar += dolarRange[i][0];
    }
  }
  return toplamDolar;
}

function toplamEuroHesapla(islemRange, euroRange, islemDurumuRange) {
  var toplamEuro = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Alış" && islemDurumuRange[i][0]) {
      toplamEuro -= euroRange[i][0];
    } else if (islemRange[i][0] === "Satış" && islemDurumuRange[i][0]) {
      toplamEuro += euroRange[i][0];
    }
  }
  return toplamEuro;
}

function toplamSterlinHesapla(islemRange, sterlinRange, islemDurumuRange) {
  var toplamSterlin = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Alış" && islemDurumuRange[i][0]) {
      toplamSterlin -= sterlinRange[i][0];
    } else if (islemRange[i][0] === "Satış" && islemDurumuRange[i][0]) {
      toplamSterlin += sterlinRange[i][0];
    }
  }
  return toplamSterlin;
}

function toplamTlHesapla(islemRange, tlRange, islemDurumuRange) {
  console.log(islemDurumuRange[0][0]);
  var toplamTL = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Alış" && islemDurumuRange[i][0]) {
      toplamTL -= tlRange[i][0];
    } else if (islemRange[i][0] === "Satış" && islemDurumuRange[i][0]) {
      toplamTL += tlRange[i][0];
    }
  }
  return toplamTL;
}

function toplamKarHesapla(islemDurumuRange, karRange) {
  var toplamKar = 0;
  console.log(islemDurumuRange.length);
  for (let i = 0; i < islemDurumuRange.length; i++) {
    if (islemDurumuRange[i][0]) {
      toplamKar += karRange[i][0];
    }
  }
  return toplamKar;
}

function toplamUSDTHesapla(islemRange, coinRange, islemDurumuRange) {
  var toplamUsdt = 0;
  for (let i = 0; i < islemDurumuRange.length; i++) {
    if (islemDurumuRange[i][0] && islemRange[i][0] === "Alış") {
      toplamUsdt += coinRange[i][0];
    } else if (islemDurumuRange[i][0] && islemRange[i][0] === "Satış") {
      toplamUsdt -= coinRange[i][0];
    }
  }
  console.log(toplamUsdt);
  return toplamUsdt;
}

/* [LEGACY] 
function toplamGirdiCiktiTL(islemRange, miktar,islemDurumuRange) {
  var toplamTL = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Girdi" && islemDurumuRange[i][0]) {
      toplamTL += miktar[i][0];
    } else if (islemRange[i][0] === "Çıktı" && islemDurumuRange[i][0]) {
      toplamTL -= miktar[i][0];
    }
  }
  return toplamTL;
}

function toplamGirdiCiktiDolar(islemRange, miktar,islemDurumuRange) {
  var toplamDolar = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Girdi" && islemDurumuRange[i][0]) {
      toplamDolar += miktar[i][0];
    } else if (islemRange[i][0] === "Çıktı" && islemDurumuRange[i][0]) {
      toplamDolar -= miktar[i][0];
    }
  }
  return toplamDolar;
}

function toplamGirdiCiktiEuro(islemRange, miktar,islemDurumuRange) {
  var toplamEuro = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Girdi" && islemDurumuRange[i][0]) {
      toplamEuro += miktar[i][0];
    } else if (islemRange[i][0] === "Çıktı" && islemDurumuRange[i][0]) {
      toplamEuro -= miktar[i][0];
    }
  }
  return toplamEuro;
}

function toplamGirdiCiktiSterlin(islemRange, miktar,islemDurumuRange) {
  var toplamSterlin = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Girdi" && islemDurumuRange[i][0]) {
      toplamSterlin += miktar[i][0];
    } else if (islemRange[i][0] === "Çıktı" && islemDurumuRange[i][0]) {
      toplamSterlin -= miktar[i][0];
    }
  }
  return toplamSterlin;
}
 [LEGACY] */

function girdiCiktiBelirle(detayRange) {
  let kucukHarfRange = []
  for (let i=0;i < detayRange.length;i++){
    kucukHarfRange.push(detayRange[i][0].toLowerCase());
  }
  for (let i = 0; i < detayRange.length; i++){
    switch (kucukHarfRange[i]) {
      case "sermaye aktarımı":
      case "virman":
      case "kâr":
      case "exchange":
      case "coin bozma":
      case "borç alma":
      case "komisyon geliri":
      case "borç tahsilatı":
      case "kur geliri":
      case "yanlış işlem":
      case "o/n geliri":
      case "deposit in":
      case "bankadan çekilen":
      case "bankaya yatırılan":
      case "kasa fazlası":
      case "coin bozma çekim":
      case "müşteri gönderimi":
      case "repo geliri":
      case "hesapta kalan":
      case "btcturkten bankaya":
      case "borç tahsilat":
        return "Girdi"
      
      case "maaş":
      case "kira":
      case "elektrik":
      case "avans":
      case "vergi":
      case "stopaj":
      case "bsi":
      case "su":
      case "teknik gider":
      case "market":
      case "diğer":
      case "banka komisyon":
      case "aracı komisyon":
      //case "kar":
      case "borç ödeme":
      case "bağış/yardım":
      case "resmi gider":
      case "telefon":
      case "borç verme":
      case "kur gideri":
      case "lefkoşa şube":
      case "promosyon&reklam":
      case "personel":
      case "tamir tadilat bakım":
      case "kırtasiye":
      case "hisse paylaşımı":
      case "sigorta/kasko":
      case "benzin":
      case "deposit out":
      case "demirbaş":
      case "mining":
      case "letbit":
      case "güvenlik hizmetleri":
      case "para çekme":
      case "müşteri ödemesi":
        return "Çıktı"
    }
  }
}

function girdiCiktiTlHesapla(kurRange,miktarRange,islemRange,islemDurumuRange){
  var toplam = 0;
  for(let i=0 ;i < kurRange.length;i++){
    if(kurRange[i][0]==="TL" && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam += miktarRange[i][0];
    }else if(kurRange[i][0]==="TL" && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -= miktarRange[i][0];
    }
  }
  return toplam;
}

function girdiCiktiDolarHesapla(kurRange,miktarRange,islemRange,islemDurumuRange){
  var toplam = 0;
  for(let i = 0 ; i < kurRange.length; i++){
    if(kurRange[i][0]==="Dolar" && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam +=miktarRange[i][0];
    }else if(kurRange[i][0]==="Dolar" && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -= miktarRange[i][0];
    }
  }
  return toplam;
}

function girdiCiktiEuroHesapla(kurRange,miktarRange,islemRange,islemDurumuRange){
  var toplam = 0;
  for(let i = 0; i < kurRange.length;i++){
    if(kurRange[i][0]==="Euro" && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam +=miktarRange[i][0];
    }else if(kurRange[i][0]==="Euro" && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -=miktarRange[i][0];
    }
  }
  return toplam;  
}

function girdiCiktiSterlinHesapla(kurRange,miktarRange,islemRange,islemDurumuRange){
  var toplam = 0;
  for(let i = 0 ; i < kurRange.length;i++){
    if(kurRange[i][0]==="Sterlin" && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam+=miktarRange[i][0];
    }else if(kurRange[i][0]==="Sterlin" && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam-=miktarRange[i][0];
    }
  }
  return toplam;
}
var ss = SpreadsheetApp.getActiveSheet();
girdiCiktiBelirle(ss.getRange('Sayfa4!C6').getValues());