
const quranList = document.getElementById('quran_list');


let surahJsonArray = '';

fetch('./api/surah.json')
  .then(response => response.json())
  .then(data =>{
      surahJsonArray = data;
      loadSurahListCenter();
  });

function loadSurahListCenter(){
    
var innerCode = '';

for(var i = 0; i < surahJsonArray.length; i++)
{
    var surah = surahJsonArray[i];
    var place = surah['place'];
    var type = surah['type'];
    var ayahCount = surah['count'];
    var title = surah['title'];
    var titleAr = surah['titleAr'];
    var pages = surah['pages'];
    var index = surah['index'];


    // innerCode = innerCode+ `<div class=\"col-lg-4 col-sm-12 col-md-6 items\"><div class=\"items-wrapper"><div class="inner-item"><img src="../eFortsHub.ico" alt=""><h4>`+title+`</h4> <p>`+'subtitle'+`</p> <h3>`+titleAr+`</h3></div></div></div>`;

    innerCode = innerCode+
        `<div class="col-lg-4 col-12 col-md-6 items">
            <div class="items-wrapper dark-blue-content">
                <div class="inner-item">
                    <div class="title-wrapper ra">
                        <div class="">
                            <h2  class="round dark-blue-bg dark-blue-text">`+(i+1)+`</h2>
                        </div>
                        <div>
                            <h4 class="dark-blue-text">`+title+`</h4>
                            <p class="dark-blue-text">`+place+`</p>
                        </div>
                    </div>
                    <h3 class="dark-blue-text-2">`+titleAr+`</h3>
                </div>
            </div>
        </div>`;


}

quranList.innerHTML = innerCode;
}

const theme = document.getElementById("change");
var blueTheme = "dark-blue";
theme.addEventListener("click" , function(){
 

      var orangeTheme;

        if(blueTheme =='dark-blue'){
            orangeTheme = 'dark-orange';
        }else orangeTheme = 'dark-blue';


    var itemsbg = document.querySelectorAll('.'+blueTheme+'dark-blue-bg');
    const itemscontent = document.querySelectorAll('.'+blueTheme+'-content')
    const itemstext = document.querySelectorAll('.'+blueTheme+'-text');
    const itemstext2 =document.querySelectorAll('.'+blueTheme+'-text-2');

    for(var v=0; v<itemsbg.length; v++){
        itemsbg[v].classList.remove(blueTheme+'-bg');
        itemsbg[v].classList.add(orangeTheme+'-bg');

    }

    for(let v=0; v<itemscontent.length; v++){
        itemscontent[v].classList.remove(blueTheme+'-content');
        itemscontent[v].classList.add(orangeTheme+'-content');

    }

    for(var v=0; v<itemstext.length; v++){
        itemstext[v].classList.remove(blueTheme+'-text');
        itemstext[v].classList.add(orangeTheme+'-text');

    }

    for(var v=0; v<itemstext2.length; v++){
        itemstext2[v].classList.remove(blueTheme+'-text-2');
        itemstext2[v].classList.add(orangeTheme+'-text-2');
    }

    blueTheme = orangeTheme;

});





