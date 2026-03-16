const questions = [
  {
    text: "햄버거 세트를 주문했다. <br/>가장 먼저 손이 가는 것은?",
    options: [
      { text: "갓 튀겨져 나온 뜨겁고 짭조름한 감자튀김", values: ["giljjuk", "jjapjjal", "mulgyeol"] },
      { text: "육즙 가득한 햄버거 (감튀는 거들 뿐)", values: ["deumjik", "bandal", "dongguri"] }
    ]
  },
  {
    text: "내가 선호하는 감자튀김의 <br/>'이상적인 식감'은?",
    options: [
      { text: "입안이 얼얼할 정도로 공격적인 '바삭함'", values: ["giljjuk", "jjapjjal", "mulgyeol"] },
      { text: "씹는 순간 입안에서 사르르 녹는 '포슬포슬함'", values: ["deumjik", "bandal", "dongguri"] }
    ]
  },
  {
    text: "감자튀김 위에 뿌려진 '소금'에 대한 <br/> 나의 철학은?",
    options: [
      { text: "소금기가 혀를 찌를 정도로 짭짤해야 한다", values: ["giljjuk", "jjapjjal"] },
      { text: "감자 본연의 맛을 가리지 않게 담백해야 한다", values: ["deumjik", "myeongpum", "bandal"] }
    ]
  },
  {
    text: "케첩이 기본으로 제공되었다. <br/> 당신의 선택은?",
    options: [
      { text: "주는 대로 케첩만 찍어 먹는다 (순정파)", values: ["giljjuk", "deumjik", "bandal"] },
      { text: "밀크쉐이크, 마요, 치즈 소스 등 새 조합을 찾는다 (미식가파)", values: ["jjapjjal", "myeongpum", "cheese", "mulgyeol"] }
    ]
  },
  {
    text: "친구가 \"눅눅한 감튀가 더 맛있다\"라고 한다면?",
    options: [
      { text: "\"그건 감튀에 대한 모독이야!\" 갓 튀긴 것만 인정", values: ["giljjuk", "jjapjjal", "mulgyeol"] },
      { text: "\"음, 나름의 매력이 있지.\" 눅진한 맛도 즐긴다", values: ["cheese", "bandal", "dongguri"] }
    ]
  },
  {
    text: "감자튀김의 '모양'이 맛에 영향을 줄까?",
    options: [
      { text: "당연! 물결무늬나 웨지처럼 모양에 따라 식감이 달라", values: ["mulgyeol", "bandal", "dongguri"] },
      { text: "모양보단 감자 함량과 튀김 온도가 제일 중요해", values: ["myeongpum", "deumjik", "giljjuk"] }
    ]
  },
  {
    text: "야식으로 감자튀김을 먹는다면 어떤 스타일?",
    options: [
      { text: "맥주와 찰떡궁합인 자극적인 양념 감자 (안주형)", values: ["jjapjjal", "mulgyeol", "cheese"] },
      { text: "하나만 먹어도 배가 든든한 두툼한 웨지 (식사형)", values: ["deumjik", "bandal", "dongguri"] }
    ]
  },
  {
    text: "새로운 버거집에 갔다. <br/>감튀 메뉴를 고를 때 기준은?",
    options: [
      { text: "그 집에서만 파는 특이한 토핑이나 소스가 있는지", values: ["myeongpum", "cheese", "jjapjjal"] },
      { text: "기본 감튀가 얼마나 신선하고 깨끗하게 튀겨졌는지", values: ["giljjuk", "deumjik", "bandal"] }
    ]
  }
];

const resultData = {
  giljjuk: {
    image: "image/길쭉이.png",
    bg: "linear-gradient(135deg, #ffeb3b 0%, #ffc107 100%)",
    title: "🥢 길쭉이 (슈스트링)",
    subtitle: '"얇아도 존재감 확실! 감튀계의 아이돌."',
    traits: ["사랑에 누구보다 진심인 스타일", "따끈따끈한 애정 표현을 매일 확인받고 싶어함", "연락 안 되면 금방 서운해하는 사랑둥이", "연애의 정석을 따르는 로맨티스트"],
    loveStyle: "사랑에 누구보다 진심인 스타일",
    brand: "맥도날드"
  },
  jjapjjal: {
    image: "image/짭짤이.png",
    bg: "linear-gradient(135deg, #ff7043 0%, #e64a19 100%)",
    title: "🧨 짭짤이 (케이준)",
    subtitle: '"케첩은 거절한다. 나 자체로 이미 완벽해!"',
    traits: ["자기주장 확실한 '직진 연애파'", "리드하는 것을 좋아함", "상대를 자신의 페이스로 끌어들이는 힘", "화끈하게 불타오르는 열정적인 사랑"],
    loveStyle: "자기주장 확실한 '직진 연애파'",
    brand: "맘스터치"
  },
  deumjik: {
    image: "image/듬직이.png",
    bg: "linear-gradient(135deg, #a1887f 0%, #795548 100%)",
    title: "🥔 듬직이 (두툼한 감튀)",
    subtitle: '"가성비 NO! 가심비 YES! 꽉 찬 진심."',
    traits: ["한결같은 모습의 '해바라기형'", "늘 그 자리에 있어 주는 든든한 사람", "편안한 데이트를 선호", "갈수록 깊은 맛이 우러나는 진국 같은 연애"],
    loveStyle: "한결같은 모습의 '해바라기형'",
    brand: "노브랜드"
  },
  myeongpum: {
    image: "image/땅콩이.png",
    bg: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)",
    title: "🥜 땅콩이 (땅콩기름 생감자)",
    subtitle: '"비교 불가! 고급스러운 풍미의 끝판왕."',
    traits: ["취향 확고한 '자유로운 영혼'", "자신만의 철학이 뚜렷함", "존중해 주는 사람에게 마음을 열음", "겉은 와일드, 속은 진하고 고소한 반전 매력"],
    loveStyle: "취향 확고한 '자유로운 영혼'",
    brand: "파이브가이즈"
  },
  cheese: {
    image: "image/범벅이.png",
    bg: "linear-gradient(135deg, #ffca28 0%, #ff8f00 100%)",
    title: "🧀 범벅이 (오지치즈후라이)",
    subtitle: '"헤어날 수 없는 눅진함, 넌 내게 중독될걸?"',
    traits: ["사랑에 푹 빠진 '껌딱지 사랑꾼'", "연인과 모든 시간을 함께하고 싶어함", "상대방을 귀하게 대접", "따뜻할 때 무한한 애정을 퍼붓는 헌신적인 연인"],
    loveStyle: "사랑에 푹 빠진 '껌딱지 사랑꾼'",
    brand: "아웃백"
  },
  bandal: {
    image: "image/반달이.png",
    bg: "linear-gradient(135deg, #81c784 0%, #4caf50 100%)",
    title: "🌙 반달이 (웨지감자)",
    subtitle: '"구운 감자처럼 담백하고 건강한 사이."',
    traits: ["친구처럼 편안한 '안식처형'", "갈등을 싫어하고 대화로 해결하는 평화주의자", "같이 있으면 마음이 편해지는 사람과 오래 연애", "질리지 않는 은은한 사랑"],
    loveStyle: "친구처럼 편안한 '안식처형'",
    brand: "굽네치킨"
  },
  mulgyeol: {
    image: "image/물결이.png",
    bg: "linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)",
    title: "🌊 물결이 (물결감자)",
    subtitle: '"단조로운 건 싫어! 굴곡 있는 매력쟁이."',
    traits: ["알면 알수록 궁금한 '양파형'", "상대방 성향에 잘 맞추는 유연함", "겉은 단단해 보여도 속은 부드러운 '겉바속촉'", "반전 매력이 넘치는 연애 스타일"],
    loveStyle: "알면 알수록 궁금한 '양파형'",
    brand: "크링클컷"
  },
  dongguri: {
    image: "image/동그리.png",
    bg: "linear-gradient(135deg, #ffb74d 0%, #f57c00 100%)",
    title: "☀️ 동그리 (해시브라운)",
    subtitle: '"한 입 깨물면 톡톡 터지는 고소한 에너지."',
    traits: ["주변을 밝히는 '인간 비타민'", "긍정적인 에너지로 연인 기분을 금방 좋게 만듦", "사소한 배려에 크게 감동, 리액션이 좋음", "아침 햇살처럼 따뜻한 연애"],
    loveStyle: "주변을 밝히는 '인간 비타민'",
    brand: "해시브라운"
  }
};

let currentQuestion = 0;
let scores = {};
let currentResultType = '';

// 각 타입이 받을 수 있는 최대 점수를 미리 계산 (정규화에 사용)
const maxPossibleScores = (() => {
  const max = {};
  questions.forEach(q => {
    q.options.forEach(opt => {
      opt.values.forEach(v => {
        max[v] = (max[v] || 0) + 1;
      });
    });
  });
  return max;
})();

// 페이지 로드 시 URL 파라미터 체크
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const resultParam = params.get('result');

  if (resultParam && resultData[resultParam]) {
    currentResultType = resultParam;
    showResultDirect(resultParam);
  }
});

function showResultDirect(resultType) {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('quizScreen').style.display = 'none';
  document.getElementById('resultScreen').style.display = 'block';

  const result = resultData[resultType];

  document.getElementById('resultImage').innerHTML = `<img src="${result.image}" alt="${result.title}">`;
  document.getElementById('resultImage').style.background = result.bg;
  document.getElementById('resultTitle').textContent = result.title;
  document.getElementById('resultSubtitle').textContent = result.subtitle;

  document.getElementById('resultTraits').innerHTML = `
    <h4>💕 연애 스타일</h4>
    <ul>
      ${result.traits.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `;

  document.getElementById('sauceMatch').innerHTML = `
    💘 <span>연애 요약:</span> ${result.loveStyle}
  `;

  document.getElementById('brandMatch').innerHTML = `
    🍟 <span>추천 브랜드:</span> ${result.brand}
  `;
}

function startQuiz() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('quizScreen').style.display = 'block';
  currentQuestion = 0;
  scores = {};
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('questionNumber').textContent = `${currentQuestion + 1} / ${questions.length}`;
  document.getElementById('progress').style.width = `${((currentQuestion) / questions.length) * 100}%`;
  document.getElementById('questionText').innerHTML = q.text;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option.text;
    btn.onclick = () => selectOption(option.values);
    optionsDiv.appendChild(btn);
  });

  // Re-trigger animation
  const card = document.querySelector('.question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'slideIn 0.3s ease';
}

function selectOption(values) {
  values.forEach(v => {
    scores[v] = (scores[v] || 0) + 1;
  });

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quizScreen').style.display = 'none';
  document.getElementById('resultScreen').style.display = 'block';

  // 정규화된 점수로 승자 결정 (출현 횟수 불균형 보정)
  let bestNormalized = -1;
  let candidates = [];

  for (const type in resultData) {
    const raw = scores[type] || 0;
    const max = maxPossibleScores[type] || 1;
    const normalized = raw / max;

    if (normalized > bestNormalized) {
      bestNormalized = normalized;
      candidates = [type];
    } else if (normalized === bestNormalized) {
      candidates.push(type);
    }
  }

  // 동점 시 랜덤 선택
  const resultType = candidates[Math.floor(Math.random() * candidates.length)];

  currentResultType = resultType;
  const result = resultData[resultType];

  document.getElementById('resultImage').innerHTML = `<img src="${result.image}" alt="${result.title}">`;
  document.getElementById('resultImage').style.background = result.bg;
  document.getElementById('resultTitle').textContent = result.title;
  document.getElementById('resultSubtitle').textContent = result.subtitle;

  const traitsDiv = document.getElementById('resultTraits');
  traitsDiv.innerHTML = `
    <h4>💕 연애 스타일</h4>
    <ul>
      ${result.traits.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `;

  document.getElementById('sauceMatch').innerHTML = `
    💘 <span>연애 요약:</span> ${result.loveStyle}
  `;

  document.getElementById('brandMatch').innerHTML = `
    🍟 <span>추천 브랜드:</span> ${result.brand}
  `;
}

function applyMatching() {
  window.location.href = "https://tally.so/r/lbrdkN";
}

function retryQuiz() {
  document.getElementById('resultScreen').style.display = 'none';
  document.getElementById('startScreen').style.display = 'block';
  // URL 파라미터 제거
  window.history.replaceState({}, '', window.location.pathname);
}

function shareResult() {
  const result = resultData[currentResultType];
  const title = '나의 감BTI 유형은?';
  const text = `나의 감BTI 결과는 ${result.title}!\n"${result.subtitle.replace(/"/g, '')}"`;
  const baseUrl = window.location.origin + window.location.pathname;
  const url = `${baseUrl}?result=${currentResultType}`;

  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: url
    }).catch(() => {
      copyToClipboard(url);
    });
  } else {
    copyToClipboard(url);
  }
}

function copyToClipboard(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert('링크가 복사되었습니다! 📋');
  }).catch(() => {
    prompt('아래 링크를 복사하세요:', url);
  });
}
