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

// !ÖNEMLİ NOT:
// Sayfa isimlerinde büyük-küçük harf ve sırlama önemli! işlem sayfaları örneğin "OCAK" gibi adlandırılacak ancak kasa sayfaları "OCAK KASA" gibi adlandırılmalı ayrıca girdi-çıktı Sayfaları
// kesinlikle "[AY İSMİ] Girdi/Çıktı" olarak adlandırılmalı 2nci indis önemli!
// Bunun sebebi sayfaBelirle() fonksiyonu kasa hesaplama fonksiyonunun aktif olduğu sayfadan sayfa ismini alıyor ve "string type" olan değişkeni split fonksiyonu ile diziye dönüştürüyor
// Dizinin birinci indisi ay ismi olarak alınıyor böylelikle işlemlerin olduğu ay ile kasanın son durumunun hesaplanması gereken ay karşılıklı çalışabiliyor.

function sayfaBelirle(){
  var ay = SpreadsheetApp.getActiveSpreadsheet().getSheetName();
  ay = ay.split(" ");
  
  return ay[0];
}

function artikYilBelirle(yr) {return (yr%400)?((yr%100)?((yr%4)?false:true):false):true; }


function oncekiKasaTarihiBelirle(tarih) {
  var tarihArr = tarih.split(".");

  var gun = Number(tarihArr[0]);
  var ay = Number(tarihArr[1]);
  var yil = Number(tarihArr[2]);

  gun--;

  if (gun < 1) {
    ay--;
    if (ay < 1 && gun < 1) {
      yil=yil-2;
      ay = 12;
    }
    switch (ay) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:{
        gun = 31;
        break;
      }
      case 2.0: {
        if (artikYilBelirle(yil)) {
          gun = 29;
        } else {
          gun = 28;
        }
        break;
      }
      case 4:
      case 6:
      case 9:
      case 11:{
        gun = 30;
        break;
      }
      default:
        break;
    }
  }
  var yeniTarih = new Date(
    ay.toString() +
      " " +
      gun.toString() +
      ", " +
      yil.toString() +
      " 08:00:00 +03:00"
  );

  

  return Utilities.formatDate(yeniTarih,"GMT+3","dd-MM-YYYY");
}

//Hesaplamaya başlamak için önceki kasanın değerlerini bularak (sağ taraftaki tablolarda) tarihe bakarak gelecek değerleri belirleyeceğiz.

function sheetIsimBelirle(tarih){
  var kasaSayfa = ""
switch (tarih) {
    case "01":
      kasaSayfa = "OCAK KASA";
      break;
    case "02":
      kasaSayfa = "ŞUBAT KASA";
      break;
    case "03":
      kasaSayfa = "MART KASA";
      break;
    case "04":
      kasaSayfa = "NİSAN KASA";
      break;
    case "05":
      kasaSayfa = "MAYIS KASA";
      break;
    case "06":
      kasaSayfa = "HAZİRAN KASA";
      break;
    case "07":
      kasaSayfa = "TEMMUZ KASA";
      break;
    case "08":
      kasaSayfa = "AĞUSTOS KASA";
      break;
    case "09":
      kasaSayfa = "EYLÜL KASA";
      break;
    case "10":
      kasaSayfa = "EKİM KASA";
      break;
    case "11":
      kasaSayfa = "KASIM KASA";
      break;
    case "12":
      kasaSayfa = "ARALIK KASA";
      break;
    default:
      break;
  }
  
  return kasaSayfa;
}


/*function merkezOncekiKasaDurumuBelirleTl(tarih) {
  var oncekiTarih = oncekiKasaTarihiBelirle(tarih).split("-");
  var kasaSayfa = sheetIsimBelirle(oncekiTarih[1]);
  oncekiTarih = oncekiTarih.join(".");
  var ilkSatir = 0;
  var sonSatir = 0;
  
  var tarihler = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(kasaSayfa)
    .getRange("A:A")
    .getDisplayValues();

  var index = 0 ; 
  NOT: tlDATA iterasyonunda problem olabilir diğer undefined of "0" hatası bir sıkıntı çıkarmıyor olabilir
  while(index > -1){
    if(tarihler[index]===oncekiTarih){
      Logger.log(tarihler[index][0]===oncekiTarih);
      ilkSatir = index;
      var tlData = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(kasaSayfa).getRange("B"+ilkSatir.toString()+":B").getValues();
      Logger.log(tlData)
      if(tlData[index][0]==="Merkez Coin" && tlData[index+2][0]===0){
        Logger.log("Executed")
        oncekiTarih = oncekiKasaTarihiBelirle(oncekiTarih).split(".");
        kasaSayfa = sheetIsimBelirle(oncekiTarih[1]);
        oncekiTarih = oncekiTarih.join(".");
        tarihler = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(kasaSayfa).getRange("A:A").getDisplayValues();
        index=-1;
      }else if(tlData[index][0]==="Merkez Coin" && tlData[index+2][0]!==0){
        ilkSatir = index;
        break;
      }
    }
    index++;
  }
  
  index = 0 ;
  
  while(index > -1){
    if(tarihler[index][0] === oncekiTarih+"!"){
      sonSatir = index;
      break;
    }
    index++;
  }
  Logger.log(tarihler[ilkSatir])
  Logger.log(tarihler[sonSatir])
  Logger.log(oncekiTarih)
  var tlData = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(kasaSayfa).getRange("B"+ilkSatir.toString()+":B"+sonSatir.toString()).getValues();
  for(let i = ilkSatir ; i < sonSatir;i++){
    if(tlData[i][0]==="Merkez Coin"){
      Logger.log(tlData[i+2][0])
      return tlData[i+2][0];
    }
  }
  
}*/

Logger.log(merkezOncekiKasaDurumuBelirleTl("02.08.2021"))

function merkezOncekiKasaDurumuBelirleDolar(tarih) {

  var oncekiTarih = oncekiKasaTarihiBelirle(tarih).split("-");
  var kasaSayfa = sheetIsimBelirle(oncekiTarih[1]);
  oncekiTarih = oncekiTarih.join(".");
  var sonSatir = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(kasaSayfa)
    .getLastRow();
  var tarihler = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(kasaSayfa)
    .getRange("A:A")
    .getDisplayValues();
  var satir = "";
  var tlData=0;

  for(let i = 0;i < sonSatir;i++){
    if(tarihler[i][0] === oncekiTarih){
      satir = "C" + (i).toString() + ":C" + sonSatir.toString();
      tlData = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName(kasaSayfa)
      .getRange(satir)
      .getValues(); 

    for(let j = 0 ; j < sonSatir ; j++){
      if(tlData[j][0]==="Merkez Coin"){
        if(tlData[j+2][0]===0){
          merkezOncekiKasaDurumuBelirleDolar(oncekiTarih);
        }else{
          Logger.log(tlData[j+2][0])
          return tlData[j+2][0];
        }
    }
  }
}
}
}

function merkezOncekiKasaDurumuBelirleEuro(tarih) {

  var oncekiTarih = oncekiKasaTarihiBelirle(tarih).split("-");
  var kasaSayfa = sheetIsimBelirle(oncekiTarih[1]);
  oncekiTarih = oncekiTarih.join(".");
  var sonSatir = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(kasaSayfa)
    .getLastRow();
  var tarihler = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(kasaSayfa)
    .getRange("A:A")
    .getDisplayValues();
  var satir = "";
  var tlData=0;

  for(let i = 0;i < sonSatir;i++){
    if(tarihler[i][0] === oncekiTarih){
      satir = "D" + (i).toString() + ":D" + sonSatir.toString();
      tlData = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName(kasaSayfa)
      .getRange(satir)
      .getValues(); 

    for(let j = 0 ; j < sonSatir ; j++){
      if(tlData[j][0]==="Merkez Coin"){
        if(tlData[j+2][0]===0){
          merkezOncekiKasaDurumuBelirleEuro(oncekiTarih);
        }else{
          Logger.log(tlData[j+2][0])
          return tlData[j+2][0];
        }
    }
  }
}
}
}

function merkezOncekiKasaDurumuBelirleSterlin(tarih) {

  var oncekiTarih = oncekiKasaTarihiBelirle(tarih).split("-");
  var kasaSayfa = sheetIsimBelirle(oncekiTarih[1]);
  oncekiTarih = oncekiTarih.join(".");
  var sonSatir = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(kasaSayfa)
    .getLastRow();
  var tarihler = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(kasaSayfa)
    .getRange("A:A")
    .getDisplayValues();
  var satir = "";
  var tlData=0;

  for(let i = 0;i < sonSatir;i++){
    if(tarihler[i][0] === oncekiTarih){
      satir = "E" + (i).toString() + ":E" + sonSatir.toString();
      tlData = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName(kasaSayfa)
      .getRange(satir)
      .getValues(); 

    for(let j = 0 ; j < sonSatir ; j++){
      if(tlData[j][0]==="Merkez Coin"){
        if(tlData[j+2][0]===0){
          merkezOncekiKasaDurumuBelirleSterlin(oncekiTarih);
        }else{
          Logger.log(tlData[j+2][0])
          return tlData[j+2][0];
        }
    }
  }
}
}
}

function merkezIslemToplamTl(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("I3").getValue();
  }
}


function merkezIslemToplamDolar(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("J3").getValue();
  }
}

function merkezIslemToplamEuro(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("K3").getValue();
  }
}

function merkezIslemToplamSterlin(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("L3").getValue();
  }
}

function lefkosaIslemToplamTl(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("M3").getValue();
  }
}

function lefkosaIslemToplamDolar(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("N3").getValue();
  }
}

function lefkosaIslemToplamEuro(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("O3").getValue();
  }
}

function lefkosaIslemToplamSterlin(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("P3").getValue();
  }
}

function merkezGirdiCiktiToplamTl(kasaTarih){
  var sayfa = sayfaBelirle()+ " Girdi/Çıktı";
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("H2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("I3").getValue();
  }
}

function merkezGirdiCiktiToplamDolar(kasaTarih){
  var sayfa = sayfaBelirle()+ " Girdi/Çıktı";
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("H2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("J3").getValue();
  }
}

function merkezGirdiCiktiToplamEuro(kasaTarih){
  var sayfa = sayfaBelirle()+ " Girdi/Çıktı";
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("H2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("K3").getValue();
  }
}

function merkezGirdiCiktiToplamSterlin(kasaTarih){
  var sayfa = sayfaBelirle()+ " Girdi/Çıktı";
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("H2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("L3").getValue();
  }
}

function lefkosaGirdiCiktiToplamTl(kasaTarih){
  var sayfa = sayfaBelirle()+ " Girdi/Çıktı";
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("H2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("M3").getValue();
  }
}

function lefkosaGirdiCiktiToplamDolar(kasaTarih){
  var sayfa = sayfaBelirle()+ " Girdi/Çıktı";
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("H2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("N3").getValue();
  }
}

function lefkosaGirdiCiktiToplamEuro(kasaTarih){
  var sayfa = sayfaBelirle()+ " Girdi/Çıktı";
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("H2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("O3").getValue();
  }
}

function lefkosaGirdiCiktiToplamSterlin(kasaTarih){
  var sayfa = sayfaBelirle()+ " Girdi/Çıktı";
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("H2").getDisplayValue();
  //var tarih = SpreadsheetApp.getActiveSheet().getRange(a1Notation).getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")
  Logger.log(tarih ===islemTarih)

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("P3").getValue();
  }
}

function toplamUSDTkasa(kasaTarih){
  var sayfa = sayfaBelirle();
  var islemTarih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("G2").getDisplayValue();
  var tarih = Utilities.formatDate(kasaTarih,"GMT+3","dd.MM.yyyy")

  if(islemTarih === tarih){
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfa).getRange("Q3").getValue();
  }
}

/* Not appliciable */
function hesaplaVeKaydetTl(merkezIslem,girdCikti,tarih){
    var sonDurum = merkezOncekiKasaDurumuBelirleTl(Utilities.formatDate(tarih,"GMT+3","dd.MM.yyyy")) + (merkezIslem + girdCikti)
    return sonDurum;
  
}

function hesaplaVeKaydet(){
  
    var ui = SpreadsheetApp.getUi();

    var result = ui.prompt("Hesaplamak istediğiniz kasa tarihini giriniz.","Tarih:",ui.ButtonSet.OK_CANCEL);
    var button = result.getSelectedButton();
    var text = result.getResponseText();
    var tarihler = SpreadsheetApp.getActiveSheet().getRange("A:A").getDisplayValues();
    var ilkSatir = 0;
    var sonSatir = 0
    var sube = SpreadsheetApp.getActiveSheet().getRange("B:B").getValues();
    //var subeGirdiCikti = SpreadsheetApp.getActiveSheet().getRange
    

  if(button === ui.Button.OK){
    //Logger.log(text)
    Logger.log(merkezOncekiKasaDurumuBelirleTl(text))
    let index = 0;
    while(index > -1){
      if(tarihler[index][0]===text){
        ilkSatir = index;
        break;
      }
      index++;
    }
    index = 0;
    while(index > -1){  
      if(tarihler[index][0] === text+"!"){
        sonSatir=index;
        break;
      }
      index++
    }
    
    for(let i = ilkSatir ; i < sonSatir;i++){
      if(sube[i][0]==="Merkez Coin"){
        Logger.log(merkezOncekiKasaDurumuBelirleTl(text));
        Logger.log("asdasdasd")
        //SpreadsheetApp.getActiveSheet().getRange("B"+(i+2).toString()).setValue(merkezOncekiKasaDurumuBelirleTl(text))
      }
    }
  }
}