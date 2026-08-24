// What each product is and does, in plain terms. No frameworks or libraries
// here on purpose — the stack chips under each entry already carry that.
const DESC = {
  stayra: {
    en:'Booking and management for hotels, apartments and guesthouses in Laos. Guests search, book and earn loyalty points. Owners run their calendar, staff, refunds and invoices. Admins see audit trails, earnings and payouts. Front desks get a point of sale. It also handles long leases, utility meter readings and Lao withholding tax.',
    vi:'Đặt phòng và quản lý cho khách sạn, căn hộ và nhà nghỉ tại Lào. Khách tìm phòng, đặt và tích điểm. Chủ nhà quản lý lịch, nhân viên, hoàn tiền và hóa đơn. Quản trị viên xem nhật ký kiểm toán, doanh thu và chi trả. Quầy lễ tân có máy bán hàng. Hệ thống còn xử lý hợp đồng thuê dài hạn, chỉ số đồng hồ tiện ích và thuế khấu trừ tại Lào.',
    th:'ระบบจองและบริหารโรงแรม อพาร์ตเมนต์ และเกสต์เฮาส์ในลาว ผู้เข้าพักค้นหา จอง และสะสมแต้ม เจ้าของจัดการปฏิทิน พนักงาน การคืนเงิน และใบแจ้งหนี้ ผู้ดูแลเห็นบันทึกตรวจสอบ รายได้ และการจ่ายเงิน ส่วนเคาน์เตอร์มีระบบขายหน้าร้าน รวมถึงสัญญาเช่าระยะยาว ค่ามิเตอร์สาธารณูปโภค และภาษีหัก ณ ที่จ่ายของลาว',
    lo:'ລະບົບຈອງ ແລະ ບໍລິຫານໂຮງແຮມ, ອາພາດເມັນ ແລະ ເຮືອນພັກໃນລາວ. ແຂກຄົ້ນຫາ, ຈອງ ແລະ ສະສົມແຕ້ມ. ເຈົ້າຂອງຈັດການປະຕິທິນ, ພະນັກງານ, ການຄືນເງິນ ແລະ ໃບແຈ້ງໜີ້. ຜູ້ດູແລເຫັນບັນທຶກກວດສອບ, ລາຍໄດ້ ແລະ ການຈ່າຍເງິນ. ເຄົາເຕີມີລະບົບຂາຍໜ້າຮ້ານ. ພ້ອມສັນຍາເຊົ່າໄລຍະຍາວ, ຄ່າມິເຕີສາທາລະນູປະໂພກ ແລະ ພາສີຫັກ ນ ທີ່ຈ່າຍຂອງລາວ.' },
  bylateral: {
    en:'A virtual bank. Customers open accounts, hold balances, send and receive money and spend on issued cards. Behind that sit onboarding and identity checks, payment rails, settlement, fee and limit rules, compliance screening, and a back office for the operations team.',
    vi:'Một ngân hàng số. Khách hàng mở tài khoản, giữ số dư, chuyển và nhận tiền, chi tiêu bằng thẻ được phát hành. Phía sau là quy trình mở tài khoản và xác minh danh tính, kênh thanh toán, quyết toán, quy tắc phí và hạn mức, sàng lọc tuân thủ, cùng bộ phận vận hành nội bộ.',
    th:'ธนาคารเสมือน ลูกค้าเปิดบัญชี เก็บยอดเงิน โอนและรับเงิน และใช้จ่ายผ่านบัตรที่ออกให้ เบื้องหลังคือการเปิดบัญชีและตรวจสอบตัวตน ช่องทางชำระเงิน การเคลียร์ยอด กฎค่าธรรมเนียมและวงเงิน การตรวจสอบการกำกับดูแล และระบบหลังบ้านสำหรับฝ่ายปฏิบัติการ',
    lo:'ທະນາຄານເສມືອນ. ລູກຄ້າເປີດບັນຊີ, ເກັບຍອດເງິນ, ໂອນ ແລະ ຮັບເງິນ, ແລະ ໃຊ້ຈ່າຍຜ່ານບັດທີ່ອອກໃຫ້. ດ້ານຫຼັງແມ່ນການເປີດບັນຊີ ແລະ ກວດສອບຕົວຕົນ, ຊ່ອງທາງຊຳລະເງິນ, ການເຄລຍຍອດ, ກົດຄ່າທຳນຽມ ແລະ ວົງເງິນ, ການກວດສອບການກຳກັບດູແລ ແລະ ລະບົບຫຼັງບ້ານສຳລັບຝ່າຍປະຕິບັດງານ.' },
  'harkmed-web': {
    en:'The desk side of HARKmed. Clinics manage their organisation and staff, open a client record, see the devices assigned to that client, and read the trends coming off them.',
    vi:'Phía văn phòng của HARKmed. Phòng khám quản lý tổ chức và nhân sự, mở hồ sơ bệnh nhân, xem thiết bị gán cho bệnh nhân đó và đọc các xu hướng thu được.',
    th:'ฝั่งสำนักงานของ HARKmed คลินิกจัดการองค์กรและบุคลากร เปิดข้อมูลผู้ป่วย ดูอุปกรณ์ที่มอบหมายให้ผู้ป่วยรายนั้น และอ่านแนวโน้มที่ได้จากอุปกรณ์',
    lo:'ດ້ານສຳນັກງານຂອງ HARKmed. ຄລີນິກຈັດການອົງກອນ ແລະ ບຸກຄະລາກອນ, ເປີດຂໍ້ມູນຄົນເຈັບ, ເບິ່ງອຸປະກອນທີ່ມອບໝາຍໃຫ້ຄົນເຈັບນັ້ນ ແລະ ອ່ານແນວໂນ້ມທີ່ໄດ້ຈາກອຸປະກອນ.' },
  obello: {
    en:'Marketing teams build and send email campaigns here. They drag a layout together, start from the template gallery, keep logos, colours and type in a shared brand library so every send matches, and manage accounts and permissions from an admin portal.',
    vi:'Nơi các đội marketing dựng và gửi chiến dịch email. Họ kéo thả bố cục, bắt đầu từ thư viện mẫu, giữ logo, màu sắc và kiểu chữ trong thư viện thương hiệu chung để mọi email đồng nhất, và quản lý tài khoản cùng phân quyền từ cổng quản trị.',
    th:'ทีมการตลาดใช้สร้างและส่งแคมเปญอีเมล ลากวางเลย์เอาต์ เริ่มจากคลังเทมเพลต เก็บโลโก้ สี และฟอนต์ไว้ในคลังแบรนด์ร่วมกันเพื่อให้ทุกฉบับสอดคล้องกัน และจัดการบัญชีกับสิทธิ์การใช้งานจากพอร์ทัลผู้ดูแล',
    lo:'ທີມການຕະຫຼາດໃຊ້ສ້າງ ແລະ ສົ່ງແຄມເປນອີເມວ. ລາກວາງເລເອົາ, ເລີ່ມຈາກຄັງເທັມເພລດ, ເກັບໂລໂກ້, ສີ ແລະ ຟອນໄວ້ໃນຄັງແບຣນຮ່ວມກັນເພື່ອໃຫ້ທຸກສະບັບສອດຄ່ອງກັນ, ແລະ ຈັດການບັນຊີ ແລະ ສິດການໃຊ້ງານຈາກພອດທັນຜູ້ດູແລ.' },
  msc: {
    en:'The staff side of a team messaging service. Operators work a shared inbox, switch between client workspaces, manage who has opted in or out of receiving messages, and leave notes on a conversation for whoever picks it up next.',
    vi:'Phía nhân viên của một dịch vụ nhắn tin nhóm. Người vận hành làm việc trên hộp thư chung, chuyển giữa các workspace khách hàng, quản lý ai đã đăng ký hoặc hủy nhận tin, và để lại ghi chú trên hội thoại cho người tiếp nhận sau.',
    th:'ฝั่งเจ้าหน้าที่ของบริการแชทสำหรับทีม ผู้ดูแลทำงานบนกล่องข้อความรวม สลับระหว่างเวิร์กสเปซของลูกค้าแต่ละราย จัดการว่าใครสมัครหรือยกเลิกรับข้อความ และฝากโน้ตไว้ในบทสนทนาให้คนที่รับต่อ',
    lo:'ດ້ານພະນັກງານຂອງບໍລິການແຊັດສຳລັບທີມ. ຜູ້ດຳເນີນງານເຮັດວຽກເທິງກ່ອງຂໍ້ຄວາມລວມ, ສະຫຼັບລະຫວ່າງເວີກສະເປສຂອງລູກຄ້າແຕ່ລະລາຍ, ຈັດການວ່າໃຜສະໝັກ ຫຼື ຍົກເລີກຮັບຂໍ້ຄວາມ, ແລະ ຝາກບັນທຶກໄວ້ໃນການສົນທະນາໃຫ້ຄົນທີ່ຮັບຕໍ່.' },
  oncash: {
    en:'A wallet you pay with. Top up a cash balance, pay by scanning a QR code, buy from an in-app shop, send gift boxes to other users, and reach support without leaving the app.',
    vi:'Một chiếc ví để thanh toán. Nạp số dư, quét mã QR để trả tiền, mua sắm trong cửa hàng của ứng dụng, gửi hộp quà cho người dùng khác và liên hệ hỗ trợ ngay trong ứng dụng.',
    th:'กระเป๋าเงินที่ใช้จ่ายได้จริง เติมยอดเงิน จ่ายด้วยการสแกน QR ซื้อของจากร้านค้าในแอป ส่งกล่องของขวัญให้ผู้ใช้คนอื่น และติดต่อฝ่ายบริการได้ในแอปเลย',
    lo:'ກະເປົາເງິນທີ່ໃຊ້ຈ່າຍໄດ້ຈິງ. ຕື່ມຍອດເງິນ, ຈ່າຍດ້ວຍການສະແກນ QR, ຊື້ເຄື່ອງຈາກຮ້ານໃນແອັບ, ສົ່ງກ່ອງຂອງຂວັນໃຫ້ຜູ້ໃຊ້ຄົນອື່ນ, ແລະ ຕິດຕໍ່ຝ່າຍບໍລິການໄດ້ໃນແອັບເລີຍ.' },
  harkmed: {
    en:'The patient side of HARKmed. The phone pairs with medical devices at home, collects the readings they produce, and passes them to the care team watching the account.',
    vi:'Phía bệnh nhân của HARKmed. Điện thoại kết nối với thiết bị y tế tại nhà, thu thập chỉ số đo được và gửi cho đội chăm sóc đang theo dõi.',
    th:'ฝั่งผู้ป่วยของ HARKmed โทรศัพท์เชื่อมกับอุปกรณ์การแพทย์ที่บ้าน เก็บค่าที่วัดได้ และส่งต่อให้ทีมดูแลที่ติดตามอยู่',
    lo:'ດ້ານຄົນເຈັບຂອງ HARKmed. ໂທລະສັບເຊື່ອມກັບອຸປະກອນການແພດຢູ່ເຮືອນ, ເກັບຄ່າທີ່ວັດໄດ້ ແລະ ສົ່ງຕໍ່ໃຫ້ທີມດູແລທີ່ຕິດຕາມຢູ່.' },
  sasha: {
    en:'The app that comes with a piece of Bluetooth hardware. Pair the device, watch it live on a dashboard, drill into a single reading, browse the content library and lock the screen while it runs.',
    vi:'Ứng dụng đi kèm một thiết bị Bluetooth. Ghép nối thiết bị, theo dõi trực tiếp trên bảng điều khiển, xem chi tiết từng chỉ số, duyệt thư viện nội dung và khóa màn hình khi đang chạy.',
    th:'แอปที่มาคู่กับอุปกรณ์บลูทูธ จับคู่อุปกรณ์ ดูสถานะสดบนแดชบอร์ด เจาะดูค่าที่วัดได้ทีละรายการ เปิดคลังเนื้อหา และล็อกหน้าจอระหว่างใช้งาน',
    lo:'ແອັບທີ່ມາຄູ່ກັບອຸປະກອນບລູທູດ. ຈັບຄູ່ອຸປະກອນ, ເບິ່ງສະຖານະສົດເທິງແດຊບອດ, ເຈາະເບິ່ງຄ່າແຕ່ລະລາຍການ, ເປີດຄັງເນື້ອຫາ ແລະ ລັອກໜ້າຈໍລະຫວ່າງໃຊ້ງານ.' },
  greennation: {
    en:'A bank account that plants trees. Everyday banking — accounts, cards, transfers, savings vaults — sits next to a forest you grow by buying trees, and a running count of the carbon behind what you spend. There is investing, staking and a crypto wallet too, community challenges to take part in, and separate editions for personal, business and children.',
    vi:'Một tài khoản ngân hàng biết trồng cây. Ngân hàng thường ngày — tài khoản, thẻ, chuyển tiền, két tiết kiệm — đi cùng khu rừng bạn gây dựng bằng cách mua cây, và số liệu carbon phía sau mỗi khoản chi. Còn có đầu tư, staking và ví crypto, các thử thách cộng đồng để tham gia, cùng phiên bản riêng cho cá nhân, doanh nghiệp và trẻ em.',
    th:'บัญชีธนาคารที่ปลูกต้นไม้ การเงินประจำวัน — บัญชี บัตร โอนเงิน กระปุกออมทรัพย์ — อยู่คู่กับผืนป่าที่คุณสร้างด้วยการซื้อต้นไม้ และตัวเลขคาร์บอนที่มาจากการใช้จ่ายของคุณ มีทั้งการลงทุน staking และกระเป๋าคริปโต ชาเลนจ์ให้ร่วมกับชุมชน และเวอร์ชันแยกสำหรับบุคคล ธุรกิจ และเด็ก',
    lo:'ບັນຊີທະນາຄານທີ່ປູກຕົ້ນໄມ້. ການເງິນປະຈຳວັນ — ບັນຊີ, ບັດ, ໂອນເງິນ, ກະປຸກເກັບເງິນ — ຢູ່ຄູ່ກັບປ່າທີ່ທ່ານສ້າງດ້ວຍການຊື້ຕົ້ນໄມ້, ແລະ ຕົວເລກຄາບອນທີ່ມາຈາກການໃຊ້ຈ່າຍ. ມີທັງການລົງທຶນ, staking ແລະ ກະເປົາຄຣິບໂຕ, ຊາເລນໃຫ້ຮ່ວມກັບຊຸມຊົນ, ແລະ ເວີຊັນແຍກສຳລັບບຸກຄົນ, ທຸລະກິດ ແລະ ເດັກ.' },
  bulting: {
    en:'A dating app. Find matches, talk to them in the app, keep a profile, and pay for the features that need a subscription.',
    vi:'Một ứng dụng hẹn hò. Tìm người phù hợp, trò chuyện ngay trong ứng dụng, giữ hồ sơ cá nhân và trả phí cho các tính năng cần đăng ký.',
    th:'แอปหาคู่ ค้นหาคนที่แมตช์กัน คุยกันในแอป มีหน้าโปรไฟล์ และจ่ายเงินสำหรับฟีเจอร์ที่ต้องสมัครสมาชิก',
    lo:'ແອັບຫາຄູ່. ຄົ້ນຫາຄົນທີ່ແມັດກັນ, ລົມກັນໃນແອັບ, ມີໜ້າໂປຣໄຟລ໌, ແລະ ຈ່າຍເງິນສຳລັບຟີເຈີທີ່ຕ້ອງສະໝັກສະມາຊິກ.' },
  kookrule: {
    en:'Korean groceries sold over live video. Sellers stream and take orders as they go; shoppers browse seasonal and regional produce, follow recipes, fill a basket, pay, send items as gifts and leave reviews.',
    vi:'Thực phẩm Hàn Quốc bán qua video trực tiếp. Người bán livestream và nhận đơn ngay trong buổi phát; người mua xem nông sản theo mùa và theo vùng, làm theo công thức, thêm vào giỏ, thanh toán, gửi tặng và viết đánh giá.',
    th:'ของกินเกาหลีที่ขายผ่านไลฟ์วิดีโอ ผู้ขายไลฟ์และรับออร์เดอร์ไปพร้อมกัน ผู้ซื้อเลือกดูวัตถุดิบตามฤดูกาลและตามท้องถิ่น ทำตามสูตรอาหาร ใส่ตะกร้า จ่ายเงิน ส่งเป็นของขวัญ และเขียนรีวิว',
    lo:'ອາຫານເກົາຫຼີທີ່ຂາຍຜ່ານໄລຟ໌ວິດີໂອ. ຜູ້ຂາຍໄລຟ໌ ແລະ ຮັບອໍເດີໄປພ້ອມກັນ; ຜູ້ຊື້ເລືອກເບິ່ງວັດຖຸດິບຕາມລະດູ ແລະ ຕາມທ້ອງຖິ່ນ, ເຮັດຕາມສູດອາຫານ, ໃສ່ກະຕ່າ, ຈ່າຍເງິນ, ສົ່ງເປັນຂອງຂວັນ ແລະ ຂຽນຣີວິວ.' },
  pref: {
    en:'An online store — product catalogue, cart and checkout.',
    vi:'Một cửa hàng trực tuyến — danh mục sản phẩm, giỏ hàng và thanh toán.',
    th:'ร้านค้าออนไลน์ — แคตตาล็อกสินค้า ตะกร้า และการชำระเงิน',
    lo:'ຮ້ານຄ້າອອນລາຍ — ລາຍການສິນຄ້າ, ກະຕ່າ ແລະ ການຊຳລະເງິນ.' },
  haksoop: {
    en:'Where Korean parents find an after-school academy. Search by subject, read the academy profile and reviews, get counselling, enrol and pay. Academies sign up on the other side and manage their courses, events and payments.',
    vi:'Nơi phụ huynh Hàn Quốc tìm trung tâm học thêm. Tìm theo môn, đọc hồ sơ trung tâm và đánh giá, được tư vấn, đăng ký và thanh toán. Phía bên kia, các trung tâm đăng ký và quản lý khóa học, sự kiện và khoản thu.',
    th:'ที่ที่ผู้ปกครองเกาหลีใช้หาสถาบันกวดวิชา ค้นหาตามวิชา อ่านโปรไฟล์สถาบันและรีวิว ขอคำปรึกษา สมัครและชำระเงิน อีกฝั่งหนึ่งสถาบันสมัครเข้าระบบและจัดการคอร์ส อีเวนต์ และการรับเงิน',
    lo:'ບ່ອນທີ່ພໍ່ແມ່ເກົາຫຼີໃຊ້ຫາສະຖາບັນຕິວ. ຄົ້ນຫາຕາມວິຊາ, ອ່ານໂປຣໄຟລ໌ສະຖາບັນ ແລະ ຣີວິວ, ຂໍຄຳປຶກສາ, ສະໝັກ ແລະ ຊຳລະເງິນ. ອີກດ້ານໜຶ່ງ ສະຖາບັນສະໝັກເຂົ້າລະບົບ ແລະ ຈັດການຄອດ, ອີເວັນ ແລະ ການຮັບເງິນ.' },
  branway: {
    en:'Shopping that behaves like a feed. Sellers run their own storefront and collections, products show up as short videos, and buyers search, follow and sign in with a social account.',
    vi:'Mua sắm theo kiểu bảng tin. Người bán có gian hàng và bộ sưu tập riêng, sản phẩm xuất hiện dưới dạng video ngắn, người mua tìm kiếm, theo dõi và đăng nhập bằng tài khoản mạng xã hội.',
    th:'การช้อปที่ไถดูเหมือนฟีด ผู้ขายมีหน้าร้านและคอลเลกชันของตัวเอง สินค้าปรากฏเป็นวิดีโอสั้น ผู้ซื้อค้นหา ติดตาม และล็อกอินด้วยบัญชีโซเชียล',
    lo:'ການຊັອບທີ່ເລື່ອນເບິ່ງຄືກັບຟີດ. ຜູ້ຂາຍມີໜ້າຮ້ານ ແລະ ຄໍເລັກຊັນຂອງຕົນເອງ, ສິນຄ້າສະແດງເປັນວິດີໂອສັ້ນ, ຜູ້ຊື້ຄົ້ນຫາ, ຕິດຕາມ ແລະ ເຂົ້າສູ່ລະບົບດ້ວຍບັນຊີໂຊຊຽວ.' },
  itruck: {
    en:'Buying and selling used trucks in Korea. Search listings, look a truck up by its licence plate, save favourites, message the dealer directly, and read up on what you are about to buy.',
    vi:'Mua bán xe tải cũ tại Hàn Quốc. Tìm tin đăng, tra cứu xe theo biển số, lưu tin yêu thích, nhắn trực tiếp cho đại lý và tìm hiểu kỹ trước khi mua.',
    th:'ซื้อขายรถบรรทุกมือสองในเกาหลี ค้นหาประกาศ ตรวจสอบรถจากป้ายทะเบียน บันทึกรายการโปรด ทักหาดีลเลอร์โดยตรง และอ่านข้อมูลก่อนตัดสินใจซื้อ',
    lo:'ຊື້ຂາຍລົດບັນທຸກມືສອງໃນເກົາຫຼີ. ຄົ້ນຫາປະກາດ, ກວດສອບລົດຈາກປ້າຍທະບຽນ, ບັນທຶກລາຍການທີ່ມັກ, ທັກຫາດີລເລີໂດຍກົງ, ແລະ ອ່ານຂໍ້ມູນກ່ອນຕັດສິນໃຈຊື້.' },
  mercado: {
    en:'A Korean online marketplace — a storefront for shoppers, an app on the phone, and an admin console for the team running it.',
    vi:'Một sàn mua sắm trực tuyến Hàn Quốc — gian hàng cho người mua, ứng dụng trên điện thoại và bảng quản trị cho đội vận hành.',
    th:'มาร์เก็ตเพลสออนไลน์ของเกาหลี — หน้าร้านสำหรับผู้ซื้อ แอปบนมือถือ และหน้าจัดการสำหรับทีมงาน',
    lo:'ຕະຫຼາດອອນລາຍຂອງເກົາຫຼີ — ໜ້າຮ້ານສຳລັບຜູ້ຊື້, ແອັບເທິງມືຖື, ແລະ ໜ້າຈັດການສຳລັບທີມງານ.' },
  bancow: {
    en:'Investing in cattle, a share at a time. Put money into a herd, follow breeding progress and price charts, bid at auction, watch shipping, and see the payout land in a linked bank account. Accident cover included.',
    vi:'Đầu tư vào bò theo từng phần. Góp tiền vào một đàn, theo dõi tiến trình sinh sản và biểu đồ giá, tham gia đấu giá, xem quá trình vận chuyển và nhận tiền về tài khoản ngân hàng liên kết. Có bảo hiểm tai nạn.',
    th:'ลงทุนในโคทีละส่วนแบ่ง ใส่เงินเข้าฝูงโค ติดตามการผสมพันธุ์และกราฟราคา ประมูล ดูการขนส่ง และรับเงินเข้าบัญชีธนาคารที่ผูกไว้ พร้อมประกันอุบัติเหตุ',
    lo:'ລົງທຶນໃນງົວເທື່ອລະສ່ວນ. ໃສ່ເງິນເຂົ້າຝູງງົວ, ຕິດຕາມການຜະສົມພັນ ແລະ ກຣາຟລາຄາ, ປະມູນ, ເບິ່ງການຂົນສົ່ງ, ແລະ ຮັບເງິນເຂົ້າບັນຊີທະນາຄານທີ່ຜູກໄວ້. ພ້ອມປະກັນອຸປະຕິເຫດ.' },
  camping: {
    en:'Find a campsite and book it.',
    vi:'Tìm chỗ cắm trại và đặt chỗ.',
    th:'หาที่ตั้งแคมป์แล้วจองได้เลย',
    lo:'ຫາບ່ອນຕັ້ງແຄມແລ້ວຈອງໄດ້ເລີຍ.' },
  myfarm: {
    en:'A phone storefront for farm produce.',
    vi:'Gian hàng nông sản trên điện thoại.',
    th:'หน้าร้านขายผลผลิตจากฟาร์มบนมือถือ',
    lo:'ໜ້າຮ້ານຂາຍຜົນຜະລິດຈາກຟາມເທິງມືຖື.' },
  supercoder: {
    en:'Writing help for job hunting. It drafts a resume, checks it against a job post and gives back a review of what to change.',
    vi:'Hỗ trợ viết khi tìm việc. Công cụ soạn CV, đối chiếu với tin tuyển dụng và trả về nhận xét cần sửa gì.',
    th:'ตัวช่วยเขียนสำหรับหางาน ร่างเรซูเม่ ตรวจเทียบกับประกาศรับสมัคร และให้ผลรีวิวว่าควรแก้อะไร',
    lo:'ຕົວຊ່ວຍຂຽນສຳລັບຫາວຽກ. ຮ່າງຊີວະປະຫວັດ, ກວດທຽບກັບປະກາດຮັບສະໝັກ, ແລະ ໃຫ້ຜົນຣີວິວວ່າຄວນແກ້ຫຍັງ.' },
  careaid: {
    en:'Care work, matched and paid. Carers browse open jobs, accept the ones they want, keep a schedule, upload the documents a client needs, and track what they have earned.',
    vi:'Công việc chăm sóc, được kết nối và trả công. Người chăm sóc xem việc đang mở, nhận việc mình muốn, quản lý lịch làm, tải lên giấy tờ khách hàng yêu cầu và theo dõi thu nhập.',
    th:'งานดูแลผู้ป่วยที่จับคู่และจ่ายเงินให้ ผู้ดูแลดูงานที่เปิดรับ เลือกรับงานที่ต้องการ จัดตารางงาน อัปโหลดเอกสารที่ลูกค้าต้องการ และติดตามรายได้',
    lo:'ວຽກການດູແລ ທີ່ຈັບຄູ່ ແລະ ຈ່າຍຄ່າຈ້າງ. ຜູ້ດູແລເບິ່ງວຽກທີ່ເປີດຮັບ, ເລືອກຮັບວຽກທີ່ຕ້ອງການ, ຈັດຕາຕະລາງ, ອັບໂຫຼດເອກະສານທີ່ລູກຄ້າຕ້ອງການ, ແລະ ຕິດຕາມລາຍໄດ້.' },
  selfcare: {
    en:'Health advice from your phone — book a consultation and talk it through.',
    vi:'Tư vấn sức khỏe ngay trên điện thoại — đặt lịch và trao đổi trực tiếp.',
    th:'ปรึกษาสุขภาพผ่านมือถือ — นัดหมายแล้วคุยกันได้เลย',
    lo:'ປຶກສາສຸຂະພາບຜ່ານມືຖື — ນັດໝາຍແລ້ວລົມກັນໄດ້ເລີຍ.' },
  pharma: {
    en:'Where pharmaceutical companies file and publish the disclosures regulators require of them.',
    vi:'Nơi các công ty dược nộp và công bố những thông tin mà cơ quan quản lý yêu cầu.',
    th:'ที่ที่บริษัทยาใช้ยื่นและเปิดเผยข้อมูลตามที่หน่วยงานกำกับดูแลกำหนด',
    lo:'ບ່ອນທີ່ບໍລິສັດຢາໃຊ້ຍື່ນ ແລະ ເປີດເຜີຍຂໍ້ມູນຕາມທີ່ໜ່ວຍງານກຳກັບດູແລກຳນົດ.' },
  'drive-mobile': {
    en:'Encrypted file storage on the phone — open and share documents while the owner keeps control of them after sending.',
    vi:'Lưu trữ tệp mã hóa trên điện thoại — mở và chia sẻ tài liệu trong khi chủ sở hữu vẫn kiểm soát chúng sau khi gửi.',
    th:'พื้นที่เก็บไฟล์แบบเข้ารหัสบนมือถือ — เปิดและแชร์เอกสารได้โดยเจ้าของยังควบคุมไฟล์ต่อได้หลังส่งออกไป',
    lo:'ບ່ອນເກັບໄຟລ໌ແບບເຂົ້າລະຫັດເທິງມືຖື — ເປີດ ແລະ ແບ່ງປັນເອກະສານໄດ້ ໂດຍເຈົ້າຂອງຍັງຄວບຄຸມໄຟລ໌ຕໍ່ໄດ້ຫຼັງສົ່ງອອກໄປ.' },
  carereach: {
    en:'The mobile companion to a care service.',
    vi:'Ứng dụng di động đi kèm một dịch vụ chăm sóc.',
    th:'แอปมือถือที่มาคู่กับบริการดูแลผู้ป่วย',
    lo:'ແອັບມືຖືທີ່ມາຄູ່ກັບບໍລິການດູແລ.' },
  'drive-web': {
    en:'Encrypted file storage in the browser — the same documents, with the owner still in control of them after sending.',
    vi:'Lưu trữ tệp mã hóa trên trình duyệt — vẫn những tài liệu đó, chủ sở hữu vẫn kiểm soát sau khi gửi.',
    th:'พื้นที่เก็บไฟล์แบบเข้ารหัสบนเบราว์เซอร์ — เอกสารชุดเดียวกัน โดยเจ้าของยังควบคุมได้หลังส่งออกไป',
    lo:'ບ່ອນເກັບໄຟລ໌ແບບເຂົ້າລະຫັດເທິງບຣາວເຊີ — ເອກະສານຊຸດດຽວກັນ ໂດຍເຈົ້າຂອງຍັງຄວບຄຸມໄດ້ຫຼັງສົ່ງອອກໄປ.' },
};
