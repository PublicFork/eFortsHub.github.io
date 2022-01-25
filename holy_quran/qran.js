
const quranList = document.getElementById('quran_list');



const surahJsonArray = [
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 7,
        "title": "Al-Fatiha",
        "titleAr":"الفاتحة",
        "index": "001",
        "pages": "1",
        "juz": [
            {
                "index": "01",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_7"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 286,
        "title": "Al-Baqara",
        "titleAr":"البقرة",
        "index": "002",
        "pages": "2",
        "juz": [
            {
                "index": "01",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_141"
                }
            },
            {
                "index": "02",
                "verse": {
                    "start": "verse_142",
                    "end": "verse_252"
                }
            },
            {
                "index": "03",
                "verse": {
                    "start": "verse_253",
                    "end": "verse_286"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 200,
        "title": "Aal-Imran",
        "titleAr":"آل عمران",
        "index": "003",
        "pages": "45",
        "juz": [
            {
                "index": "03",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_92"
                }
            },
            {
                "index": "04",
                "verse": {
                    "start": "verse_93",
                    "end": "verse_200"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 176,
        "title": "An-Nisaa'",
        "titleAr":"النساء",
        "index": "004",
        "pages": "69",
        "juz": [
            {
                "index": "04",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_23"
                }
            },
            {
                "index": "05",
                "verse": {
                    "start": "verse_24",
                    "end": "verse_147"
                }
            },
            {
                "index": "06",
                "verse": {
                    "start": "verse_148",
                    "end": "verse_176"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 120,
        "title": "Al-Ma'ida",
        "titleAr":"المائدة",
        "index": "005",
        "pages": "95",
        "juz": [
            {
                "index": "06",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_81"
                }
            },
            {
                "index": "07",
                "verse": {
                    "start": "verse_82",
                    "end": "verse_120"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 165,
        "title": "Al-An'am",
        "titleAr":"الأنعام",
        "index": "006",
        "pages": "115",
        "juz": [
            {
                "index": "07",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_110"
                }
            },
            {
                "index": "08",
                "verse": {
                    "start": "verse_111",
                    "end": "verse_165"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 206,
        "title": "Al-A'raf",
        "titleAr":"الأعراف",
        "index": "007",
        "pages": "136",
        "juz": [
            {
                "index": "08",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_87"
                }
            },
            {
                "index": "09",
                "verse": {
                    "start": "verse_88",
                    "end": "verse_206"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 75,
        "title": "Al-Anfal",
        "titleAr":"الأنفال",
        "index": "008",
        "pages": "160",
        "juz": [
            {
                "index": "09",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_40"
                }
            },
            {
                "index": "10",
                "verse": {
                    "start": "verse_41",
                    "end": "verse_75"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 129,
        "title": "Al-Tawba",
        "titleAr":"التوبة",
        "index": "009",
        "pages": "169",
        "juz": [
            {
                "index": "10",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_92"
                }
            },
            {
                "index": "11",
                "verse": {
                    "start": "verse_93",
                    "end": "verse_129"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 109,
        "title": "Yunus",
        "titleAr":"يونس",
        "index": "010",
        "pages": "187",
        "juz": [
            {
                "index": "11",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_109"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 123,
        "title": "Hud",
        "titleAr":"هود",
        "index": "011",
        "pages": "199",
        "juz": [
            {
                "index": "11",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_5"
                }
            },
            {
                "index": "12",
                "verse": {
                    "start": "verse_6",
                    "end": "verse_123"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 111,
        "title": "Yusuf",
        "titleAr":"يوسف",
        "index": "012",
        "pages": "212",
        "juz": [
            {
                "index": "12",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_52"
                }
            },
            {
                "index": "13",
                "verse": {
                    "start": "verse_53",
                    "end": "verse_111"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 43,
        "title": "Ar-Ra'd",
        "titleAr":"الرعد",
        "index": "013",
        "pages": "225",
        "juz": [
            {
                "index": "13",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_43"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 52,
        "title": "Ibrahim",
        "titleAr":"إبراهيم",
        "index": "014",
        "pages": "231",
        "juz": [
            {
                "index": "13",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_52"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 99,
        "title": "Al-Hijr",
        "titleAr":"الحجر",
        "index": "015",
        "pages": "237",
        "juz": [
            {
                "index": "14",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_99"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 128,
        "title": "An-Nahl",
        "titleAr":"النحل",
        "index": "016",
        "pages": "242",
        "juz": [
            {
                "index": "14",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_128"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 111,
        "title": "Al-Israa",
        "titleAr":"الإسراء",
        "index": "017",
        "pages": "255",
        "juz": [
            {
                "index": "15",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_111"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 110,
        "title": "Al-Kahf",
        "titleAr":"الكهف",
        "index": "018",
        "pages": "266",
        "juz": [
            {
                "index": "15",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_74"
                }
            },
            {
                "index": "16",
                "verse": {
                    "start": "verse_75",
                    "end": "verse_110"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 98,
        "title": "Maryam",
        "titleAr":"مريم",
        "index": "019",
        "pages": "277",
        "juz": [
            {
                "index": "16",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_98"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 135,
        "title": "Ta-Ha",
        "titleAr":"طه",
        "index": "020",
        "pages": "284",
        "juz": [
            {
                "index": "16",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_135"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 112,
        "title": "Al-Anbiya",
        "titleAr":"الأنبياء",
        "index": "021",
        "pages": "294",
        "juz": [
            {
                "index": "17",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_112"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 78,
        "title": "Al-Hajj",
        "titleAr":"الحج",
        "index": "022",
        "pages": "302",
        "juz": [
            {
                "index": "17",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_78"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 118,
        "title": "Al-Muminun",
        "titleAr":"المؤمنون",
        "index": "023",
        "pages": "311",
        "juz": [
            {
                "index": "18",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_118"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 64,
        "title": "An-Nur",
        "titleAr":"النور",
        "index": "024",
        "pages": "319",
        "juz": [
            {
                "index": "18",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_64"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 77,
        "title": "Al-Furqan",
        "titleAr":"الفرقان",
        "index": "025",
        "pages": "329",
        "juz": [
            {
                "index": "18",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_20"
                }
            },
            {
                "index": "19",
                "verse": {
                    "start": "verse_21",
                    "end": "verse_77"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 227,
        "title": "Ash-Shuara",
        "titleAr":"الشعراء",
        "index": "026",
        "pages": "335",
        "juz": [
            {
                "index": "19",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_227"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 93,
        "title": "An-Naml",
        "titleAr":"النمل",
        "index": "027",
        "pages": "345",
        "juz": [
            {
                "index": "19",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_55"
                }
            },
            {
                "index": "20",
                "verse": {
                    "start": "verse_56",
                    "end": "verse_93"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 88,
        "title": "Al-Qasas",
        "titleAr":"القصص",
        "index": "028",
        "pages": "354",
        "juz": [
            {
                "index": "20",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_88"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 69,
        "title": "Al-Ankabut",
        "titleAr":"العنكبوت",
        "index": "029",
        "pages": "364",
        "juz": [
            {
                "index": "20",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_45"
                }
            },
            {
                "index": "21",
                "verse": {
                    "start": "verse_46",
                    "end": "verse_69"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 60,
        "title": "Ar-Rum",
        "titleAr":"الروم",
        "index": "030",
        "pages": "371",
        "juz": [
            {
                "index": "21",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_60"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 34,
        "title": "Luqman",
        "titleAr":"لقمان",
        "index": "031",
        "pages": "377",
        "juz": [
            {
                "index": "21",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_34"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 30,
        "title": "As-Sajdah",
        "titleAr":"السجدة",
        "index": "032",
        "pages": "381",
        "juz": [
            {
                "index": "21",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_30"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 73,
        "title": "Al-Ahzab",
        "titleAr":"الأحزاب",
        "index": "033",
        "pages": "383",
        "juz": [
            {
                "index": "21",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_30"
                }
            },
            {
                "index": "22",
                "verse": {
                    "start": "verse_31",
                    "end": "verse_73"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 54,
        "title": "Saba",
        "titleAr":"سبأ",
        "index": "034",
        "pages": "393",
        "juz": [
            {
                "index": "22",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_54"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 45,
        "title": "Fatir",
        "titleAr":"فاطر",
        "index": "035",
        "pages": "399",
        "juz": [
            {
                "index": "22",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_45"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 83,
        "title": "Yasin",
        "titleAr":"يس",
        "index": "036",
        "pages": "404",
        "juz": [
            {
                "index": "22",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_27"
                }
            },
            {
                "index": "23",
                "verse": {
                    "start": "verse_28",
                    "end": "verse_83"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 182,
        "title": "As-Saffat",
        "titleAr":"الصافات",
        "index": "037",
        "pages": "410",
        "juz": [
            {
                "index": "23",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_182"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 88,
        "title": "Sad",
        "titleAr":"ص",
        "index": "038",
        "pages": "417",
        "juz": [
            {
                "index": "23",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_88"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 75,
        "title": "Az-Zumar",
        "titleAr":"الزمر",
        "index": "039",
        "pages": "422",
        "juz": [
            {
                "index": "23",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_31"
                }
            },
            {
                "index": "24",
                "verse": {
                    "start": "verse_32",
                    "end": "verse_75"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 85,
        "title": "Ghafir",
        "titleAr":"غافر",
        "index": "040",
        "pages": "431",
        "juz": [
            {
                "index": "24",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_85"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 54,
        "title": "Fussilat",
        "titleAr":"فصلت",
        "index": "041",
        "pages": "439",
        "juz": [
            {
                "index": "24",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_46"
                }
            },
            {
                "index": "25",
                "verse": {
                    "start": "verse_47",
                    "end": "verse_54"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 53,
        "title": "Ash-Shura",
        "titleAr":"الشورى",
        "index": "042",
        "pages": "445",
        "juz": [
            {
                "index": "25",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_53"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 89,
        "title": "Az-Zukhruf",
        "titleAr":"الزخرف",
        "index": "043",
        "pages": "451",
        "juz": [
            {
                "index": "25",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_89"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 59,
        "title": "Ad-Dukhan",
        "titleAr":"الدخان",
        "index": "044",
        "pages": "457",
        "juz": [
            {
                "index": "25",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_59"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 37,
        "title": "Al-Jathiya",
        "titleAr":"الجاثية",
        "index": "045",
        "pages": "460",
        "juz": [
            {
                "index": "25",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_37"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 35,
        "title": "Al-Ahqaf",
        "titleAr":"الأحقاف",
        "index": "046",
        "pages": "464",
        "juz": [
            {
                "index": "26",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_35"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 38,
        "title": "Muhammad",
        "titleAr":"محمد",
        "index": "047",
        "pages": "468",
        "juz": [
            {
                "index": "26",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_38"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 29,
        "title": "Al-Fath",
        "titleAr":"الفتح",
        "index": "048",
        "pages": "472",
        "juz": [
            {
                "index": "26",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_29"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 18,
        "title": "Al-Hujurat",
        "titleAr":"الحجرات",
        "index": "049",
        "pages": "477",
        "juz": [
            {
                "index": "26",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_18"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 45,
        "title": "Qaf",
        "titleAr":"ق",
        "index": "050",
        "pages": "479",
        "juz": [
            {
                "index": "26",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_45"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 60,
        "title": "Az-Zariyat",
        "titleAr":"الذاريات",
        "index": "051",
        "pages": "482",
        "juz": [
            {
                "index": "26",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_30"
                }
            },
            {
                "index": "27",
                "verse": {
                    "start": "verse_31",
                    "end": "verse_60"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 49,
        "title": "At-Tur",
        "titleAr":"الطور",
        "index": "052",
        "pages": "485",
        "juz": [
            {
                "index": "27",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_49"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 62,
        "title": "An-Najm",
        "titleAr":"النجم",
        "index": "053",
        "pages": "487",
        "juz": [
            {
                "index": "27",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_62"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 55,
        "title": "Al-Qamar",
        "titleAr":"القمر",
        "index": "054",
        "pages": "490",
        "juz": [
            {
                "index": "27",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_55"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 78,
        "title": "Ar-Rahman",
        "titleAr":"الرحمن",
        "index": "055",
        "pages": "493",
        "juz": [
            {
                "index": "27",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_78"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 96,
        "title": "Al-Waqia",
        "titleAr":"الواقعة",
        "index": "056",
        "pages": "496",
        "juz": [
            {
                "index": "27",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_96"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 29,
        "title": "Al-Hadid",
        "titleAr":"الحديد",
        "index": "057",
        "pages": "499",
        "juz": [
            {
                "index": "27",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_29"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 22,
        "title": "Al-Mujadilah",
        "titleAr":"المجادلة",
        "index": "058",
        "pages": "504",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_22"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 24,
        "title": "Al-Hashr",
        "titleAr":"الحشر",
        "index": "059",
        "pages": "507",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_24"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 13,
        "title": "Al-Mumtahinah",
        "titleAr":"الممتحنة",
        "index": "060",
        "pages": "510",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_13"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 14,
        "title": "As-Saff",
        "titleAr":"الصف",
        "index": "061",
        "pages": "513",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_14"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 11,
        "title": "Al-Jumu'ah",
        "titleAr":"الجمعة",
        "index": "062",
        "pages": "515",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_11"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 11,
        "title": "Al-Munafiqun",
        "titleAr":"المنافقون",
        "index": "063",
        "pages": "516",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_11"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 18,
        "title": "At-Taghabun",
        "titleAr":"التغابن",
        "index": "064",
        "pages": "518",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_18"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 12,
        "title": "At-Talaq",
        "titleAr":"الطلاق",
        "index": "065",
        "pages": "520",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_12"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 12,
        "title": "At-Tahrim",
        "titleAr":"التحريم",
        "index": "066",
        "pages": "522",
        "juz": [
            {
                "index": "28",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_12"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 30,
        "title": "Al-Mulk",
        "titleAr":"الملك",
        "index": "067",
        "pages": "524",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_30"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 52,
        "title": "Al-Qalam",
        "titleAr":"القلم",
        "index": "068",
        "pages": "526",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_52"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 52,
        "title": "Al-Haqqah",
        "titleAr":"الحاقة",
        "index": "069",
        "pages": "529",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_52"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 44,
        "title": "Al-Ma'arij",
        "titleAr":"المعارج",
        "index": "070",
        "pages": "531",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_44"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 28,
        "title": "Nuh",
        "titleAr":"نوح",
        "index": "071",
        "pages": "533",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_28"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 28,
        "title": "Al-Jinn",
        "titleAr":"الجن",
        "index": "072",
        "pages": "534",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_28"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 20,
        "title": "Al-Muzzammil",
        "titleAr":"المزمل",
        "index": "073",
        "pages": "537",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_20"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 56,
        "title": "Al-Muddaththir",
        "titleAr":"المدثر",
        "index": "074",
        "pages": "538",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_56"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 40,
        "title": "Al-Qiyamah",
        "titleAr":"القيامة",
        "index": "075",
        "pages": "540",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_40"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 31,
        "title": "Al-Insan",
        "titleAr":"الإنسان",
        "index": "076",
        "pages": "542",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_31"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 50,
        "title": "Al-Mursalat",
        "titleAr":"المرسلات",
        "index": "077",
        "pages": "544",
        "juz": [
            {
                "index": "29",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_50"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 40,
        "title": "An-Naba",
        "titleAr":"النبأ",
        "index": "078",
        "pages": "545",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_40"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 46,
        "title": "An-Naziat",
        "titleAr":"النازعات",
        "index": "079",
        "pages": "547",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_46"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 42,
        "title": "Abasa",
        "titleAr":"عبس",
        "index": "080",
        "pages": "548",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_42"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 29,
        "title": "At-Takwir",
        "titleAr":"التكوير",
        "index": "081",
        "pages": "550",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_29"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 19,
        "title": "Al-Infitar",
        "titleAr":"الإنفطار",
        "index": "082",
        "pages": "551",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_19"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 36,
        "title": "Al-Mutaffifin",
        "titleAr":"المطففين",
        "index": "083",
        "pages": "552",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_36"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 25,
        "title": "Al-Inshiqaq",
        "titleAr":"الإنشقاق",
        "index": "084",
        "pages": "553",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_25"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 22,
        "title": "Al-Buruj",
        "titleAr":"البروج",
        "index": "085",
        "pages": "554",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_22"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 17,
        "title": "At-Tariq",
        "titleAr":"الطارق",
        "index": "086",
        "pages": "555",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_17"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 19,
        "title": "Al-Ala",
        "titleAr":"الأعلى",
        "index": "087",
        "pages": "556",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_19"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 26,
        "title": "Al-Ghashiyah",
        "titleAr":"الغاشية",
        "index": "088",
        "pages": "556",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_26"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 30,
        "title": "Al-Fajr",
        "titleAr":"الفجر",
        "index": "089",
        "pages": "557",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_30"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 20,
        "title": "Al-Balad",
        "titleAr":"البلد",
        "index": "090",
        "pages": "559",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_20"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 15,
        "title": "Ash-Shams",
        "titleAr":"الشمس",
        "index": "091",
        "pages": "559",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_15"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 21,
        "title": "Al-Lail",
        "titleAr":"الليل",
        "index": "092",
        "pages": "560",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_21"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 11,
        "title": "Ad-Duha",
        "titleAr":"الضحى",
        "index": "093",
        "pages": "561",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_11"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 8,
        "title": "Ash-Sharh",
        "titleAr":"الشرح",
        "index": "094",
        "pages": "561",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_8"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 8,
        "title": "At-Tin",
        "titleAr":"التين",
        "index": "095",
        "pages": "562",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_8"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 19,
        "title": "Al-Alaq",
        "titleAr":"العلق",
        "index": "096",
        "pages": "562",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_19"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 5,
        "title": "Al-Qadr",
        "titleAr":"القدر",
        "index": "097",
        "pages": "563",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_5"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 8,
        "title": "Al-Bayinah",
        "titleAr":"البينة",
        "index": "098",
        "pages": "563",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_8"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 8,
        "title": "Az-Zalzalah",
        "titleAr":"الزلزلة",
        "index": "099",
        "pages": "564",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_8"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 11,
        "title": "Al-Adiyat",
        "titleAr":"العاديات",
        "index": "100",
        "pages": "564",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_11"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 11,
        "title": "Al-Qariah",
        "titleAr":"القارعة",
        "index": "101",
        "pages": "565",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_11"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 8,
        "title": "Al-Takathur",
        "titleAr":"التكاثر",
        "index": "102",
        "pages": "565",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_8"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 3,
        "title": "Al-Asr",
        "titleAr":"العصر",
        "index": "103",
        "pages": "566",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_3"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 9,
        "title": "Al-Humazah",
        "titleAr":"الهمزة",
        "index": "104",
        "pages": "566",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_9"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 5,
        "title": "Al-Fil",
        "titleAr":"الفيل",
        "index": "105",
        "pages": "566",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_5"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 4,
        "title": "Quraish",
        "titleAr":"قريش",
        "index": "106",
        "pages": "567",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_4"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 7,
        "title": "Al-Ma'un",
        "titleAr":"الماعون",
        "index": "107",
        "pages": "567",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_7"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 3,
        "title": "Al-Kauthar",
        "titleAr":"الكوثر",
        "index": "108",
        "pages": "567",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_3"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 6,
        "title": "Al-Kafirun",
        "titleAr":"الكافرون",
        "index": "109",
        "pages": "568",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_6"
                }
            }
        ]
    },
    {
        "place": "Medina",
        "type": "Madaniyah",
        "count": 3,
        "title": "An-Nasr",
        "titleAr":"النصر",
        "index": "110",
        "pages": "568",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_3"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 5,
        "title": "Al-Masad",
        "titleAr":"المسد",
        "index": "111",
        "pages": "568",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_5"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 4,
        "title": "Al-Ikhlas",
        "titleAr":"الإخلاص",
        "index": "112",
        "pages": "569",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_4"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 5,
        "title": "Al-Falaq",
        "titleAr":"الفلق",
        "index": "113",
        "pages": "569",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_5"
                }
            }
        ]
    },
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 6,
        "title": "An-Nas",
        "titleAr":"الناس",
        "index": "114",
        "pages": "569",
        "juz": [
            {
                "index": "30",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_6"
                }
            }
        ]
    }
];

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


    innerCode = innerCode+ 
    
    // `
    // <div class="col-lg-4 col-12 col-md-6 items">
    //     <div class="items-wrapper">
    //         <div class="inner-item">
    //             <img src="../eFortsHub.ico" alt="">
    //             <h4>`+title+`</h4>
    //             <p>`+'subtitle'+`</p>
    //             <h3>`+titleAr+`</h3>
    //         </div>
    //     </div>
    // </div>`;


`<div class="col-lg-4 col-12 col-md-6 items">
    <div class="items-wrapper dark-blue-content">
        <div class="inner-item">
            <div class="title-wrapper">
                <img src="../eFortsHub.ico" alt="">
                <div>
                    <h4 class="dark-blue-text">`+title+`</h4>
                    <p class="dark-blue-text">`+'subtitle'+`</p>
                </div>
            </div>
            <h3 class="dark-blue-text-2">`+titleAr+`</h3>
        </div>
    </div>
</div>`;


}

quranList.innerHTML = innerCode;