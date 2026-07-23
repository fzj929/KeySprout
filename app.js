const wordBanks = {
  basic: [
    ['apple', '/ˈæp.əl/', 'n. 苹果'], ['bright', '/braɪt/', 'adj. 明亮的'], ['family', '/ˈfæm.əl.i/', 'n. 家庭'],
    ['garden', '/ˈɡɑː.dən/', 'n. 花园'], ['listen', '/ˈlɪs.ən/', 'v. 聆听'], ['morning', '/ˈmɔː.nɪŋ/', 'n. 早晨'],
    ['people', '/ˈpiː.pəl/', 'n. 人们'], ['simple', '/ˈsɪm.pəl/', 'adj. 简单的'], ['travel', '/ˈtræv.əl/', 'v. 旅行'],
    ['window', '/ˈwɪn.dəʊ/', 'n. 窗户'], ['answer', '/ˈɑːn.sər/', 'n. 答案'], ['dream', '/driːm/', 'n. 梦想'],
    ['friend', '/frend/', 'n. 朋友'], ['happy', '/ˈhæp.i/', 'adj. 快乐的'], ['music', '/ˈmjuː.zɪk/', 'n. 音乐']
  ],
  intermediate: [
    ['ambition', '/æmˈbɪʃ.ən/', 'n. 雄心；抱负'], ['creative', '/kriˈeɪ.tɪv/', 'adj. 有创造力的'], ['essential', '/ɪˈsen.ʃəl/', 'adj. 必不可少的'],
    ['frequent', '/ˈfriː.kwənt/', 'adj. 频繁的'], ['identity', '/aɪˈden.tə.ti/', 'n. 身份；特征'], ['knowledge', '/ˈnɒl.ɪdʒ/', 'n. 知识'],
    ['perspective', '/pəˈspek.tɪv/', 'n. 视角'], ['resource', '/rɪˈzɔːs/', 'n. 资源'], ['strategy', '/ˈstræt.ə.dʒi/', 'n. 策略'],
    ['transform', '/trænsˈfɔːm/', 'v. 转变'], ['approach', '/əˈprəʊtʃ/', 'n. 方法'], ['discover', '/dɪˈskʌv.ər/', 'v. 发现'],
    ['influence', '/ˈɪn.flu.əns/', 'n. 影响'], ['potential', '/pəˈten.ʃəl/', 'n. 潜力'], ['valuable', '/ˈvæl.jə.bəl/', 'adj. 有价值的']
  ],
  advanced: [
    ['conscientious', '/ˌkɒn.ʃiˈen.ʃəs/', 'adj. 认真负责的'], ['entrepreneur', '/ˌɒn.trə.prəˈnɜːr/', 'n. 企业家'],
    ['extraordinary', '/ɪkˈstrɔː.dɪ.nər.i/', 'adj. 非凡的'], ['infrastructure', '/ˈɪn.frəˌstrʌk.tʃər/', 'n. 基础设施'],
    ['miscellaneous', '/ˌmɪs.əlˈeɪ.ni.əs/', 'adj. 各种各样的'], ['pronunciation', '/prəˌnʌn.siˈeɪ.ʃən/', 'n. 发音'],
    ['psychological', '/ˌsaɪ.kəˈlɒdʒ.ɪ.kəl/', 'adj. 心理的'], ['responsibility', '/rɪˌspɒn.səˈbɪl.ə.ti/', 'n. 责任'],
    ['sophisticated', '/səˈfɪs.tɪ.keɪ.tɪd/', 'adj. 复杂精密的'], ['unprecedented', '/ʌnˈpres.ɪ.den.tɪd/', 'adj. 前所未有的'],
    ['acknowledgement', '/əkˈnɒl.ɪdʒ.mənt/', 'n. 承认；致谢'], ['characteristic', '/ˌkær.ək.təˈrɪs.tɪk/', 'n. 特征']
  ]
};

// 扩展词库：每档 40+ 个词，保证 30 词练习也能做到单轮不重复。
wordBanks.basic.push(
  ['animal', '/ˈæn.ɪ.məl/', 'n. 动物'], ['beach', '/biːtʃ/', 'n. 海滩'], ['beautiful', '/ˈbjuː.tɪ.fəl/', 'adj. 美丽的'],
  ['before', '/bɪˈfɔːr/', 'prep. 在……之前'], ['bridge', '/brɪdʒ/', 'n. 桥'], ['camera', '/ˈkæm.rə/', 'n. 相机'],
  ['change', '/tʃeɪndʒ/', 'v. 改变'], ['coffee', '/ˈkɒf.i/', 'n. 咖啡'], ['country', '/ˈkʌn.tri/', 'n. 国家'],
  ['different', '/ˈdɪf.ər.ənt/', 'adj. 不同的'], ['evening', '/ˈiːv.nɪŋ/', 'n. 傍晚'], ['flower', '/ˈflaʊ.ər/', 'n. 花'],
  ['future', '/ˈfjuː.tʃər/', 'n. 未来'], ['healthy', '/ˈhel.θi/', 'adj. 健康的'], ['important', '/ɪmˈpɔː.tənt/', 'adj. 重要的'],
  ['language', '/ˈlæŋ.ɡwɪdʒ/', 'n. 语言'], ['market', '/ˈmɑː.kɪt/', 'n. 市场'], ['nature', '/ˈneɪ.tʃər/', 'n. 自然'],
  ['orange', '/ˈɒr.ɪndʒ/', 'n. 橙子'], ['picture', '/ˈpɪk.tʃər/', 'n. 图片'], ['quiet', '/ˈkwaɪ.ət/', 'adj. 安静的'],
  ['school', '/skuːl/', 'n. 学校'], ['summer', '/ˈsʌm.ər/', 'n. 夏天'], ['together', '/təˈɡeð.ər/', 'adv. 一起'],
  ['understand', '/ˌʌn.dəˈstænd/', 'v. 理解'], ['village', '/ˈvɪl.ɪdʒ/', 'n. 村庄'], ['weather', '/ˈweð.ər/', 'n. 天气'],
  ['welcome', '/ˈwel.kəm/', 'v. 欢迎'], ['yellow', '/ˈjel.əʊ/', 'adj. 黄色的'], ['young', '/jʌŋ/', 'adj. 年轻的']
);

wordBanks.intermediate.push(
  ['accurate', '/ˈæk.jə.rət/', 'adj. 准确的'], ['advantage', '/ədˈvɑːn.tɪdʒ/', 'n. 优势'], ['analysis', '/əˈnæl.ə.sɪs/', 'n. 分析'],
  ['available', '/əˈveɪ.lə.bəl/', 'adj. 可获得的'], ['challenge', '/ˈtʃæl.ɪndʒ/', 'n. 挑战'], ['community', '/kəˈmjuː.nə.ti/', 'n. 社区'],
  ['conclusion', '/kənˈkluː.ʒən/', 'n. 结论'], ['confidence', '/ˈkɒn.fɪ.dəns/', 'n. 信心'], ['consider', '/kənˈsɪd.ər/', 'v. 考虑'],
  ['development', '/dɪˈvel.əp.mənt/', 'n. 发展'], ['education', '/ˌedʒ.ʊˈkeɪ.ʃən/', 'n. 教育'], ['effective', '/ɪˈfek.tɪv/', 'adj. 有效的'],
  ['environment', '/ɪnˈvaɪ.rən.mənt/', 'n. 环境'], ['experience', '/ɪkˈspɪə.ri.əns/', 'n. 经验'], ['familiar', '/fəˈmɪl.i.ər/', 'adj. 熟悉的'],
  ['independent', '/ˌɪn.dɪˈpen.dənt/', 'adj. 独立的'], ['information', '/ˌɪn.fəˈmeɪ.ʃən/', 'n. 信息'], ['management', '/ˈmæn.ɪdʒ.mənt/', 'n. 管理'],
  ['necessary', '/ˈnes.ə.ser.i/', 'adj. 必要的'], ['opportunity', '/ˌɒp.əˈtjuː.nə.ti/', 'n. 机会'], ['performance', '/pəˈfɔː.məns/', 'n. 表现'],
  ['positive', '/ˈpɒz.ə.tɪv/', 'adj. 积极的'], ['practice', '/ˈpræk.tɪs/', 'n. 练习'], ['professional', '/prəˈfeʃ.ən.əl/', 'adj. 专业的'],
  ['relationship', '/rɪˈleɪ.ʃən.ʃɪp/', 'n. 关系'], ['significant', '/sɪɡˈnɪf.ɪ.kənt/', 'adj. 显著的'], ['solution', '/səˈluː.ʃən/', 'n. 解决方案'],
  ['technology', '/tekˈnɒl.ə.dʒi/', 'n. 技术'], ['traditional', '/trəˈdɪʃ.ən.əl/', 'adj. 传统的'], ['understanding', '/ˌʌn.dəˈstæn.dɪŋ/', 'n. 理解']
);

wordBanks.advanced.push(
  ['accommodation', '/əˌkɒm.əˈdeɪ.ʃən/', 'n. 住宿'], ['architecture', '/ˈɑː.kɪ.tek.tʃər/', 'n. 建筑；架构'], ['bureaucracy', '/bjʊəˈrɒk.rə.si/', 'n. 官僚制度'],
  ['circumstance', '/ˈsɜː.kəm.stɑːns/', 'n. 情况'], ['collaboration', '/kəˌlæb.əˈreɪ.ʃən/', 'n. 协作'], ['comprehensive', '/ˌkɒm.prɪˈhen.sɪv/', 'adj. 全面的'],
  ['controversial', '/ˌkɒn.trəˈvɜː.ʃəl/', 'adj. 有争议的'], ['correspondence', '/ˌkɒr.ɪˈspɒn.dəns/', 'n. 通信'], ['demonstration', '/ˌdem.ənˈstreɪ.ʃən/', 'n. 展示；证明'],
  ['determination', '/dɪˌtɜː.mɪˈneɪ.ʃən/', 'n. 决心'], ['distinguish', '/dɪˈstɪŋ.ɡwɪʃ/', 'v. 区分'], ['enthusiastic', '/ɪnˌθjuː.ziˈæs.tɪk/', 'adj. 热情的'],
  ['environmental', '/ɪnˌvaɪ.rənˈmen.təl/', 'adj. 环境的'], ['fundamental', '/ˌfʌn.dəˈmen.təl/', 'adj. 根本的'], ['implementation', '/ˌɪm.plɪ.menˈteɪ.ʃən/', 'n. 实施'],
  ['inconvenient', '/ˌɪn.kənˈviː.ni.ənt/', 'adj. 不方便的'], ['indispensable', '/ˌɪn.dɪˈspen.sə.bəl/', 'adj. 不可或缺的'], ['interpretation', '/ɪnˌtɜː.prɪˈteɪ.ʃən/', 'n. 解释'],
  ['investigation', '/ɪnˌves.tɪˈɡeɪ.ʃən/', 'n. 调查'], ['maintenance', '/ˈmeɪn.tən.əns/', 'n. 维护'], ['negotiation', '/nɪˌɡəʊ.ʃiˈeɪ.ʃən/', 'n. 谈判'],
  ['organization', '/ˌɔː.ɡən.aɪˈzeɪ.ʃən/', 'n. 组织'], ['particularly', '/pəˈtɪk.jə.lə.li/', 'adv. 尤其'], ['philosophical', '/ˌfɪl.əˈsɒf.ɪ.kəl/', 'adj. 哲学的'],
  ['recommendation', '/ˌrek.ə.menˈdeɪ.ʃən/', 'n. 推荐'], ['representative', '/ˌrep.rɪˈzen.tə.tɪv/', 'n. 代表'], ['simultaneously', '/ˌsɪm.əlˈteɪ.ni.əs.li/', 'adv. 同时地'],
  ['sustainability', '/səˌsteɪ.nəˈbɪl.ə.ti/', 'n. 可持续性'], ['technological', '/ˌtek.nəˈlɒdʒ.ɪ.kəl/', 'adj. 技术的'], ['vulnerability', '/ˌvʌl.nər.əˈbɪl.ə.ti/', 'n. 脆弱性']
);

// 使用完整的 2000 高频词作为正式练习池；已有精编数据会保留音标和释义。
const curatedWords = new Map(
  Object.values(wordBanks).flat().map(entry => [entry[0], entry])
);
const complexity = word => {
  const clusters = (word.match(/tion|sion|ough|ph|ch|th|qu|sch|str|ment|ness|able|ious|ence|ance/g) || []).length;
  return word.length + clusters * 1.4;
};
const rankedWords = window.COMMON_WORDS.map((word, index) => ({
  word,
  rank: index + 1,
  score: complexity(word) + index / 1500
})).sort((a, b) => a.score - b.score || a.rank - b.rank);
const toEntry = ({ word, rank }) => {
  const curated = curatedWords.get(word);
  const detail = window.WORD_DETAILS?.[word];
  if (curated) return curated;
  return [
    word,
    detail?.[0] ? `/${detail[0]}/` : '点击按钮听发音',
    detail?.[1] || `常用词 · 词频 #${rank}`
  ];
};
const gradeSizes = [334, 334, 333, 333, 333, 333];
let gradeStart = 0;
gradeSizes.forEach((size, gradeIndex) => {
  wordBanks[`grade${gradeIndex + 1}`] = rankedWords.slice(gradeStart, gradeStart + size).map(toEntry);
  gradeStart += size;
});

const els = Object.fromEntries(['level','progressStat','wpmStat','accuracyStat','progressBar','phonetic','meaning','targetWord','wordInput','soundButton','nextButton','feedback','resultModal','finalWpm','finalAccuracy','finalCount','restartButton','virtualKeyboard','fingerHint'].map(id => [id, document.getElementById(id)]));
const keyboardRows = [
  [['q'],['w'],['e'],['r'],['t'],['y'],['u'],['i'],['o'],['p'],['backspace','⌫','wide']],
  [['a'],['s'],['d'],['f'],['g'],['h'],['j'],['k'],['l']],
  [['shift','⇧','wide'],['z'],['x'],['c'],['v'],['b'],['n'],['m']],
  [['space','空格','space']]
];
const fingerMap = {
  q: ['左手','小指'], a: ['左手','小指'], z: ['左手','小指'],
  w: ['左手','无名指'], s: ['左手','无名指'], x: ['左手','无名指'],
  e: ['左手','中指'], d: ['左手','中指'], c: ['左手','中指'],
  r: ['左手','食指'], f: ['左手','食指'], v: ['左手','食指'], t: ['左手','食指'], g: ['左手','食指'], b: ['左手','食指'],
  y: ['右手','食指'], h: ['右手','食指'], n: ['右手','食指'], u: ['右手','食指'], j: ['右手','食指'], m: ['右手','食指'],
  i: ['右手','中指'], k: ['右手','中指'], o: ['右手','无名指'], l: ['右手','无名指'], p: ['右手','小指'],
  backspace: ['右手','小指'], shift: ['左手','小指'], space: ['任意手','拇指']
};
let roundSize = 10;
let queue = [];
let index = 0;
let totalTyped = 0;
let correctTyped = 0;
let startTime = null;
let locked = false;

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function current() { return queue[index]; }

function renderKeyboard() {
  els.virtualKeyboard.innerHTML = keyboardRows.map((row, rowIndex) => `
    <div class="key-row row-${rowIndex + 1}">
      ${row.map(([key, label = key, size = '']) => {
        const hand = fingerMap[key]?.[0] === '右手' ? 'right-hand' : 'left-hand';
        const home = key === 'f' || key === 'j' ? 'home-key' : '';
        return `<span class="key ${size} ${hand} ${home}" data-key="${key}">${label.toUpperCase()}</span>`;
      }).join('')}
    </div>`).join('');
}

function highlightFinger(hand = '', finger = '') {
  window.KeySproutFingerState = { hand, finger };
  window.dispatchEvent(new CustomEvent('keysprout:finger', { detail: { hand, finger } }));
  document.querySelectorAll('.hand-panel').forEach(panel => {
    const handMatches = panel.dataset.hand === hand || hand === '任意手';
    panel.classList.toggle('active-hand', handMatches);
    panel.querySelectorAll('.finger').forEach(el => {
      el.classList.toggle('active-finger', handMatches && el.dataset.finger === finger);
    });
  });
}

function updateFingerGuide() {
  const typed = els.wordInput.value.toLowerCase();
  const word = current()[0];
  const wrongIndex = [...typed].findIndex((char, i) => char !== word[i]);
  let key = wrongIndex >= 0 ? 'backspace' : word[typed.length];
  els.virtualKeyboard.querySelectorAll('.key').forEach(el => el.classList.toggle('target-key', el.dataset.key === key));
  if (!key) {
    highlightFinger();
    els.fingerHint.textContent = '完成！双手回到基准键位';
    return;
  }
  const [hand, finger] = fingerMap[key] || ['双手','合适手指'];
  highlightFinger(hand, finger);
  els.fingerHint.textContent = wrongIndex >= 0
    ? `${hand}${finger}按 Backspace，先删除错误字母`
    : `${hand}${finger}按 ${key.toUpperCase()} 键`;
}

function startRound() {
  const bank = wordBanks[els.level.value];
  queue = shuffled(bank).slice(0, roundSize);
  index = 0; totalTyped = 0; correctTyped = 0; startTime = null; locked = false;
  els.resultModal.hidden = true;
  showWord();
}

function showWord() {
  const [word, phonetic, meaning] = current();
  els.phonetic.textContent = phonetic;
  els.meaning.textContent = meaning;
  els.meaning.title = meaning;
  els.targetWord.innerHTML = [...word].map(char => `<span>${char}</span>`).join('');
  els.wordInput.value = '';
  els.wordInput.disabled = false;
  els.wordInput.focus();
  locked = false;
  updateFingerGuide();
  updateStats();
  setFeedback('准备好了，开始输入吧', true);
}

function updateStats() {
  const displayIndex = Math.min(index + 1, roundSize);
  els.progressStat.textContent = `${String(displayIndex).padStart(2,'0')} / ${String(roundSize).padStart(2,'0')}`;
  els.progressBar.style.width = `${((index + (locked ? 1 : 0)) / roundSize) * 100}%`;
  const minutes = startTime ? Math.max((Date.now() - startTime) / 60000, 1 / 60) : 0;
  const wpm = minutes ? Math.round((correctTyped / 5) / minutes) : 0;
  els.wpmStat.textContent = wpm;
  els.accuracyStat.textContent = `${totalTyped ? Math.round(correctTyped / totalTyped * 100) : 100}%`;
}

function handleInput() {
  if (locked) return;
  if (!startTime) startTime = Date.now();
  const typed = els.wordInput.value.toLowerCase();
  const word = current()[0];
  const chars = els.targetWord.querySelectorAll('span');
  chars.forEach((span, i) => {
    span.className = i >= typed.length ? '' : typed[i] === word[i] ? 'correct' : 'wrong';
  });
  updateFingerGuide();
  totalTyped++;
  if (typed.at(-1) === word[typed.length - 1]) correctTyped++;
  if (typed === word) {
    locked = true;
    els.wordInput.disabled = true;
    setFeedback('输入正确！按 Enter 继续', true);
    updateStats();
    window.setTimeout(() => { if (locked) nextWord(); }, 700);
  } else if (!word.startsWith(typed)) {
    setFeedback('有一个字母不对，再检查一下', false);
  } else {
    setFeedback('节奏很好，继续', true);
  }
  updateStats();
}

function setFeedback(text, positive) {
  els.feedback.innerHTML = `<i style="background:${positive ? 'var(--sage)' : 'var(--accent)'}"></i> ${text}`;
}

function nextWord() {
  if (!locked) {
    setFeedback('请先完整输入这个单词', false);
    els.wordInput.focus();
    return;
  }
  index++;
  if (index >= roundSize) return finishRound();
  showWord();
  speakWord();
}

function finishRound() {
  updateStats();
  els.progressBar.style.width = '100%';
  els.finalWpm.textContent = els.wpmStat.textContent;
  els.finalAccuracy.textContent = els.accuracyStat.textContent;
  els.finalCount.textContent = roundSize;
  els.resultModal.hidden = false;
  els.restartButton.focus();
}

function speakWord() {
  if (!('speechSynthesis' in window)) {
    setFeedback('当前浏览器暂不支持语音合成', false);
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(current()[0]);
  utterance.lang = 'en-US';
  utterance.rate = .78;
  utterance.pitch = 1;
  utterance.onstart = () => els.soundButton.classList.add('speaking');
  utterance.onend = utterance.onerror = () => els.soundButton.classList.remove('speaking');
  speechSynthesis.speak(utterance);
}

els.wordInput.addEventListener('input', handleInput);
els.soundButton.addEventListener('click', speakWord);
els.nextButton.addEventListener('click', nextWord);
els.restartButton.addEventListener('click', startRound);
els.level.addEventListener('change', startRound);
document.querySelectorAll('[data-count]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-count]').forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  roundSize = Number(button.dataset.count);
  startRound();
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Tab') { event.preventDefault(); speakWord(); }
  if (event.key === 'Enter') { event.preventDefault(); nextWord(); }
  const key = event.key === ' ' ? 'space' : event.key.toLowerCase();
  const keyEl = els.virtualKeyboard.querySelector(`[data-key="${key}"]`);
  if (keyEl) keyEl.classList.add('pressed-key');
});
document.addEventListener('keyup', event => {
  const key = event.key === ' ' ? 'space' : event.key.toLowerCase();
  els.virtualKeyboard.querySelector(`[data-key="${key}"]`)?.classList.remove('pressed-key');
});

renderKeyboard();
startRound();
