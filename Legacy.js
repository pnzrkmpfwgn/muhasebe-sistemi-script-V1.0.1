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
  
    
  
    return Utilities.formatDate(yeniTarih,"GMT+3","dd.MM.YYYY");
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
  
  function hesaplaVeKaydet(){
    
      var ui = SpreadsheetApp.getUi();
  
      var result = ui.prompt("En son kasanın tarihini giriniz.","Tarih:",ui.ButtonSet.OK_CANCEL);
      var result2  = ui .prompt("Hesaplanacak kasanın tarihini giriniz.","Tarih:",ui.ButtonSet.OK_CANCEL);
      var text = result.getResponseText();
      var text2 = result2.getResponseText();
      var button = result.getSelectedButton();
      var button2 = result2.getSelectedButton();
      text = text.split(".");
      var sonKasaSheetAdi = sheetIsimBelirle(text[1]);
      text = text.join(".");
      var tarihler = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange("A:A").getDisplayValues();
      var sonSatir = SpreadsheetApp.getActiveSheet().getLastRow(); 
  
    if(button === ui.Button.OK){
      if(button2 === ui.Button.OK){
        for(let i = 0 ; i < sonSatir; i++){
          if(tarihler[i][0]===text){
          var subeBul = SpreadsheetApp.getActiveSheet().getRange("B:B").getValues();
          for(let j = i; j < sonSatir;j++){
            if(subeBul[j][0]==="Merkez Coin"){
              var merkezDegerleri=SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("B"+(j+3)+":E"+(j+3)).toString()).getValues();
              Logger.log(merkezDegerleri)
            }else if(subeBul[j][0]==="Lefkoşa Coin"){
              var lefkosaDegerleri=SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("B"+(j+3)+":E"+(j+3)).toString()).getValues();
              Logger.log(lefkosaDegerleri)
            }
          }
        }
      }
      
      text2 = text2.split(".");
      sonKasaSheetAdi = sheetIsimBelirle(text2[1]);
      text2 = text2.join(".");
      tarihler = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange("A:A").getDisplayValues();
      sonSatir = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getLastRow();
      //Logger.log(merkezDegerleri)
      //Logger.log(lefkosaDegerleri)
      for(let i = 0 ; i < sonSatir;i++){
        if(tarihler[i][0]===text2){
          var subeBul = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange("B:B").getValues();
          for(let j =i ; j < sonSatir ; j++){
            if(subeBul[j][0]==="Merkez Coin"){
              //Logger.log(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("B"+(j+3)).toString()).setValue(merkezDegerleri[0][0]))
              //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("B"+(j+3)).toString()).setValue(merkezDegerleri[0][0])
              //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("C"+(j+3)).toString()).setValue(merkezDegerleri[1][0])
              //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("D"+(j+3)).toString()).setValue(merkezDegerleri[2][0])
              //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("E"+(j+3)).toString()).setValue(merkezDegerleri[3][0])
            }else if(subeBul[j][0]==="Lefkoşa Coin"){
             //Logger.log(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("B"+(j+3)).toString()).setValue(merkezDegerleri[0][0]))
             //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("B"+(j+3)).toString()).setValue(merkezDegerleri[0][0])
             //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("C"+(j+3)).toString()).setValue(lefkosaDegerleri[1][0])
             //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("D"+(j+3)).toString()).setValue(lefkosaDegerleri[2][0])
             //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sonKasaSheetAdi).getRange(("E"+(j+3)).toString()).setValue(lefkosaDegerleri[3][0])
            }
          }
        }
      }
    }
  }
  }
  