function daysAgoFromDate(dateString: string | number | Date) {
  // Verilen tarihi bir Date nesnesine çevirin
  const date = new Date(dateString);

  // Bugünkü tarihi alın
  const today = new Date();

  // İki tarih arasındaki milisaniye farkını hesaplayın
  const timeDifference = today - date;

  // Milisaniyeyi güne ve saate çevirin
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysDifference = Math.floor(timeDifference / millisecondsPerDay);
  const millisecondsPerHour = 60 * 60 * 1000;
  const hoursDifference = Math.floor(
    (timeDifference % millisecondsPerDay) / millisecondsPerHour,
  );

  if (daysDifference > 0) {
    if (hoursDifference > 0) {
      return `${daysDifference} gün ${hoursDifference} saat önce`;
    } else {
      return `${daysDifference} gün önce`;
    }
  } else if (hoursDifference > 0) {
    return `${hoursDifference} saat önce`;
  } else {
    return 'Şimdi';
  }
}

export {daysAgoFromDate};
