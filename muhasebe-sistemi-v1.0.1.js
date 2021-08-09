//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Şube spesifik alış-satış sistemi (Placeholder system) //
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

/* Merkez */
function coinIslemMerkezTl(sube, islem, miktar, islemDurumu) {
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
