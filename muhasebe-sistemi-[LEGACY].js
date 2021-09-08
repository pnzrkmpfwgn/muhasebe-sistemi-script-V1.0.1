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
      case "lefkoşa şube girdi":
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
      case "lefkoşa şube çıktı":
      //case "kar":
      case "borç ödeme":
      case "bağış/yardım":
      case "resmi gider":
      case "telefon":
      case "borç verme":
      case "kur gideri":
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

function girneGirdiCiktiTlHesapla(kurRange,detayRange,miktarRange,islemRange,islemDurumuRange){
  var toplam = 0;
  var detay=[];
  for(let i= 0 ;i < detayRange.length;i++){
    detay.push(detayRange[i][0].toLowerCase());
  }
  for(let i=0 ;i < kurRange.length;i++){
    if(kurRange[i][0]==="TL" && (detay[i]!=="lefkoşa şube girdi" || detay[i]!=="lefkoşa şube çıktı") && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam += miktarRange[i][0];
    }else if(kurRange[i][0]==="TL" && (detay[i]!=="lefkoşa şube girdi" || detay[i]!=="lefkoşa şube çıktı") && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -= miktarRange[i][0];
    }
  }
  return toplam;
}

function girneGirdiCiktiDolarHesapla(kurRange,detayRange,miktarRange,islemRange,islemDurumuRange){
  var toplam = 0;
  var detay=[];
  for(let i= 0 ;i < detayRange.length;i++){
    detay.push(detayRange[i][0].toLowerCase());
  }
  for(let i = 0 ; i < kurRange.length; i++){
    if(kurRange[i][0]==="Dolar" && (detay[i]!=="lefkoşa şube girdi" || detay[i]!=="lefkoşa şube çıktı") && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam +=miktarRange[i][0];
    }else if(kurRange[i][0]==="Dolar" && (detay[i]!=="lefkoşa şube girdi" || detay[i]!=="lefkoşa şube çıktı") && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -= miktarRange[i][0];
    }
  }
  return toplam;
}

function girneGirdiCiktiEuroHesapla(kurRange,detayRange,miktarRange,islemRange,islemDurumuRange){
  var toplam = 0;
  var detay=[];
  for(let i= 0 ;i < detayRange.length;i++){
    detay.push(detayRange[i][0].toLowerCase());
  }
  for(let i = 0; i < kurRange.length;i++){
    if(kurRange[i][0]==="Euro" && (detay[i]!=="lefkoşa şube girdi" || detay[i]!=="lefkoşa şube çıktı") && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam +=miktarRange[i][0];
    }else if(kurRange[i][0]==="Euro" && (detay[i]!=="lefkoşa şube girdi" || detay[i]!=="lefkoşa şube çıktı") && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -=miktarRange[i][0];
    }
  }
  return toplam;  
}

function girneGirdiCiktiSterlinHesapla(kurRange,detayRange,miktarRange,islemRange,islemDurumuRange){
  var toplam = 0;
  var detay=[];
  for(let i= 0 ;i < detayRange.length;i++){
    detay.push(detayRange[i][0].toLowerCase());
  }
  for(let i = 0 ; i < kurRange.length;i++){
    if(kurRange[i][0]==="Sterlin" && (detay[i]!=="lefkoşa şube girdi" || detay[i]!=="lefkoşa şube çıktı") && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam+=miktarRange[i][0];
    }else if(kurRange[i][0]==="Sterlin" && (detay[i]!=="lefkoşa şube girdi" || detay[i]!=="lefkoşa şube çıktı") && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam-=miktarRange[i][0];
    }
  }
  return toplam;
}

function lefkosaGirdiCiktiTlHesapla(kurRange,detayRange,miktarRange,islemRange,islemDurumuRange){
var toplam = 0;
  var detay=[];
  for(let i= 0 ;i < detayRange.length;i++){
    detay.push(detayRange[i][0].toLowerCase());
  }
  for(let i=0 ;i < kurRange.length;i++){
    if(kurRange[i][0]==="TL" && (detay[i]==="lefkoşa şube girdi" || detay[i]==="lefkoşa şube çıktı") && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam += miktarRange[i][0];
    }else if(kurRange[i][0]==="TL" && (detay[i]==="lefkoşa şube girdi" || detay[i]==="lefkoşa şube çıktı") && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -= miktarRange[i][0];
    }
  }
  return toplam;
}

function lefkosaGirdiCiktiDolarHesapla(kurRange,detayRange,miktarRange,islemRange,islemDurumuRange){
var toplam = 0;
  var detay=[];
  for(let i= 0 ;i < detayRange.length;i++){
    detay.push(detayRange[i][0].toLowerCase());
  }
  for(let i=0 ;i < kurRange.length;i++){
    if(kurRange[i][0]==="Dolar" && (detay[i]==="lefkoşa şube girdi" || detay[i]==="lefkoşa şube çıktı") && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam += miktarRange[i][0];
    }else if(kurRange[i][0]==="Dolar" && (detay[i]==="lefkoşa şube girdi" || detay[i]==="lefkoşa şube çıktı") && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -= miktarRange[i][0];
    }
  }
  return toplam;
}

function lefkosaGirdiCiktiEuroHesapla(kurRange,detayRange,miktarRange,islemRange,islemDurumuRange){
var toplam = 0;
  var detay=[];
  for(let i= 0 ;i < detayRange.length;i++){
    detay.push(detayRange[i][0].toLowerCase());
  }
  for(let i=0 ;i < kurRange.length;i++){
    if(kurRange[i][0]==="Euro" && (detay[i]==="lefkoşa şube girdi" || detay[i]==="lefkoşa şube çıktı") && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam += miktarRange[i][0];
    }else if(kurRange[i][0]==="Euro" && (detay[i]==="lefkoşa şube girdi" || detay[i]==="lefkoşa şube çıktı") && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -= miktarRange[i][0];
    }
  }
  return toplam;
}

function lefkosaGirdiCiktiSterlinHesapla(kurRange,detayRange,miktarRange,islemRange,islemDurumuRange){
var toplam = 0;
  var detay=[];
  for(let i= 0 ;i < detayRange.length;i++){
    detay.push(detayRange[i][0].toLowerCase());
  }
  for(let i=0 ;i < kurRange.length;i++){
    if(kurRange[i][0]==="Sterlin" && (detay[i]==="lefkoşa şube girdi" || detay[i]==="lefkoşa şube çıktı") && islemRange[i][0]==="Girdi" && islemDurumuRange[i][0]){
      toplam += miktarRange[i][0];
    }else if(kurRange[i][0]==="Sterlin" && (detay[i]==="lefkoşa şube girdi" || detay[i]==="lefkoşa şube çıktı") && islemRange[i][0]==="Çıktı" && islemDurumuRange[i][0]){
      toplam -= miktarRange[i][0];
    }
  }
  return toplam;
}
var ss = SpreadsheetApp.getActiveSheet();
girdiCiktiBelirle(ss.getRange('Sayfa4!C6').getValues());

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
//Şube spesifik alış-satış sistemi (Placeholder system) //
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//GLOBALS
//-----------------------------
//var SpreadsheetID = "1732Jr_hHa_4pbWRGp6YcVSVxKbiS1mUTmFUW_904DGE"; //burayı pushlamadan önce sil.
//var SheetName = "";
//var ss;
//var sheet;

/*function onEdit(e) {
  var simdi = new Date();
  switch (simdi.getMonth()) {
    case 0:
      SheetName = "OCAK";
      break;
    case 1:
      SheetName = "ŞUBAT";
      break;
    case 2:
      SheetName = "MART";
      break;
    case 3:
      SheetName = "NİSAN";
      break;
    case 4:
      SheetName = "MAYIS";
      break;
    case 5:
      SheetName = "HAZİRAN";
      break;
    case 6:
      SheetName = "TEMMUZ";
      break;
    case 7:
      SheetName = "AĞUSTOS";
      break;
    case 8:
      SheetName = "EYLÜL";
      break;
    case 9:
      SheetName = "EKİM";
      break;
    case 10:
      SheetName = "KASIM";
      break;
    case 11:
      SheetName = "ARALIK";
      break;
  }
  ss = SpreadsheetApp.openById(SpreadsheetID);
  sheet = ss.getSheetByName(SheetName);
}*/

function onLoad() {
  var simdi = new Date();
  switch (simdi.getMonth()) {
    case 0:
      SheetName = "OCAK";
      break;
    case 1:
      SheetName = "ŞUBAT";
      break;
    case 2:
      SheetName = "MART";
      break;
    case 3:
      SheetName = "NİSAN";
      break;
    case 4:
      SheetName = "MAYIS";
      break;
    case 5:
      SheetName = "HAZİRAN";
      break;
    case 6:
      SheetName = "TEMMUZ";
      break;
    case 7:
      SheetName = "AĞUSTOS";
      break;
    case 8:
      SheetName = "EYLÜL";
      break;
    case 9:
      SheetName = "EKİM";
      break;
    case 10:
      SheetName = "KASIM";
      break;
    case 11:
      SheetName = "ARALIK";
      break;
  }
}

//--------------------------------------------------------------
// Gets the last row number based on a selected column range values
// @param {array} range : takes a 2d array of a single column's values
// @returns {number} : the last row number with a value.
//--------------------------------------------------------------

/* Merkez */

/*
function coinIslemMerkezTl() {
  var ss = SpreadsheetApp.openById(SpreadsheetID);
  var sheet = ss.getSheetByName(SheetName);

  var kontrolEdilecekSutun = sheet.getRange('A:A').getValues();

  var sonSatır = getLastSpecialRow(kontrolEdilecekSutun);

  Logger.log(sonSatır);

}
*/

function coinIslemMerkezTl(){
  var ss = SpreadsheetApp.getActiveSheet();
  var sheet = ss.getSheetByName(SheetName);
  var SheetName="";
  onLoad();
  var kontrolEdilecekSutun = sheet.getRange('A:A').getValues();

  var sonSatir = getLastSpecialRow(kontrolEdilecekSutun);

  Logger.log(sonSatir);
  
}

function deneme() {
  var ss = SpreadsheetApp.openById(SpreadsheetID);
  var sheet = ss.getSheetByName(SheetName);

  // Select the column we will check for the first blank cell
  var columnToCheck = sheet.getRange("A:A").getValues();

  // Get the last row based on the data range of a single column.
  var lastRow = getLastSpecialRow(columnToCheck);
  //Test
  // Logger.log(lastRow);

  var dataRange = sheet.getRange(1, 1, lastRow, sheet.getLastColumn());
  //Logger.log(dataRange)
  var dataValues = dataRange.getValues();

  //Test
  // Logger.log(dataValues);
}

function getLastSpecialRow(range) {
  var rowNum = 0;
  var blank = false;
  for (var row = 0; row < range.length; row++) {
    if (range[row][0] === "" && !blank) {
      rowNum = row;
      blank = true;
    } else if (range[row][0] !== "") {
      blank = false;
    }
  }
  return rowNum;
}
/*
function coinIslemMerkezTl(
  tarih,
  tarihRange,
  sube,
  islem,
  miktar,
  islemDurumu
) {
  var toplam = 0;

  var kontrolEdilecekSutun = sheet.getRange("A:A").getValues();

  var sonSatir = getLastSpecialRow(kontrolEdilecekSutun);

  var islemSayisi = sonSatir - 9;

  for (let i = 0; i < islemSayisi; i++) {
    if (
      islemDurumu[i][0] &&
      ((tarih === tarihRange[i][0]) === sube[i][0]) === "Merkez"
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }

  // for (let i = 0; i < tarihRange.length; i++){
  //   if (islemDurumu[i][0] && sube[i][0]==="Merkez" && tarih === tarihRange[i][0]) {
  //     if (islem[i][0] === "Alış") {
  //       toplam -= miktar[i][0];
  //     } else if (islem[i][0] === "Satış") {
  //       toplam += miktar[i][0];
  //     }
  //   }
  // }
  // for (let i = 0; i < sube.length; i++) {
  //   if (sube[i][0] === "Merkez") {
  //     if (islemDurumu[i][0] && islem[i][0] === "Alış") {
  //       toplam -= miktar[i][0];
  //     } else if (islemDurumu[i][0] && islem[i][0] === "Satış") {
  //       toplam += miktar[i][0];
  //     }
  //   }
  // }
  return toplam;
}
*/
//coinIslemMerkezTl();

function coinIslemMerkezDolar(sube, islem, miktar, islemDurumu) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Merkez") {
      if (islemDurumu[i][0] && islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else if (islemDurumu[i][0] && islem[i][0] === "Satış") {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function coinIslemMerkezEuro(sube, islem, miktar, islemDurumu) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Merkez") {
      if (islemDurumu[i][0] && islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else if (islemDurumu[i][0] && islem[i][0] === "Satış") {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function coinIslemMerkezSterlin(sube, islem, miktar, islemDurumu) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Merkez") {
      if (islemDurumu[i][0] && islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else if (islemDurumu[i][0] && islem[i][0] === "Satış") {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

/*Lefkoşa */
function coinIslemLefkosaTl(sube, islem, miktar, islemDurumu) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Lefkoşa") {
      if (islemDurumu[i][0] && islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else if (islemDurumu[i][0] && islem[i][0] === "Satış") {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function coinIslemLefkosaDolar(sube, islem, miktar, islemDurumu) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Lefkoşa") {
      if (islemDurumu[i][0] && islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else if (islemDurumu[i][0] && islem[i][0] === "Satış") {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function coinIslemLefkosaEuro(sube, islem, miktar, islemDurumu) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Lefkoşa") {
      if (islemDurumu[i][0] && islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else if (islemDurumu[i][0] && islem[i][0] === "Satış") {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function coinIslemLefkosaSterlin(sube, islem, miktar, islemDurumu) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Lefkoşa") {
      if (islemDurumu[i][0] && islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else if (islemDurumu[i][0] && islem[i][0] === "Satış") {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
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
  return toplamUsdt;
}

/* ------------------------------------------------- */
/* Merkez */
/* ------------------------------------------------- */

function merkezGirdiCiktiTlHesapla(sube, islem, kur, miktar, islemDurumuRange) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Merkez") {
      if (islemDurumuRange[i][0] && islem[i][0] === "Girdi") {
        if (kur[i][0] === "TL") {
          toplam += miktar[i][0];
        }
      } else if (islemDurumuRange[i][0] && islem[i][0] === "Çıktı") {
        if (kur[i][0] === "TL") {
          toplam -= miktar[i][0];
        }
      }
    }
  }
  return toplam;
}

function merkezGirdiCiktiDolarHesapla(
  sube,
  islem,
  kur,
  miktar,
  islemDurumuRange
) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Merkez") {
      if (islemDurumuRange[i][0] && islem[i][0] === "Girdi") {
        if (kur[i][0] === "Dolar") {
          toplam += miktar[i][0];
        }
      } else if (islemDurumuRange[i][0] && islem[i][0] === "Çıktı") {
        if (kur[i][0] === "Dolar") {
          toplam -= miktar[i][0];
        }
      }
    }
  }
  return toplam;
}

function merkezGirdiCiktiEuroHesapla(
  sube,
  islem,
  kur,
  miktar,
  islemDurumuRange
) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Merkez") {
      if (islemDurumuRange[i][0] && islem[i][0] === "Girdi") {
        if (kur[i][0] === "Euro") {
          toplam += miktar[i][0];
        }
      } else if (islemDurumuRange[i][0] && islem[i][0] === "Çıktı") {
        if (kur[i][0] === "Euro") {
          toplam -= miktar[i][0];
        }
      }
    }
  }
  return toplam;
}

function merkezGirdiCiktiSterlinHesapla(
  sube,
  islem,
  kur,
  miktar,
  islemDurumuRange
) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Merkez") {
      if (islemDurumuRange[i][0] && islem[i][0] === "Girdi") {
        if (kur[i][0] === "Sterlin") {
          toplam += miktar[i][0];
        }
      } else if (islemDurumuRange[i][0] && islem[i][0] === "Çıktı") {
        if (kur[i][0] === "Sterlin") {
          toplam -= miktar[i][0];
        }
      }
    }
  }
  return toplam;
}

/* ------------------------------------------------- */
/* Lefkoşa */
/* ------------------------------------------------- */

function lefkosaGirdiCiktiTlHesapla(
  sube,
  islem,
  kur,
  miktar,
  islemDurumuRange
) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Lefkoşa") {
      if (islemDurumuRange[i][0] && islem[i][0] === "Girdi") {
        if (kur[i][0] === "TL") {
          toplam += miktar[i][0];
        }
      } else if (islemDurumuRange[i][0] && islem[i][0] === "Çıktı") {
        if (kur[i][0] === "TL") {
          toplam -= miktar[i][0];
        }
      }
    }
  }
  return toplam;
}

function lefkosaGirdiCiktiDolarHesapla(
  sube,
  islem,
  kur,
  miktar,
  islemDurumuRange
) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Lefkoşa") {
      if (islemDurumuRange[i][0] && islem[i][0] === "Girdi") {
        if (kur[i][0] === "Dolar") {
          toplam += miktar[i][0];
        }
      } else if (islemDurumuRange[i][0] && islem[i][0] === "Çıktı") {
        if (kur[i][0] === "Dolar") {
          toplam -= miktar[i][0];
        }
      }
    }
  }
  return toplam;
}

function lefkosaGirdiCiktiEuroHesapla(
  sube,
  islem,
  kur,
  miktar,
  islemDurumuRange
) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Lefkoşa") {
      if (islemDurumuRange[i][0] && islem[i][0] === "Girdi") {
        if (kur[i][0] === "Euro") {
          toplam += miktar[i][0];
        }
      } else if (islemDurumuRange[i][0] && islem[i][0] === "Çıktı") {
        if (kur[i][0] === "Euro") {
          toplam -= miktar[i][0];
        }
      }
    }
  }
  return toplam;
}

function lefkosaGirdiCiktiSterlinHesapla(
  sube,
  islem,
  kur,
  miktar,
  islemDurumuRange
) {
  var toplam = 0;
  for (let i = 0; i < sube.length; i++) {
    if (sube[i][0] === "Lefkoşa") {
      if (islemDurumuRange[i][0] && islem[i][0] === "Girdi") {
        if (kur[i][0] === "Sterlin") {
          toplam += miktar[i][0];
        }
      } else if (islemDurumuRange[i][0] && islem[i][0] === "Çıktı") {
        if (kur[i][0] === "Sterlin") {
          toplam -= miktar[i][0];
        }
      }
    }
  }
  return toplam;
}

/*Kar*/
function karHesapla(karRange, islemDurumu) {
  var toplam = 0;
  for (let i = 0; i < karRange.length; i++) {
    if (islemDurumu[i][0]) {
      toplam += karRange[i][0];
    }
  }
  return toplam;
}

//var ss = SpreadsheetApp.getActiveSheet();
//karHesapla(ss.getRange('Q6:Q').getValues(),ss.getRange(''))
