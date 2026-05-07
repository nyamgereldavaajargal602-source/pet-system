// ============================================================
//  DATA
// ============================================================
const SPECIES = [
  'нохой','муур','туулай','хэрэм','могой','хомстер','гүрвэл','аалз','тоть','загас',
  'тахиа','галуу','нугас','үхэр','морь','тэмээ','хонь','ямаа','гахай','арслан',
  'бар','баавгай','үнэг','чоно','буга','заан','сармагчин','матар','оцон шувуу','бүргэд'
];

const EMOJI = {
  'нохой':'🐕','муур':'🐈','туулай':'🐇','хэрэм':'🐿️','могой':'🐍','хомстер':'🐹',
  'гүрвэл':'🦎','аалз':'🕷️','тоть':'🦜','загас':'🐟','тахиа':'🐔','галуу':'🪿',
  'нугас':'🦆','үхэр':'🐄','морь':'🐎','тэмээ':'🐫','хонь':'🐑','ямаа':'🐐',
  'гахай':'🐖','арслан':'🦁','бар':'🐯','баавгай':'🐻','үнэг':'🦊','чоно':'🐺',
  'буга':'🦌','заан':'🐘','сармагчин':'🐒','матар':'🐊','оцон шувуу':'🐧','бүргэд':'🦅'
};

const LABEL = {
  'нохой':'Нохой','муур':'Муур','туулай':'Туулай','хэрэм':'Хэрэм','могой':'Могой',
  'хомстер':'Хомстер','гүрвэл':'Гүрвэл','аалз':'Аалз','тоть':'Тоть','загас':'Загас',
  'тахиа':'Тахиа','галуу':'Галуу','нугас':'Нугас','үхэр':'Үхэр','морь':'Морь',
  'тэмээ':'Тэмээ','хонь':'Хонь','ямаа':'Ямаа','гахай':'Гахай','арслан':'Арслан',
  'бар':'Бар','баавгай':'Баавгай','үнэг':'Үнэг','чоно':'Чоно','буга':'Буга',
  'заан':'Заан','сармагчин':'Сармагчин','матар':'Матар','оцон шувуу':'Оцон шувуу','бүргэд':'Бүргэд'
};
  
const animals = [
  { name:'rex',      type:'нохой',      sex:'эр', age:3,  note:'Идэвхтэй' },
  { name:'bella',    type:'нохой',      sex:'эм', age:2,  note:'Гэрийн тэжээвэр' },
  { name:'max',      type:'нохой',      sex:'эр', age:5,  note:'Сахиулагч' },
  { name:'luna',     type:'муур',       sex:'эм', age:4,  note:'Тайван' },
  { name:'simba',    type:'муур',       sex:'эр', age:1,  note:'Тоглох дуртай' },
  { name:'pashka',   type:'хэрэм',      sex:'эм', age:1,  note:'Жижиг биетэй' },
  { name:'tuluu',    type:'туулай',     sex:'эр', age:2,  note:'Өвс сайн иддэг' },
  { name:'koba',     type:'могой',      sex:'эр', age:2,  note:'Анхааралтай арчилна' },
  { name:'homa',     type:'хомстер',    sex:'эм', age:1,  note:'Торонд амьдарна' },
  { name:'gurlen',   type:'гүрвэл',     sex:'эр', age:2,  note:'Хуурай дулаан орчин' },
  { name:'aalz1',    type:'аалз',       sex:'эм', age:1,  note:'Жижиг ангууч' },
  { name:'toty',     type:'тоть',       sex:'эм', age:3,  note:'Дуу дуурайна' },
  { name:'fishy',    type:'загас',      sex:'эм', age:1,  note:'Усны орчин хэрэгтэй' },
  { name:'buhen',    type:'тахиа',      sex:'эм', age:2,  note:'Өндөглөдөг' },
  { name:'galuu1',   type:'галуу',      sex:'эр', age:4,  note:'Усанд дуртай' },
  { name:'nugas1',   type:'нугас',      sex:'эм', age:2,  note:'Тэвчээртэй' },
  { name:'uher1',    type:'үхэр',       sex:'эм', age:6,  note:'Сүү гаргадаг' },
  { name:'mor1',     type:'морь',       sex:'эм', age:8,  note:'Ажилсаг' },
  { name:'tamee1',   type:'тэмээ',      sex:'эм', age:7,  note:'Цөлд зохицно' },
  { name:'hon1',     type:'хонь',       sex:'эм', age:5,  note:'Тайван зан' },
  { name:'yaa1',     type:'ямаа',       sex:'эр', age:4,  note:'Бэлчээрт сайн' },
  { name:'gahai1',   type:'гахай',      sex:'эр', age:2,  note:'Ухаантай' },
  { name:'arslan1',  type:'арслан',     sex:'эр', age:6,  note:'Махчин' },
  { name:'bar1',     type:'бар',        sex:'эр', age:5,  note:'Хүчтэй' },
  { name:'baavgai1', type:'баавгай',    sex:'эм', age:9,  note:'Том биетэй' },
  { name:'uneg1',    type:'үнэг',       sex:'эм', age:3,  note:'Мэргэн' },
  { name:'chono1',   type:'чоно',       sex:'эр', age:4,  note:'Сүргийн амьтан' },
  { name:'buga1',    type:'буга',       sex:'эм', age:4,  note:'Сэргэлэн' },
  { name:'zaan1',    type:'заан',       sex:'эм', age:20, note:'Том биетэй' },
  { name:'sar1',     type:'сармагчин',  sex:'эр', age:3,  note:'Ухаантай хөдөлгөөнт' },
  { name:'matar1',   type:'матар',      sex:'эр', age:12, note:'Анхаарал шаарддаг' },
  { name:'penguin1', type:'оцон шувуу', sex:'эм', age:2,  note:'Хүйтэн орчинд амьдарна' },
  { name:'burged1',  type:'бүргэд',     sex:'эр', age:7,  note:'Өндөрт ниснэ' }
];

const bio = {
  'нохой':      { weight:25,   legs:4, lifespan:12 },
  'муур':       { weight:4,    legs:4, lifespan:15 },
  'туулай':     { weight:2,    legs:4, lifespan:9  },
  'хэрэм':      { weight:0.5,  legs:4, lifespan:6  },
  'могой':      { weight:2,    legs:0, lifespan:20 },
  'хомстер':    { weight:0.1,  legs:4, lifespan:3  },
  'гүрвэл':     { weight:1,    legs:4, lifespan:8  },
  'аалз':       { weight:0.05, legs:8, lifespan:5  },
  'тоть':       { weight:0.4,  legs:2, lifespan:30 },
  'загас':      { weight:0.2,  legs:0, lifespan:8  },
  'тахиа':      { weight:2,    legs:2, lifespan:8  },
  'галуу':      { weight:4,    legs:2, lifespan:20 },
  'нугас':      { weight:3,    legs:2, lifespan:15 },
  'үхэр':       { weight:500,  legs:4, lifespan:20 },
  'морь':       { weight:450,  legs:4, lifespan:25 },
  'тэмээ':      { weight:600,  legs:4, lifespan:35 },
  'хонь':       { weight:70,   legs:4, lifespan:16 },
  'ямаа':       { weight:60,   legs:4, lifespan:18 },
  'гахай':      { weight:90,   legs:4, lifespan:20 },
  'арслан':     { weight:190,  legs:4, lifespan:14 },
  'бар':        { weight:220,  legs:4, lifespan:16 },
  'баавгай':    { weight:350,  legs:4, lifespan:25 },
  'үнэг':       { weight:8,    legs:4, lifespan:12 },
  'чоно':       { weight:45,   legs:4, lifespan:13 },
  'буга':       { weight:120,  legs:4, lifespan:15 },
  'заан':       { weight:4000, legs:4, lifespan:60 },
  'сармагчин':  { weight:40,   legs:2, lifespan:30 },
  'матар':      { weight:500,  legs:4, lifespan:70 },
  'оцон шувуу': { weight:25,   legs:2, lifespan:20 },
  'бүргэд':     { weight:5,    legs:2, lifespan:25 }
};

const cost = {
  'нохой':170000, 'муур':115000, 'туулай':35000, 'хэрэм':23000, 'могой':11000,
  'хомстер':13000, 'гүрвэл':18000, 'аалз':6500, 'тоть':58000, 'загас':37000,
  'тахиа':42000, 'галуу':48000, 'нугас':46000, 'үхэр':380000, 'морь':220000,
  'тэмээ':140000, 'хонь':70000, 'ямаа':65000, 'гахай':90000, 'арслан':250000,
  'бар':270000, 'баавгай':300000, 'үнэг':100000, 'чоно':120000, 'буга':125000,
  'заан':500000, 'сармагчин':130000, 'матар':160000, 'оцон шувуу':85000, 'бүргэд':50000
};

const vaccine = {
  'нохой':       ['DHPP','Лептоспироз'],
  'муур':        ['FVRCP','Лейкеми'],
  'туулай':      ['Миксоматоз'],
  'хэрэм':       ['Ерөнхий үзлэг'],
  'могой':       ['Чеклаж'],
  'хомстер':     ['Үгүй'],
  'гүрвэл':      ['Ерөнхий үзлэг'],
  'аалз':        ['Үгүй'],
  'тоть':        ['Psittacosis check'],
  'загас':       ['Тусгай вакцин байхгүй'],
  'тахиа':       ['Newcastle'],
  'галуу':       ['Avian influenza'],
  'нугас':       ['Avian influenza'],
  'үхэр':        ['FMD','Brucellosis'],
  'морь':        ['Tetanus','Flu'],
  'тэмээ':       ['Camel pox'],
  'хонь':        ['PPR'],
  'ямаа':        ['PPR'],
  'гахай':       ['Classical swine fever'],
  'арслан':      ['Ерөнхий вакцин'],
  'бар':         ['Ерөнхий вакцин'],
  'баавгай':     ['Ерөнхий вакцин'],
  'үнэг':        ['Ерөнхий вакцин'],
  'чоно':        ['Ерөнхий вакцин'],
  'буга':        ['Ерөнхий үзлэг'],
  'заан':        ['Ерөнхий үзлэг'],
  'сармагчин':   ['Ерөнхий үзлэг'],
  'матар':       ['Ерөнхий үзлэг'],
  'оцон шувуу':  ['Avian influenza'],
  'бүргэд':      ['Ерөнхий үзлэг']
};

const checkup = {
  'нохой':      { months:6,  signs:'Уйлах, халуурах, хоолонд дургүй болох' },
  'муур':       { months:6,  signs:'Нуугдах, ханиах, сүүл унжих' },
  'туулай':     { months:3,  signs:'Гэдэс дүүрэх, хоол идэхгүй байх' },
  'хэрэм':      { months:6,  signs:'Хооллохгүй байх, ядрах' },
  'могой':      { months:12, signs:'Арьс хуулахгүй, идэхгүй байх' },
  'хомстер':    { months:3,  signs:'Жин буурах' },
  'гүрвэл':     { months:6,  signs:'Хөдөлгөөн буурах, хоолгүй болох' },
  'аалз':       { months:12, signs:'Идэвхгүй болох' },
  'тоть':       { months:6,  signs:'Дуу багасах, өд сөхрөх' },
  'загас':      { months:2,  signs:'Сэлэхээ болих, усны гадарга дээр гарах' },
  'тахиа':      { months:4,  signs:'Өндөглөхгүй байх, сулрах' },
  'галуу':      { months:6,  signs:'Хөдөлгөөн буурах' },
  'нугас':      { months:6,  signs:'Хөвөхгүй болох' },
  'үхэр':       { months:3,  signs:'Сүү багасах, амьсгаа давчдах' },
  'морь':       { months:6,  signs:'Доголох, турах' },
  'тэмээ':      { months:6,  signs:'Ус бага уух, сульдах' },
  'хонь':       { months:6,  signs:'Ноос сэгсийх, турах' },
  'ямаа':       { months:6,  signs:'Сулрах, ноос муудах' },
  'гахай':      { months:4,  signs:'Сулрах, халуурах' },
  'арслан':     { months:6,  signs:'Хоолонд дургүй болох' },
  'бар':        { months:6,  signs:'Хөдөлгөөн буурах' },
  'баавгай':    { months:6,  signs:'Жин буурах' },
  'үнэг':       { months:6,  signs:'Идэвхгүй болох' },
  'чоно':       { months:6,  signs:'Сулрах' },
  'буга':       { months:6,  signs:'Доголох, хоолонд дургүй болох' },
  'заан':       { months:6,  signs:'Жин буурах, сульдах' },
  'сармагчин':  { months:6,  signs:'Хөдөлгөөн буурах' },
  'матар':      { months:12, signs:'Идэвхгүй болох' },
  'оцон шувуу': { months:6,  signs:'Хүйтэнд дургүй болох' },
  'бүргэд':     { months:12, signs:'Нисэхгүй болох' }
};

const food = {
  'нохой':      [['Хуурай хоол','300г',2,'Тэнцвэртэй уураг'],['Мах','200г',1,'Шинэхэн'],['Ногоо','50г',1,'Эслэг']],
  'муур':       [['Консерв','85г',2,'Уураг ихтэй'],['Тахиа','60г',1,'Өөх тос багатай']],
  'туулай':     [['Өвс','150г',3,'Үндсэн хоол'],['Навч','50г',1,'Шинэхэн']],
  'хэрэм':      [['Самар','30г',2,'Бага хэмжээгээр'],['Үр','20г',1,'Өдөр бүр']],
  'могой':      [['Хулгана','1ш',1,'Зорицуулсан хэмжээ']],
  'хомстер':    [['Үр','15г',2,'Жижиг хэмжээ'],['Жимс','10г',1,'Чихэр багатай']],
  'гүрвэл':     [['Шавж','20г',1,'Амьд идэш'],['Ногоон навч','10г',1,'Зарим төрөлд']],
  'аалз':       [['Жижиг шавж','2-3ш',1,'Амьд идэш']],
  'тоть':       [['Үр','20г',2,'Холимог'],['Жимс','10г',1,'Бага хэмжээгээр']],
  'загас':      [['Тэжээлийн үрэл','10г',2,'Усны төрлөөс хамаарна']],
  'тахиа':      [['Будаа','100г',2,'Өдөр тутам'],['Үр','50г',1,'Цэвэр байх']],
  'галуу':      [['Ногоо','100г',2,'Шинэхэн'],['Үр','40г',1,'Өдөр тутам']],
  'нугас':      [['Үр','50г',2,'Цэвэр ус заавал']],
  'үхэр':       [['Өвс','5кг',2,'Үндсэн хоол'],['Тэжээл','1кг',1,'Эрчим нэмнэ']],
  'морь':       [['Өвс','4кг',2,'Үндсэн хоол'],['Буудай','1кг',1,'Нэмэлт']],
  'тэмээ':      [['Өвс','6кг',2,'Тэсвэртэй'],['Үр','500г',1,'Нэмэлт']],
  'хонь':       [['Өвс','2кг',2,'Үндсэн хоол'],['Тэжээл','300г',1,'Нэмэлт']],
  'ямаа':       [['Өвс','2кг',2,'Өдөр тутам'],['Ногоо','300г',1,'Шинэхэн']],
  'гахай':      [['Тэжээл','1.5кг',2,'Өдөр тутам'],['Ногоо','300г',1,'Давсгүй']],
  'арслан':     [['Мах','5кг',1,'Мэргэжлийн арчилгаа']],
  'бар':        [['Мах','6кг',1,'Мэргэжлийн арчилгаа']],
  'баавгай':    [['Жимс','3кг',2,'Холимог хоол'],['Мах','2кг',1,'Хяналттай']],
  'үнэг':       [['Мах','1кг',2,'Шинэхэн']],
  'чоно':       [['Мах','4кг',1,'Тэжээлийн хяналт']],
  'буга':       [['Өвс','3кг',2,'Бэлчээрийн хоол']],
  'заан':       [['Ургамал','20кг',3,'Өдөр тутам']],
  'сармагчин':  [['Жимс','2кг',3,'Тэнцвэртэй'],['Навч','300г',1,'Нэмэлт']],
  'матар':      [['Мах','5кг',1,'Хяналттай']],
  'оцон шувуу': [['Загас','2кг',2,'Хүйтэн усны орчин']],
  'бүргэд':     [['Мах','1кг',1,'Мэргэжлийн арчилгаа']]
};

const compat = [
  { a:'нохой',   b:'муур',   rel:'ok',   note:'Ихэнхдээ зохицож чадна' },
  { a:'нохой',   b:'туулай', rel:'warn', note:'Хяналт шаардлагатай' },
  { a:'муур',    b:'хэрэм',  rel:'warn', note:'Ангуучлах зан гарч болно' },
  { a:'могой',   b:'хомстер',rel:'bad',  note:'Аюултай хослол' },
  { a:'үхэр',    b:'хонь',   rel:'ok',   note:'Бэлчээрт зохино' },
  { a:'морь',    b:'ямаа',   rel:'ok',   note:'Нэг хашаанд байж болно' },
  { a:'тахиа',   b:'галуу',  rel:'ok',   note:'Нийтлэг хашаанд болно' },
  { a:'тоть',    b:'хэрэм',  rel:'warn', note:'Орчны зохицуулалт хэрэгтэй' },
  { a:'арслан',  b:'бар',    rel:'warn', note:'Хүчтэй махчид' },
  { a:'баавгай', b:'үнэг',   rel:'warn', note:'Хяналттай орчин хэрэгтэй' },
  { a:'чоно',    b:'туулай', rel:'bad',  note:'Аюултай' },
  { a:'заан',    b:'морь',   rel:'ok',   note:'Том талбайд зохино' },
  { a:'загас',   b:'мэлхий', rel:'warn', note:'Усны орчин таарах ёстой' },
  { a:'бүргэд',  b:'бөжин',  rel:'bad',  note:'Махчин зан' }
];

// ============================================================
//  TAB SWITCHER
// ============================================================
function switchTab(btn, id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}

// ============================================================
//  DROPDOWNS
// ============================================================
function populateDropdowns() {
  const typeSelect   = document.getElementById('newType');
  const animalFilter = document.getElementById('animalFilterType');
  const qAnimal      = document.getElementById('qAnimal');

  typeSelect.innerHTML   = '';
  animalFilter.innerHTML = '<option value="">Бүх төрөл</option>';
  qAnimal.innerHTML      = '';

  SPECIES.forEach(s => {
    typeSelect.insertAdjacentHTML('beforeend',
      `<option value="${s}">${EMOJI[s]} ${LABEL[s]}</option>`);
    animalFilter.insertAdjacentHTML('beforeend',
      `<option value="${s}">${EMOJI[s]} ${LABEL[s]}</option>`);
  });

  animals.forEach((a, i) => {
    qAnimal.insertAdjacentHTML('beforeend',
      `<option value="${i}">${EMOJI[a.type]} ${a.name} (${LABEL[a.type]})</option>`);
  });
}

// ============================================================
//  OVERVIEW
// ============================================================
function countFacts() {
  return animals.length + Object.keys(bio).length + Object.keys(cost).length +
    Object.keys(vaccine).length + Object.keys(checkup).length +
    Object.keys(food).length + compat.length;
}

function renderOverview() {
  document.getElementById('totalAnimals').textContent = animals.length;
  document.getElementById('totalSpecies').textContent = SPECIES.length;
  document.getElementById('totalFacts').textContent   = `${countFacts()}+`;
  document.getElementById('totalRules').textContent   = `${compat.length + 20}+`;

  const maxCost = Math.max(...Object.values(cost));
  document.getElementById('costBars').innerHTML = Object.entries(cost)
    .sort((a, b) => b[1] - a[1])
    .map(([t, c]) => `
      <div>
        <div class="bar-head">
          <span>${EMOJI[t]} ${LABEL[t]}</span>
          <span>${c.toLocaleString()} ₮</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${Math.round((c / maxCost) * 100)}%"></div>
        </div>
      </div>
    `).join('');

  document.getElementById('moduleTable').innerHTML = `
    <tr><td>Үндсэн баримт</td><td>animal/5 — нэр, төрөл, хүйс, нас, тэмдэглэл</td><td><span class="badge badge-blue">${animals.length} факт</span></td></tr>
    <tr><td>Биологи</td><td>bio/3 — жин, хөл, наслалт</td><td><span class="badge badge-blue">${Object.keys(bio).length} төрөл</span></td></tr>
    <tr><td>Хоол тэжээл</td><td>food/4 — хоол, хэмжээ, давтамж, тайлбар</td><td><span class="badge badge-blue">${Object.keys(food).length} төрөл</span></td></tr>
    <tr><td>Эрүүл мэнд</td><td>vaccine/2, checkup/2</td><td><span class="badge badge-blue">${Object.keys(vaccine).length} + ${Object.keys(checkup).length}</span></td></tr>
    <tr><td>Нийцтэй байдал</td><td>compatible/2 — ok, warn, bad дүрэм</td><td><span class="badge badge-green">${compat.length} дүрэм</span></td></tr>
  `;
}

// ============================================================
//  ANIMALS
// ============================================================
function renderAnimals() {
  const search     = document.getElementById('animalSearch').value.trim().toLowerCase();
  const typeFilter = document.getElementById('animalFilterType').value;
  const sortBy     = document.getElementById('animalSort').value;
  let list = [...animals];

  if (search) {
    list = list.filter(a =>
      a.name.toLowerCase().includes(search) ||
      a.type.toLowerCase().includes(search) ||
      (a.note || '').toLowerCase().includes(search)
    );
  }
  if (typeFilter) list = list.filter(a => a.type === typeFilter);

  list.sort((a, b) => {
    if (sortBy === 'age')  return b.age - a.age;
    if (sortBy === 'type') return a.type.localeCompare(b.type, 'mn');
    return a.name.localeCompare(b.name, 'mn');
  });

  document.getElementById('animalGrid').innerHTML = list.map(a => {
    const bioInfo = bio[a.type] || { weight:'-', legs:'-', lifespan:'-' };
    return `
      <div class="animal-card">
        <div class="emoji">${EMOJI[a.type] || '🐾'}</div>
        <div class="animal-name">${a.name}</div>
        <div class="animal-meta">${LABEL[a.type] || a.type} • ${a.sex} • ${a.age} нас</div>
        <span class="badge badge-blue">${a.type}</span>
        <div class="animal-desc">${a.note || 'Тэмдэглэл байхгүй.'}</div>
        <div class="small-note" style="margin-top:10px;">
          Жин: ${bioInfo.weight} кг • Хөл: ${bioInfo.legs} • Наслалт: ${bioInfo.lifespan} жил
        </div>
      </div>
    `;
  }).join('') || `<div class="animal-card">
    <div class="animal-name">Илэрц олдсонгүй</div>
    <div class="animal-desc">Хайлт эсвэл filter-ээ өөрчилж үзнэ үү.</div>
  </div>`;
}

function clearAnimalForm() {
  document.getElementById('newName').value = '';
  document.getElementById('newAge').value  = '';
  document.getElementById('newNote').value = '';
  document.getElementById('newSex').value  = 'эр';
  document.getElementById('newType').selectedIndex = 0;
}

function addAnimal() {
  const name = document.getElementById('newName').value.trim();
  const type = document.getElementById('newType').value;
  const sex  = document.getElementById('newSex').value;
  const age  = Number(document.getElementById('newAge').value);
  const note = document.getElementById('newNote').value.trim();

  if (!name || !type || Number.isNaN(age)) {
    alert('Нэр, төрөл, насыг заавал бөглөнө үү.');
    return;
  }

  animals.unshift({ name, type, sex, age, note: note || 'Гараар нэмсэн' });
  populateDropdowns();
  renderOverview();
  renderAnimals();
  renderHealth();
  renderFood();
  renderCompat();
  renderQueryExtras();
  runQueryPreview();
  clearAnimalForm();
  document.querySelector('.tab:nth-child(2)').click();
}

// ============================================================
//  HEALTH
// ============================================================
function renderHealth() {
  document.getElementById('healthTable').innerHTML = SPECIES.map(t => {
    const vac = vaccine[t] || ['Ерөнхий үзлэг'];
    const chk = checkup[t] || { months:6, signs:'Ерөнхий хяналт' };
    return `
      <tr>
        <td><strong>${EMOJI[t]} ${LABEL[t]}</strong></td>
        <td>${vac.join(', ')}</td>
        <td>${chk.months} сар тутам</td>
        <td style="color:#475569">${chk.signs}</td>
      </tr>
    `;
  }).join('');
}

// ============================================================
//  FOOD
// ============================================================
function renderFood() {
  document.getElementById('foodTable').innerHTML = SPECIES.map(t => {
    const items = food[t] || [['-','-','-','-']];
    return items.map((f, idx) => `
      <tr>
        <td>${idx === 0 ? `${EMOJI[t]} ${LABEL[t]}` : ''}</td>
        <td>${f[0]}</td>
        <td>${f[1]}</td>
        <td>${f[2]} удаа</td>
        <td>${f[3] || '-'}</td>
      </tr>
    `).join('');
  }).join('');
}

// ============================================================
//  COMPAT
// ============================================================
function renderCompat() {
  document.getElementById('compatGrid').innerHTML = compat.map(c => {
    const cls   = c.rel === 'ok' ? 'badge-green' : c.rel === 'warn' ? 'badge-amber' : 'badge-red';
    const label = c.rel === 'ok' ? 'НИЙЦТЭЙ'    : c.rel === 'warn' ? 'БОЛГООМЖТОЙ' : 'АЮУЛТАЙ';
    return `
      <div class="compat-item">
        <div class="animal-name">${EMOJI[c.a]} + ${EMOJI[c.b]}</div>
        <div class="animal-meta">${LABEL[c.a]} ↔ ${LABEL[c.b]}</div>
        <div class="badge ${cls}">${label}</div>
        <div class="animal-desc">${c.note}</div>
      </div>
    `;
  }).join('');
}

// ============================================================
//  QUERY
// ============================================================
function renderQueryExtras() {
  const type  = document.getElementById('qType').value;
  const extra = document.getElementById('extraInputs');

  if (type === 'compat') {
    extra.innerHTML = `
      <div class="query-grid">
        <select id="qOtherAnimal"></select>
        <div></div>
      </div>
    `;
    const other = document.getElementById('qOtherAnimal');
    other.innerHTML = animals.map((a, i) =>
      `<option value="${i}">${EMOJI[a.type]} ${a.name} (${LABEL[a.type]})</option>`
    ).join('');
    other.addEventListener('change', runQueryPreview);
  } else if (type === 'age') {
    extra.innerHTML = `
      <div class="query-grid">
        <input id="qHumanAge" type="number" min="0" step="1" placeholder="Хүний нас руу хөрвүүлэх нас" />
        <div class="small-note" style="align-self:center;">Жишээ: 3 настай нохой → хүнээр хэдэн нас вэ?</div>
      </div>
    `;
    document.getElementById('qHumanAge').addEventListener('input', runQueryPreview);
  } else {
    extra.innerHTML = '';
  }
}

function syncQueryFields() {
  renderQueryExtras();
  runQueryPreview();
}

function getCompatibility(a, b) {
  const found = compat.find(c => (c.a === a && c.b === b) || (c.a === b && c.b === a));
  if (found) {
    return {
      rel:   found.rel,
      label: found.rel === 'ok' ? 'НИЙЦТЭЙ' : found.rel === 'warn' ? 'БОЛГООМЖТОЙ' : 'АЮУЛТАЙ',
      note:  found.note
    };
  }
  return { rel:'warn', label:'БОЛГООМЖТОЙ', note:'Ерөнхий хяналттай байлгах хэрэгтэй.' };
}

function getExerciseAdvice(type, age) {
  const indoor = ['муур','хэрэм','хомстер','тоть','загас','аалз'];
  const large  = ['үхэр','морь','тэмээ','буга','заан'];
  const wild   = ['арслан','бар','баавгай','чоно','үнэг','матар'];
  if (indoor.includes(type)) return age < 2 ? 'өдөрт 2-3 удаа богино хөдөлгөөн' : 'өдөрт тогтмол тайван хөдөлгөөн';
  if (large.includes(type))  return 'өргөн талбайд өдөр бүр идэвхтэй хөдөлгөөн';
  if (wild.includes(type))   return 'мэргэжлийн хяналттай хөдөлгөөн';
  return 'өдөрт дундаж ачааллын хөдөлгөөн';
}

function convertAgeToHuman(type, age) {
  const multiplier = {
    'нохой':7,'муур':6,'туулай':5,'хэрэм':4,'могой':4,'хомстер':8,'гүрвэл':6,
    'аалз':2,'тоть':3,'загас':2,'тахиа':4,'галуу':4,'нугас':4,'үхэр':3,'морь':2,
    'тэмээ':2,'хонь':3,'ямаа':3,'гахай':2,'арслан':4,'бар':4,'баавгай':3,'үнэг':4,
    'чоно':4,'буга':3,'заан':2,'сармагчин':3,'матар':3,'оцон шувуу':4,'бүргэд':3
  };
  return age * (multiplier[type] || 1);
}

function runQueryPreview() {
  const type = document.getElementById('qType').value;
  const idx  = Number(document.getElementById('qAnimal').value || 0);
  const a    = animals[idx];
  const box  = document.getElementById('qResult');
  box.className = 'result-box result-ok';

  if (!a) { box.textContent = 'Амьтан олдсонгүй.'; return; }

  if (type === 'cost') {
    box.textContent = `?- cost(${a.name}, X).\n\nX = ${cost[a.type]?.toLocaleString() || 'unknown'} ₮.`;
  } else if (type === 'vaccine') {
    box.textContent = `?- vaccine(${a.name}, X).\n\nX = ${(vaccine[a.type] || ['Ерөнхий үзлэг']).join(', ')}.`;
  } else if (type === 'feed') {
    const rows = food[a.type] || [];
    box.textContent = `?- food(${a.name}, X).\n\n${
      rows.map(r => `X = ${r[0]} (${r[1]}, ${r[2]} удаа, ${r[3]})`).join('\n') || 'X = unknown.'
    }`;
  } else if (type === 'exercise') {
    box.textContent = `?- exercise(${a.name}, X).\n\nX = ${getExerciseAdvice(a.type, a.age)}.`;
  } else if (type === 'age') {
    const ageInput = document.getElementById('qHumanAge');
    const ageVal   = Number(ageInput?.value || a.age);
    box.textContent = `?- human_age(${a.name}, X).\n\nX = ${convertAgeToHuman(a.type, ageVal)} хүний нас.`;
  } else if (type === 'compat') {
    const otherIdx = Number(document.getElementById('qOtherAnimal')?.value || 0);
    const b        = animals[otherIdx];
    const rel      = getCompatibility(a.type, b.type);
    box.className  = 'result-box ' + (rel.rel === 'ok' ? 'result-ok' : rel.rel === 'warn' ? 'result-warn' : 'result-err');
    box.textContent = `?- compatible(${a.name}, ${b.name}).\n\nResult = ${rel.label}\nNote   = ${rel.note}`;
  }
}

function runQuery()      { runQueryPreview(); }
function fillSampleQuery() {
  document.getElementById('qType').value = 'feed';
  renderQueryExtras();
  document.getElementById('qAnimal').selectedIndex = 0;
  runQueryPreview();
}

// ============================================================
//  INIT
// ============================================================
document.getElementById('qType').addEventListener('change', syncQueryFields);
document.getElementById('qAnimal').addEventListener('change', runQueryPreview);

populateDropdowns();
renderOverview();
renderAnimals();
renderHealth();
renderFood();
renderCompat();
renderQueryExtras();
runQueryPreview();