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

function toplamGirdiCiktiTL(islemRange, miktar) {
  var toplamTL = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Girdi") {
      toplamTL += miktar[i][0];
    } else if (islemRange[i][0] === "Çıktı") {
      toplamTL -= miktar[i][0];
    }
  }
  return toplamTL;
}

function toplamGirdiCiktiDolar(islemRange, miktar) {
  var toplamDolar = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Girdi") {
      toplamDolar += miktar[i][0];
    } else if (islemRange[i][0] === "Çıktı") {
      toplamDolar -= miktar[i][0];
    }
  }
  return toplamDolar;
}

function toplamGirdiCiktiEuro(islemRange, miktar) {
  var toplamEuro = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Girdi") {
      toplamEuro += miktar[i][0];
    } else if (islemRange[i][0] === "Çıktı") {
      toplamEuro -= miktar[i][0];
    }
  }
  return toplamEuro;
}

function toplamGirdiCiktiSterlin(islemRange, miktar) {
  var toplamSterlin = 0;
  for (let i = 0; i < islemRange.length; i++) {
    if (islemRange[i][0] === "Girdi") {
      toplamSterlin += miktar[i][0];
    } else if (islemRange[i][0] === "Çıktı") {
      toplamSterlin -= miktar[i][0];
    }
  }
  return toplamSterlin;
}
