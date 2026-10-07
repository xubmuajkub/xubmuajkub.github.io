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
  { id:"agriculture-commerce", name:{"en": "Agriculture commerce app", "vi": "Ứng dụng thương mại nông sản", "th": "แอปค้าสินค้าเกษตร", "lo": "ແອັບຄ້າສິນຄ້າກະສິກຳ"}, type:T_.mobile, role:R.sr },
  { id:"banking-application", name:{"en": "Banking application", "vi": "Ứng dụng ngân hàng", "th": "แอปธนาคาร", "lo": "ແອັບທະນາຄານ"}, type:T_.both, role:R.fs },
  { id:"booking-application", name:{"en": "Booking app", "vi": "Ứng dụng đặt chỗ", "th": "แอปจอง", "lo": "ແອັບຈອງ"}, type:T_.mobile, role:R.sr },
  { id:"care-mobile", name:{"en": "Care services app", "vi": "Ứng dụng dịch vụ chăm sóc", "th": "แอปบริการดูแล", "lo": "ແອັບບໍລິການດູແລ"}, type:T_.mobile, role:R.jr },
  { id:"care-platform", name:{"en": "Care services platform", "vi": "Nền tảng dịch vụ chăm sóc", "th": "แพลตฟอร์มบริการดูแล", "lo": "ແພລດຟອມບໍລິການດູແລ"}, type:T_.both, role:R.sr },
  { id:"commerce-platform", name:{"en": "Commerce platform", "vi": "Nền tảng thương mại", "th": "แพลตฟอร์มการค้า", "lo": "ແພລດຟອມການຄ້າ"}, type:T_.both, role:R.fs },
  { id:"connected-device", name:{"en": "Connected-device app", "vi": "Ứng dụng kết nối thiết bị", "th": "แอปเชื่อมต่ออุปกรณ์", "lo": "ແອັບເຊື່ອມຕໍ່ອຸປະກອນ"}, type:T_.mobile, role:R.sr },
  { id:"corporate-reporting", name:{"en": "Corporate reporting system", "vi": "Hệ thống báo cáo doanh nghiệp", "th": "ระบบรายงานขององค์กร", "lo": "ລະບົບລາຍງານອົງກອນ"}, type:T_.web, role:R.sr },
  { id:"dating-application", name:{"en": "Dating app", "vi": "Ứng dụng hẹn hò", "th": "แอปหาคู่", "lo": "ແອັບຫາຄູ່"}, type:T_.both, role:R.fs },
  { id:"digital-banking", name:{"en": "Digital banking platform", "vi": "Nền tảng ngân hàng số", "th": "แพลตฟอร์มธนาคารดิจิทัล", "lo": "ແພລດຟອມທະນາຄານດິຈິຕອນ"}, type:T_.web, role:R.fs },
  { id:"document-storage-mobile", name:{"en": "Document storage app", "vi": "Ứng dụng lưu trữ tài liệu", "th": "แอปจัดเก็บเอกสาร", "lo": "ແອັບເກັບເອກະສານ"}, type:T_.mobile, role:R.sr },
  { id:"document-storage-web", name:{"en": "Document storage website", "vi": "Website lưu trữ tài liệu", "th": "เว็บไซต์จัดเก็บเอกสาร", "lo": "ເວັບໄຊເກັບເອກະສານ"}, type:T_.web, role:R.jr },
  { id:"commerce-website", name:{"en": "E-commerce website", "vi": "Website thương mại điện tử", "th": "เว็บไซต์อีคอมเมิร์ซ", "lo": "ເວັບໄຊອີຄອມເມີຊ"}, type:T_.web, role:R.rjs },
  { id:"education-marketplace", name:{"en": "Education marketplace", "vi": "Nền tảng kết nối dịch vụ giáo dục", "th": "ตลาดบริการการศึกษา", "lo": "ຕະຫຼາດບໍລິການການສຶກສາ"}, type:T_.mobile, role:R.fs },
  { id:"email-marketing", name:{"en": "Email marketing platform", "vi": "Nền tảng tiếp thị qua email", "th": "แพลตฟอร์มการตลาดผ่านอีเมล", "lo": "ແພລດຟອມການຕະຫຼາດຜ່ານອີເມວ"}, type:T_.web, role:R.fs },
  { id:"food-marketplace", name:{"en": "Food marketplace", "vi": "Sàn thương mại thực phẩm", "th": "ตลาดอาหารออนไลน์", "lo": "ຕະຫຼາດອາຫານອອນລາຍ"}, type:T_.both, role:R.fs },
  { id:"health-consultation", name:{"en": "Health consultation app", "vi": "Ứng dụng tư vấn sức khỏe", "th": "แอปปรึกษาสุขภาพ", "lo": "ແອັບປຶກສາສຸຂະພາບ"}, type:T_.both, role:R.sr },
  { id:"healthcare-mobile", name:{"en": "Healthcare mobile app", "vi": "Ứng dụng y tế di động", "th": "แอปสุขภาพบนมือถือ", "lo": "ແອັບສຸຂະພາບມືຖື"}, type:T_.mobile, role:R.sr },
  { id:"healthcare-portal", name:{"en": "Healthcare web portal", "vi": "Cổng thông tin y tế", "th": "พอร์ทัลเว็บด้านสุขภาพ", "lo": "ພອດທັນເວັບດ້ານສຸຂະພາບ"}, type:T_.web, role:R.rjs },
  { id:"investment-application", name:{"en": "Investment app", "vi": "Ứng dụng đầu tư", "th": "แอปการลงทุน", "lo": "ແອັບການລົງທຶນ"}, type:T_.mobile, role:R.sr },
  { id:"messaging-operations", name:{"en": "Messaging operations app", "vi": "Ứng dụng quản lý tin nhắn", "th": "แอปจัดการข้อความ", "lo": "ແອັບຈັດການຂໍ້ຄວາມ"}, type:T_.mobile, role:R.rn },
  { id:"mobile-wallet", name:{"en": "Mobile wallet", "vi": "Ví di động", "th": "กระเป๋าเงินบนมือถือ", "lo": "ກະເປົາເງິນມືຖື"}, type:T_.mobile, role:R.rn },
  { id:"property-platform", name:{"en": "Property management platform", "vi": "Nền tảng quản lý bất động sản", "th": "แพลตฟอร์มบริหารอสังหาริมทรัพย์", "lo": "ແພລດຟອມບໍລິຫານອະສັງຫາລິມະຊັບ"}, type:T_.both, role:R.fs },
  { id:"recruitment-writing", name:{"en": "Recruitment writing tool", "vi": "Công cụ viết cho tuyển dụng", "th": "เครื่องมือเขียนสำหรับการสรรหาบุคลากร", "lo": "ເຄື່ອງມືຂຽນສຳລັບການສັນຫາ"}, type:T_.web, role:R.fs },
  { id:"social-commerce", name:{"en": "Social commerce website", "vi": "Website thương mại xã hội", "th": "เว็บไซต์โซเชียลคอมเมิร์ซ", "lo": "ເວັບໄຊໂຊຊຽວຄອມເມີຊ"}, type:T_.web, role:R.rjs },
  { id:"vehicle-marketplace", name:{"en": "Vehicle marketplace", "vi": "Sàn thương mại xe", "th": "ตลาดรถออนไลน์", "lo": "ຕະຫຼາດລົດອອນລາຍ"}, type:T_.both, role:R.fs }
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
