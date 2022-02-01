
function loadSurahListCenter() {
    var innerCode = "";


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
            <div class="items-wrapper main-content">
                <div class="inner-item">
                    <div class="title-wrapper ra">
                        <div class="">
                            <h2  class="round main-bg main-text">` +
            (i + 1) +
            `</h2>
                        </div>
                        <div>
                            <h4 class="main-text">` +
            title +
            `</h4>
                            <p class="main-text">` +
            place +
            `</p>
                        </div>
                    </div>
                    <h3 class="main-text-2">` +
            titleAr +
            `</h3>
                </div>
            </div>
        </div>`;
    }
    quranList.innerHTML = innerCode;

}

function loadLeftSurahList(button) {

    var leftSurahItem = "";

    for (var i = 0; i < surahJsonArray.length; i++) {
        const surah = surahJsonArray[i];
        const place = surah["place"];
        const type = surah["type"];
        const ayahCount = surah["count"];
        const title = surah["title"];
        const titleAr = surah["titleAr"];
        const pages = surah["pages"];
        const index = surah["index"];
        console.log(title);



        leftSurahItem =
            leftSurahItem +
            `<div id="sura` + index + `" class="items items-wrapper main-content">
                <div class="inner-item">
                    <div class="title-wrapper ra">
                        <div class="">
                            <h2  class="round main-bg main-text">` +
            (i + 1) +
            `</h2>
                        </div>
                        <div>
                            <h4 class="main-text">` +
            title +
            `</h4>
                            <p class="main-text">` +
            place +
            `</p>
                        </div>
                    </div>
                    <h3 class="main-text-2">` +
            titleAr +
            `</h3>
                </div>
        </div>`;


    }
    leftSurahList.innerHTML = leftSurahItem;


    document.getElementById(button).style.backgroundColor = '#dddddd50'



}

function loadThemeSettings() {

    var themeInnerCode = "";
    for (var i = 0; i < themes.length; i++) {
        var theme = themes[i];

        var themeName = theme['name'];
        var bg = theme['bg'];
        var content = theme['content'];
        var text = theme['text'];
        var text2 = theme['text-2'];


        themeInnerCode =
            themeInnerCode +
            `
    <div id="`+themeName+`" class="themeItem  themeContent" style=" background-color:`+bg+`; ">
    <p  class="themeContent"
    style="color:`+text+`;">eFortsHub</p> 
    <p id="btnTh" class="themeContent"
    style="color:`+text2+`;background-color:`+content+`;">Button</p>
</div>`;
    }

    themeList.innerHTML = themeInnerCode;


    for (var i = 0; i < themes.length; i++) {
        const theme = themes[i];
        document.getElementById(theme['name']).addEventListener("click", function () {
            mainTheme = theme;

            document.documentElement.style.setProperty("--main-bg", mainTheme['bg']);
            document.documentElement.style.setProperty("--main-content", mainTheme['content']);
            document.documentElement.style.setProperty("--main-text", mainTheme['text']);
            document.documentElement.style.setProperty("--main-text-2", mainTheme['text-2']);

            usersTheme = mainTheme;


        })

    }

}

function loadSurahsIndexClickListener(indexes, selectedTranscript) {


    for (var i = 0; i < indexes.length; i++) {
        const index = indexes[i];
        const button = 'sura' + index;

        document.getElementById(button)
            .addEventListener('click', function () {

                setLoadingInUI();

                fetch('./api/surah/' + selectedTranscript + '/' + index + '.json')
                    .then((response) => response.json())
                    .then((data) => {
                        const sura = data.sura;
                        const content = data.content;

                        let surahInnerCode = '';

                        content.forEach(element => {

                            const id = element.id;
                            const verse_key = element.verse_key;
                            const verse = verse_key.replace(sura + ':', '');
                            const text = element.text;


                            surahInnerCode = surahInnerCode +
                                `
                                <div class="ayah  container">
                                    <div class="flex-ayah-icon">
                                        <div class="first ">
                                            <div class="time main-text-2 main-content half-round ">
                                                <font>`+ verse_key + `</font>
                                            </div>
                                            <div class="play-icon main-text-2">
                                                <i class="fa fa-play-circle m-5"></i>
                                            </div>    
                                        </div>
                                        <div class="last">
                                            <div class="menu">
                                                <i class="fas fa-ellipsis-v main-text-2"></i>
                                            </div>
                                        </div>                    
                                    </div>    
                                    <div class="ayah-content">
                                        <div class="arabic-ayah" >
                                            <font class="main-text">`+ text + `</font>
                                        </div>
                                            <br>   
                                        <font class="main-text">No translation available</font>
                                        <aside class="main-text-2">— Unknown</aside>  <br>
                                        <font class="main-text">No translation available</font>
                                        <aside class="main-text-2">— Unknown </aside> 
                                    </div>  
                                </div>
                            `;
                        });

                        quranList.innerHTML = surahInnerCode;

                        currentIndex = sura;
                        currentSurah = surahJsonArray[sura - 1];

                        var singleSurahTitle = document.getElementById('single_surah_title');
                        var singleSurahTranslt = document.getElementById('signleSurahTr');

                        var leftSurahListpen = document.getElementById('surahs-open');

                        leftSurahListpen.classList.remove('hide-me');
                        leftSurahListpen.classList.add('show-me')

                        singleSurahTitle.innerHTML = currentSurah['title'];
                        singleSurahTranslt.innerHTML = currentIndex;

                        surahCheckBox.checked = false;
                        settingsCheckBox.checked = false;


                        loadLeftSurahList(button);
                        loadSurahsIndexClickListener(indexes, selectedTranscript);
                       // loadMainTheme();

                        

                    })

            })


    }



}

function setLoadingInUI() {
    quranList.innerHTML = `Loading...`;
}


function initDefaultSettings() {
    loadMainTheme();



}

function loadMainTheme() {

        document.documentElement.style.setProperty("--main-bg", mainTheme['bg']);
        document.documentElement.style.setProperty("--main-content", mainTheme['content']);
        document.documentElement.style.setProperty("--main-text", mainTheme['text']);
        document.documentElement.style.setProperty("--main-text-2", mainTheme['text-2']);

        usersTheme = mainTheme;
    




    // if (usersTheme != mainTheme) {

    //     var itemsbg = document.querySelectorAll("." + usersTheme + "-bg");
    //     const itemscontent = document.querySelectorAll("." + usersTheme + "-content");
    //     const itemstext = document.querySelectorAll("." + usersTheme + "-text");
    //     const itemstext2 = document.querySelectorAll("." + usersTheme + "-text-2");

    //     for (var v = 0; v < itemsbg.length; v++) {

    //         if (!itemsbg[v].classList.contains('themeContent')) {
    //             itemsbg[v].classList.remove(usersTheme + "-bg");
    //             itemsbg[v].classList.add(mainTheme + "-bg");
    //         }

    //     }

    //     for (let v = 0; v < itemscontent.length; v++) {
    //         if (!itemscontent[v].classList.contains('themeContent')) {
    //             itemscontent[v].classList.remove(usersTheme + "-content");
    //             itemscontent[v].classList.add(mainTheme + "-content");
    //         }
    //     }

    //     for (var v = 0; v < itemstext.length; v++) {
    //         if (!itemstext[v].classList.contains('themeContent')) {
    //             itemstext[v].classList.remove(usersTheme + "-text");
    //             itemstext[v].classList.add(mainTheme + "-text");
    //         }
    //     }

    //     for (var v = 0; v < itemstext2.length; v++) {
    //         if (!itemstext2[v].classList.contains('themeContent')) {
    //             itemstext2[v].classList.remove(usersTheme + "-text-2");
    //             itemstext2[v].classList.add(mainTheme + "-text-2");
    //         }
    //     }

    //     usersTheme = mainTheme;
    //     //todo: save users theme in cookies...



    // }else if(defaultTheme!=mainTheme){

    //     var itemsbg = document.querySelectorAll("." + defaultTheme + "-bg");
    //     const itemscontent = document.querySelectorAll("." + defaultTheme + "-content");
    //     const itemstext = document.querySelectorAll("." + defaultTheme + "-text");
    //     const itemstext2 = document.querySelectorAll("." + defaultTheme + "-text-2");

    //     for (var v = 0; v < itemsbg.length; v++) {

    //         if (!itemsbg[v].classList.contains('themeContent')) {
    //             itemsbg[v].classList.remove(defaultTheme + "-bg");
    //             itemsbg[v].classList.add(mainTheme + "-bg");
    //         }

    //     }

    //     for (let v = 0; v < itemscontent.length; v++) {
    //         if (!itemscontent[v].classList.contains('themeContent')) {
    //             itemscontent[v].classList.remove(defaultTheme + "-content");
    //             itemscontent[v].classList.add(mainTheme + "-content");
    //         }
    //     }

    //     for (var v = 0; v < itemstext.length; v++) {
    //         if (!itemstext[v].classList.contains('themeContent')) {
    //             itemstext[v].classList.remove(defaultTheme + "-text");
    //             itemstext[v].classList.add(mainTheme + "-text");
    //         }
    //     }

    //     for (var v = 0; v < itemstext2.length; v++) {
    //         if (!itemstext2[v].classList.contains('themeContent')) {
    //             itemstext2[v].classList.remove(defaultTheme + "-text-2");
    //             itemstext2[v].classList.add(mainTheme + "-text-2");
    //         }
    //     }
    // }

}