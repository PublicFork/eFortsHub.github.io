const quranList = document.getElementById("quran_list");
const themeList = document.getElementById("forTheme");
const leftSurahList = document.querySelector("#leftSidebarSurahList");

const surahCheckBox = document.getElementById('surahs-checkbox');
const settingsCheckBox = document.getElementById('setting-checkbox');


let surahJsonArray = "";
let selectedTranscript = 'imlaei';
let currentSurah = '';
let currentIndex;
let indexes = [];

loadThemeSettings();
fetch("./api/surah.json")
  .then((response) => response.json())
  .then((data) => {
    surahJsonArray = data;
    loadSurahListCenter();
    loadSurahsIndexClickListener(indexes, selectedTranscript);
    initDefaultSettings();
  });



