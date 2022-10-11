var ad= 1;
var istifadeciadlari = [];
while(ad) {
    var istifadeci = prompt("username daxil edin:");
    if(isNaN(istifadeci))
    {
        for (var i=0; i<istifadeciadlari.length;i++)
        {
            if(istifadeciadlari[i]==istifadeci)
            {
                alert("Bele bir istifadeci adi artiq movcuddur");
                break;
            }
            else 
            {
                alert("Istifade adi yalniz reqemden ibaret ola bilmez!");
                break;
            }
        }
        if (istifadeciadlari[i]!=istifadeci) {
            istifadeciadlari.push(istifadeci);
            alert("Istifadeci adiniz ugurla daxil olundu");
            alert("usernames:"+istifadeciadlari)
        }
    }
       else {
            alert("Istifade adi yalniz reqemden ibaret ola bilmez!");
        }
    ad = confirm("Yeni istifadeci adi daxil etmek isteyirsinizmi?");
}