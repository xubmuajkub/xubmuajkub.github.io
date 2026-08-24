// Project data. `type` and `role` carry per-language copy.
// Dates verified against git history where a repo exists locally.
const P = (id,name,start,end,company,stack,type,role,extra={}) =>
  ({ id, name, start, end, company, stack, type, role, ...extra });

const R = {
  sr:  {en:'Senior Developer',vi:'Lập trình viên cấp cao',th:'นักพัฒนาอาวุโส',lo:'ນັກພັດທະນາອາວຸໂສ'},
  jr:  {en:'Junior Developer',vi:'Lập trình viên',th:'นักพัฒนาระดับต้น',lo:'ນັກພັດທະນາລະດັບຕົ້ນ'},
  rn:  {en:'Senior React Native Developer',vi:'Lập trình viên React Native cấp cao',th:'นักพัฒนา React Native อาวุโส',lo:'ນັກພັດທະນາ React Native ອາວຸໂສ'},
  rjs: {en:'Senior ReactJS Developer',vi:'Lập trình viên ReactJS cấp cao',th:'นักพัฒนา ReactJS อาวุโส',lo:'ນັກພັດທະນາ ReactJS ອາວຸໂສ'},
  fs:  {en:'Senior Fullstack Developer',vi:'Lập trình viên Fullstack cấp cao',th:'นักพัฒนา Fullstack อาวุโส',lo:'ນັກພັດທະນາ Fullstack ອາວຸໂສ'},
};

const T_ = {
  wip:      {en:'In progress',vi:'Đang thực hiện',th:'กำลังดำเนินการ',lo:'ກຳລັງດຳເນີນການ'},
  web:      {en:'Web application',vi:'Ứng dụng web',th:'เว็บแอปพลิเคชัน',lo:'ແອັບເວັບ'},
  mobile:   {en:'Mobile application',vi:'Ứng dụng di động',th:'แอปมือถือ',lo:'ແອັບມືຖື'},
  medical:  {en:'Medical app with IoT device integration',vi:'Ứng dụng y tế tích hợp thiết bị IoT',th:'แอปการแพทย์เชื่อมต่ออุปกรณ์ IoT',lo:'ແອັບການແພດເຊື່ອມຕໍ່ອຸປະກອນ IoT'},
  medweb:   {en:'Medical platform, web client',vi:'Nền tảng y tế, giao diện web',th:'แพลตฟอร์มการแพทย์ ฝั่งเว็บ',lo:'ແພລດຟອມການແພດ, ດ້ານເວັບ'},
  pay:      {en:'Mobile payment app',vi:'Ứng dụng thanh toán di động',th:'แอปชำระเงินบนมือถือ',lo:'ແອັບຊຳລະເງິນມືຖື'},
  ecom:     {en:'E-commerce platform',vi:'Nền tảng thương mại điện tử',th:'แพลตฟอร์มอีคอมเมิร์ซ',lo:'ແພລດຟອມອີຄອມເມີຊ'},
  rental:   {en:'Truck rental app (Korea)',vi:'Ứng dụng thuê xe tải (Hàn Quốc)',th:'แอปเช่ารถบรรทุก (เกาหลี)',lo:'ແອັບເຊົ່າລົດບັນທຸກ (ເກົາຫຼີ)'},
  invest:   {en:'Investment app (Korea)',vi:'Ứng dụng đầu tư (Hàn Quốc)',th:'แอปการลงทุน (เกาหลี)',lo:'ແອັບການລົງທຶນ (ເກົາຫຼີ)'},
  health:   {en:'Healthcare consulting app',vi:'Ứng dụng tư vấn sức khỏe',th:'แอปให้คำปรึกษาด้านสุขภาพ',lo:'ແອັບໃຫ້ຄຳປຶກສາສຸຂະພາບ'},
  care:     {en:'Care platform',vi:'Nền tảng chăm sóc',th:'แพลตฟอร์มดูแลผู้ป่วย',lo:'ແພລດຟອມການດູແລ'},
  booking:  {en:'Booking app',vi:'Ứng dụng đặt chỗ',th:'แอปจองที่พัก',lo:'ແອັບຈອງບ່ອນ'},
  disclose: {en:'Corporate disclosure system',vi:'Hệ thống công bố thông tin doanh nghiệp',th:'ระบบเปิดเผยข้อมูลองค์กร',lo:'ລະບົບເປີດເຜີຍຂໍ້ມູນອົງກອນ'},
  drive:    {en:'Secure file storage',vi:'Lưu trữ tệp bảo mật',th:'ระบบจัดเก็บไฟล์แบบปลอดภัย',lo:'ລະບົບເກັບໄຟລ໌ແບບປອດໄພ'},
  ble:      {en:'Bluetooth LE hardware companion app',vi:'Ứng dụng đồng hành thiết bị Bluetooth LE',th:'แอปคู่กับอุปกรณ์ Bluetooth LE',lo:'ແອັບຄູ່ກັບອຸປະກອນ Bluetooth LE'},
  ops:      {en:'Operator app',vi:'Ứng dụng vận hành',th:'แอปสำหรับผู้ดูแลระบบ',lo:'ແອັບສຳລັບຜູ້ດຳເນີນງານ'},
  suite:    {en:'Multi-app product suite',vi:'Bộ sản phẩm nhiều ứng dụng',th:'ชุดผลิตภัณฑ์หลายแอป',lo:'ຊຸດຜະລິດຕະພັນຫຼາຍແອັບ'},
  saas:     {en:'Web platform',vi:'Nền tảng web',th:'แพลตฟอร์มเว็บ',lo:'ແພລດຟອມເວັບ'},
  aitool:   {en:'AI text generation tool',vi:'Công cụ sinh văn bản AI',th:'เครื่องมือสร้างข้อความด้วย AI',lo:'ເຄື່ອງມືສ້າງຂໍ້ຄວາມດ້ວຍ AI'},
};

const PROJECTS = [
  P('bylateral','Bylateral','2026.08',null,'Innovators Hub Asia',['TBD'],T_.wip,R.sr,{current:true}),
  P('harkmed-web','HARKmed Web','2024.12','2026.02','Innovators Hub Asia',['React','Redux Toolkit','TypeScript','Tailwind'],T_.medweb,R.rjs),
  P('obello','Obello','2024.11','2026.07','Innovators Hub Asia',['React','MySQL','MongoDB'],T_.web,R.rjs),
  P('msc','MessageClub Operator','2023.08','2024.05','DigiEx Group',['React Native','Expo','TypeScript','Tailwind'],T_.ops,R.rn),
  P('oncash','ON-CASH','2023.06','2024.02','DigiEx Group',['React Native','React','NestJS','TypeScript','MySQL'],T_.pay,R.rn),
  P('harkmed','HARKmed','2023.05','2025.11','Innovators Hub Asia',['React Native','MySQL','MongoDB'],T_.medical,R.sr),
  P('sasha','Sasha BLE','2023.05','2026.08','Freelance',['React Native','Redux Toolkit','TypeScript','Tailwind'],T_.ble,R.sr),
  P('greennation','Green Nation','2023.02','2025.09','DigiEx Group',['React','React Native','TypeScript','Tailwind'],T_.suite,R.fs),
  P('bulting','Bulting','2023.02','2023.04','DigiEx Group',['React Native','React','Redux','Java'],T_.suite,R.fs),
  P('kookrule','kookRule','2023.01','2023.04','DigiEx Group',['React','React Native','Java'],T_.saas,R.fs),
  P('pref','PREF Inc','2022.11','2023.12','DigiEx Group',['React','MongoDB','MySQL'],T_.ecom,R.rjs,{url:'http://prefinc.com/'}),
  P('haksoop','Haksoop','2022.09','2023.01','DigiEx Group',['React Native','NestJS','TypeORM','TypeScript'],T_.mobile,R.fs),
  P('branway','Branway','2022.08','2023.04','DigiEx Group',['Next.js','React','TypeScript'],T_.saas,R.rjs),
  P('itruck','iTruck','2022.07','2023.02','DigiEx Group',['React Native','Expo','TypeScript','Java','MySQL'],T_.rental,R.fs,{url:'https://www.itruck.co.kr'}),
  P('mercado','Mercado','2022.04','2023.03','DigiEx Group',['React','React Native','Node.js'],T_.ecom,R.fs),
  P('bancow','BanCow','2021.08','2022.07','DigiEx Group',['React Native','Expo','Redux Toolkit','TypeScript'],T_.invest,R.sr,{url:'https://www.bancow.co.kr'}),
  P('camping','Easy Camping','2021.11','2021.12','DigiEx Group',['React Native','TypeScript'],T_.booking,R.sr),
  P('myfarm','my.farm','2021.06','2021.08','689Cloud',['React Native','React','TypeScript','Android'],T_.ecom,R.sr),
  P('supercoder','SuperCoder Text Gen','2021.05','2023.04','DigiEx Group',['Angular','TypeScript','Java'],T_.aitool,R.fs),
  P('careaid','Care-Aid System','2021.04','2023.06','689Cloud',['React Native','Expo','Redux Toolkit','React'],T_.care,R.sr),
  P('selfcare','Self-Care','2021.03','2021.05','689Cloud',['React Native','React','TypeScript'],T_.health,R.sr),
  P('pharma','Pharma Disclosure System','2020.04','2021.11','689Cloud',['React','Java'],T_.disclose,R.sr),
  P('drive-mobile','689Cloud Secure Drive Mobile','2019.10','2020.09','689Cloud',['React Native'],T_.drive,R.sr),
  P('carereach','Care Reach','2019.06','2019.12','689Cloud',['NativeScript'],T_.mobile,R.jr),
  P('drive-web','689Cloud Secure Drive','2018.06','2019.06','689Cloud',['Angular','AngularJS','Java'],T_.drive,R.jr),
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
