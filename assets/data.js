// Public portfolio categories and roles, with per-language copy.
const R = {
  sr:  {en:'Senior Developer',vi:'Lập trình viên cấp cao',th:'นักพัฒนาอาวุโส',lo:'ນັກພັດທະນາອາວຸໂສ'},
  jr:  {en:'Junior Developer',vi:'Lập trình viên',th:'นักพัฒนาระดับต้น',lo:'ນັກພັດທະນາລະດັບຕົ້ນ'},
  rn:  {en:'Senior React Native Developer',vi:'Lập trình viên React Native cấp cao',th:'นักพัฒนา React Native อาวุโส',lo:'ນັກພັດທະນາ React Native ອາວຸໂສ'},
  rjs: {en:'Senior ReactJS Developer',vi:'Lập trình viên ReactJS cấp cao',th:'นักพัฒนา ReactJS อาวุโส',lo:'ນັກພັດທະນາ ReactJS ອາວຸໂສ'},
  fs:  {en:'Senior Fullstack Developer',vi:'Lập trình viên Fullstack cấp cao',th:'นักพัฒนา Fullstack อาวุโส',lo:'ນັກພັດທະນາ Fullstack ອາວຸໂສ'},
};

const T_ = {
  "web": {
    "en": "Web application",
    "vi": "Ứng dụng web",
    "th": "เว็บแอปพลิเคชัน",
    "lo": "ແອັບເວັບ"
  },
  "mobile": {
    "en": "Mobile application",
    "vi": "Ứng dụng di động",
    "th": "แอปมือถือ",
    "lo": "ແອັບມືຖື"
  },
  "both": {
    "en": "Web and mobile applications",
    "vi": "Ứng dụng web và di động",
    "th": "เว็บแอปและแอปมือถือ",
    "lo": "ແອັບເວັບ ແລະ ແອັບມືຖື"
  }
};

const PROJECTS = [
  { id:"agriculture-commerce", name:{"en": "my.farm", "vi": "my.farm", "th": "my.farm", "lo": "my.farm"}, type:T_.mobile, role:R.sr },
  { id:"banking-application", name:{"en": "Green Nation", "vi": "Green Nation", "th": "Green Nation", "lo": "Green Nation"}, type:T_.both, role:R.fs },
  { id:"booking-application", name:{"en": "Easy Camping", "vi": "Easy Camping", "th": "Easy Camping", "lo": "Easy Camping"}, type:T_.mobile, role:R.sr },
  { id:"care-mobile", name:{"en": "Care Reach", "vi": "Care Reach", "th": "Care Reach", "lo": "Care Reach"}, type:T_.mobile, role:R.jr },
  { id:"care-platform", name:{"en": "Care-Aid System", "vi": "Care-Aid System", "th": "Care-Aid System", "lo": "Care-Aid System"}, type:T_.both, role:R.sr },
  { id:"commerce-platform", name:{"en": "Mercado", "vi": "Mercado", "th": "Mercado", "lo": "Mercado"}, type:T_.both, role:R.fs },
  { id:"connected-device", name:{"en": "Sasha BLE", "vi": "Sasha BLE", "th": "Sasha BLE", "lo": "Sasha BLE"}, type:T_.mobile, role:R.sr },
  { id:"corporate-reporting", name:{"en": "Pharma Disclosure System", "vi": "Pharma Disclosure System", "th": "Pharma Disclosure System", "lo": "Pharma Disclosure System"}, type:T_.web, role:R.sr },
  { id:"dating-application", name:{"en": "Bulting", "vi": "Bulting", "th": "Bulting", "lo": "Bulting"}, type:T_.both, role:R.fs },
  { id:"digital-banking", name:{"en": "Bylateral", "vi": "Bylateral", "th": "Bylateral", "lo": "Bylateral"}, type:T_.web, role:R.fs },
  { id:"document-storage-mobile", name:{"en": "689Cloud Secure Drive Mobile", "vi": "689Cloud Secure Drive Mobile", "th": "689Cloud Secure Drive Mobile", "lo": "689Cloud Secure Drive Mobile"}, type:T_.mobile, role:R.sr },
  { id:"document-storage-web", name:{"en": "689Cloud Secure Drive", "vi": "689Cloud Secure Drive", "th": "689Cloud Secure Drive", "lo": "689Cloud Secure Drive"}, type:T_.web, role:R.jr },
  { id:"commerce-website", name:{"en": "PREF Inc", "vi": "PREF Inc", "th": "PREF Inc", "lo": "PREF Inc"}, type:T_.web, role:R.rjs },
  { id:"education-marketplace", name:{"en": "Haksoop", "vi": "Haksoop", "th": "Haksoop", "lo": "Haksoop"}, type:T_.mobile, role:R.fs },
  { id:"email-marketing", name:{"en": "Obello", "vi": "Obello", "th": "Obello", "lo": "Obello"}, type:T_.web, role:R.fs },
  { id:"food-marketplace", name:{"en": "kookRule", "vi": "kookRule", "th": "kookRule", "lo": "kookRule"}, type:T_.both, role:R.fs },
  { id:"health-consultation", name:{"en": "Self-Care", "vi": "Self-Care", "th": "Self-Care", "lo": "Self-Care"}, type:T_.both, role:R.sr },
  { id:"healthcare-mobile", name:{"en": "HARKmed", "vi": "HARKmed", "th": "HARKmed", "lo": "HARKmed"}, type:T_.mobile, role:R.sr },
  { id:"healthcare-portal", name:{"en": "HARKmed Web", "vi": "HARKmed Web", "th": "HARKmed Web", "lo": "HARKmed Web"}, type:T_.web, role:R.rjs },
  { id:"investment-application", name:{"en": "BanCow", "vi": "BanCow", "th": "BanCow", "lo": "BanCow"}, type:T_.mobile, role:R.sr },
  { id:"messaging-operations", name:{"en": "MessageClub Operator", "vi": "MessageClub Operator", "th": "MessageClub Operator", "lo": "MessageClub Operator"}, type:T_.mobile, role:R.rn },
  { id:"mobile-wallet", name:{"en": "ON-CASH", "vi": "ON-CASH", "th": "ON-CASH", "lo": "ON-CASH"}, type:T_.mobile, role:R.rn },
  { id:"property-platform", name:{"en": "Stayra", "vi": "Stayra", "th": "Stayra", "lo": "Stayra"}, type:T_.both, role:R.fs },
  { id:"recruitment-writing", name:{"en": "SuperCoder Text Gen", "vi": "SuperCoder Text Gen", "th": "SuperCoder Text Gen", "lo": "SuperCoder Text Gen"}, type:T_.web, role:R.fs },
  { id:"social-commerce", name:{"en": "Branway", "vi": "Branway", "th": "Branway", "lo": "Branway"}, type:T_.web, role:R.rjs },
  { id:"vehicle-marketplace", name:{"en": "iTruck", "vi": "iTruck", "th": "iTruck", "lo": "iTruck"}, type:T_.both, role:R.fs }
];

const JOBS = [
  { company:'Innovators Hub Asia', start:'2023.03', end:null, current:true,
    role:{en:'Senior Software Development Engineer',vi:'Kỹ sư phát triển phần mềm cấp cao',th:'วิศวกรพัฒนาซอฟต์แวร์อาวุโส',lo:'ວິສະວະກອນພັດທະນາຊອບແວອາວຸໂສ'} },
  { company:'DigiEx Group', start:'2021.11', end:'2023.03',
    role:{en:'Senior ReactJS Developer',vi:'Lập trình viên ReactJS cấp cao',th:'นักพัฒนา ReactJS อาวุโส',lo:'ນັກພັດທະນາ ReactJS ອາວຸໂສ'} },
  { company:'689Cloud', start:'2019.02', end:'2021.11',
    role:{en:'Senior Software Engineer',vi:'Kỹ sư phần mềm cấp cao',th:'วิศวกรซอฟต์แวร์อาวุโส',lo:'ວິສະວະກອນຊອບແວອາວຸໂສ'} },
];

const SKILLS = [
  { name:'React', years:7 }, { name:'React Native', years:7 },
  { name:'TypeScript', years:6 }, { name:'Java', years:5 },
  { name:'MySQL', years:5 }, { name:'MongoDB', years:5 },
  { name:'NestJS', years:3 }, { name:'Angular', years:3 },
];
