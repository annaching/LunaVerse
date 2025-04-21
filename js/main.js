$(document).ready(function () {
    // Header 縮放
    let lastScrollTop = 0;
    let delta = 5;
    let header = $(`#header`);
    let loginNav = $(`#loginNav`);

    $(window).on(`scroll`, function () {
        let cuurentScroll = $(this).scrollTop();

        if (Math.abs(cuurentScroll - lastScrollTop) <= delta) return;

        if (cuurentScroll > lastScrollTop) {
            header.addClass(`header-hide`);
            loginNav.addClass(`loginNav-hide`);
        } else {
            header.removeClass(`header-hide`);
            loginNav.removeClass(`loginNav-hide`);
        }
        lastScrollTop = cuurentScroll;
    });

    // Hamburger
    // menu 開關
    $(`#hamburger`).on(`click`, function () {
        $(this).toggleClass(`active`);
        $(`#headerNav_list`).toggleClass(`active`);
        $(`#hamburgerOverlay`).toggleClass(`active`);
    });

    // 點 overlay 也會關閉選單
    $(`#hamburgerOverlay`).on(`click`, function () {
        $(`#hamburger`).removeClass(`active`);
        $(`#headerNav_list`).removeClass(`active`);
        $(this).removeClass(`active`);
    });

    // to_top
    $(`.to_topBtn a`).click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});

$(window).scroll(function () {
    let Top = $(this).scrollTop();
    if (Top >= 20) {
        $(`.to_topBtn`).addClass('active');
    } else {
        $(`.to_topBtn`).removeClass('active');
    }

    // footer copyright
    const currentYear = new Date().getFullYear();
    $(`footer p`).html(`COPYRIGHT&copy; ${currentYear} Luna All Rights Reserved.`);

    // input focus
    $(`input[type="text"], input[type="number"], input[type="email"]`).on({
        focus: function () {
            $(this).css(`background-color`, `#EEEEF0`);
        }, blur: function () {
            if ($(this).val() === '') {
                $(this).css(`background-color`, `#000A1E`);
                $(this).addClass(`alert-border`);
            } else {
                $(this).css(`background-color`, `#EEEEF0`);
                $(this).removeClass(`alert-border`);
            }
        }
    }).on(`input`, function () {
        if ($(this).val() !== '') {
            $(this).removeClass(`alert-border`)
            $(this).css(`background-color`, `#EEEEF0`)
        }
    });

    $(`input[type="email"]`).blur(function () {
        if ($(this).val() === '') {
            $(this).attr('placeholder', 'luna@lunaverse.com')
        }
    });
});


// plan
// Q&A--Content
$(document).ready(function () {
    const sec1_qa = [
        {
            question: "Q：報名後可以更改地點或替換錄取者嗎？",
            answer: "A：不可更改地點或替換錄取者，每位參與者均需通過審核與測試。",
        },
        {
            question: "Q：報到時需要攜帶什麼？",
            answer: "A：請攜帶身份證明、健康檢查報告與登月同意書。",
        },
        {
            question: "Q：所購買的票券有提供履約保證嗎？",
            answer: "A：是的，所有登月票券均受保險保障，如遇不可抗力因素將安排延期或退款。",
        },
        {
            question: "Q：火箭座位可以指定嗎？",
            answer: "A：座位由航天專家根據重量與平衡需求分配，恕不開放指定。",
        },
    ]

    const sec2_qa = [
        {
            question: "Q：除了禁止攜帶的物品外，對太空艙還有哪些安全限制？",
            answer: "A：所有乘客需遵守安全帶規範、氣壓調節程序，並全程配合太空艙內的行為準則。",
        },
        {
            question: "Q：航程中如有緊急狀況，該如何應對？",
            answer: "A：艙內備有緊急氧氣供應與醫療設備，乘客需服從指揮官指示，並按照應變手冊執行標準流程。",
        },
        {
            question: "Q：飲食方面有哪些特別規定？",
            answer: "A：所有食物皆為太空食品，禁止攜帶個人食品，確保艙內環境穩定。",
        },
        {
            question: "Q：登月期間的行程安排是如何規劃的？",
            answer: "A：行程包括登月探索、科研活動、模擬太空站生活等，詳細計畫將於行前簡報提供。",
        },
        {
            question: "Q：返航後的適應期需要多久？",
            answer: "A：依個人體質不同，適應期約為2至4週，Luna將提供全面的健康監測與復健支持。",
        },
    ]

    sec1_qa.forEach((qa) => {
        $(`#sec1_qa`).append(`
            <div class="accordion">
                <div class="accordion_title">
                    <p>${qa.question}</p>
                    <div class="accordion_icons">
                        <span class="accordion_icon-plus">+</span>
                        <span class="accordion_icon-minus">-</span>
                    </div>
                </div>
                <div class="accordion_content">
                    <p>${qa.answer}</p>
                </div>
            </div>
            `)
    })

    sec2_qa.forEach((qa) => {
        $(`#sec2_qa`).append(`
            <div class="accordion">
                <div class="accordion_title">
                    <p>${qa.question}</p>
                    <div class="accordion_icons">
                        <span class="accordion_icon-plus">+</span>
                        <span class="accordion_icon-minus">-</span>
                    </div>
                </div>
                <div class="accordion_content">
                    <p>${qa.answer}</p>
                </div>
            </div>
            `)
    })

    // Q&A--accordion
    // 使用事件委託綁定 click 事件
    $('#sec1_qa').on('click', '.accordion_title', function () {
        // .accordion 原本就有在 css 設定 is-active
        // closest --> 往上層，層層尋到找到為止 
        // 找到包含當前被點擊的 .accordion_title 的 .accordion 元素
        const accordionItem = $(this).closest('.accordion');
        accordionItem.toggleClass('is-active');
    });

    $('#sec2_qa').on('click', '.accordion_title', function () {
        const accordionItem = $(this).closest('.accordion');
        accordionItem.toggleClass('is-active');
        // 除了自己，其他的(兄弟姊妹)都移除 Class
        accordionElement.siblings('.accordion.is-active').removeClass('is-active');
    });

})

// Plan;Dreams
// planData
const planData = [
    {
        img: "Copernicus.jpg",
        name: "哥白尼環形山",
        latin: "（Copernicus）",
        info: ["是月球風暴洋東部一座隕石坑，屬於保存完好、非常突出的月球環形山之一，周圍環繞著巨大明亮的射紋系統，直徑96.07公里，深度2.846公里。",
            "以世界日心說開創者尼古拉·哥白尼的名字命名。",
            "該環形山是業餘天文愛好者感興趣的觀測對象，在新月或滿月後（接近晨昏圈）的9-10天內，它的外貌及所覆蓋的射線紋顯露得最清楚。",
            "哥白尼環形山是一座保存完好的年輕隕石坑（不像古老隕坑已因撞擊而發生侵蝕），有清晰的輪廓，外緣略呈波輪狀。",],
        summary: "是月球風暴洋東部一座隕石坑，周圍環繞著巨大明亮的射紋系統",
        count: "21/30 人",
        date: "2035-07-01 - 07-08",
        price: "NT$ 850,000",
    },
    {
        img: "Tycho.jpg",
        name: "第谷環形山",
        latin: "（Tycho）",
        info: ["是月球正面南半部一座醒目的大撞擊坑，它是月球上最有趣的隕石坑之一：環繞著一圈最明亮的射紋系統，特別在滿月時清晰可見，即便在僅有地球反射光的背景下也可被分辨出。",
            "第谷環形山是月球上一座最年輕的大撞擊坑，保存狀況極好，不像那些已磨損退化的古老隕坑，它沒有受到後續撞擊的侵蝕，邊緣範圍較為清晰，環隕坑分布著一圈由獨特的射紋系統構成的綿長輻射紋，當太陽直射時，它高反照率的坑底顯得格外突出。",
            "月食期間對月球表面的紅外觀測顯示，第谷環形山坑底表面冷卻速度比周圍其它地區要稍慢，使它成為了月表上的一處「熱點」，該現象主要緣於隕坑所覆蓋的物質不同而形成的差異。",],
        summary: "坑底表面冷卻速度比周圍稍慢，是月表上的一處「熱點」",
        count: "19/30 人",
        date: "2035-07-01 - 07-08",
        price: "NT$ 870,000",
    },
    {
        img: "Mare Marginis.jpg",
        name: "界海",
        latin: "（Mare Marginis）",
        info: ["是坐落在月球正面極邊緣上的一座月海，它的拉丁文名稱（Mare Marginis）意思為「邊緣之海」。",
            "該月海與月球正面大多數的月海不同，不僅外形輪廓不規則，而且所覆蓋的熔岩層似乎也相當稀薄。",
            "月海平原上顯示出一些小的圓形和長條狀的特徵，可能是被不到 1000-1700 英尺熔岩掩埋的撞擊坑痕跡。此外，界海並不集中在任何明確、大型的撞擊盆地上。",
            "該月海表面顯示有一些類似風暴洋表面賴納爾伽瑪特徵的渦旋狀、高反照率沉積物，該特徵與相對較強的磁場有關。",],
        summary: "拉丁文名稱意思為「邊緣之海」。外形輪廓不規則，所覆蓋的熔岩層稀薄",
        count: "14/30 人",
        date: "2035-07-01 - 07-08",
        price: "NT$ 800,000",
    },
    {
        img: "Mare Imbrium.png",
        name: "雨海",
        latin: "（Mare Imbrium）",
        info: ["雨海（拉丁語：Mare Imbrium，意思是「淋浴之海」或「雨之海」）是月球上布滿整個雨海撞擊盆地的遼闊月海，也是太陽系中最大的撞擊坑之一。",
            "1970 年 11 月 17 日世界時 03:47，前蘇聯的月球 17 號攜帶著月球車 1 號在雨海軟著陸(緯度 38.28 N, 經度 35.00)。這是降落在月球上的第一輛探測車。遠程遙控的月球車 1 號成功運行並持續工作了數月時間。",
            "倒下的太空人：它是月球上的唯一一件藝術品，由阿波羅 15 號的成員放在哈德利山上，以紀念在探索太空旅程中犧牲的太空人。",],
        summary: "有阿波羅15號太空人留在雨海的塑像",
        count: "27/30 人",
        date: "2035-07-01 - 07-08",
        price: "NT$ 950,000",
    },
    {
        img: "Mare Crisium.jpg",
        name: "危海",
        latin: "（Mare Crisium）",
        info: ["它是月球正面最孤獨的月海：表面極為平坦，四周環被遼闊的高地環抱，僅間雜著一些零碎的小月海區。",
            "根據引力數據顯示，危海盆地是月球上已記錄到的月殼較薄的區域之一，那裡的引力幾乎接近於零，這主要是撞擊時地殼層被拋離所致。",
            "該月海中存在質量瘤(引力增強區)，其月球引力加速度升高了 0.095 伽，高密度的月海熔岩可能是形成質量瘤的主要因素。",
            "1968 年，美國五艘月球軌道飛船的都卜勒雷儀在危海中心探測到了月球上最大的質量瘤或高重力區。後來的軌道飛行器如：月球探勘者和聖杯號飛船等都確認並精確地測繪了該質量瘤。",],
        summary: "危海盆地是月殼較薄的區域之一",
        count: "17/30 人",
        date: "2035-07-01 - 07-08",
        price: "NT$ 780,000",
    },
    {
        img: "Montes Jura.png",
        name: "侏羅山脈",
        latin: "（Montes Jura）",
        info: ["該山脈環繞雨海西北邊緣的虹灣，構成了一個悅目的半圓。山脈西南端朝東的一角較鈍，被稱為「赫拉克利德岬」或「赫拉克利德角」，而東北端朝西的一角較尖，稱作「拉普拉斯岬」。",
            "上弦月後，月球晝夜線會移近該山脈兩到三晚，當陽光直射群峰頂端時，則產生出一連串被描述為「寶石彎刀」般的亮點。",
            "彼得·格瑞高（Peter Grego）曾描繪月球中「月亮姑娘」的塑像，可看到赫拉克利德岬是她的臉部輪廓，西邊的丘陵是她的頭髮、侏羅山脈是她的軀體。當在北半球從雙筒望遠鏡觀看時，她的形象呈現上下顛倒。",],
        summary: "上弦月後，當陽光直射群峰頂端時，則產生出「寶石彎刀」的亮點。",
        count: "22/30 人",
        date: "2035-07-01 - 07-08",
        price: "NT$ 890,000",
    },
    {
        img: "Peary.png",
        name: "皮里環形山",
        latin: "（Peary）",
        info: ["皮里環形山（Peary）是月球上一座最靠近北極的古老大隕坑，約形成於45.5-39.2億年前的前酒海紀",
            "皮里環形山外觀接近圓狀，東北側向外突出，西南側一處裂口連通了弗洛里環形山。",
            "皮里環形山的坑壁已磨損和侵蝕，形成了一圈嶙峋的環形山脈，在坑底投射下長長的陰影。",
            "寧靜基地設置在皮里環形山的北側坑壁，因為穩定的光照能提供相對恆定的溫度和不間斷的太陽能。同時，它也靠近可能蘊含有豐富水冰資源的永夜區。",],
        summary: "是月球上一座最靠近北極的古老大隕坑",
        count: "19/30 人",
        date: "2035-07-01 - 07-08",
        price: "NT$ 800,000",
    },
    {
        img: "Mare Tranquillitatis.jpg",
        name: "靜海",
        latin: "（Mare Tranquillitatis）",
        info: ["靜海（拉丁語：Mare Tranquillitatis，意為「安寧之海」或「安靜之海」）是坐落在月球靜海撞擊盆地內的月海。",
            "該月海也是首次載人登月的著陸點。1969 年 7 月 20 日，太空人阿姆斯壯告訴地球上的飛行控制中心：「休斯敦，這兒是靜海基地，老鷹已著陸」。",
            "「靜海基地」的著陸區位於北緯 0.8°、東經23.5°，以阿姆斯特朗的名字命名。為紀念阿波羅 11 號小組成員，基地北面的三座小隕石坑後被命名為艾德林環形山、柯林斯環形山和阿姆斯特朗環形山。",
            "1969 年阿波羅 11 號太空人巴茲·奧爾德林在月球靜海上向美國國旗致敬。",],
        summary: "首次載人登月的著陸點，是坐落在月球靜海撞擊盆地內的月海。",
        count: "30/30 人",
        date: "2035-07-01 - 07-08",
        price: "NT$ 1,000,000",
    },
]



$(document).ready(function () {
    planData.forEach((site, i) => {
        $(`.plancards`).append(`
         <li data-index="${i}">
            <a href="Luna Dreams_order.html">
                <div class="plan_card">
                    <img src="img/${site.img}" alt="${site.img}">
                    <div class="plancard_data">
                        <div class="landing_point">
                            <h5 class="point">${site.name}${site.latin}</h5>
                            <h6>${site.summary}</h6>
                        </div>
                        <div class="card-meta">
                            <p><i class="fa-solid fa-user-group"></i>${site.count}</p>
                            <p><i class="fa-solid fa-calendar-days"></i>${site.date}</p>
                        </div>
                    </div>
                    <h5 class="plan_price point">${site.price}</h5>
                    <span>立即報名</span>
                </div>
            </a>
        </li>`)
    });

    const lastCardButton = $(`.plancards li:last-child .plan_card span`);
    lastCardButton.text('報名額滿');
    const lastCard = $(`.plancards li:last-child`);
    lastCard.css('opacity', '0.5');
    const lastCardlink = $(`.plancards li:last-child a`);
    lastCardlink.css('cursor', 'default');
});

// planet
const planetdata = [
    {
        name: "水星（Mercury）",
        img: "Mercury.png",
        txtlist: [
            "又稱「辰星」，距離太陽最近。",
            "直徑約 4,879 km，比地球小 40％，重量比地球小 20 倍。",
            "公轉周期約為 88 天，自轉 1 周約需 59 天。",
            "表面沒有大氣調節，所以晝夜溫差達 600 度（白天約 400℃，夜晚 -200℃），並留下許多流星撞擊的坑穴。",
            "表面充滿懸崖和陡坡形成的壕溝，是因冷卻收縮而成。",
        ]
    },

    {
        name: "金星（Venus）",
        img: "Venus.png",
        txtlist: [
            "當日出前見於東方地平線，稱為「啟明」，當日落後見於西方地平線，則稱為「長庚」。",
            "直徑約 12,104 公里，比地球略小，質量是地球的 0.82 倍。",
            "公轉周期約 225 天，自轉周期 243 天，但它的自轉方向和大部分行星剛好相反。",
            "光度可達 -4.5 等，是除太陽、月亮外最亮的星體。",
            "大氣壓力比地球大 92 倍，主要成分為二氧化碳，含量達 96.5%，有很強的溫室效應，平均溫度達 464℃，幾乎沒有日夜溫差。",
            "表面 2/3 是丘陵地且佈滿火山口，其餘是高原及低地，高地上有馬克士威山（Maxwell Mountains）高出平均地平面約 11 公里，是最高峰。",
        ]
    },

    {
        name: "火星（Mars）",
        img: "Mars.png",
        txtlist: [
            "星色紅似火，中國古時稱做「熒惑」，認為出現必有戰爭；西方也同有戰神的意味。",
            "直徑約 6,779 公里，比地球小一半，質量是地球的 0.107 倍。",
            "公轉周期約 687 天，自轉 1 周需 24 小時 37 分。",
            "大氣層主要是二氧化碳，但雲層薄，大氣壓力只有地球 1％。",
            "溫度從赤道 20℃ 到極區的 -140℃ 左右，而南北兩個極區上都有由冰組成的永久極冠，冬季時，大氣層中的二氧化碳會部分結成冰，造成大氣壓力下降，但春、夏季時，極冠會縮小範圍，二氧化碳再回到大氣層中。",
            "有奧林帕斯（Olympus）火山，高度達 25 公里，基部寬約 600 公里。因為火星的赤道面與軌道面交角是 25.19 度，與地球差不多，所以火星也有四季的變化。",
        ]
    },

    {
        name: "木星（Jupiter）",
        img: "Jupiter.png",
        txtlist: [
            "是行星中最大的 1 顆，直徑 139,822 公里，約為地球的 11 倍。",
            "體積比其他行星總和還大，質量比地球大 300 倍以上。",
            "公轉周期很長，1周將近 12 年，又稱「歲星」。",
            "自轉 1 周只需 9 時 55 分，所以表面形成與赤道平行且明暗交互排列的雲帶，亮帶稱為條斑（zone），暗帶稱為帶紋（belt），它們的數目、大小、位置逐年有變化。",
            "有許多橢圓形斑塊，其中最大的稱為「大紅斑」，其中心位置在南緯 22 度，是巨大的高壓反氣旋。",
            "早在 17 世紀發現，到 1878 年有連續觀測紀錄，現其顏色及面積不斷在變化中。",
        ]
    },

    {
        name: "土星（Saturn）",
        img: "Saturn.png",
        txtlist: [
            "直徑為 116,464 公里，比木星略小，體積比地球大 755 倍，質量相當於地球的 95 倍，是第2顆大行星，構造跟木星很相似。",
            "公轉周期為 29 年半，自轉周期 10 小時 39 分，比木星稍慢。",
            "本體成扁球形旋轉體，大氣以氫與氦為主，其表面有雲霧狀的帶紋和赤道平行。",
            "外有好幾層環狀物繞著旋轉，稱為土星環，主要由冰晶所組成。",
        ]
    },

    {
        name: "天王星（Uranus）",
        img: "Uranus.png",
        txtlist: [
            "直徑 50,724 公里，體積是地球的 63 倍，質量則為 14 倍多，體積僅次於木星和土星。",
            "公轉周期 84 年，因此在天空中的視動非常緩慢，自轉周期是 17 小時 14 分。",
            "其赤道面與公轉軌道面的傾角達 97.9 度，幾乎是躺在軌道面上，造成陽光會直射北極或南極。",
            "當陽光直射北極，南半球便會處於黑暗的冬季中，反之亦然，但距離太陽很遠，因此氣候差異很小，表面溫度是-221℃。",
        ]
    },

    {
        name: "海王星（Neptune）",
        img: "Neptune.png",
        txtlist: [
            "直徑約 49,244 公里，體積是地球的 58 倍，質量則為 17 倍多。",
            "公轉周期 165 年，自轉周期約 16 小時。",
            "也是顆藍色的行星，由於上層大氣主要是甲烷（CH4），會吸收紅色光，故呈藍綠色，表面溫度約 -216℃。",
            "和天王星在體積、質量方面都非常相似，估計它們的化學組成、內部結構也大同小異。",
            "也有稀薄光環在它的南半球表面，發現以逆時針方向旋轉的大暗斑（GreatDark Spot），其反氣旋式旋轉與木星的大紅斑相似。",
        ]
    },

]

let isMobileView = null;
let swiperInstance = null;

$(document).ready(function () {
    checkScreenWidth();
    $(window).on('resize', checkScreenWidth);
});

function checkScreenWidth() {
    const isNowMobile = window.innerWidth <= 1250;

    if (isNowMobile && isMobileView !== true) {
        isMobileView = true;
        initMobileSwiper();
    } else if (!isNowMobile && isMobileView !== false) {
        isMobileView = false;
        initDesktopView();
    }
};

// 桌機版
function initDesktopView() {
    $('.planet-menu').empty();
    $('.main-center').empty();
    $('.main-right').empty();

    planetdata.forEach((spot, i) => {
        $('.planet-menu').append(`<li data-index="${i}"><a href="javascript:void(0)">${spot.name}</a></li>`);
    });

    showContent(0);

    $('.planet-menu').off('click').on('click', 'li', function () {
        const index = $(this).data('index');
        showContent(index);
    });
};

function showContent(i) {
    const spot = planetdata[i];
    const listItems = spot.txtlist.map(item => `<li>${item}</li>`).join('');

    $('.main-center').html(`<img src="img/${spot.img}" alt="${spot.name}">`);
    $('.main-right').html(`<h4 class="point">${spot.name}</h4><ul>${listItems}</ul>`);

    $('.planet-menu li').removeClass('active');
    $(`.planet-menu li[data-index="${i}"]`).addClass('active');
};

// 手機版
function initMobileSwiper() {
    $('.planetPage .swiper-wrapper').empty();

    planetdata.forEach((spot) => {
        const listItems = spot.txtlist.map(item => `<li>${item}</li>`).join('');
        const slideHTML = `
            <div class="swiper-slide">
                <div class="main-center"><img src="img/${spot.img}" alt="${spot.name}"></div>
                <div class="main-right">
                    <h4 class="point">${spot.name}</h4>
                    <ul>${listItems}</ul>
                </div>
            </div>
        `;
        $('.planetPage .planetSwiper .swiper-wrapper').append(slideHTML);
    });

    if (swiperInstance) {
        swiperInstance.destroy();
    };

    swiperInstance = new Swiper('.planetSwiper', {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        }
    });
};