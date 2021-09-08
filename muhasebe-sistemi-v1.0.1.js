//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Şube spesifik alış-satış sistemi (Placeholder system) //
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Coin işlemleri //
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function merkezTl(islemDurumu, sube, islem, miktar) {
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow();

  for (let i = 0; i <= sonSatir; i++) {
    if (
      islemDurumu[i][0] &&
      sube[i][0] === "Merkez" &&
      tarih === islemTarih[i][0]
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function merkezDolar(islemDurumu,sube,islem,miktar){
   var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() ;

  for (let i = 0; i <= sonSatir; i++) {
    if (
      islemDurumu[i][0] &&
      sube[i][0] === "Merkez" &&
      tarih === islemTarih[i][0]
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function merkezEuro(islemDurumu,sube,islem,miktar){
   var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow();

  for (let i = 0; i <= sonSatir; i++) {
    if (
      islemDurumu[i][0] &&
      sube[i][0] === "Merkez" &&
      tarih === islemTarih[i][0]
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function merkezSterlin(islemDurumu,sube,islem,miktar){
   var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow();

  for (let i = 0; i <= sonSatir; i++) {
    if (
      islemDurumu[i][0] &&
      sube[i][0] === "Merkez" &&
      tarih === islemTarih[i][0]
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function lefkosaTl(islemDurumu,sube,islem,miktar){
   var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow();

  for (let i = 0; i <= sonSatir; i++) {
    if (
      islemDurumu[i][0] &&
      sube[i][0] === "Lefkoşa" &&
      tarih === islemTarih[i][0]
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function lefkosaDolar(islemDurumu,sube,islem,miktar){
   var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow();

  for (let i = 0; i <= sonSatir; i++) {
    if (
      islemDurumu[i][0] &&
      sube[i][0] === "Lefkoşa" &&
      tarih === islemTarih[i][0]
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function lefkosaEuro(islemDurumu,sube,islem,miktar){
   var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow();

  for (let i = 0; i <= sonSatir; i++) {
    if (
      islemDurumu[i][0] &&
      sube[i][0] === "Lefkoşa" &&
      tarih === islemTarih[i][0]
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function lefkosaSterlin(islemDurumu,sube,islem,miktar){
   var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow();

  for (let i = 0; i <= sonSatir; i++) {
    if (
      islemDurumu[i][0] &&
      sube[i][0] === "Lefkoşa" &&
      tarih === islemTarih[i][0]
    ) {
      if (islem[i][0] === "Alış") {
        toplam -= miktar[i][0];
      } else {
        toplam += miktar[i][0];
      }
    }
  }
  return toplam;
}

function toplamUSDT(islemDurumu,islem,miktar){
  var toplam = 0 ;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D6:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow();

  for(let i = 0 ; i <= sonSatir;i++){
    if(islemDurumu[i][0] && tarih === islemTarih[i][0]){
      if(islem[i][0]==="Alış"){
        toplam += miktar[i][0];
      }else{
        toplam -=miktar[i][0];
      }
    }
  }
  return toplam;
}

function karHesapla(miktar){
  var toplam = 0;
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

  for(let i = 0 ; i <= sonSatir;i++){
    toplam += miktar[i][0];
  }
  return toplam;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Girdi/Çıktı Fonksiyonları //
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function merkezTlHesapla(islemDurumu,sube,islem,kur,miktar){
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("H2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("A6:A").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 6;

  for(let i = 0 ; i <= sonSatir; i++){
    if(islemDurumu[i][0] && tarih ===islemTarih[i][0] && sube[i][0] === "Merkez" && kur[i][0]==="TL"){
      if(islem[i][0]==="Girdi"){
        toplam += miktar[i][0];
      }else{
        toplam -= miktar[i][0];
      }
    }
  }
  return toplam;
}

function merkezDolarHesapla(islemDurumu,sube,islem,kur,miktar){
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("H2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("A6:A").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 6;

  for(let i = 0 ; i <= sonSatir; i++){
    if(islemDurumu[i][0] && tarih ===islemTarih[i][0] && sube[i][0] === "Merkez" && kur[i][0]==="Dolar"){
      if(islem[i][0]==="Girdi"){
        toplam += miktar[i][0];
      }else{
        toplam -= miktar[i][0];
      }
    }
  }
  return toplam;
}

function merkezEuroHesapla(islemDurumu,sube,islem,kur,miktar){
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("H2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("A6:A").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 6;

  for(let i = 0 ; i <= sonSatir; i++){
    if(islemDurumu[i][0] && tarih ===islemTarih[i][0] && sube[i][0] === "Merkez" && kur[i][0]==="Euro"){
      if(islem[i][0]==="Girdi"){
        toplam += miktar[i][0];
      }else{
        toplam -= miktar[i][0];
      }
    }
  }
  return toplam;
}

function merkezSterlinHesapla(islemDurumu,sube,islem,kur,miktar){
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("H2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("A6:A").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 6;

  for(let i = 0 ; i <= sonSatir; i++){
    if(islemDurumu[i][0] && tarih ===islemTarih[i][0] && sube[i][0] === "Merkez" && kur[i][0]==="Sterlin"){
      if(islem[i][0]==="Girdi"){
        toplam += miktar[i][0];
      }else{
        toplam -= miktar[i][0];
      }
    }
  }
  return toplam;
}

function lefkosaTlHesapla(islemDurumu,sube,islem,kur,miktar){
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("H2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("A6:A").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 6;

  for(let i = 0 ; i <= sonSatir; i++){
    if(islemDurumu[i][0] && tarih ===islemTarih[i][0] && sube[i][0] === "Lefkoşa" && kur[i][0]==="TL"){
      if(islem[i][0]==="Girdi"){
        toplam += miktar[i][0];
      }else{
        toplam -= miktar[i][0];
      }
    }
  }
  return toplam;
}

function lefkosaDolarHesapla(islemDurumu,sube,islem,kur,miktar){
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("H2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("A6:A").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 6;

  for(let i = 0 ; i <= sonSatir; i++){
    if(islemDurumu[i][0] && tarih ===islemTarih[i][0] && sube[i][0] === "Lefkoşa" && kur[i][0]==="Dolar"){
      if(islem[i][0]==="Girdi"){
        toplam += miktar[i][0];
      }else{
        toplam -= miktar[i][0];
      }
    }
  }
  return toplam;
}

function lefkosaEuroHesapla(islemDurumu,sube,islem,kur,miktar){
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("H2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("A6:A").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 6;

  for(let i = 0 ; i <= sonSatir; i++){
    if(islemDurumu[i][0] && tarih ===islemTarih[i][0] && sube[i][0] === "Lefkoşa" && kur[i][0]==="Euro"){
      if(islem[i][0]==="Girdi"){
        toplam += miktar[i][0];
      }else{
        toplam -= miktar[i][0];
      }
    }
  }
  return toplam;
}

function lefkosaSterlinHesapla(islemDurumu,sube,islem,kur,miktar){
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("H2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("A6:A").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 6;

  for(let i = 0 ; i <= sonSatir; i++){
    if(islemDurumu[i][0] && tarih ===islemTarih[i][0] && sube[i][0] === "Lefkoşa" && kur[i][0]==="Sterlin"){
      if(islem[i][0]==="Girdi"){
        toplam += miktar[i][0];
      }else{
        toplam -= miktar[i][0];
      }
    }
  }
  return toplam;
}

/* Kasa Hesaplama */

function sayfaBelirle(){
  var ay = SpreadsheetApp.getActiveSpreadsheet().getSheetName();
  ay = ay.split(" ");
  
  return ay[0];
}


function merkezHesapla(sonDurum,kur,islemDurumu,tarihRange){
  var sayfaAdi = sayfaBelirle();

  var tarih = Utilities.formatDate(tarihRange,"GMT+3","dd.MM.yyyy");
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("G2").getDisplayValue();
  var girdiCiktiTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("H2").getDisplayValue();

  if(tarih === islemTarih && tarih === girdiCiktiTarih){
    kur = kur.toLowerCase();
  var tl = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("I3").getValue() + SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("I3").getValue();
  var dolar = (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("J3").getValue() + SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("J3").getValue());
  var euro = (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("K3").getValue() + SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("K3").getValue());
  var sterlin = (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("L3").getValue() + SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("L3").getValue());
  
  if(islemDurumu){
    switch(kur){
    case "tl":
      return sonDurum + (tl);
    case "dolar":
      return sonDurum + (dolar);
    case "euro":
      return sonDurum + (euro);
    case "sterlin":
      return sonDurum + (sterlin)
    default:
      break;
  } 
  }else {
    return 0;
  }
  }else{
    return 0;
  }
}

function lefkosaHesapla(sonDurum,kur,islemDurumu,tarihRange){
  var sayfaAdi = sayfaBelirle();

  var tarih = Utilities.formatDate(tarihRange,"GMT+3","dd.MM.yyyy");
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("G2").getDisplayValue();

  var girdiCiktiTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("H2").getDisplayValue();
  if(tarih === islemTarih && tarih === girdiCiktiTarih){
  kur = kur.toLowerCase();
  var tl = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("M3").getValue() + SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("M3").getValue();
  var dolar = (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("N3").getValue() + SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("N3").getValue());
  var euro = (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("O3").getValue() + SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("O3").getValue());
  var sterlin = (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("P3").getValue() + SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi + " Girdi/Çıktı").getRange("P3").getValue());
  
  if(islemDurumu){
    switch(kur){
    case "tl":
      return sonDurum + (tl);
    case "dolar":
      return sonDurum + (dolar);
    case "euro":
      return sonDurum + (euro);
    case "sterlin":
      return sonDurum + (sterlin)
    default:
      break;
  } 
  }else{
    return 0;
  }

}else{
  return 0;
}

}

function sonUSDTDurumuHesapla(sonUSDT,islemDurumu,tarihRange){
  var sayfaAdi = sayfaBelirle();

  var tarih = Utilities.formatDate(tarihRange,"GMT+3","dd.MM.yyyy");
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("G2").getDisplayValue();

  if(tarih === islemTarih){
    var islem = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi).getRange("Q3").getValue();
  if(islemDurumu){
    return sonUSDT + (islem);
  }else{
    return 0;
  }
  }else{
    return 0;
  }
}