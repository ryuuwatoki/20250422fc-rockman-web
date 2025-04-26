// ===== 遊戲設定（集中整理） =====｜ゲーム設定（集中管理）
let FirstLanguage = localStorage.getItem('lang') || 'ja'; //預設語言日文｜デフォルト言語：日本語
// let FirstLanguage = localStorage.getItem('lang') || 'zh'; //預設語言中文｜デフォルト言語：中国語
// let FirstLanguage = localStorage.getItem('lang') || 'en'; //預設語言英文｜デフォルト言語：英語

// ===== 遊戲狀態 =====｜ゲーム状態
let MAX_FPS = 60; // 最大FPS設定 預設60｜最大FPS設定 デフォルト60

let playerMoveSpeed = 9; // 玩家移動速度設定，數值越大移動越快，預設6｜プレイヤー移動速度設定、数値が大きいほど速い、デフォルト6
let weaponPower = 1;   // 武器攻擊力設定，方便統一調整玩家子彈傷害 1為正常數字越大傷害越高｜武器攻撃力設定、プレイヤー弾のダメージ調整用 1が標準、数値が大きいほど強い
let playerStartX = 150;   // 玩家初始座標 x 預設200｜プレイヤー初期座標 x デフォルト200
let playerStartY = 150;   // 玩家初始座標 y 預設100 ｜プレイヤー初期座標 y デフォルト100
let playerMaxHealth = 100; // 玩家血量 預設100｜プレイヤー体力 デフォルト100
let JUMP_POWER      = 15; // 跳躍力量
let PLAYER_Attack_shoot_color = 'rgba(111, 196, 208, 0.89)';  // 玩家攻擊子彈顏色   
let PLAYER_Charge_Attack_color = 'rgba(0, 179, 255, 0.7)';  // 玩家集氣攻擊子彈顏色
let PLAYER_Charge_Attack_shoot_color = 'rgba(0, 225, 255, 0.7)';  // 玩家集氣攻擊子彈顏色

// **玩家飛行無敵模式 =｜プレイヤー飛行無敵モード**
let isFlyingMode = 0; // 預設關閉 請預設上面hp100第一下會判斷受傷碰到怪物就死了｜デフォルトオフ HP100で最初の一撃でダメージ判定、敵に当たると即死

let Fly_RED_HP = 1; // 飛行紅色敵人血量｜飛行赤色敵体の体力
let Fly_ORANGE_HP = 3; // 飛行橘色敵人血量｜飛行オレンジ敵体の体力
let GROUND_RED_HP = 3; // 地面紅色敵人血量｜地上赤色敵体の体力
let GROUND_ORANGE_HP = 3; // 地面橘色敵人血量｜地上オレンジ敵体の体力
let GROUND_PINK_HP = 5; // 地面粉紅敵人血量｜地上ピンク敵体の体力
let enemyMaxCount = 12; // 敵人最大數量 預設12｜敵最大数 デフォルト12

let FLY_RED_spawn = 1; // 敵人Ａ是否生成，1=是，0=否｜敵A生成するか 1=はい 0=いいえ
let FLY_ORANGE_spawn = 1; // 敵人Ｂ是否生成，1=是，0=否｜敵B生成するか 1=はい 0=いいえ
let GROUND_RED_spawn = 1; // 敵人Ｃ是否生成，1=是，0=否｜敵C生成するか 1=はい 0=いいえ
let GROUND_ORANGE_spawn = 1; // 敵人Ｄ是否生成，1=是，0=否｜敵D生成するか 1=はい 0=いいえ
let GROUND_PINK_spawn = 1; // 敵人Ｅ是否生成，1=是，0=否｜敵E生成するか 1=はい 0=いいえ

let bossHealth   = 300;  // Boss血量 預設300｜ボス体力 デフォルト300
let bossSetX = 5000; // boss 座標 x 預設5000｜ボス座標 x デフォルト5000
let bossSetY = 230; // boss 座標 y 預設230｜ボス座標 y デフォルト230
let bossBulletSpeed = 4; // boss 子彈速度（預設4，數值越大越快）｜ボス弾スピード（デフォルト4、数値が大きいほど速い）
let bossBulletPatternMode = 2; // boss發射子彈的模式 1:固定3發 2:隨機3/4/5發 3:隨機3/4/5/7發｜ボス弾パターン 1:固定3発 2:ランダム3/4/5発 3:ランダム3/4/5/7発
let bossBulletEnable = 1; // boss 子彈是否射擊，1=是，0=否｜ボス弾発射するか 1=はい 0=いいえ
let bossFixedPosition = 0; // boss 是否固定座標（取消移動），1=是，0=否｜ボス座標固定するか（移動しない）1=はい 0=いいえ

let showScore = 1; // score:0 顯示1 隱藏0｜スコア表示 1=表示 0=非表示
let showMoved = 0; // moved:(0) 顯示1 隱藏0｜移動量表示 1=表示 0=非表示
let showFPS = 1; //showfps｜FPS表示
let showXY = 0; //show xy｜XY座標表示
let showNXY = 0; //show new xy｜グリッド座標表示
let ShowCollisionBox = 0; //是否顯示遮圖顯示目前碰撞箱 1顯示0隱藏// 以中心為0，上方60、下方-60
let AutoFlipPlayer = 1; // 是否自動水平翻轉角色圖片（1=按方向鍵時自動翻轉，0=永遠朝右），預設1
let showEntityCounts = 0; //show 人物怪物子彈數量｜エンティティ数表示
let showMobileTouch = 1; // 是否顯示手機觸控按鈕（1=顯示，0=隱藏）｜モバイルタッチボタン表示 1=表示 0=非表示
let showStar = 1; // 是否顯示星星（1=顯示，0=隱藏）｜星表示 1=表示 0=非表示
let showMeteor = 1; // 是否顯示隕石（1=顯示，0=隱藏）｜隕石表示 1=表示 0=非表示

// ===== 設定選單狀態顯示全開/全關 1=全開 0=全關 2=pass =====
checkBoxShowHideAll(2);
// checkBoxShowHideAll(0); // 測試用 1=全開 0=全關 2=pass

// 音量設定｜音量設定
let isBgmOn = 1;  // BGM（包含 OUTRO）是否開啟，1=開啟，0=關閉｜BGM（OUTRO含む）オンオフ 1=オン 0=オフ
let isSfxOn = 1; // 效果音是否開啟，1=開啟，0=關閉｜効果音オンオフ 1=オン 0=オフ

let VOLUME_BGM      = 0.40;  // 背景音樂音量｜BGM音量
let VOLUME_BGM2     = 0.55;  // Boss區域背景音樂音量｜BGM2音量
let VOLUME_SHOOT    = 0.55;  // 射擊音效音量｜射撃効果音音量
let VOLUME_CHARGE   = 0.55;  // 集氣音效音量｜チャージ効果音音量
let VOLUME_BOOM     = 0.45;  // 爆炸音效音量｜爆発効果音音量
let VOLUME_HURT     = 0.70;  // 受傷音效音量｜ダメージ効果音音量
let VOLUME_GAMEOVER = 0.75;  // 遊戲結束音效音量｜ゲームオーバー効果音音量
let VOLUME_BOSSDIE  = 0.40;  // Boss死亡音效音量｜ボス死亡効果音音量
let VOLUME_BOSS     = 0.85;  // Boss出場音效音量｜ボス登場効果音音量
let VOLUME_OUTRO    = 0.55;  // 勝利音樂音量｜勝利BGM音量

// 背景色變化時間 參數有問題 請參考就好
let enter_boss_area_color_change_time = 10000; //Fps
let enter_normal_area_color_change_time = 10000; //Fps
let enter_boss_area_meteor_change_time = 400; //Fps
let enter_normal_area_meteor_change_time = 1000; //Fps

// 一般區域流星雨參數
const normal_meteor_params = {
    color: 'rgb(255, 250, 250)', // 流星顏色
    size: [6, 6], // 流星大小
    speed: 1200, // 流星速度
    update_random: 0.1, // 流星生成機率
    update_interval: 18, // 幾幀產生一次流星
    stay_time: [20, 40], // 流星停留時間
    descent_angle: [-45, 70], // 流星下落角度
    position: [0, 800, 0, 50] // 流星生成位置範圍
};
// Boss區域流星雨參數
const boss_meteor_params = {
    color: 'rgba(153, 21, 76, 0.74)', // 流星顏色
    size: [11, 11], // 流星大小
    speed: 600, // 流星速度
    update_random: 0.2, // 流星生成機率
    update_interval: 3, // 幾幀產生一次流星
    stay_time: [10, 100], // 流星停留時間
    descent_angle: [0, 360], // 流星下落角度
    position: [0, 800, 0, 400] // 流星生成位置範圍
};

// 一般區域顏色
let normal_area_color1 = 'rgba(0, 0, 0, 1)';
let normal_area_color2 = 'rgb(0, 0, 0, 1)';
let normal_area_color3 = 'rgba(0, 0, 0, 1)';
let normal_area_color4 = 'rgba(0, 0, 0, 1)';
let normal_area_color5 = 'rgba(0,0,0,0)';
let normal_area_color6 = 'rgba(0, 0, 0, 1)';
let normal_area_color7 = 'rgba(0, 0, 0, 1)';
let normal_area_color8 = 'rgba(48, 47, 47, 0.95)';
let normal_area_color9 = 'rgba(0,0,0,0)';
let normal_area_color10 = 'rgba(0, 0, 0, 1)';
// Boss區域顏色
let boss_area_color1 = 'rgba(12, 0, 0, 1)';
let boss_area_color2 = 'rgba(12, 0, 0, 1)';
let boss_area_color3 = 'rgba(12, 0, 0, 1)';
let boss_area_color4 = 'rgba(12, 0, 0, 1)';
let boss_area_color5 = 'rgba(12, 0, 0, 1)';
let boss_area_color6 = 'rgba(12, 0, 0, 1)';
let boss_area_color7 = 'rgba(12, 0, 0, 1)';
let boss_area_color8 = 'rgba(12, 0, 0, 1)';
let boss_area_color9 = 'rgb(110, 0, 0)';
let boss_area_color10 = 'rgba(12, 0, 0, 1)';

// 地板顏色 過去設定 請無視～ // 床の色の過去の設定です。無視してください〜
const COLOR_PLATFORM_NORMAL = 'rgba(68,68,68,1)';      // 一般平台顏色
const COLOR_PLATFORM_BOSS   = 'rgba(136,0,0,1)';      // Boss區域平台顏色

// 地板區域
const platformGrid = [
    // 第一區（0~2700）｜第一区（0~2700）
    { x: 0, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 1, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 2, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 3, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 4, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 5, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 6, y: 1, color: COLOR_PLATFORM_NORMAL },
    // { x: 7, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 8, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 9, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 10, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 11, y: 1, color: COLOR_PLATFORM_NORMAL },
    // { x: 12, y: 1, color: COLOR_PLATFORM_NORMAL },
    // { x: 13, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 14, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 15, y: 1, color: COLOR_PLATFORM_NORMAL },
    // { x: 16, y: 1, color: COLOR_PLATFORM_NORMAL },
    // 中間區域｜中間エリア
    { x: 17, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 18, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 19, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 20, y: 3, color: COLOR_PLATFORM_NORMAL },
    // { x: 21, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 22, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 23, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 24, y: 3, color: COLOR_PLATFORM_NORMAL },
    // { x: 25, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 26, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 27, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 28, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 29, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 30, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 31, y: 1, color: COLOR_PLATFORM_NORMAL },
    // { x: 32, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 33, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 34, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 35, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 36, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 37, y: 6, color: COLOR_PLATFORM_NORMAL },
    { x: 38, y: 6, color: COLOR_PLATFORM_NORMAL },
    { x: 39, y: 6, color: COLOR_PLATFORM_NORMAL },
    // { x: 40, y: 1, color: COLOR_PLATFORM_NORMAL },
    // { x: 41, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 42, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 43, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 44, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 45, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 46, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 47, y: 1, color: COLOR_PLATFORM_NORMAL },
    // { x: 48, y: 1, color: COLOR_PLATFORM_NORMAL },
    { x: 49, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 50, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 51, y: 3, color: COLOR_PLATFORM_NORMAL },
    { x: 52, y: 3, color: COLOR_PLATFORM_NORMAL },
    // { x: 53, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 54, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 55, y: 4, color: COLOR_PLATFORM_NORMAL },
    { x: 56, y: 4, color: COLOR_PLATFORM_NORMAL },
    { x: 57, y: 4, color: COLOR_PLATFORM_NORMAL },
    { x: 58, y: 4, color: COLOR_PLATFORM_NORMAL },
    { x: 59, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 60, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 61, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 62, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 63, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 64, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 65, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 66, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 67, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 68, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 69, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 70, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 71, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 72, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 73, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 74, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 75, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 76, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 77, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 78, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 79, y: 7, color: COLOR_PLATFORM_NORMAL },
    { x: 80, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 81, y: 7, color: COLOR_PLATFORM_NORMAL },
    // { x: 82, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 83, y: 7, color: COLOR_PLATFORM_NORMAL },
    // { x: 84, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 85, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 86, y: 2, color: COLOR_PLATFORM_NORMAL },
    { x: 87, y: 9, color: COLOR_PLATFORM_NORMAL },
    // { x: 88, y: 9, color: COLOR_PLATFORM_NORMAL },
    { x: 89, y: 2, color: COLOR_PLATFORM_NORMAL },
    // { x: 90, y: 2, color: COLOR_PLATFORM_NORMAL },
    // Boss 區域地板（x=4600 之後）｜ボスエリア床（x=4600以降）
    { x: 91, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 92, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 93, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 94, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 95, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 96, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 97, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 98, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 99, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 100, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 101, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 102, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 103, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 104, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 105, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 106, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 107, y: 1, color: COLOR_PLATFORM_BOSS },
    { x: 108, y: 1, color: COLOR_PLATFORM_BOSS },
];
// 自動轉換｜自動変換
const basePlatforms = platformGrid.map(p => ({
    x: p.x * 50,
    y: 500 - p.y * 50,
    width: 50,
    height: 50,
    color: p.color
}));

// 遊戲常數
let score= 0;     // 玩家分數
let GRAVITY         = 1;         // 重力加速度
const WORLD_WIDTH     = 5400;    // 世界寬度
const WORLD_HEIGHT    = 500;       // 世界高度
const BOSS_AREA_X     = 4600;      // Boss區域起點X座標
let CHARGE_MIN_FRAME = 42;       // 集氣彈最少需要的幀數
let CHARGE_CANCEL_FRAME = 12;    // 集氣取消的最短幀數
let bossBulletCount = 3; // boss子彈數量
let gameRunning  = false; // 遊戲是否正在進行中
let bossActive   = false; // Boss是否啟動
let bossTimer    = 0;     // Boss出場動畫計時器
let reachedBossArea = false; // 玩家是否已經抵達過boss區域
let charging = false; // 是否正在集氣
let chargeFrame = 0; // 集氣持續幀數
let chargeReady = false; // 是否集氣完成
let bossHitFlash = 0; // Boss被擊中閃爍計數
let upPressed = false; // 追蹤上鍵是否已經按下
let chargeAudioTimeout = null; // 集氣音效延遲計時器
let bossCanAttack = false; // Boss是否可以攻擊
let bossCanMove = false; // Boss是否可以移動
let bossHpAnimating = false; // Boss血條是否正在動畫
let canShoot = true; // 玩家是否可以射擊
let midEventTriggered = false; // 中途事件是否已觸發
let playerDead = false; // 玩家死亡狀態
let playerDeadX = 0;   // 死亡時的X
let playerDeadY = 0;   // 死亡時的Y
let JUMP_EXTRA      = 0.5; // 長按跳躍時每幀額外加速度（正數，實際運算自動轉負）
let JUMP_EXTRA_FRAMES = 12;      // 跳躍額外加速最大幀數
let isWinInvincible = false; // 勝利畫面無敵狀態
let isPaused = false; // 全域暫停旗標
let isWinScreen = false;
let bossDefeated = false;
let fakeBoss = null;
let fakeBossFlashFrame = 0;

// ===== 流星雨（隕石）相關設定 =====
let meteor_params = {...normal_meteor_params};
let meteor_params_target = {...normal_meteor_params};
let meteor_params_transition_frame = 0;
let meteor_params_transition_total = 0;
let meteor_color = meteor_params.color; // 流星顏色
let meteor_size = meteor_params.size.slice(); // 流星大小
let meteor_speed = meteor_params.speed; // 流星速度（每秒像素，預設1000）
let meteor_update_random = meteor_params.update_random; // 出現率
let meteor_update_interval = meteor_params.update_interval; // 幾幀產生一次流星（例如180=3秒，依照MAX_FPS）
let meteor_stay_time = meteor_params.stay_time.slice(); // 流星停留時間
let meteor_descent_angle = meteor_params.descent_angle.slice(); // 流星下落角度（度數）
let meteor_position = meteor_params.position.slice(); // 流星生成位置範圍
let meteor_update_counter = 0;    // 計數器
let meteors = []; // 流星陣列

// ===== 設定選單狀態全開 全關 =====
function checkBoxShowHideAll(mode) {
    if (mode === 2) return; // 2 = 不做任何事
    if (mode !== 0 && mode !== 1) return; // 非 0/1 的值也略過
    showScore = mode;
    showMoved = mode;
    showFPS = mode;
    showXY = mode;
    showNXY = mode;
    ShowCollisionBox = mode;
    AutoFlipPlayer = mode;
    showEntityCounts = mode;
    showMobileTouch = mode;
};

// ===== 物件面積 ===== //
let PLAYER_size = [50,60]; //玩家尺寸 寬度,高度
let PLAYER_SHOOT_size = [55,60];
let PLAYER_Charge_Attack_size = [60,60];
let FLY_RED_size = [30,30];
let FLY_ORANGE_size = [60,70];
let GROUND_RED_size = [35,60];
let GROUND_ORANGE_size = [50,70];
let GROUND_PINK_size = [40,40];
let BOSS_size = [190,190];

// ===== 碰撞箱 =====
let playerCollisionBox = [40, 60]; // [寬度, 高度]
let playerCollisionBoxNX = 50; //碰撞箱中心移動x
let playerCollisionBoxNY = 50; //碰撞箱中心移動y
let playerCollisionBoxCircle = 0.4; // 0=圓形，1=矩形，越小越圓
let FLY_RED_CollisionBox = [30, 30];
let FLY_RED_CollisionBoxNX = 50; //碰撞箱中心移動x
let FLY_RED_CollisionBoxNY = 50; //碰撞箱中心移動y
let FLY_RED_CollisionBoxCircle = 0.4; // 0=圓形，1=矩形，越小越圓
let FLY_ORANGE_CollisionBox = [60, 70];
let FLY_ORANGE_CollisionBoxNX = 50; //碰撞箱中心移動x
let FLY_ORANGE_CollisionBoxNY = 50; //碰撞箱中心移動y
let FLY_ORANGE_CollisionBoxCircle = 0.4; // 0=圓形，1=矩形，越小越圓
let GROUND_RED_CollisionBox = [35, 60];
let GROUND_RED_CollisionBoxNX = 50; //碰撞箱中心移動x
let GROUND_RED_CollisionBoxNY = 50; //碰撞箱中心移動y
let GROUND_RED_CollisionBoxCircle = 0.4; // 0=圓形，1=矩形，越小越圓
let GROUND_ORANGE_CollisionBox = [50, 70];
let GROUND_ORANGE_CollisionBoxNX = 50; //碰撞箱中心移動x
let GROUND_ORANGE_CollisionBoxNY = 50; //碰撞箱中心移動y
let GROUND_ORANGE_CollisionBoxCircle = 0.4; // 0=圓形，1=矩形，越小越圓
let GROUND_PINK_CollisionBox = [40, 40];
let GROUND_PINK_CollisionBoxNX = 50; //碰撞箱中心移動x
let GROUND_PINK_CollisionBoxNY = 50; //碰撞箱中心移動y
let GROUND_PINK_CollisionBoxCircle = 1; // 0=圓形，1=矩形，越小越圓
let bossCollisionBox = [160, 150];
let bossCollisionBoxNX = 50; //碰撞箱中心移動x
let bossCollisionBoxNY = 40; //碰撞箱中心移動y
let bossCollisionBoxCircle = 0.3; // 0=圓形，1=矩形，越小越圓

// 顏色設定
const COLOR_PLAYER          = 'rgba(68,170,255,1)';      // 玩家顏色
const COLOR_BOSS            = 'rgba(33,150,243,1)';   // Boss主體顏色
const COLOR_BULLET_NORMAL   = 'rgba(179,240,255,1)';   // 玩家普通子彈顏色
const COLOR_BULLET_CHARGE   = 'rgba(255,255,0,1)';      // 玩家集氣彈顏色
const COLOR_BULLET_ENEMY    = 'rgba(255,136,255,1)';      // 敵人子彈顏色
const COLOR_BULLET_BOSS     = 'rgba(255,68,170,1)';      // Boss子彈顏色

// 新增floor圖片物件
const floorImg = new Image(); floorImg.src = 'img/01floor.png';
const floorBossImg = new Image(); floorBossImg.src = 'img/02floor.png';

// FLY_RED 兩張動畫圖
const flyRedImgs = [
    new Image(),
    new Image()
];
flyRedImgs[0].src = 'img/e01-1.png';
flyRedImgs[1].src = 'img/e01-2.png';

// FLY_ORANGE 兩張動畫圖
const flyOrangeImgs = [
    new Image(),
    new Image(),
    new Image()
];
flyOrangeImgs[0].src = 'img/e02-1.png';
flyOrangeImgs[1].src = 'img/e02-2.png';
flyOrangeImgs[2].src = 'img/e02-3.png';

// GROUND_RED 兩張動畫圖
const groundRedImgs = [
    new Image(),
    new Image()
];
groundRedImgs[0].src = 'img/e03-1.png';
groundRedImgs[1].src = 'img/e03-2.png';

// GROUND_ORANGE 兩張動畫圖
const groundOrangeImgs = [
    new Image(),
    new Image(),
    new Image(),
    new Image()
];
groundOrangeImgs[0].src = 'img/e04-1.png';
groundOrangeImgs[1].src = 'img/e04-2.png';
groundOrangeImgs[2].src = 'img/e04-3.png';
groundOrangeImgs[3].src = 'img/e04-4.png';

// GROUND_PINK 兩張動畫圖（同 GROUND_ORANGE）
const groundPinkImgs = [
    new Image(),
    new Image()
];
groundPinkImgs[0].src = 'img/e05-1.png';
groundPinkImgs[1].src = 'img/e05-2.png';

// ===== 玩家圖片載入 =====
const playerImgs = [
    new Image(), // 0: 靜止
    new Image(), // 1: 移動動畫
    new Image(), // 2: 發射
];
playerImgs[0].src = 'img/p1.png';
playerImgs[1].src = 'img/p2.png';
playerImgs[2].src = 'img/p3.png';

// ===== Boss圖片載入 =====
const bossImgs = [];
for (let i = 0; i <= 8; i++) {
    bossImgs[i] = new Image();
    bossImgs[i].src = `img/b${i}.png`;
};

// 動態建立 tornado-img 圖片
const tornadoImg = new Image();
tornadoImg.id = 'tornado-img';
tornadoImg.src = 'img/tornadoes.png';
tornadoImg.style.display = 'none';
document.getElementById('game-wrapper').appendChild(tornadoImg);

// ===== DOM 元素選取 =====
const canvas              = document.getElementById('game-canvas');
const ctx                 = canvas.getContext('2d');

const startScreen         = document.getElementById('start-screen');
const gameOverScreen      = document.getElementById('game-over-screen');
const winScreen           = document.getElementById('win-screen');

const startButton         = document.getElementById('start-button');
const restartButton       = document.getElementById('restart-button');
const playAgainButton     = document.getElementById('play-again-button');

const healthFill          = document.getElementById('health-fill');
const bossHealthContainer = document.getElementById('boss-health-container');
const bossHealthFill      = document.getElementById('boss-health-fill');

const scoreElement        = document.getElementById('score');
const finalScoreElement   = document.getElementById('final-score');
const winScoreElement     = document.getElementById('win-score');
const cameraDebugElement  = document.getElementById('camera-debug');

// ===== 鏡頭系統 =====
const camera = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    // 平滑跟隨玩家
    follow: function(target) {
        const centerX = target.x + target.width/2;
        const centerY = target.y + target.height/2;
        
        // 水平跟隨
        this.x = centerX - this.width/2;
        
        // 當玩家抵達boss區域後，鏡頭左邊界鎖定在BOSS_AREA_X
        if (target.x >= BOSS_AREA_X) {
            this.x = Math.max(BOSS_AREA_X, this.x);
        }
        
        // 垂直跟隨 (但限制不讓玩家看到地圖外)
        const maxY = WORLD_HEIGHT - this.height;
        this.y = Math.min(maxY, Math.max(0, centerY - this.height/2));
        
        // 限制不超出世界邊界
        this.x = Math.max(0, Math.min(WORLD_WIDTH - this.width, this.x));
        this.y = Math.max(0, Math.min(WORLD_HEIGHT - this.height, this.y));
    }
};

// ===== 玩家物件 =====
let wa_player_to_Health_ki = playerMaxHealth; // 玩家目前血量 byLiuWatoki
let player = {
    x: playerStartX,                // 玩家X座標（連動 playerStartX）
    y: playerStartY,                // 玩家Y座標（連動 playerStartY）
    get width() { return PLAYER_size[0]; }, // 玩家寬度永遠固定
    get height() { return PLAYER_size[1]; }, // 玩家高度永遠固定
    get speed() { return playerMoveSpeed; }, // 玩家移動速度（取自全域變數）
    vy: 0,                 // 垂直速度
    onGround: false,       // 是否在地面上
    color: 'rgba(68,170,255,1)',         // 玩家顏色
    isShooting: false,     // 是否正在射擊（已廢棄，保留相容）
    shootAnimFrame: 0,     // 發射動畫剩餘幀數
    shootCooldown: 0,      // 射擊冷卻計時器
    shootDelay: Math.round(15 / 1.1), // 射擊間隔
    direction: 1,          // 玩家面向方向（1=右，-1=左）
    invincible: 0,         // 無敵剩餘幀數

    // 更新玩家位置
    update: function() {
        if (playerDead) {
            this.x = playerDeadX;
            this.y = playerDeadY;
            return; // 死亡時不能動作且維持在死亡位置
        }
        // ===== 飛行模式 =====
        if (isFlyingMode === 1) {
            // 左右移動
            if (keys.ArrowLeft)  { this.x -= this.speed; this.direction = -1; }
            if (keys.ArrowRight) { this.x += this.speed; this.direction =  1; }
            // 上下移動
            if (keys.ArrowUp)    { this.y -= this.speed; }
            if (keys.ArrowDown)  { this.y += this.speed; }
            // 邊界限制
            this.x = Math.max(0, Math.min(WORLD_WIDTH - this.width, this.x));
            this.y = Math.max(0, Math.min(WORLD_HEIGHT - this.height, this.y));
            this.onGround = false;
            return;
        }
        // 是否抵達過boss區域
        if (this.x >= BOSS_AREA_X) {
            reachedBossArea = true;
        }
        // 水平移動
        if (keys.ArrowLeft)  {
            if (reachedBossArea) {
                this.x -= this.speed;
                if (this.x < BOSS_AREA_X) this.x = BOSS_AREA_X;
            } else {
                this.x -= this.speed;
                if (this.x < 0) this.x = 0;
            }
            this.direction = -1;
        }
        if (keys.ArrowRight) { this.x += this.speed; this.direction =  1; }
        
        // 跳躍
        if (keys.ArrowUp && this.onGround && !upPressed) {
            this.vy = -JUMP_POWER; // 這裡加負號
            this.onGround = false;
            upPressed = true;
            isJumping = true;
            jumpHoldFrames = 0;
        }
        if (!keys.ArrowUp) upPressed = false;
        
        // 重力與新 y 位置
        this.vy += GRAVITY;
        let newY = this.y + this.vy;
        
        // 平台碰撞檢測
        this.onGround = false;
        for (let p of platforms) {
            const overlapX = this.x + this.width > p.x && this.x < p.x + p.width;
            if (overlapX && this.y + this.height <= p.y && newY + this.height >= p.y) {
                newY = p.y - this.height;
                this.vy = 0;
                this.onGround = true;
            }
        }
        
        // 更新位置
        this.y = newY;
        
        // 邊界限制
        this.x = Math.max(0, Math.min(WORLD_WIDTH - this.width, this.x));
        
        // 掉落死亡
        if (this.y >= WORLD_HEIGHT) {
            gameOver();
            return;
        }
        
        // 無敵時間更新
        if (this.invincible > 0) {
            this.invincible--;
        }
        // 跳躍增力（可變高度）
        if (isJumping && !this.onGround && this.vy < 0 && jumpHoldFrames < JUMP_EXTRA_FRAMES) {
            this.vy += -JUMP_EXTRA; // 這裡加負號
            jumpHoldFrames++;
        } else if (jumpHoldFrames >= JUMP_EXTRA_FRAMES) {
            isJumping = false;
        }
        // 限制最高上升250像素
        if (isJumping && jumpStartY - this.y >= 250) {
            isJumping = false;
            if (this.vy < 0) this.vy = 0; // 立即停止上升
        }
    },
    
    // 玩家射擊
    shoot: function() {
        if (playerDead) return; // 死亡時不能射擊
        if (!canShoot) return;
        if (this.shootCooldown > 0) {
            this.shootCooldown--;
            return;
        }
        // 如果集氣彈即將發射，不發射普通子彈
        if (chargeReady) return;
        // 集氣狀態下，只有集氣超過0.7秒才不發射普通子彈
        if (charging && chargeFrame >= CHARGE_CANCEL_FRAME) return;
        if (this.isShooting && this.shootCooldown === 0) {
            bullets.push({
                x: this.x + (this.direction === 1 ? this.width : -10),
                y: this.y + this.height / 2 - 3,
                width: 10,
                height: 6,
                speed: 10 * 1.1 * this.direction, // 1.1倍
                color: PLAYER_Attack_shoot_color,
                isCharge: false
            });
            this.shootCooldown = this.shootDelay;
        }
    },
    
    // 受傷處理
    takeDamage: function(amount) {
        if (isWinInvincible) return;
        if (this.invincible > 0) return;
        // 播放受傷音效
        const hurtAudio = document.getElementById('hurt-audio');
        if (hurtAudio) {
            hurtAudio.currentTime = 0;
            hurtAudio.volume = VOLUME_HURT;
            if (isSfxOn) hurtAudio.play();
        }
        wa_player_to_Health_ki -= amount;
        updateHealthBar();
        this.invincible = 30; // 30幀無敵時間
        if (wa_player_to_Health_ki <= 0) {
            gameOver();
        }
    }
};
const players = [player];

// ===== 子彈系統 =====
const bullets = [];
const enemyBullets = [];

// ===== 敵人類型 =====
// 除錯：定義所有小兵的屬性與行為，方便統一管理與擴充
const ENEMY_TYPES = {
    // 飛行系列（圓形）
    FLY_RED: {
        color: 'rgba(255,68,68,1)', // 顏色
        speed: 1.5 * 1.1, // 移動速度
        health: 1, // 血量
        score: 60, // 擊殺得分
        behavior: function(enemy) { // 行為函數
            enemy.x -= enemy.speed;
            // 小幅度上下
            if (!enemy.floatBaseY) enemy.floatBaseY = enemy.y;
            enemy.y = enemy.floatBaseY + Math.sin(Date.now() / 600 + enemy._id) * 18;
            // === 動畫計數 ===
            if (enemy._animFrame === undefined) enemy._animFrame = 0;
            if (enemy._imgIndex === undefined) enemy._imgIndex = 0;
            enemy._animFrame++;
            // 幾幀切換動畫（這裡是6幀切換一次）//byLiuWatoki
            if (enemy._animFrame % 20 === 0) {
                enemy._imgIndex = 1 - enemy._imgIndex;
            }
        },
        isFlying: true, // 是否為飛行敵人
        eye: { color: 'rgba(34,34,34,1)', type: 'circle' } // 眼睛樣式
    },
    FLY_ORANGE: {
        color: 'rgba(255,136,68,1)', // 顏色 //bywatoki byLiuWatoki from_wa_to_ki
        speed: 2.25 * 1.1, // 移動速度
        health: 1, // 血量
        score: 80, // 擊殺得分 //bywatoki from_wa_to_ki 
        behavior: function(enemy) { // 行為函數
            enemy.x -= enemy.speed;
            // 大幅度上下
            if (!enemy.floatBaseY) enemy.floatBaseY = enemy.y;
            enemy.y = enemy.floatBaseY + Math.sin(Date.now() / 300 + enemy._id) * 48;
            // 動畫
            if (enemy._animFrame === undefined) enemy._animFrame = 0;
            if (enemy._imgIndex === undefined) enemy._imgIndex = 0;
            enemy._animFrame++;
            if (enemy._animFrame % 20 === 0) {
                enemy._imgIndex = (enemy._imgIndex + 1) % 3; // 0,1,2循環
            }
        },
        isFlying: true, // 是否為飛行敵人
        eye: { color: 'rgba(34,34,34,1)', type: 'circle' } // 眼睛樣式
    },
    // 地上系列（半圓形）
    GROUND_RED: {
        color: 'rgba(255,68,68,1)', // 顏色
        speed: 0.75 * 1.1, // 移動速度
        health: 1, // 血量
        score: 50, // 擊殺得分
        behavior: function(enemy) { // 行為函數
            enemy.x -= enemy.speed;
            // 動畫
            if (enemy._animFrame === undefined) enemy._animFrame = 0;
            if (enemy._imgIndex === undefined) enemy._imgIndex = 0;
            enemy._animFrame++;
            if (enemy._animFrame % 20 === 0) {
                enemy._imgIndex = 1 - enemy._imgIndex;
            }
        },
        isFlying: false, // 是否為飛行敵人
        eye: { color: 'rgba(34,34,34,1)', type: 'semi' } // 眼睛樣式
    },
    GROUND_ORANGE: {
        color: 'rgba(255,136,68,1)', // 顏色
        speed: 0.75 * 1.1, // 移動速度
        health: 1, // 血量
        score: 70, // 擊殺得分
        behavior: function(enemy) { // 行為函數
            enemy.x -= enemy.speed;
            if (enemy.onGround && Math.random() < 0.02) {
                enemy.vy = -12;
                enemy.onGround = false;
            }
            // 動畫
            if (enemy._animFrame === undefined) enemy._animFrame = 0;
            if (enemy._imgIndex === undefined) enemy._imgIndex = 0;
            enemy._animFrame++;
            if (enemy._animFrame % 10 === 0) {
                enemy._imgIndex = (enemy._imgIndex + 1) % 4; // 0,1,2,3循環
            }
        },
        isFlying: false, // 是否為飛行敵人
        eye: { color: 'rgba(34,34,34,1)', type: 'semi' } // 眼睛樣式
    },
    GROUND_PINK: {
        color: 'rgba(255,136,204,1)', // 顏色
        speed: 0, // 移動速度
        health: 1, // 血量
        score: 100, // 擊殺得分
        shootDelay: Math.round(120), // 射擊間隔 數字越小射擊越快
        behavior: function(enemy) { // 行為函數
            // 固定點射擊
            if (enemy.shootCooldown > 0) {
                enemy.shootCooldown--;
            } else {
                const angle = Math.atan2(
                    player.y + player.height/2 - (enemy.y + enemy.height/2),
                    player.x + player.width/2 - (enemy.x + enemy.width/2)
                );
                // 射擊次數減半，原本1發，現在每2次才射1發
                if (!enemy._shootToggle) enemy._shootToggle = false;
                enemy._shootToggle = !enemy._shootToggle;
                if (enemy._shootToggle) {
                    enemyBullets.push({
                        x: enemy.x + enemy.width/2 - 3,
                        y: enemy.y + enemy.height/2 - 3,
                        width: 6,
                        height: 6,
                        speedX: Math.cos(angle) * 1.3,
                        speedY: Math.sin(angle) * 1.3,
                        color: 'rgba(255,136,204,1)'
                    });
                }
                enemy.shootCooldown = enemy.shootDelay;
            }
            // 動畫
            if (enemy._animFrame === undefined) enemy._animFrame = 0;
            if (enemy._imgIndex === undefined) enemy._imgIndex = 0;
            enemy._animFrame++;
            if (enemy._animFrame % 20 === 0) {
                enemy._imgIndex = 1 - enemy._imgIndex;
            }
        },
        isFlying: false, // 是否為飛行敵人
        eye: { color: 'rgba(255,255,255,1)', type: 'semi' } // 眼睛樣式
    }
};

// ===== 敵人陣列 =====
const enemies = [];
// ===== 敵人閃爍狀態 =====
const enemyHitFlash = new WeakMap(); // Map<enemy, frame>

// ===== Boss 物件 =====
const boss = {
    x: 5200,
    y: 350, // 固定初始座標
    get width() { return BOSS_size[0]; }, // Boss寬度
    get height() { return BOSS_size[1]; }, // Boss高度
    speed: 2 * 1.1, // 1.1倍
    vy: 0, // 不再需要重力
    color: 'rgba(33,150,243,1)', // 主體藍色（Airman主色）
    shootCooldown: 0,
    shootDelay: Math.round(200 / 1.1), // 間隔縮短
    pattern: 0,
    patternTimer: 0,
    health: 300,
    maxHealth: 300,
    onGround: false, // 不再需要onGround
    pauseTimer: 0, // 暫停計時器
    imgIndex: 0, // 當前圖片
    animFrame: 0, // 動畫計數
    
    // Boss 行為模式
    update: function() {
        // ===== 新增 Boss 固定座標功能 =====
        if (bossFixedPosition) {
            this.x = bossSetX;
            this.y = bossSetY;
            // 仍然要處理動畫切換
            if (!bossCanMove) {
                this.imgIndex = 0;
            } else {
                this.animFrame++;
                if (this.animFrame % 6 === 0) {
                    this.imgIndex++;
                    if (this.imgIndex > 8) this.imgIndex = 1;
                }
            }
            // 固定時不移動也不射擊
            return;
        }
        // 動畫切換
        if (!bossCanMove) {
            this.imgIndex = 0;
        } else {
            this.animFrame++;
            if (this.animFrame % 6 === 0) {
                this.imgIndex++;
                if (this.imgIndex > 8) this.imgIndex = 1;
            }
        }
        // 暫停狀態
        if (this.pauseTimer > 0) {
            this.pauseTimer--;
            return;
        }
        // 模式計時器
        this.patternTimer++;
        if (this.patternTimer > 180) {
            this.pattern = (this.pattern + 1) % 4;
            this.patternTimer = 0;
        }
        if (!bossCanMove) return; // 0.7秒內不能移動
        // 不受重力影響，直接根據行為模式調整y座標
        const bossDisplayHeight = 190;
        switch (this.pattern) {
            case 0: // 上下移動
                this.y += this.speed;
                if (this.y < 0 || this.y > 252) {
                    this.speed *= -1;
                }
                break;
            case 1: // 追蹤玩家
                if (this.y < player.y) {
                    this.y += this.speed;
                } else if (this.y > player.y) {
                    this.y -= this.speed;
                }
                // 限制範圍
                this.y = Math.max(0, Math.min(252, this.y));
                break;
            case 2: // 快速上下移動
                if (this.patternTimer % 60 < 30) {
                    this.y -= 8; // 向上飄
                } else {
                    this.y += 8; // 向下飄
                }
                // 限制範圍
                this.y = Math.max(0, Math.min(252, this.y));
                break;
            case 3: // 衝刺攻擊
                if (this.patternTimer < 60) {
                    this.x -= 5;
                } else if (this.patternTimer < 120) {
                    this.x += 5;
                }
                break;
        }
        // Boss 射擊
        if (this.shootCooldown > 0) {
            this.shootCooldown--;
        } else if (bossCanAttack && bossBulletEnable) {
            // 根據 bossBulletPatternMode 決定 bossBulletCount
            if (bossBulletPatternMode === 1) {
                bossBulletCount = 3;
            } else if (bossBulletPatternMode === 2) {
                bossBulletCount = [3, 5][Math.floor(Math.random() * 3)];
            } else if (bossBulletPatternMode === 3) {
                bossBulletCount = [3, 5, 7, 9][Math.floor(Math.random() * 4)];
            }
            // 多方向射擊，使用 bossBulletCount
            let mid = Math.floor(bossBulletCount / 2);
            for (let i = -mid; i <= mid; i++) {
                if (bossBulletCount % 2 === 0 && i === 0) continue; // 偶數時跳過0，保持對稱
                const angle = Math.atan2(
                    player.y + player.height/2 - (this.y + this.height/2),
                    player.x + player.width/2 - (this.x + this.width/2)
                ) + (i * 0.3);
                enemyBullets.push({
                    x: this.x + this.width/2 - 3.4125,
                    y: this.y + this.height/2 - 13.65,
                    width: 10,
                    height: 20,
                    speedX: Math.cos(angle) * bossBulletSpeed,
                    speedY: Math.sin(angle) * bossBulletSpeed,
                    color: 'rgba(255,68,170,1)'
                });
            }
            this.shootCooldown = this.shootDelay; // ← 每次發射後重設冷卻
        }
        // === 加入邊界限制 ===
        const bossDisplayWidth = 190;
        this.x = Math.max(4550, Math.min(5150, this.x));
        this.y = Math.max(0, Math.min(252, this.y));
    }
};
const bosses = [boss];

// ===== 平台陣列 =====
const platforms = basePlatforms.slice();


// ===== 背景漸層顏色漸變機制 =====
let current_area_colors = [
    normal_area_color1, normal_area_color2, normal_area_color3, normal_area_color4, normal_area_color5,
    normal_area_color6, normal_area_color7, normal_area_color8, normal_area_color9, normal_area_color10
];
let target_area_colors = [...current_area_colors];
let area_color_transition_frame = 0;
let area_color_transition_total = 0;
let is_in_boss_area = false;
let last_boss_area_state = false; // 新增：記錄上次狀態

function parseColor(str) {
    // 支援 rgb/rgba 格式
    let m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!m) return [0,0,0,1];
    return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3]), m[4] !== undefined ? parseFloat(m[4]) : 1];
}
function colorToStr(arr) {
    return `rgba(${arr[0]},${arr[1]},${arr[2]},${arr[3]})`;
}
function lerpColor(a, b, t) {
    return [
        Math.round(a[0] + (b[0] - a[0]) * t),
        Math.round(a[1] + (b[1] - a[1]) * t),
        Math.round(a[2] + (b[2] - a[2]) * t),
        a[3] + (b[3] - a[3]) * t
    ];
}
function updateAreaColors() {
    if (area_color_transition_total > 0 && area_color_transition_frame < area_color_transition_total) {
        area_color_transition_frame++;
        let t = area_color_transition_frame / area_color_transition_total;
        for (let i = 0; i < 10; i++) {
            let c0 = parseColor(current_area_colors[i]);
            let c1 = parseColor(target_area_colors[i]);
            let lerped = lerpColor(c0, c1, t);
            current_area_colors[i] = colorToStr(lerped);
        }
        if (area_color_transition_frame >= area_color_transition_total) {
            // 完成漸變
            for (let i = 0; i < 10; i++) current_area_colors[i] = target_area_colors[i];
            area_color_transition_total = 0;
        }
    }
}



// ===== 控制系統 =====
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
    ' ': false,
    'Enter': false
};

// ===== 事件監聽 =====
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
playAgainButton.addEventListener('click', startGame);

// 跳躍鍵按下時間記錄
let jumpKeyDownTime = 0;
let jumpKeyPressed = false;
let isJumping = false;
let jumpHoldFrames = 0;
const jumpMaxHoldTime = 300; // 最長0.3秒
let jumpStartY = 0; // 起跳時y座標

document.addEventListener('keydown', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
        if (e.key === 'ArrowUp' && !jumpKeyPressed) {
            jumpKeyDownTime = Date.now();
            jumpKeyPressed = true;
        }
        if (e.key === 'Enter' && !gameRunning) {
            startGame();
        }
        if (e.key === ' ' && gameRunning) {
            // 按下空白鍵，立即啟動普通射擊
            if (!charging) {
                charging = true;
                chargeFrame = 0;
                chargeReady = false;
                player.shootAnimFrame = 7; // 只顯示1幀
                // 播放射擊音效
                const shootAudio = document.getElementById('shoot-audio');
                if (shootAudio) {
                    shootAudio.currentTime = 0;
                    shootAudio.volume = VOLUME_SHOOT;
                    if (isSfxOn) shootAudio.play();
                }
                // 延遲0.5秒後才播放集氣音效
                if (chargeAudioTimeout) clearTimeout(chargeAudioTimeout);
                chargeAudioTimeout = setTimeout(() => {
                    if (charging) {
                        const chargeAudio = document.getElementById('charge-audio');
                        if (chargeAudio) {
                            chargeAudio.currentTime = 0;
                            chargeAudio.volume = VOLUME_CHARGE;
                            if (isSfxOn) chargeAudio.play();
                        }
                    }
                }, 500);
            }
        }
    }
});

document.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
        if (e.key === 'ArrowUp' && jumpKeyPressed) {
            const pressDuration = Date.now() - jumpKeyDownTime;
            if (pressDuration < 200 && player.vy < 0) {
                // 0.2秒以下，1/4高度
                player.vy /= 4;
            } else if (pressDuration < 300 && player.vy < 0) {
                // 0.2~0.3秒，1/3高度
                player.vy /= 3;
            } else if (pressDuration < 400 && player.vy < 0) {
                // 0.3~0.4秒，一半高度
                player.vy /= 2;
            }
            // 超過0.4秒，維持原本最高高度
            jumpKeyPressed = false;
        }
        if (e.key === ' ') {
            // 放開空白鍵時，根據集氣時間決定發射什麼
            if (charging && chargeFrame >= CHARGE_MIN_FRAME) {
                chargeReady = true; // 發射集氣彈
            } else if (charging && chargeFrame < CHARGE_CANCEL_FRAME && !chargeReady) {
                // 只有 chargeReady 為 false 才補發普通彈，且不受冷卻限制
                bullets.push({
                    x: player.x + (player.direction === 1 ? player.width : -10),
                    y: player.y + player.height / 2 - 3,
                    width: 10,
                    height: 6,
                    speed: 10 * 1.1 * player.direction, // 1.1倍
                    color: PLAYER_Attack_shoot_color,
                    isCharge: false
                });
                player.shootAnimFrame = 1;
            }
            charging = false;
            // 停止集氣音效
            if (chargeAudioTimeout) clearTimeout(chargeAudioTimeout);
            const chargeAudio = document.getElementById('charge-audio');
            if (chargeAudio) {
                chargeAudio.pause();
                chargeAudio.currentTime = 0;
                chargeAudio.volume = VOLUME_CHARGE;
            }
        }
    }
});

// ===== 遊戲初始化 =====
const bgm = document.getElementById('bgm');
const bgm2 = document.getElementById('bgm2'); // 新增 boss 區 BGM

//遊戲初始化，重設所有狀態並開始遊戲主循環
function startGame() {
    // 停止outro音樂
    const outroAudio = document.getElementById('outro-audio');
    if (outroAudio) {
        outroAudio.pause();
        outroAudio.currentTime = 0;
        outroAudio.volume = VOLUME_OUTRO;
        outroAudio.onended = null;
    }
    // 停止 boss 區 BGM
    if (bgm2) {
        bgm2.pause();
        bgm2.currentTime = 0;
    }
    // 音樂播放控制
    if (bgm) {
        bgm.currentTime = 0;
        bgm.volume = VOLUME_BGM;
        if (isBgmOn) bgm.play();
    }
    // 重置遊戲狀態
    gameRunning = true;
    score = 0;
    wa_player_to_Health_ki = playerMaxHealth;
    boss.health = boss.maxHealth;
    boss.x = 5300 - boss.width; // 貼齊右邊界
    boss.y = 420 - boss.height; // 貼齊地板
    boss.imgIndex = 0;
    boss.animFrame = 0;
    bossActive = false;
    reachedBossArea = false;
    
    // 重置玩家位置
    player.x = playerStartX;
    player.y = playerStartY;
    player.vy = 0;
    player.onGround = true;
    player.direction = 1;
    player.invincible = 0;
    
    // 清空陣列
    bullets.length = 0;
    enemyBullets.length = 0;
    enemies.length = 0;
    
    // 隱藏介面元素
    startScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';
    winScreen.style.display = 'none';
    bossHealthContainer.style.display = 'none';
    
    // 更新UI
    updateHealthBar();
    updateBossHealthBar();
    updateScore();
    
    // 啟動遊戲循環
    requestAnimationFrame(gameLoop);
    langToggle.style.display = 'none';
    langSelect.style.display = 'none';
    canShoot = false;
    charging = false;
    player.isShooting = false;
    chargeFrame = 0;
    chargeReady = false;
    if (chargeAudioTimeout) clearTimeout(chargeAudioTimeout);
    setTimeout(() => { canShoot = true; }, 200);
    playerDead = false; // 重設死亡狀態
    playerDeadX = 0;
    playerDeadY = 0;
    bossDefeated = false;
    isWinInvincible = false;
}

// ===== 遊戲主循環 =====
let lastFrameTime = 0;
function getFrameDuration() {
    return 1000 / MAX_FPS;
}

function gameLoop(now) {
    requestAnimationFrame(gameLoop);
    if (isPaused) return; // 暫停時不更新遊戲
    if (now - lastFrameTime < getFrameDuration()) return;
    lastFrameTime = now;
    update();
    render();
    updateFPS();
}

// ===== 遊戲狀態更新 =====
// 更新遊戲所有狀態（玩家、敵人、子彈、Boss等）
// *無參數，無回傳值

function update() {
    // 集氣狀態計數
    if (charging) {
        chargeFrame++;
    }
    // 先處理集氣彈
    if (chargeReady) {
        // 發射集氣彈
        bullets.push({
            x: player.x + (player.direction === 1 ? player.width : -40),
            y: player.y + player.height / 2 - 12,
            width: 40,
            height: 24,
            speed: 10 * 1.1 * player.direction, // 1.1倍
            color: PLAYER_Charge_Attack_shoot_color,
            isCharge: true // 標記為集氣彈
        });
        player.shootCooldown = player.shootDelay; // 給一點冷卻
        // 播放shoot音效
        const shootAudio = document.getElementById('shoot-audio');
        if (shootAudio) {
            shootAudio.currentTime = 0;
            shootAudio.volume = VOLUME_SHOOT;
            if (isSfxOn) shootAudio.play();
        }
        player.shootAnimFrame = 14; // 集氣彈顯示0.2秒
        chargeReady = false;
    }
    // 更新玩家
    player.update();
    player.shoot();
    
    // 監控玩家位置 - 僅在操作方向鍵時輸出
    if (keys.ArrowLeft || keys.ArrowRight || keys.ArrowUp) {
        // console.log('玩家位置:', { x: player.x, y: player.y, onGround: player.onGround });
    }
    
    // 更新鏡頭
    camera.follow(player);
    
    // Boss區域效果
    if (player.x >= BOSS_AREA_X && !bossActive && bossTimer === 0 && !isWinScreen && !bossDefeated) {
        // 先不顯示正式boss血條
        bossHealthContainer.style.display = 'none';
        // 先移除所有舊的 fake hp 條
        let oldFakeBar = document.getElementById('boss-fake-bar');
        if (oldFakeBar) oldFakeBar.remove();
        // 新 fake hp 條動畫
        let fakeBar = document.createElement('div');
        fakeBar.style.position = 'absolute';
        fakeBar.style.top = '10px';
        fakeBar.style.right = '10px';
        fakeBar.style.width = '200px';
        fakeBar.style.height = '20px';
        fakeBar.style.background = '#333';
        fakeBar.style.border = '2px solid #444';
        fakeBar.style.zIndex = 5;
        fakeBar.id = 'boss-fake-bar';
        let fakeFill = document.createElement('div');
        fakeFill.style.height = '100%';
        fakeFill.style.width = '1%';
        fakeFill.style.background = '#ccc';
        fakeFill.style.transition = 'none';
        fakeBar.appendChild(fakeFill);
        document.getElementById('game-container').appendChild(fakeBar);
        let animPercent = 1;
        const animStep = (100 - 1) / (1500 / 16); // 1.5秒 1%~100%
        const anim = setInterval(() => {
            animPercent += animStep;
            if (animPercent >= 100) {
                animPercent = 100;
                clearInterval(anim);
                // 移除 fake hp 條，顯示正式 boss hp 條
                let oldFakeBar2 = document.getElementById('boss-fake-bar');
                if (oldFakeBar2) oldFakeBar2.remove();
                bossHealthContainer.style.display = 'block';
                updateBossHealthBar();
            }
            fakeFill.style.width = animPercent + '%';
        }, 16);
        bossTimer = 1;
        enemies.length = 0;
        enemyBullets.length = 0;
    }
    
    // 計時器運行，3 秒後激活 BOSS
    if (bossTimer > 0 && bossTimer < 250) {
        bossTimer++;
        if (bossTimer === 100) {
            // 播放boss出場音效 bosstimer 是boss出場延遲時間
            const bossAudio = document.getElementById('boss-audio');
            if (bossAudio) {
                bossAudio.currentTime = 0;
                bossAudio.volume = VOLUME_BOSS;
                if (isSfxOn) bossAudio.play();
            }
            // 延遲0.4秒後才讓boss出現
            setTimeout(() => {
                bossActive = true;
                bossTimer = 0;
                bossCanAttack = false;
                bossCanMove = false;
                setTimeout(() => {
                    bossCanAttack = true;
                    bossCanMove = true;
                }, 700);
            }, 400);
        }
    }
    
    // 生成敵人
    if (Math.random() < 0.015 && enemies.length < 8 && !bossActive && player.x < WORLD_WIDTH - 1000) {
        // 依照 spawn 變數決定哪些敵人型別可以生成
        const enemyTypes = [];
        if (FLY_RED_spawn) enemyTypes.push(ENEMY_TYPES.FLY_RED);
        if (FLY_ORANGE_spawn) enemyTypes.push(ENEMY_TYPES.FLY_ORANGE);
        if (GROUND_RED_spawn) enemyTypes.push(ENEMY_TYPES.GROUND_RED);
        if (GROUND_ORANGE_spawn) enemyTypes.push(ENEMY_TYPES.GROUND_ORANGE);
        if (GROUND_PINK_spawn) enemyTypes.push(ENEMY_TYPES.GROUND_PINK);
        if (enemyTypes.length === 0) return; // 沒有可生成的敵人
        let type;
        let tryCount = 0;
        do {
            type = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
            // 如果是粉紅色地面怪，只有玩家往右時才允許生成
            if (type === ENEMY_TYPES.GROUND_PINK && !keys.ArrowRight) {
                tryCount++;
                continue;
            }
            break;
        } while (tryCount < 10);
        // 給每隻敵人一個唯一 id 供飄浮用
        // 依照敵人類型決定血量
        let hp = 3;
        if (type === ENEMY_TYPES.FLY_RED) hp = Fly_RED_HP; // 飛行紅色敵人血量｜飛行赤色敵体の体力
        if (type === ENEMY_TYPES.FLY_ORANGE) hp = Fly_ORANGE_HP; // 飛行橘色敵人血量｜飛行オレンジ敵体の体力
        if (type === ENEMY_TYPES.GROUND_RED) hp = GROUND_RED_HP; // 地面紅色敵人血量｜地上赤色敵体の体力
        if (type === ENEMY_TYPES.GROUND_ORANGE) hp = GROUND_ORANGE_HP; // 地面橘色敵人血量｜地上オレンジ敵体の体力
        if (type === ENEMY_TYPES.GROUND_PINK) hp = GROUND_PINK_HP; // 地面粉紅敵人血量｜地上ピンク敵体の体力
        const enemy = {
            x: camera.x + camera.width + 50, // 初始X座標（生成在鏡頭右側）
            y: type.isFlying ? (Math.random() * (WORLD_HEIGHT - 200) + 50) : (Math.random() * (WORLD_HEIGHT - 100) + 50), // 初始Y座標
            width: 35, // 寬度（稍後根據型別覆蓋）
            height: 35, // 高度（稍後根據型別覆蓋）
            speed: type.speed, // 移動速度
            health: hp, // 當前血量
            maxHealth: hp, // 最大血量
            score: type.score, // 擊殺得分
            color: type.color, // 顏色
            behavior: type.behavior, // 行為函數
            onGround: false, // 是否在地面上
            vy: 0, // 垂直速度
            shootCooldown: (type === ENEMY_TYPES.GROUND_PINK) ? 50 : 0, // 粉色小兵第一發延遲50偵，其餘為0
            shootDelay: type.shootDelay || 0, // 射擊間隔
            isFlying: type.isFlying, // 是否為飛行敵人
            eye: type.eye, // 眼睛樣式
            _id: Math.random() * 1000000 | 0, // 唯一ID（飄浮用）
            dying: false, // 是否進入死亡閃爍
            dyingFrame: 0 // 死亡閃爍計數
        };
        // FLY_RED 初始化動畫屬性
        if (type === ENEMY_TYPES.FLY_RED) {
            enemy._animFrame = 0;
            enemy._imgIndex = 0;
            enemy.width = FLY_RED_size[0];
            enemy.height = FLY_RED_size[1];
        }
        if (type === ENEMY_TYPES.FLY_ORANGE) {
            enemy._animFrame = 0;
            enemy._imgIndex = 0;
            enemy.width = FLY_ORANGE_size[0];
            enemy.height = FLY_ORANGE_size[1];
        }
        if (type === ENEMY_TYPES.GROUND_RED) {
            enemy._animFrame = 0;
            enemy._imgIndex = 0;
            enemy.width = GROUND_RED_size[0];
            enemy.height = GROUND_RED_size[1];
        }
        if (type === ENEMY_TYPES.GROUND_ORANGE) {
            enemy._animFrame = 0;
            enemy._imgIndex = 0;
            enemy.width = GROUND_ORANGE_size[0];
            enemy.height = GROUND_ORANGE_size[1];
        }
        if (type === ENEMY_TYPES.GROUND_PINK) {
            enemy._animFrame = 0;
            enemy._imgIndex = 0;
            enemy.width = GROUND_PINK_size[0];
            enemy.height = GROUND_PINK_size[1];
        }
        enemies.push(enemy);
    }
    
    // 更新敵人
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        if (enemy.isFloating) {
            // 飄浮小兵：上下飄動，不受重力與平台影響
            if (!enemy.floatBaseY) enemy.floatBaseY = enemy.y;
            enemy.y = enemy.floatBaseY + Math.sin(Date.now() / 400 + i) * 40;
            enemy.x -= enemy.speed;
        } else {
            // 原本地面小兵
            enemy.vy += GRAVITY;
            let newY = enemy.y + enemy.vy;
            enemy.onGround = false;
            for (let p of platforms) {
                const overlapX = enemy.x + enemy.width > p.x && enemy.x < p.x + p.width;
                if (overlapX && enemy.y + enemy.height <= p.y && newY + enemy.height >= p.y) {
                    newY = p.y - enemy.height;
                    enemy.vy = 0;
                    enemy.onGround = true;
                }
            }
            enemy.y = newY;
            enemy.behavior(enemy);
        }
        // 更新敵人閃爍狀態
        if (enemyHitFlash.has(enemy)) {
            let frame = enemyHitFlash.get(enemy);
            frame--;
            if (frame <= 0) {
                enemyHitFlash.delete(enemy);
            } else {
                enemyHitFlash.set(enemy, frame);
            }
        }
        // 移除屏幕外的敵人
        if (enemy.x < camera.x - 100 || enemy.x > camera.x + camera.width + 100) {
            enemies.splice(i, 1);
            continue;
        }
        // 檢測玩家碰撞
        if (checkCollision(player, enemy)) {
            if (enemy.health > 0) {
                player.takeDamage(10);
            }
            // 小兵不會因碰撞玩家而消失
            continue;
        }
        // 在敵人更新時，處理死亡閃爍與自動消失
        if (enemy.dying) {
            enemy.dyingFrame++;
            // 閃爍兩下（12幀，約0.2秒）後自動消失
            if (enemy.dyingFrame >= 12) {
                enemies.splice(i, 1);
                score += enemy.score;
                updateScore();
                continue;
            }
        }
    }
    
    // 更新Boss
    if (bossActive) {
        boss.update();
        
        // 檢測玩家碰撞
        if (checkCollision(player, boss)) {
            player.takeDamage(15);
        }
    }
    
    // 更新子彈
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        bullet.x += bullet.speed;
        
        // 移除屏幕外的子彈
        if (bullet.x < camera.x - 50 || bullet.x > camera.x + camera.width + 50) {
            bullets.splice(i, 1);
            continue;
        }
        
        // 檢測敵人碰撞
        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j];
            if (checkCollision(bullet, enemy)) {
                if (bullet.isCharge) {
                    enemy.health -= weaponPower * 5; // 集氣彈攻擊力5倍
                } else {
                    enemy.health -= weaponPower * 1; // 普通子彈攻擊力
                }
                enemyHitFlash.set(enemy, 12); // 0.2秒閃爍
                // 播放boom音效（集氣彈也有）
                const boomAudio = document.getElementById('boom-audio');
                if (boomAudio) {
                    const clone = boomAudio.cloneNode();
                    clone.volume = VOLUME_BOOM;
                    if (isSfxOn) clone.play();
                }
                if (enemy.health <= 0 && !enemy.dying) {
                    enemy.dying = true;
                    enemy.dyingFrame = 0;
                }
                bullets.splice(i, 1);
                break;
            }
        }
        
        // 檢測Boss碰撞
        if (bossActive && checkCollision(bullet, boss)) {
            if (bullet.isCharge) {
                boss.health -= weaponPower * 3; // 集氣彈攻擊力3倍
                boss.pauseTimer = 5; // 暫停10偵
                boss.lastHitCharge = true; // 集氣彈
            } else {
                boss.health -= weaponPower; // 普通子彈攻擊力
                boss.lastHitCharge = false; // 記錄這次不是集氣彈
            }
            bossHitFlash = 12; // 0.2秒閃爍
            updateBossHealthBar();
            if (boss.health > 0) {
                const boomAudio = document.getElementById('boom-audio');
                if (boomAudio) {
                    boomAudio.currentTime = 0;
                    boomAudio.volume = VOLUME_BOOM;
                    if (isSfxOn) boomAudio.play();
                }
            }
            bullets.splice(i, 1);
            score += bullet.isCharge ? 100 : 20;
            updateScore();
            if (boss.health <= 0) {
                boss.health = 0;
                updateBossHealthBar();
                bossActive = false;
                bossDefeated = true;
                gameRunning = false;
                enemyBullets.length = 0; // Boss死亡時清空所有敵方子彈
                // 停止BGM
                if (bgm) {
                    bgm.pause();
                    bgm.currentTime = 0;
                }
                if (bgm2) {
                    bgm2.pause();
                    bgm2.currentTime = 0;
                }
                // 播放bossdie音效
                const bossdieAudio = document.getElementById('bossdie-audio');
                if (bossdieAudio) {
                    bossdieAudio.currentTime = 0;
                    bossdieAudio.volume = VOLUME_BOSSDIE;
                    if (isSfxOn) bossdieAudio.play();
                }
                // 1. 黃白閃爍2秒
                const flashDiv = document.getElementById('flash-effect');
                const winScreen = document.getElementById('win-screen');
                // ===== fakeBoss =====
                fakeBoss = {
                    x: boss.x,
                    y: boss.y,
                    width: boss.width,
                    height: boss.height,
                    color: boss.color
                };
                fakeBossFlashFrame = 0;
                setTimeout(() => { fakeBoss = null; }, 2000);
                // =========================
                if (flashDiv) {
                    flashDiv.style.display = 'block';
                    let flashFrame = 0;
                    flashDiv.style.opacity = 1;
                    const flashInterval = setInterval(() => {
                        flashDiv.style.background = (flashFrame % 2 === 0) ? 'rgba(255,255,0,0.7)' : 'rgba(255,255,255,0.7)';
                        flashFrame++;
                    }, 100);
                    setTimeout(() => {
                        clearInterval(flashInterval);
                        // 2. 3秒漸層變全白
                        let opacity = 0.7;
                        flashDiv.style.background = '#fff';
                        const fadeInStep = 0.0067; // 0.0067*20ms*150次 ≈ 1
                        const fadeIn = setInterval(() => {
                            opacity += fadeInStep;
                            flashDiv.style.opacity = opacity;
                            if (opacity >= 1) {
                                clearInterval(fadeIn);
                                // 3. 全白時播放outro並顯示勝利畫面，勝利畫面opacity=0
                                // 延遲120幀（約2秒）再顯示勝利畫面
                                setTimeout(() => {
                                    winGame();
                                    winScreen.style.opacity = 0;
                                    // 播放outro音樂
                                    const outroAudio = document.getElementById('outro-audio');
                                    if (outroAudio) {
                                        outroAudio.currentTime = 0;
                                        outroAudio.volume = VOLUME_OUTRO;
                                        if (isBgmOn) outroAudio.play();
                                    }
                                    // 4. 2秒內白色遮罩淡出、勝利畫面同步淡入
                                    let outOpacity = 1;
                                    let winOpacity = 0;
                                    const fadeOut = setInterval(() => {
                                        outOpacity -= 0.02;
                                        winOpacity += 0.02;
                                        flashDiv.style.opacity = outOpacity;
                                        winScreen.style.opacity = winOpacity;
                                        if (outOpacity <= 0) {
                                            clearInterval(fadeOut);
                                            flashDiv.style.display = 'none';
                                            winScreen.style.opacity = 1;
                                        }
                                    }, 20);
                                }, 90 * (1000 / MAX_FPS)); // 90幀延遲
                            }
                        }, 20);
                    }, 2000);
                } else {
                    setTimeout(() => {
                        setTimeout(() => { winGame(); }, 90 * (1000 / MAX_FPS)); // 90幀延遲
                    }, 3000);
                }
            }
        }
    }
    
    // 更新敵方子彈
    for (let i = enemyBullets.length - 1; i >= 0; i--) {
        const bullet = enemyBullets[i];
        bullet.x += bullet.speedX;
        bullet.y += bullet.speedY;
        
        // 移除屏幕外的子彈
        if (bullet.x < camera.x - 50 || bullet.x > camera.x + camera.width + 50 ||
            bullet.y < camera.y - 50 || bullet.y > camera.y + camera.height + 50) {
            enemyBullets.splice(i, 1);
            continue;
        }
        
        // 檢測玩家碰撞
        if (checkCollision(bullet, player)) {
            // 判斷是否為 Boss 子彈
            if (bullet.color === 'rgba(255,68,170,1)') {
                player.takeDamage(bossBulletPower); // Boss 子彈
            } else {
                player.takeDamage(5); // 其他敵人子彈
            }
            enemyBullets.splice(i, 1);
        }
    }
    
    // 在update()最後加上bossHitFlash遞減
    if (bossHitFlash > 0) bossHitFlash--;

    // 勝利畫面無敵狀態下，若玩家不在地圖外，強制歸位 (0,0)
    if (isWinInvincible) {
        if (!(player.x < 0 || player.x > WORLD_WIDTH || player.y < 0 || player.y > WORLD_HEIGHT)) {
            player.x = 0;
            player.y = 0;
        }
    }

    
    // ===== 新增背景顏色漸變判斷 =====
    let now_in_boss_area = (player.x >= BOSS_AREA_X);
    if (now_in_boss_area !== is_in_boss_area) {
        is_in_boss_area = now_in_boss_area;
        if (is_in_boss_area) {
            // 進入boss區
            target_area_colors = [
                boss_area_color1, boss_area_color2, boss_area_color3, boss_area_color4, boss_area_color5,
                boss_area_color6, boss_area_color7, boss_area_color8, boss_area_color9, boss_area_color10
            ];
            area_color_transition_total = enter_boss_area_color_change_time;
            // 流星雨參數目標設為boss
            meteor_params_target = {...boss_meteor_params};
            meteor_params_transition_total = enter_boss_area_meteor_change_time; // 這裡改用 meteor 變數
            // ===== 進入 boss 區切換 BGM =====
            if (isBgmOn) {
                if (bgm) { bgm.pause(); }
                if (bgm2) { bgm2.currentTime = 0; bgm2.volume = VOLUME_BGM2; bgm2.play(); }
            }
        } else {
            // 回到一般區
            target_area_colors = [
                normal_area_color1, normal_area_color2, normal_area_color3, normal_area_color4, normal_area_color5,
                normal_area_color6, normal_area_color7, normal_area_color8, normal_area_color9, normal_area_color10
            ];
            area_color_transition_total = enter_normal_area_color_change_time;
            // 流星雨參數目標設為normal
            meteor_params_target = {...normal_meteor_params};
            meteor_params_transition_total = enter_normal_area_meteor_change_time; // 這裡改用 meteor 變數
            // ===== 離開 boss 區切回 BGM =====
            // 這裡移除BGM切換，不做任何事
        }
        area_color_transition_frame = 0;
        meteor_params_transition_frame = 0;
    }
    updateAreaColors();
    // ===== 流星雨參數漸變 =====
    if (meteor_params_transition_total > 0 && meteor_params_transition_frame < meteor_params_transition_total) {
        meteor_params_transition_frame++;
        let t = meteor_params_transition_frame / meteor_params_transition_total;
        // 只對數值型做lerp，陣列型分別lerp
        meteor_params.speed = meteor_params.speed + (meteor_params_target.speed - meteor_params.speed) * t;
        meteor_params.update_random = meteor_params.update_random + (meteor_params_target.update_random - meteor_params.update_random) * t;
        meteor_params.update_interval = meteor_params.update_interval + (meteor_params_target.update_interval - meteor_params.update_interval) * t;
        meteor_params.size = [
            meteor_params.size[0] + (meteor_params_target.size[0] - meteor_params.size[0]) * t,
            meteor_params.size[1] + (meteor_params_target.size[1] - meteor_params.size[1]) * t
        ];
        meteor_params.stay_time = [
            meteor_params.stay_time[0] + (meteor_params_target.stay_time[0] - meteor_params.stay_time[0]) * t,
            meteor_params.stay_time[1] + (meteor_params_target.stay_time[1] - meteor_params.stay_time[1]) * t
        ];
        meteor_params.descent_angle = [
            meteor_params.descent_angle[0] + (meteor_params_target.descent_angle[0] - meteor_params.descent_angle[0]) * t,
            meteor_params.descent_angle[1] + (meteor_params_target.descent_angle[1] - meteor_params.descent_angle[1]) * t
        ];
        meteor_params.position = [
            meteor_params.position[0] + (meteor_params_target.position[0] - meteor_params.position[0]) * t,
            meteor_params.position[1] + (meteor_params_target.position[1] - meteor_params.position[1]) * t,
            meteor_params.position[2] + (meteor_params_target.position[2] - meteor_params.position[2]) * t,
            meteor_params.position[3] + (meteor_params_target.position[3] - meteor_params.position[3]) * t
        ];
        // 顏色只在最後切換
        if (meteor_params_transition_frame >= meteor_params_transition_total) {
            meteor_params.color = meteor_params_target.color;
        }
        // 實際參數同步
        meteor_color = meteor_params.color;
        meteor_size = meteor_params.size.slice();
        meteor_speed = meteor_params.speed;
        meteor_update_random = meteor_params.update_random;
        meteor_update_interval = Math.round(meteor_params.update_interval);
        meteor_stay_time = [
            Math.round(meteor_params.stay_time[0]),
            Math.round(meteor_params.stay_time[1])
        ];
        meteor_descent_angle = [
            meteor_params.descent_angle[0],
            meteor_params.descent_angle[1]
        ];
        meteor_position = [
            meteor_params.position[0],
            meteor_params.position[1],
            meteor_params.position[2],
            meteor_params.position[3]
        ];
    }

    // ===== 流星雨生成與更新 =====
    meteor_update_counter++;
    if (meteor_update_counter >= meteor_update_interval) {
        meteor_update_counter = 0;
        // 新增：用 meteor_update_random 決定是否產生流星
        if (Math.random() < meteor_update_random) {
            let angle = (meteor_descent_angle[0] + Math.random() * (meteor_descent_angle[1] - meteor_descent_angle[0])) * Math.PI / 180;
            let x = camera.x + meteor_position[0] + Math.random() * (meteor_position[1] - meteor_position[0]);
            let y = meteor_position[2] + Math.random() * (meteor_position[3] - meteor_position[2]);
            let stay = meteor_stay_time[0] + Math.random() * (meteor_stay_time[1] - meteor_stay_time[0]);
            meteors.push({
                x, y,
                angle,
                speed: meteor_speed / MAX_FPS, // 每幀移動量
                size: meteor_size,
                color: meteor_color,
                stay,
                alpha: 0,         // 新增：初始透明度
                fadeIn: true      // 新增：淡入階段
            });
        }
    }
    for (let i = meteors.length - 1; i >= 0; i--) {
        let m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.stay--;
        // ====== 流星淡入淡出效果 ======
        if (m.fadeIn) {
            m.alpha += 0.08;
            if (m.alpha >= 0.85) {
                m.alpha = 0.85;
                m.fadeIn = false;
            }
        }
        if (m.stay < 10) {
            m.alpha -= 0.09;
            if (m.alpha < 0) m.alpha = 0;
        }
        if (m.x < camera.x - 100 || m.x > camera.x + camera.width + 100 || m.y > WORLD_HEIGHT + 100 || m.stay <= 0) {
            meteors.splice(i, 1);
        }
    }
}

// ===== 渲染遊戲 =====
// 負責繪製所有畫面元素（背景、平台、玩家、敵人、子彈、Boss、UI等）
// 無參數，無回傳值
function render() {
    let bossBgTransition = 0;
    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 保存當前狀態
    ctx.save();
    
    // 應用鏡頭變換
    ctx.translate(-camera.x, -camera.y);
    
    // // === 只繪製全黑背景 ===
    // ctx.fillStyle = '#000';
    
    // === 漸層背景 ===
    let grad = ctx.createLinearGradient(0, 0, 0, WORLD_HEIGHT);
    for (let i = 0; i < 10; i++) {
        grad.addColorStop(i / 9, current_area_colors[i]);
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
    
    // 繪製星星
    if (showStar) {
        ctx.fillStyle = '#fff';
        for (let i = 0; i < 100; i++) {
            const x = (i * 24 + (camera.x / 2)) % WORLD_WIDTH;
            const y = (i * 19 + (camera.y / 2)) % WORLD_HEIGHT;
            const size = 1 + (i % 3);
            ctx.fillRect(x, y, size, size);
        }
    }
    
    
    
    // 繪製平台
    platforms.forEach(platform => {
        if (platform.color === COLOR_PLATFORM_NORMAL) {
            ctx.drawImage(floorImg, platform.x, platform.y, 50, 50);
        } else if (platform.color === COLOR_PLATFORM_BOSS) {
            ctx.drawImage(floorBossImg, platform.x, platform.y, 50, 50);
        } else {
            ctx.fillStyle = platform.color;
            ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        }
    });

    // ===== 繪製流星雨（在背景和人物之間）=====
    if (showMeteor) {
        meteors.forEach(m => {
            ctx.save();
            ctx.globalAlpha = m.alpha !== undefined ? m.alpha : 0.85;
            ctx.fillStyle = m.color;
            ctx.translate(m.x, m.y);
            // 畫圓形流星
            ctx.beginPath();
            ctx.arc(0, 0, Math.max(m.size[0], m.size[1]) / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
    }
    
    // 繪製玩家 (無敵時閃爍)
    if (!playerDead) { // 死亡時不繪製
        // ===== 蓄氣特效：長按空白鍵0.2秒以上才顯示 =====
        if (charging && chargeFrame >= CHARGE_CANCEL_FRAME) {
            ctx.save();
            // 閃爍透明度
            let alpha = 0.25 + 0.25 * Math.abs(Math.sin(Date.now() / 120));
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            // 以玩家中心為圓心
            let cx = player.x + player.width / 2;
            let cy = player.y + player.height / 2;
            let rx = PLAYER_Charge_Attack_size[0] / 2;
            let ry = PLAYER_Charge_Attack_size[1] / 2;
            ctx.arc(cx, cy, Math.max(rx, ry), 0, Math.PI * 2);
            ctx.fillStyle = PLAYER_Charge_Attack_color;
            ctx.shadowColor = PLAYER_Charge_Attack_color;
            ctx.shadowBlur = 18;
            ctx.fill();
            ctx.restore();
        }
        if (isWinInvincible) {
            ctx.globalAlpha = 0.2;
        }
        // 狀態判斷
        let imgToDraw = playerImgs[0]; // 預設靜止
        let drawBase = true;
        // 左右移動動畫
        if (keys.ArrowLeft || keys.ArrowRight) {
            if (!window._playerMoveAnimFrame) window._playerMoveAnimFrame = 0;
            window._playerMoveAnimFrame++;
            if (Math.floor(window._playerMoveAnimFrame / 8) % 2 === 0) {
                imgToDraw = playerImgs[0];
            } else {
                imgToDraw = playerImgs[1];
            }
        } else {
            window._playerMoveAnimFrame = 0;
        }
        // 發射時底層圖隱藏
        if (player.shootAnimFrame > 0) {
            drawBase = false;
        }
        // 畫底層圖（只有非發射時）
        if (drawBase && (player.invincible <= 0 || Math.floor(player.invincible / 5) % 2 === 0)) {
            ctx.save();
            if (AutoFlipPlayer === 1 && player.direction === -1) {
                ctx.translate(player.x + PLAYER_size[0] / 2, player.y + PLAYER_size[1] / 2);
                ctx.scale(-1, 1);
                ctx.drawImage(
                    imgToDraw,
                    -(PLAYER_size[0] / 2),
                    -(PLAYER_size[1] / 2),
                    PLAYER_size[0],
                    PLAYER_size[1]
                );
            } else {
                ctx.drawImage(
                    imgToDraw,
                    player.x,
                    player.y,
                    PLAYER_size[0],
                    PLAYER_size[1]
                );
            }
            ctx.restore();
        }
        // 發射時額外疊一張 shoot 圖
        if (player.shootAnimFrame > 0 && (player.invincible <= 0 || Math.floor(player.invincible / 5) % 2 === 0)) {
            ctx.save();
            if (AutoFlipPlayer === 1 && player.direction === -1) {
                ctx.translate(player.x + PLAYER_size[0] / 2, player.y + PLAYER_size[1] / 2);
                ctx.scale(-1, 1);
                ctx.drawImage(
                    playerImgs[2],
                    -(PLAYER_SHOOT_size[0] / 2),
                    -(PLAYER_SHOOT_size[1] / 2),
                    PLAYER_SHOOT_size[0],
                    PLAYER_SHOOT_size[1]
                );
            } else {
                ctx.drawImage(
                    playerImgs[2],
                    player.x + (PLAYER_size[0] - PLAYER_SHOOT_size[0]) / 2,
                    player.y + (PLAYER_size[1] - PLAYER_SHOOT_size[1]),
                    PLAYER_SHOOT_size[0],
                    PLAYER_SHOOT_size[1]
                );
            }
            ctx.restore();
        }
        ctx.globalAlpha = 1;
        // 發射動畫幀數遞減
        if (player.shootAnimFrame > 0) player.shootAnimFrame--;
        // ===== 玩家碰撞箱顯示 =====
        if (ShowCollisionBox == 1) {
            // 以玩家圖片中心為原點，支援 NX/NY 百分比移動
            const playerCenterX = player.x + PLAYER_size[0] * (playerCollisionBoxNX / 100);
            const playerCenterY = player.y + PLAYER_size[1] * (playerCollisionBoxNY / 100);
            const boxX1 = playerCenterX - playerCollisionBox[0] / 2;
            const boxX2 = playerCenterX + playerCollisionBox[0] / 2;
            const boxY1 = playerCenterY - playerCollisionBox[1] / 2;
            const boxY2 = playerCenterY + playerCollisionBox[1] / 2;
            const ellipseRx = playerCollisionBox[0] / 2;
            const ellipseRy = playerCollisionBox[1] / 2;
            if (playerCollisionBoxCircle < 1) {
                ctx.save();
                ctx.globalAlpha = 0.35;
                ctx.fillStyle = '#00ff00';
                ctx.beginPath();
                ctx.ellipse(playerCenterX, playerCenterY, ellipseRx, ellipseRy, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            if (playerCollisionBoxCircle > 0) {
                ctx.save();
                ctx.globalAlpha = 0.18;
                ctx.fillStyle = '#00ff00';
                ctx.fillRect(boxX1, boxY1, boxX2 - boxX1, boxY2 - boxY1);
                ctx.restore();
            }
        }
    }
    
    // 繪製子彈
    bullets.forEach(bullet => {
        ctx.fillStyle = bullet.color;
        if (bullet.isCharge) {
            ctx.save();
            ctx.shadowColor = PLAYER_Charge_Attack_shoot_color;
            ctx.shadowBlur = 20;
            // 集氣彈：上下窄的橢圓
            ctx.beginPath();
            ctx.ellipse(
                bullet.x + bullet.width / 2,
                bullet.y + bullet.height / 2,
                bullet.width / 2,
                bullet.height / 1.5,
                0, 0, Math.PI * 2
            );
            ctx.fill();
            ctx.restore();
        } else {
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        }
    });
    
    // 繪製敵人
    enemies.forEach(enemy => {
        // 閃爍效果
        if (enemyHitFlash.has(enemy)) {
            if (Math.floor(Date.now() / 50) % 2 === 0) {
                ctx.globalAlpha = 0.3;
            } else {
                ctx.globalAlpha = 1;
            }
        }
        if (enemy.isFlying) {
            // FLY_RED 用圖片動畫
            if (enemy.behavior === ENEMY_TYPES.FLY_RED.behavior) {
                const idx = enemy._imgIndex || 0;
                ctx.drawImage(flyRedImgs[idx], enemy.x, enemy.y, enemy.width, enemy.height);
            } else if (enemy.behavior === ENEMY_TYPES.FLY_ORANGE.behavior) {
                const idx = enemy._imgIndex || 0;
                ctx.drawImage(flyOrangeImgs[idx], enemy.x, enemy.y, enemy.width, enemy.height);
            } else {
                // 其他飛行敵人維持原本畫圓
                ctx.save();
                ctx.beginPath();
                ctx.ellipse(enemy.x + enemy.width/2, enemy.y + enemy.height/2, enemy.width/2, enemy.height/2, 0, 0, Math.PI*2);
                ctx.fillStyle = enemy.color;
                ctx.fill();
                // 眼睛
                ctx.beginPath();
                ctx.arc(enemy.x + enemy.width*0.75, enemy.y + enemy.height/2, enemy.width/8, 0, Math.PI*2);
                ctx.fillStyle = 'rgba(255,255,255,1)';
                ctx.fill();
                ctx.restore();
            }
        } else {
            // GROUND_RED
            if (enemy.behavior === ENEMY_TYPES.GROUND_RED.behavior) {
                const idx = enemy._imgIndex || 0;
                ctx.drawImage(groundRedImgs[idx], enemy.x, enemy.y, enemy.width, enemy.height);
            }
            // GROUND_ORANGE
            else if (enemy.behavior === ENEMY_TYPES.GROUND_ORANGE.behavior) {
                const idx = enemy._imgIndex || 0;
                ctx.drawImage(groundOrangeImgs[idx], enemy.x, enemy.y, enemy.width, enemy.height);
            }
            // GROUND_PINK
            else if (enemy.behavior === ENEMY_TYPES.GROUND_PINK.behavior) {
                const idx = enemy._imgIndex || 0;
                ctx.drawImage(groundPinkImgs[idx], enemy.x, enemy.y, enemy.width, enemy.height);
            }
            else {
                // 其他地面敵人維持原本半圓
                ctx.save();
                ctx.beginPath();
                ctx.arc(enemy.x + enemy.width/2, enemy.y + enemy.height, enemy.width/2, Math.PI, 0, false);
                ctx.lineTo(enemy.x + enemy.width, enemy.y + enemy.height);
                ctx.lineTo(enemy.x, enemy.y + enemy.height);
                ctx.closePath();
                ctx.fillStyle = enemy.color;
                ctx.fill();
                // 眼睛（左前方）
                ctx.beginPath();
                ctx.arc(enemy.x + enemy.width*0.25, enemy.y + enemy.height*0.75, enemy.width/8, 0, Math.PI*2);
                ctx.fillStyle = 'rgba(255,255,255,1)';
                ctx.fill();
                ctx.restore();
            }
        }
        ctx.globalAlpha = 1;
        // 在 render() 繪製敵人時，若 enemy.dying，根據 dyingFrame 閃爍
        if (enemy.dying) {
            if (Math.floor(enemy.dyingFrame / 6) % 2 === 0) {
                ctx.globalAlpha = 0.3;
            } else {
                ctx.globalAlpha = 1;
            }
        }
        // ====== 新增碰撞箱顯示 ======
        // 依據敵人類型選擇對應參數
        let boxX = 0, boxY = 0, boxNX = 50, boxNY = 50, boxCircle = 0.4;
        if (enemy.behavior === ENEMY_TYPES.FLY_RED.behavior) {
            boxX = FLY_RED_CollisionBox[0];
            boxY = FLY_RED_CollisionBox[1];
            boxNX = FLY_RED_CollisionBoxNX;
            boxNY = FLY_RED_CollisionBoxNY;
            boxCircle = FLY_RED_CollisionBoxCircle;
        } else if (enemy.behavior === ENEMY_TYPES.FLY_ORANGE.behavior) {
            boxX = FLY_ORANGE_CollisionBox[0];
            boxY = FLY_ORANGE_CollisionBox[1];
            boxNX = FLY_ORANGE_CollisionBoxNX;
            boxNY = FLY_ORANGE_CollisionBoxNY;
            boxCircle = FLY_ORANGE_CollisionBoxCircle;
        } else if (enemy.behavior === ENEMY_TYPES.GROUND_RED.behavior) {
            boxX = GROUND_RED_CollisionBox[0];
            boxY = GROUND_RED_CollisionBox[1];
            boxNX = GROUND_RED_CollisionBoxNX;
            boxNY = GROUND_RED_CollisionBoxNY;
            boxCircle = GROUND_RED_CollisionBoxCircle;
        } else if (enemy.behavior === ENEMY_TYPES.GROUND_ORANGE.behavior) {
            boxX = GROUND_ORANGE_CollisionBox[0];
            boxY = GROUND_ORANGE_CollisionBox[1];
            boxNX = GROUND_ORANGE_CollisionBoxNX;
            boxNY = GROUND_ORANGE_CollisionBoxNY;
            boxCircle = GROUND_ORANGE_CollisionBoxCircle;
        } else if (enemy.behavior === ENEMY_TYPES.GROUND_PINK.behavior) {
            boxX = GROUND_PINK_CollisionBox[0];
            boxY = GROUND_PINK_CollisionBox[1];
            boxNX = GROUND_PINK_CollisionBoxNX;
            boxNY = GROUND_PINK_CollisionBoxNY;
            boxCircle = GROUND_PINK_CollisionBoxCircle;
        }
        if (ShowCollisionBox == 1) {
            // 算出中心
            const centerX = enemy.x + enemy.width * (boxNX / 100);
            const centerY = enemy.y + enemy.height * (boxNY / 100);
            const ellipseRx = boxX / 2;
            const ellipseRy = boxY / 2;
            const boxX1 = centerX - boxX / 2;
            const boxY1 = centerY - boxY / 2;
            // 依敵人類型決定碰撞箱顏色
            let collisionBoxColor = 'rgba(0, 145, 255, 0.7)'; // 預設藍色
            if (enemy.behavior === ENEMY_TYPES.FLY_RED.behavior) {
                collisionBoxColor = 'rgba(255,0,0,0.7)'; // 紅色
            } else if (enemy.behavior === ENEMY_TYPES.FLY_ORANGE.behavior) {
                collisionBoxColor = 'rgba(255,128,0,0.7)'; // 橘色
            } else if (enemy.behavior === ENEMY_TYPES.GROUND_RED.behavior) {
                collisionBoxColor = 'rgba(255,0,0,0.7)'; // 紅色
            } else if (enemy.behavior === ENEMY_TYPES.GROUND_ORANGE.behavior) {
                collisionBoxColor = 'rgba(255,128,0,0.7)'; // 橘色
            } else if (enemy.behavior === ENEMY_TYPES.GROUND_PINK.behavior) {
                collisionBoxColor = 'rgba(255,182,193,0.7)'; // 粉紅色
            }
            // 畫橢圓
            if (boxCircle < 1) {
                ctx.save();
                ctx.globalAlpha = 0.35;
                ctx.fillStyle = collisionBoxColor;
                ctx.beginPath();
                ctx.ellipse(centerX, centerY, ellipseRx, ellipseRy, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            // 畫矩形
            if (boxCircle > 0) {
                ctx.save();
                ctx.globalAlpha = 0.18;
                ctx.fillStyle = collisionBoxColor;
                ctx.fillRect(boxX1, boxY1, boxX, boxY);
                ctx.restore();
            }
        }
    });
    
    // 繪製Boss
    if (bossActive && !isWinScreen) {
        // 只顯示 Boss 圖片，不再顯示碰撞箱遮罩
        if (bossHitFlash > 0) {
            if (boss.lastHitCharge) {
                ctx.globalAlpha = 1;
                ctx.save();
                if (Math.floor(Date.now() / 50) % 2 === 0) {
                    ctx.filter = 'brightness(1.5) sepia(1) hue-rotate(60deg)';
                } else {
                    ctx.filter = 'brightness(2)';
                }
            } else {
                if (Math.floor(Date.now() / 50) % 2 === 0) {
                    ctx.globalAlpha = 0.3;
                } else {
                    ctx.globalAlpha = 1;
                }
            }
        }
        let drawImg = bossImgs[boss.imgIndex || 0];
        ctx.drawImage(drawImg, boss.x, boss.y, boss.width, boss.height);
        ctx.globalAlpha = 1;
        if (bossHitFlash > 0 && boss.lastHitCharge) {
            ctx.restore();
        }
        ctx.globalAlpha = 1;
        // ===== Boss 碰撞箱顯示 =====
        if (ShowCollisionBox == 1 && bossActive && !isWinScreen) {
            // 算出中心
            const centerX = boss.x + boss.width * (bossCollisionBoxNX / 100);
            const centerY = boss.y + boss.height * (bossCollisionBoxNY / 100);
            const boxW = bossCollisionBox[0];
            const boxH = bossCollisionBox[1];
            const ellipseRx = boxW / 2;
            const ellipseRy = boxH / 2;
            const boxX1 = centerX - boxW / 2;
            const boxY1 = centerY - boxH / 2;
            // 顏色
            const collisionBoxColor = 'rgba(255,255,0,0.7)';
            // 畫橢圓
            if (bossCollisionBoxCircle < 1) {
                ctx.save();
                ctx.globalAlpha = 0.35;
                ctx.fillStyle = collisionBoxColor;
                ctx.beginPath();
                ctx.ellipse(centerX, centerY, ellipseRx, ellipseRy, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            // 畫矩形
            if (bossCollisionBoxCircle > 0) {
                ctx.save();
                ctx.globalAlpha = 0.18;
                ctx.fillStyle = collisionBoxColor;
                ctx.fillRect(boxX1, boxY1, boxW, boxH);
                ctx.restore();
            }
        }
    }
    // ===== fakeBoss 閃爍效果 =====
    if (fakeBoss) {
        fakeBossFlashFrame++;
        let drawImg = bossImgs[0];
        if (fakeBoss.imgIndex !== undefined) drawImg = bossImgs[fakeBoss.imgIndex];
        ctx.save();
        if (Math.floor(fakeBossFlashFrame / 6) % 2 === 0) {
            ctx.globalAlpha = 1;
        } else {
            ctx.globalAlpha = 0.2;
        }
        // 改為 190x190 並修正中心對齊
        ctx.drawImage(
            drawImg,
            fakeBoss.x + (fakeBoss.width - 190) / 2,
            fakeBoss.y + (fakeBoss.height - 190) / 2,
            190,
            190
        );
        ctx.restore();
    }
    
    // 繪製敵方子彈
    enemyBullets.forEach(bullet => {
        // Boss子彈（tornado）
        if (bullet.color === 'rgba(255,68,170,1)') {
            const tornadoImg = document.getElementById('tornado-img');
            if (tornadoImg && tornadoImg.complete) {
                ctx.save();
                // 旋轉方向
                const angle = Math.atan2(bullet.speedY, bullet.speedX);
                ctx.translate(bullet.x + 3.4125, bullet.y + 13.65); // 6.825x27.3中心
                ctx.rotate(angle + Math.PI);
                ctx.drawImage(tornadoImg, -5, -5, 30, 30); //龍捲風尺寸
                ctx.restore();
            } else {
                ctx.fillStyle = bullet.color;
                ctx.fillRect(bullet.x, bullet.y, 10, 20);
            }
        } else {
            ctx.fillStyle = bullet.color;
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        }
    });
    
    // 恢復狀態
    ctx.restore();
    
    // 繪製UI
    updateHealthBar();
    updateBossHealthBar();
    updateScore();
    
    // 調試信息
    cameraDebugElement.textContent = `moved: (${Math.floor(camera.x)})`;
    cameraDebugElement.style.display = showMoved == 1 ? 'block' : 'none';
}

// ===== 工具函數 =====
function getCollisionBoxParams(obj) {
    // 玩家
    if (obj === player) {
        return {
            box: playerCollisionBox,
            nx: playerCollisionBoxNX,
            ny: playerCollisionBoxNY,
            circle: playerCollisionBoxCircle
        };
    }
    // Boss
    if (obj === boss) {
        return {
            box: bossCollisionBox,
            nx: bossCollisionBoxNX,
            ny: bossCollisionBoxNY,
            circle: bossCollisionBoxCircle
        };
    }
    // 敵人
    if (obj.behavior === ENEMY_TYPES.FLY_RED.behavior) {
        return { box: FLY_RED_CollisionBox, nx: FLY_RED_CollisionBoxNX, ny: FLY_RED_CollisionBoxNY, circle: FLY_RED_CollisionBoxCircle };
    }
    if (obj.behavior === ENEMY_TYPES.FLY_ORANGE.behavior) {
        return { box: FLY_ORANGE_CollisionBox, nx: FLY_ORANGE_CollisionBoxNX, ny: FLY_ORANGE_CollisionBoxNY, circle: FLY_ORANGE_CollisionBoxCircle };
    }
    if (obj.behavior === ENEMY_TYPES.GROUND_RED.behavior) {
        return { box: GROUND_RED_CollisionBox, nx: GROUND_RED_CollisionBoxNX, ny: GROUND_RED_CollisionBoxNY, circle: GROUND_RED_CollisionBoxCircle };
    }
    if (obj.behavior === ENEMY_TYPES.GROUND_ORANGE.behavior) {
        return { box: GROUND_ORANGE_CollisionBox, nx: GROUND_ORANGE_CollisionBoxNX, ny: GROUND_ORANGE_CollisionBoxNY, circle: GROUND_ORANGE_CollisionBoxCircle };
    }
    if (obj.behavior === ENEMY_TYPES.GROUND_PINK.behavior) {
        return { box: GROUND_PINK_CollisionBox, nx: GROUND_PINK_CollisionBoxNX, ny: GROUND_PINK_CollisionBoxNY, circle: GROUND_PINK_CollisionBoxCircle };
    }
    // 其他物件（如子彈）直接用自身 x, y, width, height
    return null;
}

function checkCollision(a, b) {
    const aBox = getCollisionBoxParams(a);
    const bBox = getCollisionBoxParams(b);

    if (aBox && bBox) {
        // 算出中心
        const aCenterX = a.x + a.width * (aBox.nx / 100);
        const aCenterY = a.y + a.height * (aBox.ny / 100);
        const bCenterX = b.x + b.width * (bBox.nx / 100);
        const bCenterY = b.y + b.height * (bBox.ny / 100);
        // 橢圓碰撞
        const dx = aCenterX - bCenterX;
        const dy = aCenterY - bCenterY;
        const ellipseHit = ((dx * dx) / Math.pow((aBox.box[0] + bBox.box[0]) / 2 / 2, 2) +
                            (dy * dy) / Math.pow((aBox.box[1] + bBox.box[1]) / 2 / 2, 2)) <= 1;
        // 矩形碰撞
        const aX1 = aCenterX - aBox.box[0] / 2, aX2 = aCenterX + aBox.box[0] / 2;
        const aY1 = aCenterY - aBox.box[1] / 2, aY2 = aCenterY + aBox.box[1] / 2;
        const bX1 = bCenterX - bBox.box[0] / 2, bX2 = bCenterX + bBox.box[0] / 2;
        const bY1 = bCenterY - bBox.box[1] / 2, bY2 = bCenterY + bBox.box[1] / 2;
        const rectHit = !(aX2 < bX1 || aX1 > bX2 || aY2 < bY1 || aY1 > bY2);
        // 混合
        const mix = Math.max(aBox.circle, bBox.circle);
        if (mix <= 0) return ellipseHit;
        if (mix >= 1) return rectHit;
        return (ellipseHit && Math.random() > mix) || (rectHit && Math.random() < mix);
    }

    // 只要有一方沒自訂碰撞箱，維持原本矩形碰撞
    return a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y;
}

//更新玩家血條顯示
//無參數，無回傳值
function updateHealthBar() {
    const percent = (wa_player_to_Health_ki / playerMaxHealth) * 100;
    healthFill.style.width = `${percent}%`;
    if (percent <= 20) {
        healthFill.style.backgroundColor = '#f44'; // 紅色
    } else {
        healthFill.style.backgroundColor = '#4af'; // 藍色
    }
}

//更新Boss血條顯示
//無參數，無回傳值
function updateBossHealthBar() {
    if (window.bossHpAnimating) return;
    const percent = (boss.health / boss.maxHealth) * 100;
    bossHealthFill.style.width = `${percent}%`;
}

//更新分數顯示
//無參數，無回傳值
function updateScore() {
    const scoreDiv = document.getElementById('score');
    if (scoreDiv) {
        scoreDiv.textContent = `score: ${score}`;
        scoreDiv.style.display = showScore == 1 ? 'block' : 'none';
    }
}

//處理遊戲結束（Game Over）畫面與音效
//無參數，無回傳值
function gameOver() {
    gameRunning = false;
    playerDeadX = player.x; // 記錄死亡時位置
    playerDeadY = player.y;
    playerDead = true; // 設為死亡狀態
    // 歸零 hp 並更新血條
    wa_player_to_Health_ki = 0;
    updateHealthBar();
    // 延遲顯示 game over 畫面
    setTimeout(function() {
        finalScoreElement.textContent = `score: ${score}`;
        gameOverScreen.style.display = 'flex';
        langToggle.style.display = 'block';
        langSelect.style.display = 'none';
        // 停止BGM並播放Game Over音效
        if (bgm) {
            bgm.pause();
            bgm.currentTime = 0;
        }
        if (bgm2) {
            bgm2.pause();
            bgm2.currentTime = 0;
        }
        const gameOverAudio = document.getElementById('game-over-audio');
        if (gameOverAudio) {
            gameOverAudio.currentTime = 0;
            gameOverAudio.volume = VOLUME_GAMEOVER;
            if (isSfxOn) gameOverAudio.play();
        }
    }, 100); // 0.1秒後才顯示 game over 畫面
}

//處理勝利畫面與音效
//無參數，無回傳值
function winGame() {
    bossActive = false;
    // 將玩家移出畫面
    player.x = -1;
    player.y = -1;
    gameRunning = false;
    isWinInvincible = true;
    if (currentLang === 'zh') {
        winScoreElement.innerHTML = '<div style="font-size:80%">score: 分數高到無法計算</div>';
    } else if (currentLang === 'ja') {
        winScoreElement.innerHTML = '<div style="font-size:80%">score: 君のスコアは高すぎて計算できない。</div>';
    } else {
        winScoreElement.innerHTML = '<div style="font-size:80%">score: Your score is incalculably high.</div>';
    }
    winScreen.style.display = 'flex';
    langToggle.style.display = 'block';
    langSelect.style.display = 'none';
    // 停止 boss 區 BGM
    if (bgm2) {
        bgm2.pause();
        bgm2.currentTime = 0;
    }
    // 播放勝利音樂
    const outroAudio = document.getElementById('outro-audio');
    if (outroAudio) {
        outroAudio.currentTime = 0;
        outroAudio.volume = VOLUME_OUTRO;
        if (isBgmOn) outroAudio.play();
        // 確保onended事件設置
        outroAudio.onended = function() {
            setTimeout(() => {
                outroAudio.currentTime = 0;
                if (isBgmOn) outroAudio.play();
            }, 1000);
        };
    }
    winScoreElement.innerHTML = LANGUAGES[currentLang].winScore;
    playAgainButton.textContent = LANGUAGES[currentLang].playagain;
}

// ===== 語言資料 =====
const LANGUAGES = {
    zh: {
        title: '歐骷先漫',
        shoot: '空白鍵 射擊',
        move: ' ← → 移動',
        jump: ' ↑ 跳躍',
        start: 'START',
        gameover: '何回やっても　何回やっても　エアーまんが...',
        retry: '再trytry',
        win: '<div style="font-size:80%">命運試圖阻止你...</div><div style="font-size:80%">但你戰勝了！</div><div style="font-size:80%">請相信自己！</div><div style="font-size:80%">不管多大困難！你都能克服！</div>',
        winScore: '<div style="font-size:95%">SCORE: 無人能定義你的分數，那些看不見的努力，才是你最真實的實力!</div>',
        playagain: '你想再玩一次也是可以...',
        // Settings 多語言
        settings: {
            title: '設定選單',
            selectLang: '選擇語言',
            music: '音樂',
            sfx: '音效',
            startX: '起始 X',
            startY: '起始 Y',
            moveSpeed: '玩家移動速度',
            weaponPower: '武器攻擊力',
            maxFps: '最大 FPS',
            gravity: '重力',
            jumpPower: '跳躍力',
            enemyMaxCount: '敵人最大數量',
            bossBulletSpeed: 'Boss子彈速度',
            bossBulletPattern: 'Boss子彈模式：',
            bossPatternEasy: '簡單',
            bossPatternNormal: '普通',
            bossPatternHard: '困難',
            showScore: '分數',
            showMoved: '移動',
            showFps: 'FPS',
            showXy: '座標',
            showNxy: '區塊座標',
            showEntityCounts: '物件數量',
            showMobileTouch: '顯示手機觸控',
            autoFlipPlayer: '左右轉身',
            showCollisionBox: '碰撞箱',
            showStar: '顯示星星',
            showMeteor: '顯示流星',
            ok: '確定'
        }
    },
    ja: {
        title: 'オックセンマン',
        shoot: 'スペースキー ショット',
        move: ' ← → キー 移動',
        jump: '↑ キー ジャンプ',
        start: 'スタート',
        gameover: '何回やっても　何回やっても　エアーまんが...',
        retry: 'もう一度',
        win: '<div style="font-size:80%">運命は君を止めたが、</div><div style="font-size:80%">君が勝った！</div><div style="font-size:80%">自分を信じて！</div><div style="font-size:80%">どんな困難でも必ず乗り越えられる！</div>',
        winScore: '<div style="font-size:95%">SCORE: 君の価値を点数で決められるわけがない！</div>',
        playagain: 'もう一度遊びますか？',
        settings: {
            title: '設定メニュー',
            selectLang: '言語を選択',
            music: '音楽',
            sfx: '効果音',
            startX: '開始 X',
            startY: '開始 Y',
            moveSpeed: 'プレイヤー移動速度',
            weaponPower: '武器パワー',
            maxFps: '最大 FPS',
            gravity: '重力',
            jumpPower: 'ジャンプ力',
            enemyMaxCount: '敵最大数',
            bossBulletSpeed: 'ボス弾スピード',
            bossBulletPattern: 'ボス弾パターン：',
            bossPatternEasy: '簡単',
            bossPatternNormal: '普通',
            bossPatternHard: '難しい',
            showScore: 'スコア',
            showMoved: '移動',
            showFps: 'FPS',
            showXy: '座標',
            showNxy: 'ブロック座標',
            showEntityCounts: 'エンティティ数',
            showMobileTouch: 'モバイルタッチ表示',
            autoFlipPlayer: '左右反転',
            showCollisionBox: '当たり判定',
            showStar: '星を表示',
            showMeteor: '流星を表示',
            ok: 'OK'
        }
    },
    en: {
        title: 'Mega AI',
        shoot: 'Press SPACE to Shoot',
        move: 'Press ← → to Move',
        jump: 'Press ↑ to Jump',
        start: 'START',
        gameover: 'The Untouchable Airman',
        retry: 'Retry',
        win: '<div style="font-size:80%">Fate tried to stop you...</div><div style="font-size:80%">but you prevailed !</div><div style="font-size:80%">Believe in yourself !</div><div style="font-size:80%">And overcome any difficulty !</div>',
        winScore: '<div style="font-size:95%">SCORE: Scores are for tests. You\'re not a test-you\'re a force.</div>',
        playagain: 'Play again?',
        settings: {
            title: 'Settings',
            selectLang: 'Select Language',
            music: 'Music',
            sfx: 'Effects Sound',
            startX: 'Start X',
            startY: 'Start Y',
            moveSpeed: 'Player Move Speed',
            weaponPower: 'Weapon Power',
            maxFps: 'Max FPS',
            gravity: 'Gravity',
            jumpPower: 'Jump Power',
            enemyMaxCount: 'Enemy Max Count',
            bossBulletSpeed: 'Boss Bullet Speed',
            bossBulletPattern: 'Boss Bullet Pattern:',
            bossPatternEasy: 'Easy',
            bossPatternNormal: 'Normal',
            bossPatternHard: 'Hard',
            showScore: 'Score',
            showMoved: 'Move',
            showFps: 'FPS',
            showXy: 'Position',
            showNxy: 'Block Pos',
            showEntityCounts: 'Entity Count',
            showMobileTouch: 'Show Mobile Touch',
            autoFlipPlayer: 'Flip LR',
            showCollisionBox: 'Collision',
            showStar: 'Show Star',
            showMeteor: 'Show Meteor',
            ok: 'OK'
        }
    }
};
let currentLang = FirstLanguage; // 預設語言
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const L = LANGUAGES[lang];
    document.querySelector('#start-screen h1').textContent = L.title;
    document.querySelectorAll('#start-screen p')[0].textContent = L.shoot;
    document.querySelectorAll('#start-screen p')[1].textContent = L.move;
    document.querySelectorAll('#start-screen p')[2].textContent = L.jump;
    startButton.textContent = L.start;
    document.querySelector('#game-over-screen h1').textContent = L.gameover;
    restartButton.textContent = L.retry;
    document.querySelector('#win-screen h1').innerHTML = L.win;
    winScoreElement.innerHTML = L.winScore;
    playAgainButton.textContent = L.playagain;
}
// ===== 語言選擇UI =====
const langSelect = document.getElementById('language-select');
const langToggle = document.getElementById('lang-toggle');
langToggle.onclick = () => {
    langSelect.style.display = (langSelect.style.display === 'flex') ? 'none' : 'flex';
};
document.getElementById('lang-zh').onclick = () => { setLang('zh'); langSelect.style.display = 'none'; updateSettingsPanelLang(); };
document.getElementById('lang-ja').onclick = () => { setLang('ja'); langSelect.style.display = 'none'; updateSettingsPanelLang(); };
document.getElementById('lang-en').onclick = () => { setLang('en'); langSelect.style.display = 'none'; updateSettingsPanelLang(); };
// 預設語言
window.addEventListener('DOMContentLoaded', () => {
    setLang(currentLang);
    langSelect.style.display = 'none';
    langToggle.style.display = 'block';
    updateSettingsPanelLang();
});

// ===== 觸控操作模擬鍵盤 =====
/**
 * 觸控按鈕事件，模擬對應鍵盤事件
 * @param {string} btnId - 按鈕的DOM id
 * @param {string} key - 對應的鍵盤key值
 */
function addTouchBtnEvent(btnId, key) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    // wa觸to控ki
    btn.addEventListener('touchstart', e => { if (e.cancelable) e.preventDefault(); simulateKey(key, true); });
    btn.addEventListener('touchend',   e => { if (e.cancelable) e.preventDefault(); simulateKey(key, false); });
    // 滑鼠
    btn.addEventListener('mousedown',  e => { e.preventDefault(); simulateKey(key, true); });
    btn.addEventListener('mouseup',    e => { e.preventDefault(); simulateKey(key, false); });
    btn.addEventListener('mouseleave', e => { simulateKey(key, false); });
}
addTouchBtnEvent('btn-left',  'ArrowLeft');
addTouchBtnEvent('btn-right', 'ArrowRight');
addTouchBtnEvent('btn-jump',  'ArrowUp');
addTouchBtnEvent('btn-shoot', ' ');

/**
 * 根據視窗大小自動縮放遊戲畫面
 * 無參數，無回傳值
 */
function resizeGame() {
    const baseWidth = 800;
    const baseHeight = 500;
    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;
    const scale = Math.min(scaleX, scaleY);

    const wrapper = document.getElementById('game-wrapper');
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.transformOrigin = 'top left';
    wrapper.style.position = 'absolute';
    wrapper.style.left = `calc(50vw - ${(baseWidth * scale) / 2}px)`;
    wrapper.style.top = `calc(50vh - ${(baseHeight * scale) / 2}px)`;
    wrapper.style.width = baseWidth + 'px';
    wrapper.style.height = baseHeight + 'px';
}
window.addEventListener('resize', resizeGame);
window.addEventListener('DOMContentLoaded', resizeGame);

// ===== FPS 計算與顯示 =====
let lastFPSTime = performance.now();
let frameCount = 0;
let fps = 0;
/**
 * FPS計算與顯示，每秒更新一次
 * 無參數，無回傳值
 */
function updateFPS() {
    frameCount++;
    const now = performance.now();
    if (now - lastFPSTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        lastFPSTime = now;
        const fpsDiv = document.getElementById('fps-display');
        if (fpsDiv) {
            fpsDiv.textContent = `FPS: ${fps}`;
            fpsDiv.style.display = showFPS == 1 ? 'block' : 'none';
        }
    }
    // 每幀更新玩家座標
    const xy = document.getElementById('xy-display');
    if (xy) {
        xy.textContent = `X: ${Math.round(player.x)}, Y: ${Math.round(player.y)}`;
        xy.style.display = showXY == 1 ? 'block' : 'none';
    }
    // 每幀更新玩家格數座標
    const nxy = document.getElementById('nxy-display');
    if (nxy) {
        const nx = Math.floor(player.x / 50);
        const ny = Math.floor((500 - player.y) / 50);
        nxy.textContent = `NX: ${nx}, NY: ${ny}`;
        nxy.style.display = showNXY == 1 ? 'block' : 'none';
    }
    // 每幀更新數量資訊
    const entityCounts = document.getElementById('entity-counts');
    if (entityCounts) {
        const bossCount = bosses.filter(b => b && bossActive).length;
        entityCounts.textContent = `P: ${players.length}, PS: ${bullets.length}, E: ${enemies.length}, ES: ${enemyBullets.length}, B: ${bossCount}`;
        entityCounts.style.display = showEntityCounts == 1 ? 'block' : 'none';
    }
}

// ====== 設定面板 ======
// 1. 設定按鈕
const settingsBtn = document.createElement('div');
settingsBtn.id = 'settings-btn';
settingsBtn.style.position = 'absolute';
settingsBtn.style.right = '10px';
settingsBtn.style.bottom = '6px'; // 設定按鈕高度
settingsBtn.style.width = '45px';
settingsBtn.style.height = '45px';
settingsBtn.style.borderRadius = '50%';
settingsBtn.style.background = '#333a';
settingsBtn.style.color = '#fff';
settingsBtn.style.boxShadow = '0 2px 8px #0006';
settingsBtn.style.display = 'flex';
settingsBtn.style.alignItems = 'center';
settingsBtn.style.justifyContent = 'center';
settingsBtn.style.cursor = 'pointer';
settingsBtn.style.userSelect = 'none';
settingsBtn.style.zIndex = 1000;
settingsBtn.style.fontSize = '22px';
settingsBtn.innerHTML = '<img src="img/setting.png" alt="settings" style="width:70%;height:70%;object-fit:contain;display:block;margin:auto;">';
document.getElementById('game-wrapper').appendChild(settingsBtn);

// 2. 設定面板
const settingsPanel = document.createElement('div');
//write Liu_Watoki
settingsPanel.id = 'settings-panel';
settingsPanel.style.position = 'fixed';
settingsPanel.style.left = '50%';
settingsPanel.style.top = '50%';
settingsPanel.style.transform = 'translate(-50%, -50%)';
settingsPanel.style.background = '#222';
settingsPanel.style.color = '#fff';
settingsPanel.style.padding = '32px 32px 24px 32px';
settingsPanel.style.borderRadius = '16px';
settingsPanel.style.boxShadow = '0 4px 32px #000a';
settingsPanel.style.zIndex = 2000;
settingsPanel.style.display = 'none';
settingsPanel.style.minWidth = '320px';
settingsPanel.innerHTML = `

    <div style="height:20px;"></div>

    <h2 style="margin-top:0;margin-bottom:18px;font-size:22px;text-align:center;">Settings</h2>

    <div style="margin-bottom:16px; display: flex; align-items: center; position:relative;">
        <div id="settings-lang-label" style="font-size:14px;min-width:80px; margin-right: 8px;display:flex;align-items:center;height:20px;">
            選擇語言
        </div>
        <div id="custom-lang-select-wrapper" style="position:relative;display:flex;align-items:center;height:20px;">
            <button id="custom-lang-select-btn" style="font-size:14px;padding:2px 10px;border-radius:6px;background:#fff;color:#222;border:1px solid #888;min-width:60px;text-align:left;height:20px;display:flex;align-items:center;">中文 ▼</button>
            <ul id="custom-lang-select-list" style="display:none;position:absolute;top:110%;left:0;width:100%;background:#222;border-radius:8px;box-shadow:0 2px 12px #0008;z-index:9999;padding:0;margin:0;list-style:none;font-size:14px;">
                <li data-lang="zh" style="padding:6px 10px;cursor:pointer;color:#fff">中文</li>
                <li data-lang="ja" style="padding:6px 10px;cursor:pointer;color:#fff">日本語</li>
                <li data-lang="en" style="padding:6px 10px;cursor:pointer;color:#fff">English</li>
            </ul>
        </div>
    </div>

    <div style="margin-bottom:16px;">
        <label><input type="checkbox" id="setting-bgm-on"> Muisc</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-sfx-on"> Effects Sound</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-show-mobile-touch"> Show Mobile Touch</label>
    </div>

    <div style="margin-bottom:16px;">
        <label>Start X <input id="setting-start-x" type="number" min="0" max="5400" step="1" style="width:60px;"> </label>
        <label style="margin-left:16px;">Start Y <input id="setting-start-y" type="number" min="0" max="500" step="1" style="width:60px;"> </label>
    </div>

    <div style="margin-bottom:16px;">
        <label>Player Move Speed <input id="setting-move-speed" type="number" min="1" max="100" step="1" style="width:60px;"> </label>
    </div>

    <div style="margin-bottom:16px;">
        <label>Weapon Power <input id="setting-weapon-power" type="number" min="1" max="20" step="1" style="width:60px;"> </label>
    </div>

    <div style="margin-bottom:16px;">
        <label>Max FPS <input id="setting-max-fps" type="number" min="10" max="240" step="1" style="width:60px;"> </label>
    </div>

    <div style="margin-bottom:16px;">
        <label>Gravity <input id="setting-gravity" type="number" min="0.1" max="10" step="0.1" style="width:60px;"> </label>
    </div>

    <div style="margin-bottom:16px;">
        <label>Jump Power <input id="setting-jump-power" type="number" min="0.1" max="50" step="0.1" style="width:80px;"> </label>
    </div>

    <div style="margin-bottom:16px;">
        <label id="label-enemy-max-count">敵人最大數量 <input id="setting-enemy-max-count" type="number" min="1" max="50" step="1" style="width:80px;"></label>
    </div>

    <div style="margin-bottom:16px;">
        <label id="label-boss-bullet-speed">Boss子彈速度 <input id="setting-boss-bullet-speed" type="number" min="1" max="20" step="1" style="width:80px;"></label>
    </div>

    <div style="margin-bottom:16px;">
        <span id="label-boss-bullet-pattern">Boss子彈模式：</span>
        <label style="margin-left:8px;"><input type="radio" name="setting-boss-bullet-pattern" id="setting-boss-bullet-pattern-1" value="1"> <span id="label-boss-pattern-easy">簡單</span></label>
        <label style="margin-left:8px;"><input type="radio" name="setting-boss-bullet-pattern" id="setting-boss-bullet-pattern-2" value="2"> <span id="label-boss-pattern-normal">普通</span></label>
        <label style="margin-left:8px;"><input type="radio" name="setting-boss-bullet-pattern" id="setting-boss-bullet-pattern-3" value="3"> <span id="label-boss-pattern-hard">困難</span></label>
    </div>

    <div style="margin-bottom:16px;">
        <label><input type="checkbox" id="setting-show-score"> Show Score</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-show-moved"> Show Moved</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-show-fps"> Show FPS</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-show-xy"> Show XY</label>
    </div>

    <div style="margin-bottom:16px;">
        <label><input type="checkbox" id="setting-show-nxy"> Show NXY</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-show-entity-counts"> Show Entity Counts</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-show-collision-box"> 顯示碰撞箱</label>

        </div>

    <div style="margin-bottom:16px;">
        <label><input type="checkbox" id="setting-auto-flip-player"> 自動翻轉角色</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-show-star"> 顯示星星</label>
        <label style="margin-left:16px;"><input type="checkbox" id="setting-show-meteor"> 顯示流星</label>

    </div>


    <div style="text-align:center;margin-top:18px;">
        <button id="settings-close-btn" style="padding:6px 24px;font-size:16px;background:#4af;color:#fff;border:none;border-radius:6px;">OK</button>
    </div>

    <div style="height:40px;"></div>

`;
document.body.appendChild(settingsPanel);


// 3. 設定按鈕事件
settingsBtn.onclick = function() {
    // 只負責開啟設定面板與同步 UI，不做儲存、不做關閉
    var bgmOnInput = document.getElementById('setting-bgm-on');
    var sfxOnInput = document.getElementById('setting-sfx-on');
    var moveSpeedInput = document.getElementById('setting-move-speed');
    var weaponPowerInput = document.getElementById('setting-weapon-power');
    var maxFpsInput = document.getElementById('setting-max-fps');
    var gravityInput = document.getElementById('setting-gravity');
    var jumpPowerInput = document.getElementById('setting-jump-power');
    var enemyMaxCountInput = document.getElementById('setting-enemy-max-count');
    var bossBulletSpeedInput = document.getElementById('setting-boss-bullet-speed');
    var bossPattern1 = document.getElementById('setting-boss-bullet-pattern-1');
    var bossPattern2 = document.getElementById('setting-boss-bullet-pattern-2');
    var bossPattern3 = document.getElementById('setting-boss-bullet-pattern-3');
    var showScoreInput = document.getElementById('setting-show-score');
    var showMovedInput = document.getElementById('setting-show-moved');
    var showFpsInput = document.getElementById('setting-show-fps');
    var showXYInput = document.getElementById('setting-show-xy');
    var showNXYInput = document.getElementById('setting-show-nxy');
    var showEntityCountsInput = document.getElementById('setting-show-entity-counts');
    var showMobileTouchInput = document.getElementById('setting-show-mobile-touch');
    var startXInput = document.getElementById('setting-start-x');
    var startYInput = document.getElementById('setting-start-y');
    var AutoFlipPlayerInput = document.getElementById('setting-auto-flip-player');
    var showCollisionBoxInput = document.getElementById('setting-show-collision-box');
    // 同步 UI
    if (bgmOnInput) bgmOnInput.checked = !!isBgmOn;
    if (sfxOnInput) sfxOnInput.checked = !!isSfxOn;
    if (moveSpeedInput) moveSpeedInput.value = playerMoveSpeed;
    if (weaponPowerInput) weaponPowerInput.value = weaponPower;
    if (maxFpsInput) maxFpsInput.value = MAX_FPS;
    if (gravityInput) gravityInput.value = GRAVITY;
    if (jumpPowerInput) jumpPowerInput.value = JUMP_POWER;
    if (enemyMaxCountInput) enemyMaxCountInput.value = enemyMaxCount;
    if (bossBulletSpeedInput) bossBulletSpeedInput.value = bossBulletSpeed;
    if (bossPattern1) bossPattern1.checked = bossBulletPatternMode === 1;
    if (bossPattern2) bossPattern2.checked = bossBulletPatternMode === 2;
    if (bossPattern3) bossPattern3.checked = bossBulletPatternMode === 3;
    if (showScoreInput) showScoreInput.checked = !!showScore;
    if (showMovedInput) showMovedInput.checked = !!showMoved;
    if (showFpsInput) showFpsInput.checked = !!showFPS;
    if (showXYInput) showXYInput.checked = !!showXY;
    if (showNXYInput) showNXYInput.checked = !!showNXY;
    if (showEntityCountsInput) showEntityCountsInput.checked = !!showEntityCounts;
    if (showMobileTouchInput) showMobileTouchInput.checked = !!showMobileTouch;
    if (AutoFlipPlayerInput) AutoFlipPlayerInput.checked = !!AutoFlipPlayer;
    if (showCollisionBoxInput) showCollisionBoxInput.checked = !!ShowCollisionBox;
    settingsPanel.style.display = 'block';
    isPaused = true;
    if (startXInput) startXInput.value = playerStartX;
    if (startYInput) startYInput.value = playerStartY;
};
var settingsCloseBtn = document.getElementById('settings-close-btn');
if (settingsCloseBtn) {
    settingsCloseBtn.onclick = function() {
        var bgmOnInput = document.getElementById('setting-bgm-on');
        var sfxOnInput = document.getElementById('setting-sfx-on');
        var moveSpeedInput = document.getElementById('setting-move-speed');
        var weaponPowerInput = document.getElementById('setting-weapon-power');
        var maxFpsInput = document.getElementById('setting-max-fps');
        var gravityInput = document.getElementById('setting-gravity');
        var jumpPowerInput = document.getElementById('setting-jump-power');
        var enemyMaxCountInput = document.getElementById('setting-enemy-max-count');
        var bossBulletSpeedInput = document.getElementById('setting-boss-bullet-speed');
        var bossPattern1 = document.getElementById('setting-boss-bullet-pattern-1');
        var bossPattern2 = document.getElementById('setting-boss-bullet-pattern-2');
        var bossPattern3 = document.getElementById('setting-boss-bullet-pattern-3');
        var showScoreInput = document.getElementById('setting-show-score');
        var showMovedInput = document.getElementById('setting-show-moved');
        var showFpsInput = document.getElementById('setting-show-fps');
        var showXYInput = document.getElementById('setting-show-xy');
        var showNXYInput = document.getElementById('setting-show-nxy');
        var showEntityCountsInput = document.getElementById('setting-entity-counts');
        var showMobileTouchInput = document.getElementById('setting-show-mobile-touch');
        var startXInput = document.getElementById('setting-start-x');
        var startYInput = document.getElementById('setting-start-y');
        var AutoFlipPlayerInput = document.getElementById('setting-auto-flip-player');
        var showCollisionBoxInput = document.getElementById('setting-show-collision-box');
        // 儲存（同步變數）
        if (bgmOnInput) isBgmOn = bgmOnInput.checked ? 1 : 0;
        if (sfxOnInput) isSfxOn = sfxOnInput.checked ? 1 : 0;
        if (moveSpeedInput) playerMoveSpeed = parseInt(moveSpeedInput.value) || 1;
        if (weaponPowerInput) weaponPower = parseInt(weaponPowerInput.value) || 1;
        if (maxFpsInput) MAX_FPS = parseInt(maxFpsInput.value) || 10;
        if (gravityInput) GRAVITY = parseFloat(gravityInput.value) || 1;
        if (jumpPowerInput) JUMP_POWER = parseFloat(jumpPowerInput.value) || 11.5*1.3;
        if (enemyMaxCountInput) enemyMaxCount = parseInt(enemyMaxCountInput.value) || 1;
        if (bossBulletSpeedInput) bossBulletSpeed = parseInt(bossBulletSpeedInput.value) || 1;
        if (bossPattern1 && bossPattern1.checked) bossBulletPatternMode = 1;
        if (bossPattern2 && bossPattern2.checked) bossBulletPatternMode = 2;
        if (bossPattern3 && bossPattern3.checked) bossBulletPatternMode = 3;
        if (showScoreInput) showScore = showScoreInput.checked ? 1 : 0;
        if (showMovedInput) showMoved = showMovedInput.checked ? 1 : 0;
        if (showFpsInput) showFPS = showFpsInput.checked ? 1 : 0;
        if (showXYInput) showXY = showXYInput.checked ? 1 : 0;
        if (showNXYInput) showNXY = showNXYInput.checked ? 1 : 0;
        if (showEntityCountsInput) showEntityCounts = showEntityCountsInput.checked ? 1 : 0;
        if (showMobileTouchInput) showMobileTouch = showMobileTouchInput.checked ? 1 : 0;
        if (AutoFlipPlayerInput) AutoFlipPlayer = AutoFlipPlayerInput.checked ? 1 : 0;
        if (showCollisionBoxInput) ShowCollisionBox = showCollisionBoxInput.checked ? 1 : 0;
        settingsPanel.style.display = 'none';
        isPaused = false; // 關閉設定時恢復
        if (startXInput) startXInput.value = playerStartX;
        if (startYInput) startYInput.value = playerStartY;
    };
}
// checkbox 變動即時同步ikotaw
['setting-show-score','setting-show-moved','setting-show-fps','setting-show-xy','setting-show-nxy','setting-show-entity-counts','setting-show-mobile-touch','setting-auto-flip-player','setting-show-collision-box','setting-show-star','setting-show-meteor'].forEach(id => {
    var el = document.getElementById(id);
    if (el) {
        el.addEventListener('change', function() {
            switch(id) {
                case 'setting-show-score': showScore = this.checked ? 1 : 0; break;
                case 'setting-show-moved': showMoved = this.checked ? 1 : 0; break;
                case 'setting-show-fps': showFPS = this.checked ? 1 : 0; break;
                case 'setting-show-xy': showXY = this.checked ? 1 : 0; break;
                case 'setting-show-nxy': showNXY = this.checked ? 1 : 0; break;
                case 'setting-show-entity-counts': showEntityCounts = this.checked ? 1 : 0; break;
                case 'setting-show-mobile-touch': showMobileTouch = this.checked ? 1 : 0; updateMobileTouchDisplay(); break;
                case 'setting-auto-flip-player': AutoFlipPlayer = this.checked ? 1 : 0; break;
                case 'setting-show-collision-box': ShowCollisionBox = this.checked ? 1 : 0; break;
                case 'setting-show-star': showStar = this.checked ? 1 : 0; break;
                case 'setting-show-meteor': showMeteor = this.checked ? 1 : 0; break;
            }
        });
    }
});
// 音樂/效果音即時同步
var bgmOnInput2 = document.getElementById('setting-bgm-on');
if (bgmOnInput2) {
    bgmOnInput2.addEventListener('change', function() {
        isBgmOn = this.checked ? 1 : 0;
        // 立即控制 BGM/OUTRO
        const bgm = document.getElementById('bgm');
        const outroAudio = document.getElementById('outro-audio');
        if (isBgmOn) {
            if (bgm && gameRunning) { bgm.currentTime = 0; bgm.volume = VOLUME_BGM; bgm.play(); }
        } else {
            if (bgm) { bgm.pause(); }
            if (outroAudio) { outroAudio.pause(); }
        }
    });
}
var sfxOnInput2 = document.getElementById('setting-sfx-on');
if (sfxOnInput2) {
    sfxOnInput2.addEventListener('change', function() {
        isSfxOn = this.checked ? 1 : 0;
    });
}
// 4. 參數 input 綁定（移除即時套用）
var moveSpeedInput2 = document.getElementById('setting-move-speed');
if (moveSpeedInput2) moveSpeedInput2.addEventListener('input', function() {
    playerMoveSpeed = parseInt(this.value) || 1;
});
var weaponPowerInput2 = document.getElementById('setting-weapon-power');
if (weaponPowerInput2) weaponPowerInput2.addEventListener('input', function() {
    weaponPower = parseInt(this.value) || 1;
});
var maxFpsInput2 = document.getElementById('setting-max-fps');
if (maxFpsInput2) maxFpsInput2.addEventListener('input', function() {
    MAX_FPS = parseInt(this.value) || 10;
});
var gravityInput2 = document.getElementById('setting-gravity');
if (gravityInput2) gravityInput2.addEventListener('input', function() {
    GRAVITY = parseFloat(this.value) || 1;
});
var jumpPowerInput2 = document.getElementById('setting-jump-power');
if (jumpPowerInput2) jumpPowerInput2.addEventListener('input', function() {
    JUMP_POWER = parseFloat(this.value) || 11.5*1.3;
});
var jumpExtraInput2 = document.getElementById('setting-jump-extra');
if (jumpExtraInput2) jumpExtraInput2.addEventListener('input', function() {
    JUMP_EXTRA = parseFloat(this.value) || 0.35*1.3;
});
var jumpExtraFramesInput2 = document.getElementById('setting-jump-extra-frames');
if (jumpExtraFramesInput2) jumpExtraFramesInput2.addEventListener('input', function() {
    JUMP_EXTRA_FRAMES = parseInt(this.value) || 12;
});
// 新增即時同步
var enemyMaxCountInput2 = document.getElementById('setting-enemy-max-count');
if (enemyMaxCountInput2) enemyMaxCountInput2.addEventListener('input', function() {
    enemyMaxCount = parseInt(this.value) || 1;
});
var bossBulletSpeedInput2 = document.getElementById('setting-boss-bullet-speed');
if (bossBulletSpeedInput2) bossBulletSpeedInput2.addEventListener('input', function() {
    bossBulletSpeed = parseInt(this.value) || 1;
});
var bossPattern1 = document.getElementById('setting-boss-bullet-pattern-1');
var bossPattern2 = document.getElementById('setting-boss-bullet-pattern-2');
var bossPattern3 = document.getElementById('setting-boss-bullet-pattern-3');
if (bossPattern1) bossPattern1.addEventListener('change', function() { if (this.checked) bossBulletPatternMode = 1; });
if (bossPattern2) bossPattern2.addEventListener('change', function() { if (this.checked) bossBulletPatternMode = 2; });
if (bossPattern3) bossPattern3.addEventListener('change', function() { if (this.checked) bossBulletPatternMode = 3; });

// 補上 simulateKey 實作
function simulateKey(key, pressed) {
    if (keys.hasOwnProperty(key)) {
        keys[key] = pressed;
    }
    // 若需要觸發跳躍的特殊行為
    if (key === 'ArrowUp') {
        if (pressed) {
            if (!jumpKeyPressed) {
                jumpKeyDownTime = Date.now();
                jumpKeyPressed = true;
            }
        } else {
            if (jumpKeyPressed) {
                const pressDuration = Date.now() - jumpKeyDownTime;
                if (pressDuration < 200 && player.vy < 0) {
                    player.vy /= 4;
                } else if (pressDuration < 300 && player.vy < 0) {
                    player.vy /= 3;
                } else if (pressDuration < 400 && player.vy < 0) {
                    player.vy /= 2;
                }
                jumpKeyPressed = false;
            }
        }
    }
    // 射擊鍵特殊處理
    if (key === ' ') {
        if (pressed) {
            if (!charging && gameRunning) {
                charging = true;
                chargeFrame = 0;
                chargeReady = false;
                player.shootAnimFrame = 1;
                const shootAudio = document.getElementById('shoot-audio');
                if (shootAudio) {
                    shootAudio.currentTime = 0;
                    shootAudio.volume = VOLUME_SHOOT;
                    if (isSfxOn) shootAudio.play();
                }
                if (chargeAudioTimeout) clearTimeout(chargeAudioTimeout);
                chargeAudioTimeout = setTimeout(() => {
                    if (charging) {
                        const chargeAudio = document.getElementById('charge-audio');
                        if (chargeAudio) {
                            chargeAudio.currentTime = 0;
                            chargeAudio.volume = VOLUME_CHARGE;
                            if (isSfxOn) chargeAudio.play();
                        }
                    }
                }, 500);
            }
        } else {
            if (charging && chargeFrame >= CHARGE_MIN_FRAME) {
                chargeReady = true;
            } else if (charging && chargeFrame < CHARGE_CANCEL_FRAME && !chargeReady) {
                // 只有 chargeReady 為 false 才補發普通彈，且不受冷卻限制
                bullets.push({
                    x: player.x + (player.direction === 1 ? player.width : -10),
                    y: player.y + player.height / 2 - 3,
                    width: 10,
                    height: 6,
                    speed: 10 * 1.1 * player.direction, // 1.1倍
                    color: PLAYER_Attack_shoot_color,
                    isCharge: false
                });
                player.shootAnimFrame = 1;
            }
            charging = false;
            if (chargeAudioTimeout) clearTimeout(chargeAudioTimeout);
            const chargeAudio = document.getElementById('charge-audio');
            if (chargeAudio) {
                chargeAudio.pause();
                chargeAudio.currentTime = 0;
                chargeAudio.volume = VOLUME_CHARGE;
            }
        }
    }
}

// 根據 showMobileTouch 顯示/隱藏觸控按鈕
function updateMobileTouchDisplay() {
    const touchControls = document.getElementById('touch-controls');
    if (touchControls) {
        touchControls.style.display = showMobileTouch ? 'flex' : 'none';
    }
}
// 預設載入時也要呼叫一次
updateMobileTouchDisplay();

document.getElementById('setting-start-x').addEventListener('input', function() {
    playerStartX = parseInt(this.value) || 0;
});
document.getElementById('setting-start-y').addEventListener('input', function() {
    playerStartY = parseInt(this.value) || 0;
});

let writeName = 'LiuWatoki';

// 根據語言切換設定面板所有文字
function updateSettingsPanelLang() {
    const L = LANGUAGES[currentLang].settings;
    document.querySelector('#settings-panel h2').textContent = L.title;
    document.getElementById('settings-lang-label').textContent = L.selectLang;
    // label for bgm
    var bgmLabel = document.getElementById('setting-bgm-on').parentNode;
    if (bgmLabel) {
        var bgmInput = document.getElementById('setting-bgm-on');
        bgmLabel.innerHTML = '';
        if (bgmInput) bgmLabel.appendChild(bgmInput);
        bgmLabel.append(' ' + L.music);
    }
    var sfxLabel = document.getElementById('setting-sfx-on').parentNode;
    if (sfxLabel) {
        var sfxInput = document.getElementById('setting-sfx-on');
        sfxLabel.innerHTML = '';
        if (sfxInput) sfxLabel.appendChild(sfxInput);
        sfxLabel.append(' ' + L.sfx);
    }
    // 其他 input + label
    function updateInputLabel(inputId, labelText) {
        var input = document.getElementById(inputId);
        if (input && input.parentNode) {
            var label = input.parentNode;
            // 只更新第一個文字節點
            if (label.childNodes.length > 0 && label.childNodes[0].nodeType === 3) {
                label.childNodes[0].textContent = labelText + ' ';
            }
        }
    }
    updateInputLabel('setting-start-x', L.startX);
    updateInputLabel('setting-start-y', L.startY);
    updateInputLabel('setting-move-speed', L.moveSpeed);
    updateInputLabel('setting-weapon-power', L.weaponPower);
    updateInputLabel('setting-max-fps', L.maxFps);
    updateInputLabel('setting-gravity', L.gravity);
    updateInputLabel('setting-jump-power', L.jumpPower);
    updateInputLabel('setting-jump-extra', L.jumpExtra);
    updateInputLabel('setting-jump-extra-frames', L.jumpExtraFrames);
    // Checkbox
    function updateCheckboxLabel(inputId, labelText) {
        var input = document.getElementById(inputId);
        if (input && input.parentNode) {
            var label = input.parentNode;
            label.innerHTML = '';
            label.appendChild(input);
            label.append(' ' + labelText);
        }
    }
    updateCheckboxLabel('setting-show-score', L.showScore);
    updateCheckboxLabel('setting-show-moved', L.showMoved);
    updateCheckboxLabel('setting-show-fps', L.showFps);
    updateCheckboxLabel('setting-show-xy', L.showXy);
    updateCheckboxLabel('setting-show-nxy', L.showNxy);
    updateCheckboxLabel('setting-show-entity-counts', L.showEntityCounts);
    updateCheckboxLabel('setting-show-mobile-touch', L.showMobileTouch);
    updateCheckboxLabel('setting-auto-flip-player', L.autoFlipPlayer || '自動翻轉角色');
    updateCheckboxLabel('setting-show-collision-box', L.showCollisionBox || '顯示碰撞箱');
    updateCheckboxLabel('setting-show-star', L.showStar || '顯示星星');
    updateCheckboxLabel('setting-show-meteor', L.showMeteor || '顯示流星');
    document.getElementById('settings-close-btn').textContent = L.ok;
    // 新增多語言
    document.getElementById('label-enemy-max-count').childNodes[0].textContent = (L.enemyMaxCount || '敵人最大數量') + ' ';
    document.getElementById('label-boss-bullet-speed').childNodes[0].textContent = (L.bossBulletSpeed || 'Boss子彈速度') + ' ';
    document.getElementById('label-boss-bullet-pattern').textContent = L.bossBulletPattern || 'Boss子彈模式：';
    document.getElementById('label-boss-pattern-easy').textContent = L.bossPatternEasy || '簡單';
    document.getElementById('label-boss-pattern-normal').textContent = L.bossPatternNormal || '普通';
    document.getElementById('label-boss-pattern-hard').textContent = L.bossPatternHard || '困難';
}

// 自訂語言選單邏輯
const customLangBtn = document.getElementById('custom-lang-select-btn');
const customLangList = document.getElementById('custom-lang-select-list');
const customLangItems = customLangList.querySelectorAll('li');
function updateCustomLangBtn() {
    const map = { zh: '中文', ja: '日本語', en: 'English' };
    customLangBtn.textContent = map[currentLang] + ' ▼';
}
customLangBtn.onclick = function(e) {
    e.stopPropagation();
    customLangList.style.display = (customLangList.style.display === 'block') ? 'none' : 'block';
};
customLangItems.forEach(item => {
    item.onclick = function(e) {
        setLang(this.dataset.lang);
        updateCustomLangBtn();
        customLangList.style.display = 'none';
        updateSettingsPanelLang();
    };
});
document.addEventListener('click', function(e) {
    customLangList.style.display = 'none';
});
window.addEventListener('DOMContentLoaded', updateCustomLangBtn);

let bossBulletPower = 8; // Boss 子彈威力（新增）
