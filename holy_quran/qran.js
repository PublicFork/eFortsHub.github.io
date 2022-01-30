const quranList = document.getElementById("quran_list");

let surahJsonArray = "";
let selectedTranscript = 'imlaei';

fetch("./api/surah.json")
  .then((response) => response.json())
  .then((data) => {
    surahJsonArray = data;
    loadSurahListCenter();
  });

function loadSurahListCenter() {
  var innerCode = "";

  var indexes = [];

  for (var i = 0; i < surahJsonArray.length; i++) {
    const surah = surahJsonArray[i];
    const place = surah["place"];
    const type = surah["type"];
    const ayahCount = surah["count"];
    const title = surah["title"];
    const titleAr = surah["titleAr"];
    const pages = surah["pages"];
    const index = surah["index"];

    indexes.push(index);

    // innerCode = innerCode+ `<div class=\"col-lg-4 col-sm-12 col-md-6 items\"><div class=\"items-wrapper"><div class="inner-item"><img src="../eFortsHub.ico" alt=""><h4>`+title+`</h4> <p>`+'subtitle'+`</p> <h3>`+titleAr+`</h3></div></div></div>`;

    innerCode =
      innerCode +
      `<div id="sura` + index + `" class="col-lg-4 col-12 col-md-6 items">
            <div class="items-wrapper dark-blue-content">
                <div class="inner-item">
                    <div class="title-wrapper ra">
                        <div class="">
                            <h2  class="round dark-blue-bg dark-blue-text">` +
      (i + 1) +
      `</h2>
                        </div>
                        <div>
                            <h4 class="dark-blue-text">` +
      title +
      `</h4>
                            <p class="dark-blue-text">` +
      place +
      `</p>
                        </div>
                    </div>
                    <h3 class="dark-blue-text-2">` +
      titleAr +
      `</h3>
                </div>
            </div>
        </div>`;
  }
  quranList.innerHTML = innerCode;


  for(var i=0; i<indexes.length; i++){
    const index = indexes[i];
    const button = 'sura'+index;

    document.getElementById(button)
    .addEventListener('click', function(){
      fetch('./api/surah/'+selectedTranscript+'/'+index+'.json')
      .then((response) => response.json())
      .then((data) =>{
        const sura = data.sura;
        const content = data.content;

        let surahInnerCode = '';
        
        content.forEach(element => {

          const id = element.id;
          const verse_key = element.verse_key;
          const verse = verse_key.replace(sura+':', '');
          const text = element.text;


          surahInnerCode = surahInnerCode+
          id+`<br>`+ verse +`<br>`+ text +` `+
          `
<br><br><br>



          `;





          
        });

        quranList.innerHTML = surahInnerCode;
        
      })

    })

    
  }





}
const themeList = document.getElementById("forTheme");

/*list all theme here*/
const themes = [
  "dark-blue",
  "dark-orange",
  "dark-green",
  "light-green"

];

let mainTheme = 'dark-blue';

var themeInnerCode = "";
for (var i = 0; i < themes.length; i++) {
  var themeName = themes[i];

  themeInnerCode =
    themeInnerCode +
    `
    <div id="`+ themeName + `" class="themeItem  themeContent ` + themeName + `-content">
    <p  class="themeContent `+ themeName + `-text">eFortsHub</p> 
    <p id="btnTh" class="themeContent `+ themeName + `-text-2 ` + themeName + `-bg">Button</p>
</div>`;
}

themeList.innerHTML = themeInnerCode;


for (var i = 0; i < themes.length; i++) {
  const themeName = themes[i];
  document.getElementById(themeName).addEventListener("click", function () {

    var itemsbg = document.querySelectorAll("." + mainTheme + "-bg");
    const itemscontent = document.querySelectorAll("." + mainTheme + "-content");
    const itemstext = document.querySelectorAll("." + mainTheme + "-text");
    const itemstext2 = document.querySelectorAll("." + mainTheme + "-text-2");

    for (var v = 0; v < itemsbg.length; v++) {

      if (!itemsbg[v].classList.contains('themeContent')) {
        itemsbg[v].classList.remove(mainTheme + "-bg");
        itemsbg[v].classList.add(themeName + "-bg");
      }

    }

    for (let v = 0; v < itemscontent.length; v++) {
      if (!itemscontent[v].classList.contains('themeContent')) {
        itemscontent[v].classList.remove(mainTheme + "-content");
        itemscontent[v].classList.add(themeName + "-content");
      }
    }

    for (var v = 0; v < itemstext.length; v++) {
      if (!itemstext[v].classList.contains('themeContent')) {
        itemstext[v].classList.remove(mainTheme + "-text");
        itemstext[v].classList.add(themeName + "-text");
      }
    }

    for (var v = 0; v < itemstext2.length; v++) {
      if (!itemstext2[v].classList.contains('themeContent')) {
        itemstext2[v].classList.remove(mainTheme + "-text-2");
        itemstext2[v].classList.add(themeName + "-text-2");
      }
    }

    mainTheme = themeName;
  })

}



