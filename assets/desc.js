// One-line project descriptions. Grounded in each repo's actual dependencies and README.
const DESC = {
  stayra: {
    en:'Booking and management platform for hotels, apartments and guesthouses in Laos. NestJS and TypeORM API over PostgreSQL/PostGIS with Redis queues, realtime sockets and OpenTelemetry tracing; Nuxt 4 guest, owner and admin web app; Flutter mobile app; Next.js marketing site on Cloudflare Workers. Handles payments, leases, utility meters and Lao tax withholding.',
    vi:'Nền tảng đặt phòng và quản lý cho khách sạn, căn hộ và nhà nghỉ tại Lào. API NestJS và TypeORM trên PostgreSQL/PostGIS với hàng đợi Redis, socket thời gian thực và tracing OpenTelemetry; ứng dụng web Nuxt 4 cho khách, chủ nhà và quản trị; ứng dụng di động Flutter; trang marketing Next.js trên Cloudflare Workers. Xử lý thanh toán, hợp đồng thuê, đồng hồ tiện ích và khấu trừ thuế Lào.',
    th:'แพลตฟอร์มจองและบริหารจัดการโรงแรม อพาร์ตเมนต์ และเกสต์เฮาส์ในลาว API เขียนด้วย NestJS และ TypeORM บน PostgreSQL/PostGIS พร้อมคิว Redis, ซ็อกเก็ตเรียลไทม์ และ tracing ด้วย OpenTelemetry; เว็บแอป Nuxt 4 สำหรับผู้เข้าพัก เจ้าของ และผู้ดูแล; แอปมือถือ Flutter; เว็บไซต์การตลาด Next.js บน Cloudflare Workers รองรับการชำระเงิน สัญญาเช่า มิเตอร์สาธารณูปโภค และการหักภาษี ณ ที่จ่ายของลาว',
    lo:'ແພລດຟອມການຈອງ ແລະ ບໍລິຫານໂຮງແຮມ, ອາພາດເມັນ ແລະ ເຮືອນພັກໃນລາວ. API ຂຽນດ້ວຍ NestJS ແລະ TypeORM ເທິງ PostgreSQL/PostGIS ພ້ອມຄິວ Redis, ຊັອກເກັດແບບສົດ ແລະ tracing ດ້ວຍ OpenTelemetry; ແອັບເວັບ Nuxt 4 ສຳລັບແຂກ, ເຈົ້າຂອງ ແລະ ຜູ້ດູແລ; ແອັບມືຖື Flutter; ເວັບໄຊການຕະຫຼາດ Next.js ເທິງ Cloudflare Workers. ຮອງຮັບການຊຳລະເງິນ, ສັນຍາເຊົ່າ, ມິເຕີສາທາລະນູປະໂພກ ແລະ ການຫັກພາສີ ນ ທີ່ຈ່າຍຂອງລາວ.' },
  bylateral: {
    en:'npm-workspaces monorepo holding the client and admin apps, with Azure AD and Google sign-in and a containerised deploy.',
    vi:'Monorepo npm workspaces gồm ứng dụng khách và quản trị, đăng nhập Azure AD và Google, triển khai bằng container.',
    th:'โมโนรีโปแบบ npm workspaces รวมแอปลูกค้าและแอปผู้ดูแล ล็อกอินด้วย Azure AD และ Google ดีพลอยผ่านคอนเทนเนอร์',
    lo:'ໂມໂນຣີໂປແບບ npm workspaces ລວມແອັບລູກຄ້າ ແລະ ແອັບຜູ້ດູແລ, ເຂົ້າສູ່ລະບົບດ້ວຍ Azure AD ແລະ Google, ດີພລອຍຜ່ານຄອນເທນເນີ.' },
  'harkmed-web': {
    en:'Web client for the HARKmed platform — Auth0 sign-in, React Query data layer, CSV export, timezone-aware scheduling.',
    vi:'Giao diện web cho nền tảng HARKmed — đăng nhập Auth0, tầng dữ liệu React Query, xuất CSV, lịch theo múi giờ.',
    th:'เว็บไคลเอนต์ของแพลตฟอร์ม HARKmed — ล็อกอินด้วย Auth0, จัดการข้อมูลด้วย React Query, ส่งออก CSV, ตารางเวลาตามโซนเวลา',
    lo:'ເວັບໄຄລເອັນຂອງແພລດຟອມ HARKmed — ເຂົ້າສູ່ລະບົບ Auth0, ຊັ້ນຂໍ້ມູນ React Query, ສົ່ງອອກ CSV, ຕາຕະລາງຕາມເຂດເວລາ.' },
  obello: {
    en:'Email marketing platform spread over six repositories — drag-and-drop email builder, template gallery, brand elements, admin portal and a shared component library. Roughly 48,000 commits over three and a half years.',
    vi:'Nền tảng email marketing trải trên sáu repository — trình dựng email kéo thả, thư viện mẫu, bộ nhận diện thương hiệu, cổng quản trị và thư viện component dùng chung. Khoảng 48.000 commit trong ba năm rưỡi.',
    th:'แพลตฟอร์มการตลาดผ่านอีเมลกระจายอยู่ในหกรีโป — ตัวสร้างอีเมลแบบลากวาง, คลังเทมเพลต, ชุดแบรนด์, พอร์ทัลผู้ดูแล และไลบรารีคอมโพเนนต์ที่ใช้ร่วมกัน ราว 48,000 คอมมิตในสามปีครึ่ง',
    lo:'ແພລດຟອມການຕະຫຼາດຜ່ານອີເມວກະຈາຍຢູ່ໃນຫົກຣີໂປ — ຕົວສ້າງອີເມວແບບລາກວາງ, ຄັງເທັມເພລດ, ຊຸດແບຣນ, ພອດທັນຜູ້ດູແລ ແລະ ໄລບຣາຣີຄອມໂພເນນທີ່ໃຊ້ຮ່ວມກັນ. ປະມານ 48,000 ຄອມມິດໃນສາມປີເຄິ່ງ.' },
  msc: {
    en:'Operator app on Expo — realtime messaging on Firestore, push via Notifee, Google and Apple sign-in.',
    vi:'Ứng dụng vận hành trên Expo — nhắn tin thời gian thực với Firestore, thông báo đẩy qua Notifee, đăng nhập Google và Apple.',
    th:'แอปผู้ดูแลระบบบน Expo — แชทเรียลไทม์ด้วย Firestore, แจ้งเตือนผ่าน Notifee, ล็อกอิน Google และ Apple',
    lo:'ແອັບຜູ້ດຳເນີນງານເທິງ Expo — ສົ່ງຂໍ້ຄວາມແບບສົດດ້ວຍ Firestore, ແຈ້ງເຕືອນຜ່ານ Notifee, ເຂົ້າສູ່ລະບົບ Google ແລະ Apple.' },
  oncash: {
    en:'Wallet and payments app with push notifications and Sentry crash reporting, plus a React admin console.',
    vi:'Ứng dụng ví và thanh toán có thông báo đẩy và báo lỗi Sentry, kèm bảng quản trị React.',
    th:'แอปกระเป๋าเงินและชำระเงิน พร้อมแจ้งเตือนและรายงานข้อผิดพลาดด้วย Sentry รวมถึงหน้าจัดการด้วย React',
    lo:'ແອັບກະເປົາເງິນ ແລະ ຊຳລະເງິນ ພ້ອມແຈ້ງເຕືອນ ແລະ ລາຍງານຂໍ້ຜິດພາດດ້ວຍ Sentry, ພ້ອມໜ້າຈັດການດ້ວຍ React.' },
  harkmed: {
    en:'React Native app paired with IoT medical devices for patient monitoring.',
    vi:'Ứng dụng React Native kết nối thiết bị y tế IoT để theo dõi bệnh nhân.',
    th:'แอป React Native ที่เชื่อมต่ออุปกรณ์การแพทย์ IoT เพื่อติดตามอาการผู้ป่วย',
    lo:'ແອັບ React Native ເຊື່ອມຕໍ່ອຸປະກອນການແພດ IoT ເພື່ອຕິດຕາມຄົນເຈັບ.' },
  sasha: {
    en:'Companion app for Bluetooth LE hardware — MobX State Tree store, over-the-air updates via CodePush, multi-language UI.',
    vi:'Ứng dụng đồng hành cho phần cứng Bluetooth LE — trạng thái MobX State Tree, cập nhật OTA qua CodePush, giao diện đa ngôn ngữ.',
    th:'แอปคู่กับอุปกรณ์ Bluetooth LE — จัดการสถานะด้วย MobX State Tree, อัปเดต OTA ผ่าน CodePush, รองรับหลายภาษา',
    lo:'ແອັບຄູ່ກັບອຸປະກອນ Bluetooth LE — ຈັດການສະຖານະດ້ວຍ MobX State Tree, ອັບເດດ OTA ຜ່ານ CodePush, ຮອງຮັບຫຼາຍພາສາ.' },
  greennation: {
    en:'Fintech super-app: Mapbox and Google Maps, SumSub KYC onboarding, MeaWallet card provisioning, Intercom support, Firebase messaging and CodePush releases. Around 7,400 commits over two and a half years.',
    vi:'Siêu ứng dụng fintech: Mapbox và Google Maps, định danh KYC SumSub, phát hành thẻ MeaWallet, hỗ trợ Intercom, Firebase messaging và cập nhật CodePush. Khoảng 7.400 commit trong hai năm rưỡi.',
    th:'ซูเปอร์แอปฟินเทค: Mapbox และ Google Maps, ยืนยันตัวตน KYC ด้วย SumSub, ออกบัตรผ่าน MeaWallet, ซัพพอร์ตด้วย Intercom, Firebase messaging และปล่อยอัปเดตด้วย CodePush ราว 7,400 คอมมิตในสองปีครึ่ง',
    lo:'ຊຸບເປີແອັບຟິນເທັກ: Mapbox ແລະ Google Maps, ຢືນຢັນຕົວຕົນ KYC ດ້ວຍ SumSub, ອອກບັດຜ່ານ MeaWallet, ຊັບພອດດ້ວຍ Intercom, Firebase messaging ແລະ ປ່ອຍອັບເດດດ້ວຍ CodePush. ປະມານ 7,400 ຄອມມິດໃນສອງປີເຄິ່ງ.' },
  bulting: {
    en:'React Native app with in-app purchases, geolocation, social sign-in and push, alongside a React admin console and Java backend.',
    vi:'Ứng dụng React Native có mua hàng trong ứng dụng, định vị, đăng nhập mạng xã hội và thông báo đẩy, kèm bảng quản trị React và backend Java.',
    th:'แอป React Native รองรับการซื้อในแอป, ระบุตำแหน่ง, ล็อกอินผ่านโซเชียล และแจ้งเตือน พร้อมหน้าจัดการ React และแบ็กเอนด์ Java',
    lo:'ແອັບ React Native ຮອງຮັບການຊື້ໃນແອັບ, ລະບຸຕຳແໜ່ງ, ເຂົ້າສູ່ລະບົບຜ່ານໂຊຊຽວ ແລະ ແຈ້ງເຕືອນ, ພ້ອມໜ້າຈັດການ React ແລະ ແບັກເອນ Java.' },
  kookrule: {
    en:'React web app with ConnectLive video, Daum address lookup, Iamport payments and Kakao sharing, over a Java API.',
    vi:'Ứng dụng web React với video ConnectLive, tra cứu địa chỉ Daum, thanh toán Iamport và chia sẻ Kakao, trên API Java.',
    th:'เว็บแอป React พร้อมวิดีโอ ConnectLive, ค้นหาที่อยู่ Daum, ชำระเงิน Iamport และแชร์ผ่าน Kakao บน API ที่เขียนด้วย Java',
    lo:'ແອັບເວັບ React ພ້ອມວິດີໂອ ConnectLive, ຄົ້ນຫາທີ່ຢູ່ Daum, ຊຳລະເງິນ Iamport ແລະ ແບ່ງປັນຜ່ານ Kakao, ເທິງ API ທີ່ຂຽນດ້ວຍ Java.' },
  pref: {
    en:'E-commerce web app on React with MongoDB and MySQL.',
    vi:'Ứng dụng web thương mại điện tử trên React với MongoDB và MySQL.',
    th:'เว็บแอปอีคอมเมิร์ซบน React ใช้ MongoDB และ MySQL',
    lo:'ແອັບເວັບອີຄອມເມີຊເທິງ React ໃຊ້ MongoDB ແລະ MySQL.' },
  haksoop: {
    en:'React Native app with Kakao, Google and Apple login, geolocation, push and Crashlytics, on a NestJS and TypeORM backend.',
    vi:'Ứng dụng React Native với đăng nhập Kakao, Google và Apple, định vị, thông báo đẩy và Crashlytics, backend NestJS và TypeORM.',
    th:'แอป React Native ล็อกอินด้วย Kakao, Google และ Apple, ระบุตำแหน่ง, แจ้งเตือน และ Crashlytics บนแบ็กเอนด์ NestJS กับ TypeORM',
    lo:'ແອັບ React Native ເຂົ້າສູ່ລະບົບດ້ວຍ Kakao, Google ແລະ Apple, ລະບຸຕຳແໜ່ງ, ແຈ້ງເຕືອນ ແລະ Crashlytics, ເທິງແບັກເອນ NestJS ແລະ TypeORM.' },
  branway: {
    en:'Next.js site with MobX state, video playback and carousel-driven pages.',
    vi:'Trang Next.js với trạng thái MobX, phát video và các trang dạng carousel.',
    th:'เว็บไซต์ Next.js จัดการสถานะด้วย MobX พร้อมเล่นวิดีโอและหน้าแบบคาร์รูเซล',
    lo:'ເວັບໄຊ Next.js ຈັດການສະຖານະດ້ວຍ MobX ພ້ອມຫຼິ້ນວິດີໂອ ແລະ ໜ້າແບບຄາຣູເຊວ.' },
  itruck: {
    en:'Truck rental app with Kakao login, Daum address lookup, image pickers, push and Firebase analytics, plus a native Android module.',
    vi:'Ứng dụng thuê xe tải với đăng nhập Kakao, tra cứu địa chỉ Daum, chọn ảnh, thông báo đẩy và Firebase analytics, kèm module Android native.',
    th:'แอปเช่ารถบรรทุก ล็อกอิน Kakao, ค้นหาที่อยู่ Daum, เลือกรูปภาพ, แจ้งเตือน และ Firebase analytics พร้อมโมดูล Android เนทีฟ',
    lo:'ແອັບເຊົ່າລົດບັນທຸກ ເຂົ້າສູ່ລະບົບ Kakao, ຄົ້ນຫາທີ່ຢູ່ Daum, ເລືອກຮູບ, ແຈ້ງເຕືອນ ແລະ Firebase analytics, ພ້ອມໂມດູນ Android ເນທີບ.' },
  mercado: {
    en:'Korean e-commerce suite — customer web, admin console and React Native app.',
    vi:'Bộ thương mại điện tử Hàn Quốc — web khách hàng, bảng quản trị và ứng dụng React Native.',
    th:'ชุดระบบอีคอมเมิร์ซเกาหลี — เว็บลูกค้า, หน้าจัดการ และแอป React Native',
    lo:'ຊຸດລະບົບອີຄອມເມີຊເກົາຫຼີ — ເວັບລູກຄ້າ, ໜ້າຈັດການ ແລະ ແອັບ React Native.' },
  bancow: {
    en:'Cattle investment app with Datadog and AppCenter monitoring, RudderStack analytics and Firebase messaging.',
    vi:'Ứng dụng đầu tư chăn nuôi bò với giám sát Datadog và AppCenter, phân tích RudderStack và Firebase messaging.',
    th:'แอปลงทุนปศุสัตว์ พร้อมมอนิเตอร์ด้วย Datadog และ AppCenter, วิเคราะห์ด้วย RudderStack และ Firebase messaging',
    lo:'ແອັບລົງທຶນລ້ຽງງົວ ພ້ອມຕິດຕາມດ້ວຍ Datadog ແລະ AppCenter, ວິເຄາະດ້ວຍ RudderStack ແລະ Firebase messaging.' },
  camping: {
    en:'Campsite booking app in React Native.',
    vi:'Ứng dụng đặt chỗ cắm trại bằng React Native.',
    th:'แอปจองที่ตั้งแคมป์ด้วย React Native',
    lo:'ແອັບຈອງບ່ອນຕັ້ງແຄມດ້ວຍ React Native.' },
  myfarm: {
    en:'E-commerce mobile platform in React Native.',
    vi:'Nền tảng thương mại điện tử di động bằng React Native.',
    th:'แพลตฟอร์มอีคอมเมิร์ซบนมือถือด้วย React Native',
    lo:'ແພລດຟອມອີຄອມເມີຊມືຖືດ້ວຍ React Native.' },
  supercoder: {
    en:'Angular AI text-generation tool with a Quill editor, social login and ngx-translate i18n, plus an admin console and Java backend.',
    vi:'Công cụ sinh văn bản AI bằng Angular với trình soạn thảo Quill, đăng nhập mạng xã hội và i18n ngx-translate, kèm bảng quản trị và backend Java.',
    th:'เครื่องมือสร้างข้อความด้วย AI บน Angular พร้อมตัวแก้ไข Quill, ล็อกอินโซเชียล และรองรับหลายภาษาด้วย ngx-translate รวมถึงหน้าจัดการและแบ็กเอนด์ Java',
    lo:'ເຄື່ອງມືສ້າງຂໍ້ຄວາມດ້ວຍ AI ເທິງ Angular ພ້ອມຕົວແກ້ໄຂ Quill, ເຂົ້າສູ່ລະບົບໂຊຊຽວ ແລະ ຮອງຮັບຫຼາຍພາສາດ້ວຍ ngx-translate, ພ້ອມໜ້າຈັດການ ແລະ ແບັກເອນ Java.' },
  careaid: {
    en:'Expo care app with document and image upload, Apple and Google sign-in, localization and push notifications.',
    vi:'Ứng dụng chăm sóc trên Expo với tải tài liệu và ảnh, đăng nhập Apple và Google, đa ngôn ngữ và thông báo đẩy.',
    th:'แอปดูแลผู้ป่วยบน Expo อัปโหลดเอกสารและรูปภาพ, ล็อกอิน Apple และ Google, รองรับหลายภาษา และแจ้งเตือน',
    lo:'ແອັບການດູແລເທິງ Expo ອັບໂຫຼດເອກະສານ ແລະ ຮູບ, ເຂົ້າສູ່ລະບົບ Apple ແລະ Google, ຮອງຮັບຫຼາຍພາສາ ແລະ ແຈ້ງເຕືອນ.' },
  selfcare: {
    en:'Healthcare consulting app in React Native.',
    vi:'Ứng dụng tư vấn sức khỏe bằng React Native.',
    th:'แอปให้คำปรึกษาด้านสุขภาพด้วย React Native',
    lo:'ແອັບໃຫ້ຄຳປຶກສາສຸຂະພາບດ້ວຍ React Native.' },
  pharma: {
    en:'React front end over a Java backend for corporate disclosure filings.',
    vi:'Giao diện React trên backend Java cho hồ sơ công bố thông tin doanh nghiệp.',
    th:'ส่วนหน้า React บนแบ็กเอนด์ Java สำหรับการยื่นเปิดเผยข้อมูลองค์กร',
    lo:'ສ່ວນໜ້າ React ເທິງແບັກເອນ Java ສຳລັບການຍື່ນເປີດເຜີຍຂໍ້ມູນອົງກອນ.' },
  'drive-mobile': {
    en:'React Native client for 689Cloud encrypted file storage.',
    vi:'Ứng dụng React Native cho kho lưu trữ tệp mã hóa 689Cloud.',
    th:'ไคลเอนต์ React Native สำหรับระบบจัดเก็บไฟล์เข้ารหัสของ 689Cloud',
    lo:'ໄຄລເອັນ React Native ສຳລັບລະບົບເກັບໄຟລ໌ເຂົ້າລະຫັດຂອງ 689Cloud.' },
  carereach: {
    en:'Cross-platform mobile app built with NativeScript.',
    vi:'Ứng dụng di động đa nền tảng xây bằng NativeScript.',
    th:'แอปมือถือข้ามแพลตฟอร์มที่สร้างด้วย NativeScript',
    lo:'ແອັບມືຖືຂ້າມແພລດຟອມທີ່ສ້າງດ້ວຍ NativeScript.' },
  'drive-web': {
    en:'Angular web client for 689Cloud encrypted file storage.',
    vi:'Giao diện web Angular cho kho lưu trữ tệp mã hóa 689Cloud.',
    th:'เว็บไคลเอนต์ Angular สำหรับระบบจัดเก็บไฟล์เข้ารหัสของ 689Cloud',
    lo:'ເວັບໄຄລເອັນ Angular ສຳລັບລະບົບເກັບໄຟລ໌ເຂົ້າລະຫັດຂອງ 689Cloud.' },
};
