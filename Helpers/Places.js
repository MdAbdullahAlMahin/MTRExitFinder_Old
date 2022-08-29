const places_nearby = {
  kennedytown: {
    A: [
      "明愛莫張瑞勤社區中心", 
      "聖母玫瑰堂",
      "士美菲路",
      "士美菲路市政大廈, 學士臺",
      "士美菲園",
      "翠麗苑",
      "翰林軒",
      "慧華閣",
      "聖嘉祿學校",
      "專線小巴站"

      /*"Caritas Mok Cheung Sui Kun Community Centre",
      "Our Lady of the Rosary Church",
      "Smithfield Municipal Services Building, Academic Terrace",
      "Smithfield Garden",
      "Tresend Garden",
    "University Heights",
      "Wai Wah Court",
      "St. Charles School",
      "Bus Stops",*/
    ],
    B: [
      "石山街",
      "寶雅山",
"恩悅綜合家庭服務中心",
"海怡花園",
"羲皇臺",
"Imperial Kennedy",
"堅尼地城社區綜合大樓",
"采逸軒",
"Lexington Hill",
"樂群社會服務處",
"五福大廈",
"盈基花園"
      /*"Skyla",
      "Kennedy Town Centre",
      "Belcher Bay Park",
      "Grace and Joy Integrated Family Services Centre",
      "Kennedy Town Community Complex",
    "Lok Kwan Social Service",
      "Belcher's Hill",
     "Harbour View Garden",
      "Hee Wong Terrace",
     "Imperial Kennedy",
      "La Maison Du Nord",
      "Lexington Hill",
     "New Fortune House",
      "Tai Pak Terrace",
      "The Kennedy on Belcher's",
      "Ying Ga Garden",*/
    ],
    C: [
      "科士街",
"加多近山",
"加惠臺／怡峯",
"百年大樓",
"嘉融酒店",
"觀龍樓",
"聯邦新樓",
"西環邨",
"聖公會呂明才紀念小學",
"嘉輝花園",
"浚峯",
"泓都"
      /*"Concord Hotel",
      "HKSKH St. Luke's Settlement",
      "Kennedy Town Jockey Club Clinic",
      "Cadogan",
     "Cayman Rise",
      "Centenary Mansion",
      "Ka On Building",
     "Kwun Lung Lau",
      "Luen Bong Apartment",
      "Manhattan Heights",
      "Mount Davis 33",
      "Sai Wan Estate",
      "Smithfield Court",
      "Smithfield Terrace",
      "The Hudson",
      "The Merton",
     "Island Waldorf School",
    "SKH Lui Ming Choi Memorial Primary School",
     "Bus Stops",*/
    ],
  },
  tseungkwano: {
    A: [
      "TKO Spot",
      "ELCHK, Sheung Tak Integrated Youth Service",
      "Haven of Hope District Elderly Community Service - Sheung Tak Centre",
      "Hong Kong Velodrome",
      "Tseung Kwan O Sports Ground",
      "Beverly Garden",
      "Kwong Ming Court",
      "Oscar By The Sea",
      "Po Ming Court",
      "Sheung Tak Estate"
    ],
    B: [
      "Haven of Hope Hospital",
      'Capri Place',
      'PopWalk 2',
      'PopWalk 3',
      "Tseung Kwan O Smart Identity Card Replacement Centre",
      "Capri",
      "Corinthia By The Sea",
    ],
    C: [
      "Crowne Plaza Hong Kong Kowloon East",
      "Holiday Inn Express Hong Kong Kowloon East",
      "PopCorn",
      "The Wings",
      
    ],
  },
};

const useNearbyPlaces = (station, exit) => {
  return places_nearby[station][exit];
};

export default useNearbyPlaces;
