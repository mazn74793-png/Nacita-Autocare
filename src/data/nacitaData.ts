export interface TireProduct {
  id: string;
  name: string;
  nameEn: string;
  brand: string;
  sku: string;
  origin: string;
  originEn: string;
  warranty: string;
  warrantyEn: string;
  stock?: number;
  currentPrice: number;
  originalPrice: number;
  savings: number;
  bestSeller?: boolean;
  width: number;
  aspect: number;
  rim: number;
  speedRating: string;
  pattern: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  nameEn: string;
  startingPrice: number | string;
  priceNoteAr: string;
  priceNoteEn: string;
  descriptionAr: string;
  descriptionEn: string;
  actionTextAr: string;
  actionTextEn: string;
  iconName: 'wrench' | 'compass' | 'wind' | 'snowflake' | 'shieldCheck' | 'truck';
  highlight?: boolean;
  includedFree?: boolean;
}

export interface ServiceCenter {
  id: string;
  nameAr: string;
  nameEn: string;
  cityAr: string;
  cityEn: string;
  areaAr: string;
  areaEn: string;
  addressAr: string;
  addressEn: string;
  phone: string;
  hoursAr: string;
  hoursEn: string;
  services: string[];
  googleMapsUrl?: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  rating: number;
  source: string;
  sourceEn: string;
  commentAr: string;
  commentEn: string;
  branch?: string;
}

export const TIRE_PRODUCTS: TireProduct[] = [
  {
    id: 'sailun-185-65-15',
    name: 'Sailun - 185/65/15 ATREZZO ELITE HR',
    nameEn: 'Sailun - 185/65/15 ATREZZO ELITE HR',
    brand: 'Sailun',
    sku: '104015101',
    origin: 'الصين',
    originEn: 'China',
    warranty: 'سنتان',
    warrantyEn: '2 Years',
    stock: 2,
    currentPrice: 2179.50,
    originalPrice: 2906.00,
    savings: 726.50,
    bestSeller: true,
    width: 185,
    aspect: 65,
    rim: 15,
    speedRating: 'HR (210 كم/س)',
    pattern: 'ATREZZO ELITE',
    descriptionAr: 'إطار عالي الأداء يوفر تماسكاً ممتازاً على الطرق الجافة والمبتلة، مع تقليل الضوضاء وتحسين كفاءة استهلاك الوقود.',
    descriptionEn: 'High performance asymmetric tire offering superior dry & wet grip, low road noise, and enhanced fuel economy.',
    image: '/src/assets/images/tire_sailun_atrezzo_elite_1792957346360.jpg'
  },
  {
    id: 'sailun-175-70-13',
    name: 'SAILUN - 175/70/13 ATREZZO ECO TR',
    nameEn: 'SAILUN - 175/70/13 ATREZZO ECO TR',
    brand: 'Sailun',
    sku: '104013101',
    origin: 'الصين',
    originEn: 'China',
    warranty: 'سنتان',
    warrantyEn: '2 Years',
    stock: 8,
    currentPrice: 1723.50,
    originalPrice: 2298.00,
    savings: 574.50,
    bestSeller: true,
    width: 175,
    aspect: 70,
    rim: 13,
    speedRating: 'TR (190 كم/س)',
    pattern: 'ATREZZO ECO',
    descriptionAr: 'مصمم خصيصاً للسيارات المدمجة، ويوفر عمراً طويلاً للمداس ومقاومة دوران منخفضة لتوفير البنزين في القيادة اليومية.',
    descriptionEn: 'Optimized for compact passenger vehicles with exceptional tread life and low rolling resistance for city commuting.',
    image: '/src/assets/images/tire_sailun_eco_1792957345839.jpg'
  },
  {
    id: 'sailun-195-60-15',
    name: '195/60/15 ATREZZO ELITE SAILUN VR',
    nameEn: '195/60/15 ATREZZO ELITE SAILUN VR',
    brand: 'Sailun',
    sku: '104015362',
    origin: 'الصين',
    originEn: 'China',
    warranty: 'سنتان',
    warrantyEn: '2 Years',
    stock: 4,
    currentPrice: 2309.25,
    originalPrice: 3079.00,
    savings: 769.75,
    bestSeller: true,
    width: 195,
    aspect: 60,
    rim: 15,
    speedRating: 'VR (240 كم/س)',
    pattern: 'ATREZZO ELITE',
    descriptionAr: 'ثبات فائق على المنعطفات وتفريغ سريع للمياه بفضل القنوات الطولية الأربعة، مثالي لسيارات السيدان الرياضية.',
    descriptionEn: 'Superior cornering stability and anti-hydroplaning longitudinal grooves designed for modern passenger sedans.',
    image: '/src/assets/images/tire_sailun_atrezzo_elite_1792957346360.jpg'
  },
  {
    id: 'sailun-205-60-16',
    name: '205/60/16 ATREZZO ELITE SAILUN VR',
    nameEn: '205/60/16 ATREZZO ELITE SAILUN VR',
    brand: 'Sailun',
    sku: '104016101',
    origin: 'الصين',
    originEn: 'China',
    warranty: 'سنتان',
    warrantyEn: '2 Years',
    stock: 6,
    currentPrice: 2613.00,
    originalPrice: 3484.00,
    savings: 871.00,
    bestSeller: true,
    width: 205,
    aspect: 60,
    rim: 16,
    speedRating: 'VR (240 كم/س)',
    pattern: 'ATREZZO ELITE',
    descriptionAr: 'مقاس مناسب لمعظم سيارات الكروس أوفر والسيدان الحديثة، مع راحة صوتية فائقة وقدرة تحمل عالية في حرارة الصيف.',
    descriptionEn: 'The go-to size for crossovers and premium sedans. High thermal tolerance, refined ride quality and quiet tread pattern.',
    image: '/src/assets/images/tire_sailun_eco_1792957345839.jpg'
  },
  {
    id: 'sailun-215-55-17',
    name: '215/55/17 ATREZZO ZSR SAILUN W',
    nameEn: '215/55/17 ATREZZO ZSR SAILUN W',
    brand: 'Sailun',
    sku: '104017205',
    origin: 'الصين',
    originEn: 'China',
    warranty: 'سنتان',
    warrantyEn: '2 Years',
    stock: 5,
    currentPrice: 3150.00,
    originalPrice: 3950.00,
    savings: 800.00,
    bestSeller: false,
    width: 215,
    aspect: 55,
    rim: 17,
    speedRating: 'W (270 كم/س)',
    pattern: 'ATREZZO ZSR',
    descriptionAr: 'إطار رياضي فائق الأداء Ultra High Performance بتحكم دقيق وسرعات عالية واستجابة استثنائية للتوجيه.',
    descriptionEn: 'Ultra High Performance summer tire engineered for crisp steering feedback and maximum lateral grip.',
    image: '/src/assets/images/tire_sailun_atrezzo_elite_1792957346360.jpg'
  },
  {
    id: 'sailun-225-45-18',
    name: '225/45/18 ATREZZO ZSR SAILUN XL',
    nameEn: '225/45/18 ATREZZO ZSR SAILUN XL',
    brand: 'Sailun',
    sku: '104018110',
    origin: 'الصين',
    originEn: 'China',
    warranty: 'سنتان',
    warrantyEn: '2 Years',
    stock: 3,
    currentPrice: 3680.00,
    originalPrice: 4600.00,
    savings: 920.00,
    bestSeller: false,
    width: 225,
    aspect: 45,
    rim: 18,
    speedRating: 'Y (300 كم/س)',
    pattern: 'ATREZZO ZSR XL',
    descriptionAr: 'نسخة مدعمة للحمولات الإضافية XL مع حماية لحافة الجنط (Rim Protector) وثبات فائق للسيارات الرياضية الفاخرة.',
    descriptionEn: 'Extra Load reinforced carcass with built-in rim flange protector for luxury sports coupes and sedans.',
    image: '/src/assets/images/tire_sailun_eco_1792957345839.jpg'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wheel-balancing',
    name: 'ترصيص العجلات',
    nameEn: 'Wheel Balancing',
    startingPrice: 250,
    priceNoteAr: 'يبدأ من ٢٥٠ جنيه',
    priceNoteEn: 'Starts at LE 250',
    descriptionAr: 'ترصيص دقيق بأحدث أجهزة الليزر لقيادة سلسة وخالية تماماً من الاهتزاز والرجّة على السرعات العالية.',
    descriptionEn: 'Laser precision dynamic wheel balancing for smooth, vibration-free driving at highway speeds.',
    actionTextAr: 'اعرف المزيد',
    actionTextEn: 'Learn More',
    iconName: 'wrench'
  },
  {
    id: 'wheel-alignment',
    name: 'ضبط زوايا العجلات',
    nameEn: 'Wheel Alignment',
    startingPrice: 150,
    priceNoteAr: 'يبدأ من ١٥٠ جنيه',
    priceNoteEn: 'Starts at LE 150',
    descriptionAr: 'ضبط احترافي ثلاثي الأبعاد (3D) لزيادة عمر الإطارات ومنع تآكلها وتحسين ثبات وتوجيه السيارة.',
    descriptionEn: 'Professional 3D computerized alignment to extend tire lifespan and ensure straight-line tracking stability.',
    actionTextAr: 'اتصل 19725',
    actionTextEn: 'Call 19725',
    iconName: 'compass'
  },
  {
    id: 'nitrogen-fill',
    name: 'ملء الإطارات بالنيتروجين',
    nameEn: 'Nitrogen Tire Inflation',
    startingPrice: 300,
    priceNoteAr: 'يبدأ من ٣٠٠ جنيه',
    priceNoteEn: 'Starts at LE 300',
    descriptionAr: 'يحافظ على ثبات ضغط الإطارات في درجات الحرارة المرتفعة، يقلل السخونة ويحسن كفاءة استهلاك الوقود.',
    descriptionEn: 'Maintains optimal tire pressure across extreme temperatures, reduces heat buildup, and saves fuel.',
    actionTextAr: 'اتصل 19725',
    actionTextEn: 'Call 19725',
    iconName: 'wind'
  },
  {
    id: 'ac-recharge',
    name: 'شحن تكييف السيارة',
    nameEn: 'Car AC Recharge',
    startingPrice: 500,
    priceNoteAr: 'يبدأ من ٥٠٠ جنيه',
    priceNoteEn: 'Starts at LE 500',
    descriptionAr: 'استمتع بالبرودة القصوى مع خدمة تكييف احترافية: فحص دورة الفريون، اختبار التسريب، وتنظيف الفلاتر.',
    descriptionEn: 'Enjoy maximum cooling power: refrigerant level test, leak detection, and evaporator cabin sanitization.',
    actionTextAr: 'اتصل 19725',
    actionTextEn: 'Call 19725',
    iconName: 'snowflake'
  },
  {
    id: 'comprehensive-inspection',
    name: 'فحص شامل للسيارة',
    nameEn: 'Comprehensive Vehicle Inspection',
    startingPrice: 'مجاني',
    priceNoteAr: 'فحص شامل مجاني',
    priceNoteEn: 'Free Vehicle Checkup',
    descriptionAr: 'احصل على فحص كامل لحالة سيارتك (عفشة، فرامل، بطارية، سوائل، إطارات) مجاناً مع كل خدمة نقوم بها.',
    descriptionEn: 'Receive a 32-point multipoint vehicle checkup (suspension, brakes, battery, fluids) free with any service.',
    actionTextAr: 'اتصل 19725',
    actionTextEn: 'Call 19725',
    iconName: 'shieldCheck',
    includedFree: true
  },
  {
    id: 'mobile-workshop',
    name: 'الورشة المتنقلة',
    nameEn: 'Mobile Workshop',
    startingPrice: 'حتى باب منزلك',
    priceNoteAr: 'حتى باب منزلك',
    priceNoteEn: 'At Your Doorstep',
    descriptionAr: 'نصل إليك! خدمة احترافية أينما كنت: تغيير وتركيب إطارات، ترصيص، بطاريات، وتغيير زيوت أمام بيتك أو مكتبك.',
    descriptionEn: 'We come to you! Fully equipped on-site tire fitting, balancing, batteries, and oil service at your doorstep.',
    actionTextAr: 'اطلب وحدة متنقلة',
    actionTextEn: 'Book Mobile Van',
    iconName: 'truck',
    highlight: true
  }
];

export const SERVICE_CENTERS: ServiceCenter[] = [
  {
    id: 'el-obour',
    nameAr: 'فرع العبور (تحت إشراف م. مينا شكري)',
    nameEn: 'El Obour Branch',
    cityAr: 'القاهرة الكبرى',
    cityEn: 'Greater Cairo',
    areaAr: 'مدينة العبور',
    areaEn: 'Obour City',
    addressAr: 'المنطقة الصناعية الأولى، بجوار سوق العبور الدولي، طريق مصر الإسماعيلية',
    addressEn: '1st Industrial Zone, next to Obour Market, Cairo-Ismailia Road',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ١٠:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 10:00 PM',
    services: ['تركيب إطارات', 'ضبط زوايا 3D', 'ترصيص', 'فحص أوبر معتمد', 'تغيير بطاريات وزيوت'],
    isPopular: true
  },
  {
    id: 'tagamoa-90',
    nameAr: 'فرع التجمع الخامس - شارع التسعين',
    nameEn: 'New Cairo - 90th Street',
    cityAr: 'القاهرة الجديدة',
    cityEn: 'New Cairo',
    areaAr: 'التجمع الخامس',
    areaEn: '5th Settlement',
    addressAr: 'محور التسعين الجنوبي، بجوار مجمع البنوك، القاهرة الجديدة',
    addressEn: 'South 90th St, near Banks District, New Cairo',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ١١:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 11:00 PM',
    services: ['تركيب وترصيص', 'ضبط زوايا ليزر', 'تكييف سيارات', 'نيتروجين', 'فحص شامل'],
    isPopular: true
  },
  {
    id: 'maadi',
    nameAr: 'فرع المعادي - الأوتوستراد',
    nameEn: 'Maadi - Autostrad',
    cityAr: 'القاهرة',
    cityEn: 'Cairo',
    areaAr: 'المعادي',
    areaEn: 'Maadi',
    addressAr: 'طريق الأوتوستراد الرئيسي، بجوار كارفور المعادي ومحطة وطنية',
    addressEn: 'Autostrad Rd, adjacent to Carrefour Maadi',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ١٠:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 10:00 PM',
    services: ['خدمة إطارات سريعة', 'بطاريات Varta & Sailun', 'عفشة ومساعدين'],
    isPopular: true
  },
  {
    id: 'mohandessin',
    nameAr: 'فرع المهندسين - شارع السودان',
    nameEn: 'Mohandessin - Sudan St',
    cityAr: 'الجيزة',
    cityEn: 'Giza',
    areaAr: 'المهندسين',
    areaEn: 'Mohandessin',
    addressAr: 'تقاطع شارع السودان مع جامعة الدول العربية، المهندسين',
    addressEn: 'Sudan St intersection with Gameat El Dowal, Mohandessin',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ١١:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 11:00 PM',
    services: ['فحص أوبر', 'ضبط زوايا', 'ترصيص ديناميكي', 'إطارات ملاكي وفان'],
    isPopular: true
  },
  {
    id: 'october-mehwar',
    nameAr: 'فرع ٦ أكتوبر - محور ٢٦ يوليو',
    nameEn: '6th of October - 26th July Corridor',
    cityAr: 'الجيزة',
    cityEn: 'Giza',
    areaAr: '٦ أكتوبر',
    areaEn: '6th of October',
    addressAr: 'محور ٢٦ يوليو باتجاه ميدان جهينة، بجوار مول العرب',
    addressEn: '26th July Corridor towards Juhayna Sq, near Mall of Arabia',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ١٠:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 10:00 PM',
    services: ['ورشة متكاملة', 'شحن فريون', 'إطارات دفع رباعي SUV', 'صيانة دورية']
  },
  {
    id: 'sheikh-zayed',
    nameAr: 'فرع الشيخ زايد - وصلة دهشور',
    nameEn: 'Sheikh Zayed - Dahshur Link',
    cityAr: 'الجيزة',
    cityEn: 'Giza',
    areaAr: 'الشيخ زايد',
    areaEn: 'Sheikh Zayed',
    addressAr: 'وصلة دهشور، بجوار بيفرلي هيلز ومحطة شيل أوت',
    addressEn: 'Dahshur Link, near Beverly Hills & ChillOut',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ١١:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 11:00 PM',
    services: ['خدمة VIP سريعة', 'إطارات ران فلات RunFlat', 'ضبط كمبيوتر']
  },
  {
    id: 'heliopolis-nozha',
    nameAr: 'فرع النزهة الجديدة - جسر السويس',
    nameEn: 'New Nozha - Gesr El Suez',
    cityAr: 'القاهرة',
    cityEn: 'Cairo',
    areaAr: 'مصر الجديدة',
    areaEn: 'Heliopolis / Nozha',
    addressAr: 'شارع جوزيف تيتو، أمام مطار القاهرة الصالة الموسمية',
    addressEn: 'Joseph Tito St, opposite Cairo Airport seasonal hall',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ١٠:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 10:00 PM',
    services: ['فحص سيارات شامل', 'إطارات تجارية وملاكي', 'بطاريات']
  },
  {
    id: 'alex-smouha',
    nameAr: 'فرع الإسكندرية - سموحة',
    nameEn: 'Alexandria - Smouha',
    cityAr: 'الإسكندرية',
    cityEn: 'Alexandria',
    areaAr: 'سموحة',
    areaEn: 'Smouha',
    addressAr: 'شارع فوزي معاذ، ميدان فيكتور عمانويل، سموحة',
    addressEn: 'Fawzi Moaz St, Victor Emmanuel Sq, Smouha, Alex',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٣٠ ص حتى ١٠:٣٠ م',
    hoursEn: 'Daily: 9:30 AM – 10:30 PM',
    services: ['وكيل Sailun معتمد', 'ضبط زوايا وترصيص', 'نيتروجين']
  },
  {
    id: 'alex-moharram-bek',
    nameAr: 'فرع الإسكندرية - محرم بك',
    nameEn: 'Alexandria - Moharram Bek',
    cityAr: 'الإسكندرية',
    cityEn: 'Alexandria',
    areaAr: 'محرم بك',
    areaEn: 'Moharram Bek',
    addressAr: 'طريق قناة السويس السريع، بجوار كارفور سيتي سنتر الإسكندرية',
    addressEn: 'Suez Canal Highway, near Carrefour City Centre Alex',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٣٠ ص حتى ١٠:٣٠ م',
    hoursEn: 'Daily: 9:30 AM – 10:30 PM',
    services: ['تركيب إطارات', 'صيانة عفشة سريعة', 'شحن تكييف']
  },
  {
    id: 'tanta',
    nameAr: 'فرع طنطا - طريق مصر إسكندرية الزراعي',
    nameEn: 'Tanta - Delta Center',
    cityAr: 'الغربية',
    cityEn: 'Gharbia',
    areaAr: 'طنطا',
    areaEn: 'Tanta',
    addressAr: 'مدخل طنطا الجنوبي، بالقرب من كوبري فاروق ومحطة توتال',
    addressEn: 'South entrance of Tanta, near Farouk Bridge',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ٩:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 9:00 PM',
    services: ['إطارات سيارات ونصف نقل', 'ضبط زوايا 3D', 'ترصيص']
  },
  {
    id: 'mansoura',
    nameAr: 'فرع المنصورة - المشاية السفلية',
    nameEn: 'Mansoura - Mashaya',
    cityAr: 'الدقهلية',
    cityEn: 'Dakahlia',
    areaAr: 'المنصورة',
    areaEn: 'Mansoura',
    addressAr: 'شارع الجمهورية أمام نادي جزيرة الورد، المنصورة',
    addressEn: 'El Gomhoureya St, facing Geziret El Ward Club, Mansoura',
    phone: '19725',
    hoursAr: 'يومياً من ٩:٠٠ ص حتى ٩:٠٠ م',
    hoursEn: 'Daily: 9:00 AM – 9:00 PM',
    services: ['صيانة إطارات وبطاريات', 'فحص دوري']
  },
  {
    id: 'hurghada',
    nameAr: 'فرع الغردقة - طريق النصر',
    nameEn: 'Hurghada - El Nasr Rd',
    cityAr: 'البحر الأحمر',
    cityEn: 'Red Sea',
    areaAr: 'الغردقة',
    areaEn: 'Hurghada',
    addressAr: 'طريق النصر الرئيسي، الدهار، بجوار مستشفى الغردقة العام',
    addressEn: 'El Nasr Rd, Dahar, Hurghada',
    phone: '19725',
    hoursAr: 'يومياً من ١٠:٠٠ ص حتى ١٠:٠٠ م',
    hoursEn: 'Daily: 10:00 AM – 10:00 PM',
    services: ['خدمة إطارات صيفية وسياحية', 'تكييف سيارات', 'نيتروجين']
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'معتز رفعت',
    initials: 'MR',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'قمت بتركيب طقم إطارات Sailun، وبصراحة كانت تجربة ممتازة. الإطارات رائعة، والفنيون كانوا محترفين للغاية.',
    commentEn: 'Installed a set of Sailun tires, honestly an excellent experience. The tires perform great and technicians are very professional.'
  },
  {
    id: 'rev-2',
    name: 'محمود المهدي',
    initials: 'MM',
    rating: 4,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'نظيتا العبور — فحص ممتاز تم بدقة عالية وأمانة واحترافية تحت إشراف المهندس مينا شكري.',
    commentEn: 'Nacita Obour — flawless inspection performed with high accuracy and honesty under Eng. Mina Shokry supervision.',
    branch: 'فرع العبور'
  },
  {
    id: 'rev-3',
    name: 'أحمد عبد الغني',
    initials: 'AA',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'تجربة ممتازة، مع استقبال حار وفريق من الفنيين المحترفين للغاية. شكراً جزيلاً لكم جميعاً على الخدمة الرائعة.',
    commentEn: 'Excellent experience with warm hospitality and very skilled technical team. Thank you so much for the stellar service.'
  },
  {
    id: 'rev-4',
    name: 'أدهم إبراهيم',
    initials: 'AI',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'حظيت بتجربة ممتازة مع خدمة الفحص الشامل للسيارة. كان الفريق في الفرع محترفاً للغاية ومتعاوناً جداً. وشكر خاص للفني محمود الذي أنقذني من شراء سيارة بها عدة مشاكل خفية.',
    commentEn: 'Great experience with comprehensive inspection. The team was supportive and huge thanks to tech Mahmoud who saved me from buying a car with hidden flaws.'
  },
  {
    id: 'rev-5',
    name: 'هادي منصور',
    initials: 'HM',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'فحص شامل للسيارات، وفحص سيارات أوبر، وبيع البطاريات والإطارات — كل ذلك يديره فريق من المهندسين المحترفين الذين يقدمون خدمة عملاء ممتازة. شكراً للمهندس محمد والمهندس مينا.',
    commentEn: 'Comprehensive check, Uber inspection, battery & tire sales managed by professional engineers offering top customer service. Thanks Eng. Mohamed and Eng. Mina.'
  },
  {
    id: 'rev-6',
    name: 'محسن حبيب',
    initials: 'MH',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'شركة محترفة جداً بإطارات ممتازة وخدمة متميزة. المشرفون محترمون ويعاملون العملاء بشكل رائع، وحتى فحص أوبر يتم بدقة وأمانة. شكراً نظيتا على كل شيء.',
    commentEn: 'Very professional company with top tires and exceptional care. Supervisors treat customers with respect, even Uber checks are honest and precise.'
  },
  {
    id: 'rev-7',
    name: 'أحمد نبيل',
    initials: 'AN',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'معاملة محترمة، وخدمة ممتازة، وعملية حجز سهلة عند شراء إطارات جديدة. أنصح به بشدة.',
    commentEn: 'Respectful treatment, flawless service, and easy booking process when buying new tires. Highly recommended.'
  },
  {
    id: 'rev-8',
    name: 'شذى المعز',
    initials: 'SA',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'مكان متميز، سواء بموقعه أو بفريقه الرائع. من الواضح أنهم حريصون على معاملة العملاء جيداً وأداء كل خدمة باحترافية وسهولة.',
    commentEn: 'Outstanding venue in location and wonderful crew. They truly care about treating customers well and performing services seamlessly.'
  },
  {
    id: 'rev-9',
    name: 'محمد بكري',
    initials: 'MB',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'من أفضل فروع نظيتا حقاً. أشخاص محترمون جداً وخدمة رائعة. وشكر خاص للمهندس محمد.',
    commentEn: 'Truly one of the best branches. Respectful team and wonderful service. Special thanks to Eng. Mohamed.'
  },
  {
    id: 'rev-10',
    name: 'محمد الخضري',
    initials: 'ME',
    rating: 5,
    source: 'تقييم على خرائط Google',
    sourceEn: 'Google Maps Review',
    commentAr: 'أشخاص محترمون جداً يتعاملون بإنصاف ويحلّون أي مشكلة، بأسعار إطارات معقولة. وشكر خاص للأستاذ مينا في القسم المالي على مساعدته الممتازة وكل التسهيلات.',
    commentEn: 'Very respectful and fair team that resolves any issue at fair prices. Special thanks to Mr. Mina in finance for the great support.'
  }
];

export const TRUST_PILLARS = [
  {
    id: 'guaranteed-quality',
    titleAr: 'جودة مضمونة',
    titleEn: 'Guaranteed Quality',
    descAr: 'جميع المنتجات تأتي بضمان الشركة المصنعة الرسمي مع ضمان الجودة والاستبدال لدينا',
    descEn: 'All products carry official manufacturer warranty with our quality & replacement guarantee'
  },
  {
    id: 'certified-technicians',
    titleAr: 'فنيون متخصصون',
    titleEn: 'Certified Technicians',
    descAr: 'محترفون ومهندسون معتمدون بخبرة تزيد عن ١٥ عاماً في أحدث تقنيات صيانة السيارات',
    descEn: 'Certified automotive engineers & technicians with 15+ years hands-on mastery'
  },
  {
    id: 'best-value',
    titleAr: 'أفضل قيمة',
    titleEn: 'Best Value',
    descAr: 'أسعار تنافسية وخصومات حقيقية تشمل ضريبة القيمة المضافة مع خيارات تقسيط ميسرة',
    descEn: 'Competitive pricing, genuine VAT-inclusive savings, and flexible installment plans'
  },
  {
    id: 'rapid-service',
    titleAr: 'خدمة سريعة',
    titleEn: 'Rapid Service',
    descAr: 'خدمة سريعة بدون انتظار ومواعيد دقيقة — لأن وقتك وسلامتك على الطريق هما أولويتنا',
    descEn: 'Prompt turnaround with zero-wait scheduled appointments — your time is respected'
  }
];
