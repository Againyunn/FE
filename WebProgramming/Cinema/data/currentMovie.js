/**구분방식:     
name:"이름"
brief:"간략소개"
time:"요일번호/시작/종료*요일번호/시작/종료"
img:"썸네일 이미지의 경로"
*/

//현재 상영작
let movieList = [
    {
        name:"닥터스트레인지2",//126분
        brief:`지금껏 본 적 없는 마블의 극한 상상력!
        광기의 멀티버스가 깨어난다
        끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며
         오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.
         대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….`,
        time:"0/9:20/11:30*0/15:00/17:10/*1/15:00/17:10*2/15:00/17:10*3/15:00/17:10*4/15:00/17:10*5/11:15/13:00*5/15:00/17:10*6/15:00/17:10",
        img:"./media/현재상영작/닥스.jpg"
    },
    {
        name:"신비한 동물들과 덤블도어의 비밀", //142분
        brief:`가장 위험한 마법에 맞선, 세상을 구할 전쟁이 시작된다!
        1930년대, 제2차 세계대전에 마법사들이 개입하게 되면서
         강력한 어둠의 마법사 그린델왈드의 힘이 급속도로 커진다.
         덤블도어는 뉴트 스캐맨더에게 위대한 마법사 가문 후손,
         마법학교의 유능한 교사, 머글 등으로 이루어진 팀에게 임무를 맡긴다.
         이에 뉴트와 친구들은 머글과의 전쟁을 선포한
         그린델왈드와 추종자들, 그의 위험한 신비한 동물들에 맞서 세상을 구할 거대한 전쟁에 나선다.
         한편 전쟁의 위기가 최고조로 달한 상황 속에서 덤블도어는
         더 이상 방관자로 머물 수 없는 순간을 맞이하고, 서서히 숨겨진 비밀이 드러나는데…`,
        time:"0/12:00/14:30*0/19:00/21:30/*1/19:00/21:30*2/19:00/21:30*3/19:00/21:30*4/19:00/21:30*5/19:00/21:30*6/19:00/21:30",
        img:"./media/현재상영작/신동사.jpg"
    },
    {
        name:"니 부모 얼굴이 보고싶다",//111분
        brief:`줄거리
        “누군가 잘못했겠지
        하지만 내 아들은 절대 아니야”
        명문 한음 국제중학교 학생 ‘김건우’가
         같은 반 친구 4명의 이름이 적힌 편지를 남긴 채,
         의식불명 상태로 호숫가에서 발견된다.
         
         병원 이사장의 아들 ‘도윤재’
         전직 경찰청장의 손자 ‘박규범’
         한음 국제중학교 교사의 아들 ‘정이든’
         그리고, 변호사 ‘강호창’(설경구)의 아들 ‘강한결’.
         
         가해자로 지목된 아이들의 부모들은
         자신의 권력과 재력을 이용해 사건을 은폐하려고 한다.
         하지만, 담임 교사 ‘송정욱’(천우희)의 양심 선언으로
         건우 엄마(문소리) 또한 아들의 죽음에 관한 진실을 알게 된다.
         
         세상의 이목이 한음 국제중학교로 향하고,
         자신의 아이들을 지키기 위한 가해자 부모들의 추악한 민낯이 드러나는데…
         
         자식이 괴물이 되면, 부모는 악마가 된다`,
        time:"1/13:00/14:55*3/13:00/14:55*5/13:00/14:55",
        img:"./media/현재상영작/니 부모 얼굴이 보고싶다.jpg"
    },
    {
        name:"공기살인",//108분
        brief:`알고 있었죠, 사람이 죽을 수도 있다는 거”
        봄이 되면 나타났다 여름이 되면 사라지는 죽음의 병.
         공기를 타고 대한민국에 죽음을 몰고 온 살인무기의 실체를 밝히기 위한 그들의 사투.
         증발된 범인, 피해자는 증발되지 않았다!`,
        time:"2/13:00/14:55*4/13:00/14:55*6/13:00/14:55",
        img:"./media/현재상영작/공기살인.jpg"
    },
    {
        name:"범죄도시2",//106분
        brief:`“느낌 오지? 이 놈 잡아야 하는 거”
        가리봉동 소탕작전 후 4년 뒤,
         금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다.
         
         괴물형사 ‘마석도’(마동석)와 ‘전일만’(최귀화) 반장은 현지 용의자에게서 수상함을 느끼고,
         그의 뒤에 무자비한 악행을 벌이는 ‘강해상’(손석구)이 있음을 알게 된다.
         
         ‘마석도’와 금천서 강력반은 한국과 베트남을 오가며
         역대급 범죄를 저지르는 ‘강해상’을 본격적으로 쫓기 시작하는데...
         
         나쁜 놈들 잡는 데 국경 없다!
         통쾌하고 화끈한 범죄 소탕 작전이 다시 펼쳐진다!`,
        time:"1/21:40/23:00*3/21:40/23:00*5/21:40/23:00",
        img:"./media/현재상영작/범죄도시2.jpg"
    },
    {
        name:"뜨거운 피",//120분
        brief:`부산 변두리 작은 포구 '구암'의 절대적인 주인 '손영감’(김갑수),
        그의 밑에서 수년간 수족으로 일해온 '희수'(정우)는
        무엇 하나 이뤄낸 것 없이, 큰돈 한번 만져보지 못한 채 반복되는 건달 짓이 지긋지긋하다.
        
        1993년, 범죄와의 전쟁 이후 새로운 구역을 집어삼키기 위해 물색중인 영도파 건달들은
        아무도 관심 갖지 않는 ‘구암’에 눈독을 들이고,
        영도파 에이스이자 ‘희수’의 오랜 친구 '철진'(지승현)이 '희수'에게 은밀히 접근한다.
        
        새로운 삶을 시작하려는 ‘희수’는 갈등하고,
        조용하던 ‘구암’을 차지하려는 밑바닥 건달들의 치열한 생존 싸움이 시작되는데...
        
        더 이상 물러날 곳도 도망칠 곳도 없다.
        누구든 망설이는 놈이 진다!`,
        time:"2/21:40/23:00*4/21:40/23:00*6/21:40/23:00",
        img:"./media/현재상영작/뜨거운 피.jpg"
    },
    {
        name:"앵커",//111분
        brief:`제 죽음이 정세라 앵커의 입을 통해 보도되면 너무 기쁠 것 같아요”
        생방송 5분 전, 방송국 간판 앵커 ‘세라’(천우희)에게
         자신이 살해될 것이라며 죽음을 예고하는 제보전화가 걸려온다.
         장난전화로 치부하기에는 찝찝한 마음을 감출 수 없는 ‘세라’.
         진짜 앵커가 될 기회라는 엄마 ‘소정’(이혜영)의 말에
         ‘세라’는 제보자의 집으로 향하고 제보자인 ‘미소’와 그녀의 딸의 시체를 목격한다.
         
         그날 이후, ‘세라’의 눈앞에 죽은 ‘미소’의 모습이 자꾸만 떠오르기 시작한다.
         사건 현장에서 미소의 주치의였던 정신과 의사 ‘인호’(신하균)를 마주하게 되며
         그에 대한 ‘세라’의 의심 또한 깊어지는데…
         
         완벽했던 앵커를 뒤흔들 충격적인 진실을 확인하라!`,
        time:"1/9:30/11:20*3/9:30/11:20*5/9:30/11:20",
        img:"./media/현재상영작/앵커.jpg"
    },
    {
        name:"언차티드",//116분
        brief:`모든 것을 걸었다면 세상 누구보다 빠르게 찾아야 한다!
        평범한 삶을 살던 ‘네이선’(톰 홀랜드)은 인생을 바꿀 뜻밖의 제안을 받는다.
         그의 미션은 위험한 트레져 헌터 ‘설리’(마크 월버그)와 함께 사라진 형과 500년 전 잃어버린 천문학적인 가치를 지닌 트레져를 찾아내는 것.
         
         그러나 몬카다(안토니오 반데라스)의 위협과 추격 속,
         누구보다 빠르게 미지의 세계에 닿기 위해 결단을 내려야만 하는데…`,
        time:"2/9:30/11:20*4/9:30/11:20*6/9:30/11:20",
        img:"./media/현재상영작/언차티드.jpg"
    }
];

// function getMovieList(){
//     return movieList;
// }