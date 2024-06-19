const hd = {
    hdLogoS : {
        text : "myrealtrip",
        imgUrl : "/img/hdLogo.svg",
        href : "/",
    },
    hdGnbS : [
        {
            // 대메뉴1
            text : "경주 소개",
            href : "/intro",
            hdGnbSubS : [
                // 소메뉴
                {
                    text : "역사 및 소개",
                    href : "/history"
                },
                {
                    text : "지역 특산품",
                    href : "/position"
                }
            ]
        },
        {
            // 대메뉴2
            text : "여행 정보",
            href : "/",
            hdGnbSubS : [
                // 소메뉴
                {
                    text : "관광지",
                    href : "/"
                },
                {
                    text : "음식 및 카페",
                    href : "/"
                },
                {
                    text : "축제",
                    href : "/"
                },
                {
                    text : "추천 코스",
                    href : "/"
                },
                {
                    text : "여행후기",
                    href : "/"
                }
            ]
        },
        {
            // 대메뉴3
            text : "예약 및 문의",
            href : "/",
            hdGnbSubS : [
                // 소메뉴
                {
                    text : "숙소 예약",
                    href : "/"
                },
                {
                    text : "패키지 여행 예약",
                    href : "/"
                },
                {
                    text : "문의사항",
                    href : "/"
                },
                {
                    text : "자주 묻는 문의",
                    href : "/"
                },
            ]
        },
        {
            // 대메뉴4
            text : "이벤트",
            href : "/",
            hdGnbSubS : [
                // 소메뉴
                {
                    text : "진행중인 이벤트",
                    href : "/"
                }
            ]
        },
    ],
    hdIconMenuS : [
        {
            icon : "/img/hdSearch.svg",
            text : "검색",
            id : "hdSearchBtnS",
            hdSearchS : {
                title : "실시간 인기",
                text : [
                    "관광지",
                    "카페",
                    "패키지 여행 예약",
                    "추천 코스",
                    "맛집",
                    "황남빵",
                    "경주월드",
                    "호텔",
                    "한복대여",
                    "야경"
                ]
            }
        },
        {
            icon : "/img/hdLogin.svg",
            text : "마이페이지",
            id : "",
            hdSearchS  : {
                title : "",
                text : ""
            }
        }
    ]
}

window.onload = function() {
    let hdTag = '';

    hdTag += `<h1 class="mb-0 ${Object.keys(hd)[0]}"><a href="${hd.hdLogoS.href}"><img src="${hd.hdLogoS.imgUrl}" alt="${hd.hdLogoS.text}"></a></h1>
        <ul class="d-flex ps-0 mb-0 ${Object.keys(hd)[1]}">`
    for(x in hd.hdGnbS) {
        hdTag += `<li class="position-relative">
            <a href="${hd.hdGnbS[x].href}">${hd.hdGnbS[x].text}</a>
                <ul class="ps-0 mb-0 position-absolute ${Object.keys(hd.hdGnbS[x])[2]}">`;
                for(i in hd.hdGnbS[x].hdGnbSubS) {
                    hdTag += `<li>
                                <a href="${hd.hdGnbS[x].hdGnbSubS[i].href}">${hd.hdGnbS[x].hdGnbSubS[i].text}</a>
                            </li>`;
                }
        hdTag += `</ul>
            </li>`
    }
    hdTag += `</ul>`;
    hdTag += `<ul class="d-flex justify-content-end ps-0 mb-0 ${Object.keys(hd)[2]}">`
    for(e in hd.hdIconMenuS) {
        hdTag += `<li>
            <i><img src="${hd.hdIconMenuS[e].icon}"></i>
            <span id="${hd.hdIconMenuS[e].id}" class="visually-hidden">${hd.hdIconMenuS[e].text}</span>`;
            hdTag += `<div class="${Object.keys(hd.hdIconMenuS[e])[3]}">
                <p>${hd.hdIconMenuS[e].hdSearchS.title}</p>
                    <div class="d-flex">
                        <ul class="ps-0 mb-0">`
                            for(r in hd.hdIconMenuS[e].hdSearchS.text) {
                                hdTag += `<li>
                                    <em>${ parseInt(r) + 1}</em>
                                    ${hd.hdIconMenuS[e].hdSearchS.text[r]}
                                </li>`
                            }
                hdTag += `</ul>
                    </div>
                </div>
            </li>`;
    }
    hdTag += `</ul>`;
    
    document.querySelector("#hd > div").innerHTML = hdTag;
};