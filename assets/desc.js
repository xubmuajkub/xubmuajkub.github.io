// One-line project descriptions. Written from each repo's actual screens,
// modules and README — what the product does, not just what it was built with.
const DESC = {
  stayra: {
    en:'Booking and management platform for hotels, apartments and guesthouses in Laos. Four surfaces on one API: guests browse, book and earn loyalty; owners run calendars, refunds, staff and invoices; admins handle audit logs, earnings and bank accounts; a POS covers the front desk. Also leases, utility meters and Lao tax withholding.',
    vi:'Nền tảng đặt phòng và quản lý cho khách sạn, căn hộ và nhà nghỉ tại Lào. Bốn giao diện trên cùng một API: khách tìm phòng, đặt và tích điểm; chủ nhà quản lý lịch, hoàn tiền, nhân viên và hóa đơn; quản trị viên xử lý nhật ký kiểm toán, doanh thu và tài khoản ngân hàng; POS dành cho quầy lễ tân. Kèm hợp đồng thuê, đồng hồ tiện ích và khấu trừ thuế Lào.',
    th:'แพลตฟอร์มจองและบริหารโรงแรม อพาร์ตเมนต์ และเกสต์เฮาส์ในลาว สี่ส่วนบน API เดียว: ผู้เข้าพักค้นหา จอง และสะสมแต้ม; เจ้าของจัดการปฏิทิน การคืนเงิน พนักงาน และใบแจ้งหนี้; ผู้ดูแลดูบันทึกตรวจสอบ รายได้ และบัญชีธนาคาร; และ POS สำหรับเคาน์เตอร์ รวมถึงสัญญาเช่า มิเตอร์สาธารณูปโภค และการหักภาษี ณ ที่จ่ายของลาว',
    lo:'ແພລດຟອມການຈອງ ແລະ ບໍລິຫານໂຮງແຮມ, ອາພາດເມັນ ແລະ ເຮືອນພັກໃນລາວ. ສີ່ສ່ວນເທິງ API ດຽວ: ແຂກຄົ້ນຫາ, ຈອງ ແລະ ສະສົມແຕ້ມ; ເຈົ້າຂອງຈັດການປະຕິທິນ, ການຄືນເງິນ, ພະນັກງານ ແລະ ໃບແຈ້ງໜີ້; ຜູ້ດູແລເບິ່ງບັນທຶກກວດສອບ, ລາຍໄດ້ ແລະ ບັນຊີທະນາຄານ; ແລະ POS ສຳລັບເຄົາເຕີ. ພ້ອມສັນຍາເຊົ່າ, ມິເຕີສາທາລະນູປະໂພກ ແລະ ການຫັກພາສີ ນ ທີ່ຈ່າຍຂອງລາວ.' },
  bylateral: {
    en:'A virtual bank. Customers open accounts, hold balances, send and receive money, and spend on issued cards; the bank behind it runs onboarding and KYC, payment rails, settlement, fee and limit rules, compliance checks and a back office for operations. Built as Spring Boot and NestJS services on a Formance ledger, with Temporal orchestrating the multi-step money flows.',
    vi:'Một ngân hàng số. Khách hàng mở tài khoản, giữ số dư, chuyển và nhận tiền, chi tiêu bằng thẻ phát hành; phía sau là hệ thống xử lý onboarding và KYC, kênh thanh toán, quyết toán, quy tắc phí và hạn mức, kiểm tra tuân thủ và bộ phận vận hành. Xây bằng các service Spring Boot và NestJS trên sổ cái Formance, với Temporal điều phối các luồng tiền nhiều bước.',
    th:'ธนาคารเสมือน ลูกค้าเปิดบัญชี เก็บยอดเงิน โอนและรับเงิน และใช้จ่ายผ่านบัตรที่ออกให้ ส่วนเบื้องหลังดูแลการเปิดบัญชีและ KYC ช่องทางชำระเงิน การเคลียร์ยอด กฎค่าธรรมเนียมและวงเงิน การตรวจสอบการกำกับดูแล และระบบหลังบ้านสำหรับฝ่ายปฏิบัติการ สร้างเป็นเซอร์วิส Spring Boot และ NestJS บนบัญชีแยกประเภท Formance โดยมี Temporal ควบคุมกระแสเงินหลายขั้นตอน',
    lo:'ທະນາຄານເສມືອນ. ລູກຄ້າເປີດບັນຊີ, ເກັບຍອດເງິນ, ໂອນ ແລະ ຮັບເງິນ, ແລະ ໃຊ້ຈ່າຍຜ່ານບັດທີ່ອອກໃຫ້; ດ້ານຫຼັງດູແລການເປີດບັນຊີ ແລະ KYC, ຊ່ອງທາງຊຳລະເງິນ, ການເຄລຍຍອດ, ກົດຄ່າທຳນຽມ ແລະ ວົງເງິນ, ການກວດສອບການກຳກັບດູແລ ແລະ ລະບົບຫຼັງບ້ານສຳລັບຝ່າຍປະຕິບັດງານ. ສ້າງເປັນເຊີວິສ Spring Boot ແລະ NestJS ເທິງບັນຊີແຍກປະເພດ Formance, ໂດຍມີ Temporal ຄວບຄຸມກະແສເງິນຫຼາຍຂັ້ນຕອນ.' },
  'harkmed-web': {
    en:'Clinician portal for the HARKmed platform — organisations, client records, connected devices and an insights dashboard, with Auth0 sign-in, CSV export and timezone-aware scheduling.',
    vi:'Cổng dành cho nhân viên y tế của nền tảng HARKmed — tổ chức, hồ sơ bệnh nhân, thiết bị kết nối và bảng thông tin phân tích, với đăng nhập Auth0, xuất CSV và lịch theo múi giờ.',
    th:'พอร์ทัลสำหรับบุคลากรทางการแพทย์ของแพลตฟอร์ม HARKmed — องค์กร ข้อมูลผู้ป่วย อุปกรณ์ที่เชื่อมต่อ และแดชบอร์ดเชิงวิเคราะห์ พร้อมล็อกอิน Auth0 ส่งออก CSV และตารางเวลาตามโซนเวลา',
    lo:'ພອດທັນສຳລັບບຸກຄະລາກອນທາງການແພດຂອງແພລດຟອມ HARKmed — ອົງກອນ, ຂໍ້ມູນຄົນເຈັບ, ອຸປະກອນທີ່ເຊື່ອມຕໍ່ ແລະ ແດຊບອດວິເຄາະ, ພ້ອມເຂົ້າສູ່ລະບົບ Auth0, ສົ່ງອອກ CSV ແລະ ຕາຕະລາງຕາມເຂດເວລາ.' },
  obello: {
    en:'Email marketing platform across six repositories — drag-and-drop email builder, template gallery, brand element library, sign-in app and admin portal, all on a shared component library. Roughly 48,000 commits over three and a half years.',
    vi:'Nền tảng email marketing trải trên sáu repository — trình dựng email kéo thả, thư viện mẫu, thư viện nhận diện thương hiệu, ứng dụng đăng nhập và cổng quản trị, tất cả trên một thư viện component dùng chung. Khoảng 48.000 commit trong ba năm rưỡi.',
    th:'แพลตฟอร์มการตลาดผ่านอีเมลกระจายอยู่ในหกรีโป — ตัวสร้างอีเมลแบบลากวาง คลังเทมเพลต คลังองค์ประกอบแบรนด์ แอปล็อกอิน และพอร์ทัลผู้ดูแล ทั้งหมดใช้ไลบรารีคอมโพเนนต์ร่วมกัน ราว 48,000 คอมมิตในสามปีครึ่ง',
    lo:'ແພລດຟອມການຕະຫຼາດຜ່ານອີເມວກະຈາຍຢູ່ໃນຫົກຣີໂປ — ຕົວສ້າງອີເມວແບບລາກວາງ, ຄັງເທັມເພລດ, ຄັງອົງປະກອບແບຣນ, ແອັບເຂົ້າສູ່ລະບົບ ແລະ ພອດທັນຜູ້ດູແລ, ທັງໝົດໃຊ້ໄລບຣາຣີຄອມໂພເນນຮ່ວມກັນ. ປະມານ 48,000 ຄອມມິດໃນສາມປີເຄິ່ງ.' },
  msc: {
    en:'Operator app for team messaging workspaces — shared inbox, workspace switching, subscriber opt-in and opt-out, notes and two-factor auth, with realtime delivery on Firestore.',
    vi:'Ứng dụng vận hành cho không gian nhắn tin nhóm — hộp thư chung, chuyển đổi workspace, quản lý đăng ký nhận tin, ghi chú và xác thực hai lớp, chuyển tin thời gian thực trên Firestore.',
    th:'แอปผู้ดูแลสำหรับเวิร์กสเปซแชทของทีม — กล่องข้อความรวม สลับเวิร์กสเปซ จัดการการสมัคร/ยกเลิกรับข้อความ โน้ต และยืนยันตัวตนสองชั้น ส่งข้อความเรียลไทม์ผ่าน Firestore',
    lo:'ແອັບຜູ້ດຳເນີນງານສຳລັບເວີກສະເປສແຊັດຂອງທີມ — ກ່ອງຂໍ້ຄວາມລວມ, ສະຫຼັບເວີກສະເປສ, ຈັດການການສະໝັກ/ຍົກເລີກຮັບຂໍ້ຄວາມ, ບັນທຶກ ແລະ ຢືນຢັນຕົວຕົນສອງຊັ້ນ, ສົ່ງຂໍ້ຄວາມແບບສົດຜ່ານ Firestore.' },
  oncash: {
    en:'Mobile wallet — QR payment, cash balance, in-app shop, gift box and a customer service centre, with a React admin console behind it.',
    vi:'Ví di động — thanh toán QR, số dư tiền mặt, cửa hàng trong ứng dụng, hộp quà và trung tâm chăm sóc khách hàng, kèm bảng quản trị React phía sau.',
    th:'กระเป๋าเงินบนมือถือ — ชำระเงินด้วย QR, ยอดเงินคงเหลือ, ร้านค้าในแอป, กล่องของขวัญ และศูนย์บริการลูกค้า พร้อมหน้าจัดการด้วย React',
    lo:'ກະເປົາເງິນມືຖື — ຊຳລະດ້ວຍ QR, ຍອດເງິນຄົງເຫຼືອ, ຮ້ານຄ້າໃນແອັບ, ກ່ອງຂອງຂວັນ ແລະ ສູນບໍລິການລູກຄ້າ, ພ້ອມໜ້າຈັດການດ້ວຍ React.' },
  harkmed: {
    en:'React Native app paired with IoT medical devices for patient monitoring.',
    vi:'Ứng dụng React Native kết nối thiết bị y tế IoT để theo dõi bệnh nhân.',
    th:'แอป React Native ที่เชื่อมต่ออุปกรณ์การแพทย์ IoT เพื่อติดตามอาการผู้ป่วย',
    lo:'ແອັບ React Native ເຊື່ອມຕໍ່ອຸປະກອນການແພດ IoT ເພື່ອຕິດຕາມຄົນເຈັບ.' },
  sasha: {
    en:'Companion app for a Bluetooth LE device — pairing, live dashboard, device detail, content library and a lock screen, shipped over the air with CodePush in several languages.',
    vi:'Ứng dụng đồng hành cho thiết bị Bluetooth LE — ghép nối, bảng điều khiển trực tiếp, chi tiết thiết bị, thư viện nội dung và màn hình khóa, cập nhật OTA bằng CodePush, đa ngôn ngữ.',
    th:'แอปคู่กับอุปกรณ์ Bluetooth LE — จับคู่อุปกรณ์ แดชบอร์ดเรียลไทม์ รายละเอียดอุปกรณ์ คลังเนื้อหา และหน้าจอล็อก อัปเดต OTA ด้วย CodePush รองรับหลายภาษา',
    lo:'ແອັບຄູ່ກັບອຸປະກອນ Bluetooth LE — ຈັບຄູ່ອຸປະກອນ, ແດຊບອດແບບສົດ, ລາຍລະອຽດອຸປະກອນ, ຄັງເນື້ອຫາ ແລະ ໜ້າຈໍລັອກ, ອັບເດດ OTA ດ້ວຍ CodePush, ຮອງຮັບຫຼາຍພາສາ.' },
  greennation: {
    en:'Green neobank in three editions — personal, business and kids. Accounts, cards, transfers and vaults sit next to reforestation: buy trees, grow a forest, track the carbon cost of your spending. Also investing, staking, a crypto wallet and citizen challenges, with SumSub KYC and MeaWallet card issuing. Around 7,400 commits over two and a half years.',
    vi:'Ngân hàng số xanh với ba phiên bản — cá nhân, doanh nghiệp và trẻ em. Tài khoản, thẻ, chuyển tiền và két tiết kiệm đi cùng trồng rừng: mua cây, gây rừng riêng, theo dõi lượng carbon từ chi tiêu. Kèm đầu tư, staking, ví crypto và thử thách cộng đồng, với KYC SumSub và phát hành thẻ MeaWallet. Khoảng 7.400 commit trong hai năm rưỡi.',
    th:'นีโอแบงก์สายกรีน มีสามเวอร์ชัน — บุคคล ธุรกิจ และเด็ก บัญชี บัตร โอนเงิน และกระปุกออมทรัพย์ ควบคู่กับการปลูกป่า: ซื้อต้นไม้ สร้างป่าของตัวเอง และติดตามคาร์บอนจากการใช้จ่าย รวมถึงการลงทุน staking กระเป๋าคริปโต และชาเลนจ์ชุมชน พร้อม KYC ด้วย SumSub และออกบัตรผ่าน MeaWallet ราว 7,400 คอมมิตในสองปีครึ่ง',
    lo:'ນີໂອແບັງສາຍຂຽວ ມີສາມເວີຊັນ — ບຸກຄົນ, ທຸລະກິດ ແລະ ເດັກ. ບັນຊີ, ບັດ, ໂອນເງິນ ແລະ ກະປຸກເກັບເງິນ ຄຽງຄູ່ກັບການປູກປ່າ: ຊື້ຕົ້ນໄມ້, ສ້າງປ່າຂອງຕົນເອງ ແລະ ຕິດຕາມຄາບອນຈາກການໃຊ້ຈ່າຍ. ພ້ອມການລົງທຶນ, staking, ກະເປົາຄຣິບໂຕ ແລະ ຊາເລນຊຸມຊົນ, ພ້ອມ KYC ດ້ວຍ SumSub ແລະ ອອກບັດຜ່ານ MeaWallet. ປະມານ 7,400 ຄອມມິດໃນສອງປີເຄິ່ງ.' },
  bulting: {
    en:'Dating app — matching, in-app chat, profile pages and subscription purchases, with a React admin console and Java backend behind it.',
    vi:'Ứng dụng hẹn hò — ghép đôi, trò chuyện trong ứng dụng, trang cá nhân và mua gói đăng ký, kèm bảng quản trị React và backend Java.',
    th:'แอปหาคู่ — จับคู่ แชทในแอป หน้าโปรไฟล์ และการซื้อแพ็กเกจสมาชิก พร้อมหน้าจัดการ React และแบ็กเอนด์ Java',
    lo:'ແອັບຫາຄູ່ — ຈັບຄູ່, ແຊັດໃນແອັບ, ໜ້າໂປຣໄຟລ໌ ແລະ ການຊື້ແພັກເກັດສະມາຊິກ, ພ້ອມໜ້າຈັດການ React ແລະ ແບັກເອນ Java.' },
  kookrule: {
    en:'Korean food marketplace with live shopping — streamed selling over the ConnectLive SDK, plus recipes, seasonal and regional produce, basket, Iamport checkout, a gift zone and reviews. Java API behind it.',
    vi:'Sàn thực phẩm Hàn Quốc có bán hàng trực tiếp — livestream qua SDK ConnectLive, kèm công thức nấu ăn, nông sản theo mùa và theo vùng, giỏ hàng, thanh toán Iamport, khu quà tặng và đánh giá. API Java phía sau.',
    th:'มาร์เก็ตเพลสอาหารเกาหลีพร้อมไลฟ์ช้อปปิ้ง — ขายผ่านไลฟ์ด้วย ConnectLive SDK พร้อมสูตรอาหาร วัตถุดิบตามฤดูกาลและตามท้องถิ่น ตะกร้าสินค้า ชำระเงินผ่าน Iamport โซนของขวัญ และรีวิว มี API เขียนด้วย Java',
    lo:'ຕະຫຼາດອາຫານເກົາຫຼີພ້ອມໄລຟ໌ຊັອບປິ້ງ — ຂາຍຜ່ານໄລຟ໌ດ້ວຍ ConnectLive SDK, ພ້ອມສູດອາຫານ, ວັດຖຸດິບຕາມລະດູ ແລະ ຕາມທ້ອງຖິ່ນ, ກະຕ່າສິນຄ້າ, ຊຳລະຜ່ານ Iamport, ໂຊນຂອງຂວັນ ແລະ ຣີວິວ. ມີ API ຂຽນດ້ວຍ Java.' },
  pref: {
    en:'E-commerce web app on React with MongoDB and MySQL.',
    vi:'Ứng dụng web thương mại điện tử trên React với MongoDB và MySQL.',
    th:'เว็บแอปอีคอมเมิร์ซบน React ใช้ MongoDB และ MySQL',
    lo:'ແອັບເວັບອີຄອມເມີຊເທິງ React ໃຊ້ MongoDB ແລະ MySQL.' },
  haksoop: {
    en:'Marketplace for Korean academies — search by category, academy profiles and registration, course management, counselling, events, reviews and checkout, plus a partner side for payment management. NestJS and TypeORM backend.',
    vi:'Sàn kết nối các trung tâm giáo dục Hàn Quốc — tìm theo danh mục, hồ sơ và đăng ký trung tâm, quản lý khóa học, tư vấn, sự kiện, đánh giá và thanh toán, kèm cổng đối tác quản lý thanh toán. Backend NestJS và TypeORM.',
    th:'มาร์เก็ตเพลสสำหรับสถาบันกวดวิชาเกาหลี — ค้นหาตามหมวดหมู่ โปรไฟล์และการสมัครสถาบัน จัดการคอร์ส ให้คำปรึกษา อีเวนต์ รีวิว และชำระเงิน พร้อมฝั่งพาร์ตเนอร์สำหรับจัดการการชำระเงิน แบ็กเอนด์ NestJS และ TypeORM',
    lo:'ຕະຫຼາດເຊື່ອມຕໍ່ສະຖາບັນຕິວເກົາຫຼີ — ຄົ້ນຫາຕາມໝວດ, ໂປຣໄຟລ໌ ແລະ ການລົງທະບຽນສະຖາບັນ, ຈັດການຄອດ, ໃຫ້ຄຳປຶກສາ, ອີເວັນ, ຣີວິວ ແລະ ຊຳລະເງິນ, ພ້ອມດ້ານພາດເນີສຳລັບຈັດການການຊຳລະ. ແບັກເອນ NestJS ແລະ TypeORM.' },
  branway: {
    en:'Social commerce site — seller storefronts, collections and categories, short-form reels, search and social sign-in, built on Next.js.',
    vi:'Trang thương mại xã hội — gian hàng người bán, bộ sưu tập và danh mục, video ngắn dạng reels, tìm kiếm và đăng nhập mạng xã hội, xây trên Next.js.',
    th:'เว็บโซเชียลคอมเมิร์ซ — หน้าร้านผู้ขาย คอลเลกชันและหมวดหมู่ วิดีโอสั้นแบบรีล ค้นหา และล็อกอินผ่านโซเชียล สร้างด้วย Next.js',
    lo:'ເວັບໂຊຊຽວຄອມເມີຊ — ໜ້າຮ້ານຜູ້ຂາຍ, ຄໍເລັກຊັນ ແລະ ໝວດໝູ່, ວິດີໂອສັ້ນແບບຣີວ, ຄົ້ນຫາ ແລະ ເຂົ້າສູ່ລະບົບຜ່ານໂຊຊຽວ, ສ້າງດ້ວຍ Next.js.' },
  itruck: {
    en:'Used truck marketplace — listings and search, licence plate lookup, dealer profiles and dealer care, favourites, buyer-seller chat and a truck knowledge base. Native Android module alongside the React Native app.',
    vi:'Sàn xe tải cũ — đăng tin và tìm kiếm, tra cứu biển số, hồ sơ đại lý và chăm sóc đại lý, danh sách yêu thích, chat giữa người mua và người bán, cùng thư viện kiến thức về xe tải. Kèm module Android native bên cạnh ứng dụng React Native.',
    th:'มาร์เก็ตเพลสรถบรรทุกมือสอง — ลงประกาศและค้นหา ตรวจสอบทะเบียนรถ โปรไฟล์ดีลเลอร์และบริการดีลเลอร์ รายการโปรด แชทระหว่างผู้ซื้อผู้ขาย และคลังความรู้เรื่องรถบรรทุก พร้อมโมดูล Android เนทีฟควบคู่กับแอป React Native',
    lo:'ຕະຫຼາດລົດບັນທຸກມືສອງ — ລົງປະກາດ ແລະ ຄົ້ນຫາ, ກວດສອບປ້າຍທະບຽນ, ໂປຣໄຟລ໌ດີລເລີ ແລະ ບໍລິການດີລເລີ, ລາຍການທີ່ມັກ, ແຊັດລະຫວ່າງຜູ້ຊື້ຜູ້ຂາຍ ແລະ ຄັງຄວາມຮູ້ເລື່ອງລົດບັນທຸກ. ພ້ອມໂມດູນ Android ເນທີບຄຽງຄູ່ກັບແອັບ React Native.' },
  mercado: {
    en:'Korean e-commerce suite — customer storefront with cart and profiles, an admin console and a React Native app, with Apple and social sign-in.',
    vi:'Bộ thương mại điện tử Hàn Quốc — gian hàng khách với giỏ hàng và hồ sơ, bảng quản trị và ứng dụng React Native, đăng nhập Apple và mạng xã hội.',
    th:'ชุดระบบอีคอมเมิร์ซเกาหลี — หน้าร้านลูกค้าพร้อมตะกร้าและโปรไฟล์ หน้าจัดการ และแอป React Native ล็อกอินด้วย Apple และโซเชียล',
    lo:'ຊຸດລະບົບອີຄອມເມີຊເກົາຫຼີ — ໜ້າຮ້ານລູກຄ້າພ້ອມກະຕ່າ ແລະ ໂປຣໄຟລ໌, ໜ້າຈັດການ ແລະ ແອັບ React Native, ເຂົ້າສູ່ລະບົບດ້ວຍ Apple ແລະ ໂຊຊຽວ.' },
  bancow: {
    en:'Fractional cattle investment — fund a herd, follow breeding and price charts, bid at auction, track shipping, accident cover and transaction history, with a linked bank account. Datadog and RudderStack for monitoring and analytics.',
    vi:'Đầu tư bò theo phần — góp vốn vào đàn, theo dõi sinh sản và biểu đồ giá, đấu giá, theo dõi vận chuyển, bảo hiểm tai nạn và lịch sử giao dịch, liên kết tài khoản ngân hàng. Giám sát và phân tích bằng Datadog và RudderStack.',
    th:'ลงทุนในโคแบบแบ่งสัดส่วน — ร่วมลงทุนในฝูงโค ติดตามการผสมพันธุ์และกราฟราคา ประมูล ติดตามการขนส่ง ประกันอุบัติเหตุ และประวัติธุรกรรม พร้อมผูกบัญชีธนาคาร มอนิเตอร์และวิเคราะห์ด้วย Datadog และ RudderStack',
    lo:'ລົງທຶນໃນງົວແບບແບ່ງສ່ວນ — ຮ່ວມລົງທຶນໃນຝູງງົວ, ຕິດຕາມການຜະສົມພັນ ແລະ ກຣາຟລາຄາ, ປະມູນ, ຕິດຕາມການຂົນສົ່ງ, ປະກັນອຸປະຕິເຫດ ແລະ ປະຫວັດທຸລະກຳ, ພ້ອມຜູກບັນຊີທະນາຄານ. ຕິດຕາມ ແລະ ວິເຄາະດ້ວຍ Datadog ແລະ RudderStack.' },
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
    en:'AI writing tool for hiring — generates and reviews resumes against job posts, with a Quill editor, social login and multi-language UI. Angular front end and admin console over a Java backend.',
    vi:'Công cụ viết bằng AI cho tuyển dụng — sinh và đánh giá CV theo tin tuyển dụng, với trình soạn thảo Quill, đăng nhập mạng xã hội và giao diện đa ngôn ngữ. Front end và bảng quản trị Angular trên backend Java.',
    th:'เครื่องมือเขียนด้วย AI สำหรับการสรรหาบุคลากร — สร้างและตรวจเรซูเม่เทียบกับประกาศงาน พร้อมตัวแก้ไข Quill ล็อกอินโซเชียล และรองรับหลายภาษา ส่วนหน้าและหน้าจัดการเขียนด้วย Angular บนแบ็กเอนด์ Java',
    lo:'ເຄື່ອງມືຂຽນດ້ວຍ AI ສຳລັບການສັນຫາບຸກຄະລາກອນ — ສ້າງ ແລະ ກວດຊີວະປະຫວັດທຽບກັບປະກາດຮັບສະໝັກ, ພ້ອມຕົວແກ້ໄຂ Quill, ເຂົ້າສູ່ລະບົບໂຊຊຽວ ແລະ ຮອງຮັບຫຼາຍພາສາ. ສ່ວນໜ້າ ແລະ ໜ້າຈັດການຂຽນດ້ວຍ Angular ເທິງແບັກເອນ Java.' },
  careaid: {
    en:'Marketplace for care work — carers browse and accept jobs, manage bookings and schedules, and track earnings, with document upload and push notifications.',
    vi:'Sàn kết nối công việc chăm sóc — người chăm sóc tìm và nhận việc, quản lý lịch hẹn và lịch làm, theo dõi thu nhập, kèm tải tài liệu và thông báo đẩy.',
    th:'มาร์เก็ตเพลสงานดูแลผู้ป่วย — ผู้ดูแลค้นหาและรับงาน จัดการการจองและตารางงาน และติดตามรายได้ พร้อมอัปโหลดเอกสารและแจ้งเตือน',
    lo:'ຕະຫຼາດວຽກການດູແລ — ຜູ້ດູແລຄົ້ນຫາ ແລະ ຮັບວຽກ, ຈັດການການຈອງ ແລະ ຕາຕະລາງວຽກ, ແລະ ຕິດຕາມລາຍໄດ້, ພ້ອມອັບໂຫຼດເອກະສານ ແລະ ແຈ້ງເຕືອນ.' },
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
