//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Şube spesifik alış-satış sistemi (Placeholder system) //
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Coin işlemleri //
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function merkezTl(islemDurumu, sube, islem, miktar) {
  var toplam = 0;
  var tarih = SpreadsheetApp.getActiveSheet().getRange("G2").getDisplayValue();
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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
  var islemTarih = SpreadsheetApp.getActiveSheet().getRange("D9:D").getDisplayValues();
  var ss = SpreadsheetApp.getActiveSheet();
  var sonSatir = ss.getLastRow() - 9;

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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Kasa Kontrol //
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function sayfaBelirle(){
  var ay = SpreadsheetApp.getActiveSpreadsheet().getSheetName();
  ay = ay.split(" ");
  
  return ay[0];
}

//NOT: sayıları tamamen doğru buluyoruz ancak dinamik bir şekilde sol tabloya nasıl yansıtacağız?

function merkezIslemToplamTl(a1Notation){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("I3").getValue();
  }
}

sayfaBelirle();

