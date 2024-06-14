
var şehirim = [
    "adana", "adiyaman", "afyonkarahisar", "agri", "aksaray", "amasya",
  "ankara", "antalya", "ardahan", "artvin", "aydin", "balikesir", "bartin",
  "batman", "bayburt", "bilecik", "bingol", "bitlis", "bolu", "burdur",
  "bursa", "canakkale", "cankiri", "corum", "denizli", "diyarbakir",
  "duzce", "edirne", "elazig", "erzincan", "erzurum", "eskisehir", "gaziantep",
  "giresun", "gumushane", "hakkari", "hatay", "igdir", "isparta", "istanbul",
  "izmir", "kahramanmaras", "karabuk", "karaman", "kars", "kastamonu", "kayseri",
  "kilis", "kirikkale", "kirklareli", "kirsehir", "kocaeli", "konya",
  "kutahya", "malatya", "manisa", "mardin", "mersin", "mugla", "mus", "nevsehir",
  "nigde", "ordu", "osmaniye", "rize", "sakarya", "samsun", "sanliurfa",
  "siirt", "sinop", "sirnak", "sivas", "tekirdag", "tokat", "trabzon",
  "tunceli", "usak", "van", "yalova", "yozgat", "zonguldak"
  ];


  var şehirtanıt=[
    "kebabı, sıcağı , şırdanı ünlü şehrimiz", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Anıtkabir, aspava , ünlü olan şehrimiz", "Antalya", "Ardahan", "Artvin", 
    "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", 
    "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", 
    "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul", 
    "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir", 
    "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Üzümü, mesir macunu ünlü olan şehrimiz", "Mardin", "Tantunisi ünlü olan şehrimiz", "Muğla", "Muş", 
    "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", 
    "Şanlıurfa", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
  ];



  var a=Math.floor(Math.random()*şehirim.length);
  /* şehir hakkında bilgi verir */
 var bnb= document.getElementById("şehirhakkında").innerHTML=şehirtanıt[a]
function randomşehir(){

  var thmn=  document.getElementById("ştahmin").value

/* hakkında bilgi verilen şehir */
    var dogruşehir=  document.getElementById("şehirigör").innerHTML=şehirim[a]

    if(dogruşehir==thmn){
        console.log("doğru")
        document.getElementById("dy").innerHTML="✓"
    }else{
        console.log("yanlış")
         document.getElementById("dy").innerHTML="✘"

    }
    

    
}

