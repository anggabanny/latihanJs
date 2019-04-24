// var tanggal = 0
// var tahun = 0
// var bulan = 0

// jiga var di input
//     tanggal=10
//     tahun=2019=>10 april 2019
//     bulan=4

// range tahun antar 1900-2030

var tanggal = 27;
    tahun = 2019; //1900-2030//
    bulan = 2; //1 - 12//

    if((bulan >=1) && (bulan <=12),
        (tanggal >= 1) && (tanggal <=31),
        (tahun >= 1900) && (tahun <=2030)){
            switch(bulan) {
                case 1:   { bulan = 'Januari'; break; }
                case 2:   { if((tanggal >=1)&&(tanggal<=28)){
                                bulan = 'Februari';}
                            else {
                                tanggal = 'Invalid';
                                bulan= '';
                                tahun= '';
                                } break;}
                case 3:   { bulan = 'Maret'; break; }
                case 4:   { bulan = 'April'; break; }
                case 5:   { bulan = 'Mei'; break; }
                case 6:   { bulan = 'Juni'; break; }
                case 7:   { bulan = 'Juli'; break; }
                case 8:   { bulan = 'Agustus'; break; }
                case 9:   { bulan = 'September'; break; }
                case 10:  { bulan = 'Oktober'; break; }
                case 11:  { bulan = 'November'; break; }
                case 12:  { bulan = 'Desember'; break; }
                default:{break;}
                }
                console.log(tanggal,bulan,tahun)
    } else
        console.log('pastikan tanggal, bulan, dan tahun yang diinput benar')