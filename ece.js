const yas = 20;
if (yas>18)
{
    console.log("18 yasindan buyuktur");
}

const adSoyad =["can","tuce","elif"];
if(adSoyad.length>2)
{
    console.log("iste benim ogrencilerim");
}

const sifre = "kjsdfhsskdfjhskjdfh"
if (sifre.length>12)
{
    console.log("sifre yeterince uzun");
}
else{
    console.log("sifre yetersiz")
}
const yeniSifre = "ascbks!";
if (yeniSifre.includes("!"))
{
    console.log("sifre cok guclu");
}

const sifreniz = "sjdhfshdfkjshfdk";
if (sifreniz.length>= 12)
{
    console.log("sifreniz baya guclu");
}
else if(sifreniz.length>=8)
{
    console.log("sifreniz yeterli");
}