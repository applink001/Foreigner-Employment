// This is a JavaScript file

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// 初期化
var my = my || {};

// アプリ情報
my.app_title = 'Dr美＋';
my.app_ver = 'Ver 1.0.0';
my.app_ver_show = 'Ver 1.1.0';
my.app_url = 'http:/beautyconsultationapp.com/';

// 通信先 - 開発
//my.API_PROTOCOL = 'http://';                // プロトコル
//my.API_SERVER   = '192.168.11.4/chatapp';   // APIサーバアドレス

// 通信先 - テスト
//my.API_PROTOCOL = 'https://';             // プロトコル
//my.API_SERVER   = 'heleneapp.com/test_owkawXER_';        // APIサーバ（テスト）

// 通信先 - 本番
my.API_PROTOCOL = 'https://';                            // プロトコル
my.API_SERVER   = 'api.deai.work';  // APIサーバ（本番）

// タイムアウト
my.API_TIMEOUT  = 15000;            // タイムアウト 15秒(15000)
my.API_TIMEOUT_MSG  = 60000;        // タイムアウト 60秒(60000)

// API
my.API_POST     = '-post';          // 登録
my.API_GET      = '-get';           // 取得
my.API_SEARCH   = '-search';        // 検索
my.API_DETAIL   = '-detail';        // 詳細
my.API_USE      = '-use';           // 使用

my.API_USERS_CREATE         = '/users/create';                 // ユーザー（登録・取得）
my.API_USERS_SWITCHUSER     = '/users/switch_user';                 

my.API_NOTICE_LIST          = '/announcements';   
my.API_NEWS_LIST            = '/news'
my.API_MAILS_RECEIVELIST    = '/mails/receive_list'
my.API_MAILS_SENDLIST       = '/mails/send_list'
my.API_MAILS_VIEW           = '/mails/view'
my.API_MAILS_SEND           = '/mails/send'
my.API_STATS_JOBTYPE        = '/stats/job_type'
my.API_STATS_EMPLOYMENTTYPE = '/stats/employment_type'

my.API_USERS                = '/api/users';                 // ユーザー（登録・取得）
my.API_USERS_TIMER          = '/api/users-timer';           // ユーザー定期処理
my.API_DOCTORS              = '/api/doctors';               // 医師（登録・取得）
my.API_DOCTORS_TIMER        = '/api/doctors-timer';         // 医師定期処理
my.API_DOCTORS_ENCODE       = '/api/doctors-encode';        // 医師顔写真取得（base64エンコード）
my.API_DOCTORS_RANK         = '/api/doctors-rank';          // 医師ランキング情報を取得
my.API_LOGIN                = '/api/login';                 // ログイン
my.API_NETWORK              = '/api/network';               // ネットワークチェック
my.API_DOCTOR_SEARCH        = '/announcements';         // 医師検索
my.API_DOCTOR_RANKING       = '/api/doctor-ranking';        // 医師ランキング
my.API_CHAT_ROOM_START      = '/api/chat-room-start';       // チャット部屋開始
my.API_CHAT_ROOM_STATUS     = '/api/chat-room-status';      // チャット部屋情報変更
my.API_CHAT_ROOM_END        = '/api/chat-room-end';         // チャット部屋終了
my.API_CHAT_ROOM_WARNING    = '/api/chat-room-warning';     // チャット部屋ユーザー通報
my.API_CHAT_ROOM_LIST       = '/api/chat-room-list';        // チャット部屋進行中一覧取得
my.API_CHAT_ROOM_HISTORY    = '/api/chat-room-history';     // チャット部屋履歴一覧取得
my.API_CHAT_ROOM_MESSAGE    = '/api/chat-room-message';     // チャット部屋メッセージ（送信・取得）
my.API_CHAT_STATE           = '/api/chat-state';            // チャットの情報取得（相談中、Newの確認）
my.API_CHAT_FIXED           = '/api/chat-fixed';            // チャットの定型文を取得
my.API_INQUIRY              = '/api/inquiry';               // お問い合わせ送信

my.API_IMAGE_DOCTOR         = my.API_PROTOCOL + my.API_SERVER + '/api/image-doctor?id=';
my.API_IMAGE_CHAT           = my.API_PROTOCOL + my.API_SERVER + '/api/image-chat?id=';

my.STYLE_NONE = 0;
my.STYLE_USER = 1;
my.STYLE_DOCTOR = 2;
my.STYLE_LOGIN = 3;

my.OS_IOS = 1;
my.OS_ANDROID = 2;

my.SAVEKEY_USER_ID = 'user_id';
my.SAVEKEY_DOCTOR_ID = 'doctor_id';
my.SAVEKEY_DEVICE_ID = 'device_id';

my.CHAT_MAX_SEND = 255;         // チャットで送信できる最大文字数
my.CHAT_SCROLL_TIME = 500;      // チャットのスクロールインターバル

// 地域名称
my.prefectures = [
    "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県",
    "埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県",
    "岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
    "鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県",
    "佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"
];

// 得意施術
my.specialty_names = [
    "目", "鼻", "輪郭（骨切）","豊胸", "脂肪吸引",
    "多汗症", "美肌", "脱毛", "婦人科形成", "審美歯科",
    "発毛・植毛", "ほくろ除去", "若返り（リフトアップ）", "若返り（ヒアルロン酸・ボトックス）"
];
my.specialty_ids = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14
];

// 年齢一覧
my.agelist = [
    18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80
];

// 美容外科歴
my.beautylist = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'
];

// ホーム画面の相談ステータス
my.chat_state = {
    count: '-',
    read_flg: 1
};

// 医師のチャットステータス
my.chat_status = [
    {id: 0, status: '進行中'},
    {id: 1, status: '保留'},
    {id: 2, status: '評価待ち'}
];
my.chat_status_show = [
    {id: 0, status: '進行中'},
    {id: 2, status: '評価待ち'}
];

// 変数
my.device_id = 0;
my.os_type = 0;
my.style = 0;               // スタイル指定（0:なし, 1:ユーザー, 2:医師, 3:ログイン）
my.stage = -1;              // 0:登録中, 1:登録完了
my.is_timer = false;

my.$http = null;
my.$scope = null;
my.$timeout = null;
my.page = null;
my.page_setting = null;
my.page_now = '';
my.page_prev = '';
my.is_page_home = false;
my.is_page_chat = false;
my.navi = null;
my.tabbar = null;

my.connect_no = false;      // 電波不良
my.locked = 0;              // ロック
my.reload_time = 3000;      // 自動読み込み時間 1000 = 1秒

// ユーザー情報
my.email = '';              // メールアドレス
my.password = '';           // パスワード
my.password2 = '';          // パスワード（確認用）
my.name = '';               // 名前（ニックネーム）
my.region = '';             // 地域

// 相談者情報
my.user_id = null;          // ユーザー固有ＩＤ
my.tel = '';                // 電話番号
my.age = '';                // 年齢

// 医師情報
my.doctor_id = null;        // 医師固有ＩＤ
my.affiliation = '';        // 所属医院
my.beauty_year = '';        // 美容外科歴
my.physicianship = '';      // 医籍番号
my.image = null;            // 顔写真
my.specialty = [];          // 得意施術

// ログイン
my.abridgement = true;
my.is_login = false;

// チャット
//my.chat_index = 0;
my.loader = null;
my.chat_history = false;
my.chat_room = {};
my.msgs = [];

//―――――――――――――――――――――――――――――――――――――――――
// js読み込み時の初期化
//

// iOS7以上で、ステータスバー部分の高さを自動的に埋める処理を無効にします。
ons.disableAutoStatusBarFill();

// appを取得
my.app = ons.bootstrap();

// 通信リザルト変換
my.app.config(function ($httpProvider) {
    //$httpProvider.defaults.withCredentials = true;
    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;application/json;charset=utf-8';
    $httpProvider.defaults.transformRequest = function(data){
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
});

// すべてのページの共通初期化
my.all_initializ = function($scope, $http) {
    my.$http = $http;
};

// 保存
my.save = function(id, data) {
    localStorage.setItem(id, data);
    //my.log('save: ' + id + ' = ' + data);
};

// 読み込み
my.load = function(id) {
    data = localStorage.getItem(id);
    //my.log('load: ' + id + ' = ' + data);
    return data;
};

// 読み込み中表示
my.loading = function() {
    $('#mask').show();
};

// 読み込み中非表示
my.loading_end = function() {
    $('#mask').hide();
};

// urlを開く
my.open_url = function(url) {
    if(url) {
        window.open(url, '_blank','location=no');
    }
};

// メッセージ表示
my.message = function(message, callback) {
    if(callback) {
        ons.notification.alert(message, {title:'', callback:callback});
    }
    else {
        ons.notification.alert(message, {title:''});
    }
};

// アラート
my.alert = function(message) {
    ons.notification.alert({message:message});
};

// コンソール
my.log = function(param) {
    console.log(param);
};

// スタイル
my.set_style = function(type) {
    my.style = type;
};

// ステージ
my.set_stage = function(stage) {
    my.stage = stage;
};

// ネットワーク不良
my.network_unknown = function() {
    my.connect_no = true;
};
my.network_ok = function() {
    my.connect_no = false;
};
my.is_network_ok = function() {
    if(my.connect_no) {
        return false;
    }
    return true;
};

// デバッグ用（初期登録画面へ戻る）
my.debug_reset = function() {
    my.page = null;
    my.set_style(0);
    my.set_stage(0);
    my.user_id = null;
    my.doctor_id = null;
    my.is_login = false;
    // 2017.05 新規登録時のユーザー登録情報簡略化につき初期化項目も追加
    my.name = '';
    my.region = '';
    my.tel = '';
    my.age = '';
    localStorage.clear();
    my.save(my.SAVEKEY_DEVICE_ID, my.device_id);
};

// 得意施術をカンマ区切りに変換する
my.get_specialty_ids = function(specialty) {
    var ids = '';
    my.specialty_ids.forEach(function(val, i) {
        if(specialty[val]) {
            ids += val + ',';
        }
    });
    if(ids != '') {
        ids = ids.slice(0, -1);
    }
    return ids;
};
my.get_specialty_names = function(specialty) {
    var names = '';
    my.specialty_ids.forEach(function(val, i) {
        if(specialty[val]) {
            names += my.specialty_names[i] + ',';
        }
    });
    if(names != '') {
        names = names.slice(0, -1);
    }
    return names;
};

// カンマ区切り得意施術をオブジェクトに変換する
my.get_specialty_obj = function(specialty) {
    var resArray = specialty.split(",");
    var ids = [];
    resArray.forEach(function(val, i) {
        ids[val] = true;
    });
    return ids;
};
my.get_specialty_comma_names = function(specialty) {
    var resArray = specialty.split(",");
    var names = '';
    resArray.forEach(function(val1, i) {
        my.specialty_ids.forEach(function(val2, j) {
            if(val1 == val2) {
                names += my.specialty_names[j] + ',';
                return true;
            }
            return false;
        });
    });
    if(names != '') {
        names = names.slice(0, -1);
    }
    return names;
};

// ユーザー情報設定
my.setup_user = function(param) {
    my.user_id = param.id;
    my.email = param.email;
    my.name = param.name;
    my.tel = param.tel;
    my.region = param.region;
    my.age = param.age;
    my.locked = param.locked;
};

// ユーザー情報入力チェック
my.is_setup_user = function() {
    if(my.email == '') {
        return 'メールアドレスを入力してください。';
    }
    if(!my.email.match(/.+@.+\..+/)) {
        return 'メールアドレスが正しくありません。';
    }
    if(my.password == '') {
        return 'パスワードを入力してください。';
    }
    if(my.password.length < 6) {
        return '６文字以上パスワードを入力してください。';
    }
    if(my.password2 == '') {
        return '確認用パスワードを入力してください。';
    }
    if(my.password != my.password2) {
        return '確認用パスワードの入力が間違っています。';
    }
    // 2017.05 名前の入力チェックは設定からのみ有効（新規登録時はチェックしない）
    if(my.name == '' && my.stage == 1) {
        return '名前を入力してください。';
    }
    // 2017.05 電話番号のブランクを許可
    //if(my.tel == '') {
    //    return '電話番号を入力してください。';
    //}
    if(my.tel != '') {
        if( !(  my.tel.match(/^[0-9-]{10,11}$/) ||
                my.tel.match(/^[0-9-]{6,9}$|^[0-9-]{12}$/) ||
                my.tel.match(/^\d{1,4}-\d{4}$|^\d{2,5}-\d{1,4}-\d{4}$/)
        ) ) {
            return '電話番号が正しくありません。';
        }
    }
    // 2017.05 地域のブランクを許可
    //if(my.region == '' || !my.region) {
    //    return '地域を選択してください。';
    //}
    //if(my.age == '') {
    //    return '';
    //}
    return '';
};

// 医師情報設定
my.setup_doctor = function(param) {
    my.doctor_id = param.id;
    my.email = param.email;
    my.name = param.name;
    my.affiliation = param.affiliation;
    my.region = param.region;
    my.beauty_year = param.beauty_year + '';    // 文字列に変換
    my.specialty = my.get_specialty_obj(param.specialty);
    my.physicianship = param.physicianship;
    my.locked = param.locked;
};

// 医師情報入力チェック
my.is_setup_doctor = function() {
    if(my.email == '') {
        return 'メールアドレスを入力してください。';
    }
    if(!my.email.match(/.+@.+\..+/)) {
        return 'メールアドレスが正しくありません。';
    }
    if(my.password == '') {
        return 'パスワードを入力してください。';
    }
    if(my.password.length < 6) {
        return '６文字以上パスワードを入力してください。';
    }
    if(my.password2 == '') {
        return '確認用パスワードを入力してください。';
    }
    if(my.password != my.password2) {
        return '確認用パスワードの入力が間違っています。';
    }
    if(my.name == '') {
        return '名前を入力してください。';
    }
    if(my.image == '' || !my.image) {
        return '顔写真を選択してください。';
    }
    if(my.affiliation == '') {
        return '所属医院を入力してください。';
    }
    if(my.region == '' || !my.region) {
        return '地域を選択してください。';
    }
    if(my.beauty_year == '' || !my.beauty_year) {
        return '美容外科歴を選択してください。';
    }
    var specialty_error = true;
    my.specialty.forEach(function(val, i) {
        if(val) {
            specialty_error = false;
            return true;
        }
    });
    if(specialty_error) {
        return '得意施術を選択してください。';
    }
    if(my.physicianship == '') {
        return '移籍番号を入力してください。';
    }
    return '';
};

// 医師の顔写真を取得
my.img_doctor = function(doctor_id) {
    return my.API_IMAGE_DOCTOR + doctor_id;
};

// チャットの写真を取得
my.img_chat = function(id) {
    return my.API_IMAGE_CHAT + id;
};

// 文字を繰り返す
my.repeat_text = function(s, num) {
    var t, n;
    t = "";
    for(n = 0; n < num; n++) {
        t += s;
    }
    return t;
};

//―――――――――――――――――――――――――――――――――――――――――
// フォトアルバム参照
//
my.photo = function(success, fail, $timeout) {
    if(my.os_type == 0) {
        // monaca デバッガー用処理
        $('#file_photo').click();
        $('#file_photo').on("change", function() {
            var file = this.files[0];
            if(file == null) {
                return false;
            }
            $('#file_photo').val('');  // 入力をクリア
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (function() {
                $timeout(function() {
                    var img = reader.result;
                    var ary = img.split(',');
                    if(ary.length >= 2) {
                        img = ary[1];
                    }
                    success(img);
                }, 1000);
            })();
            return true;
        });
        return true;
    }
    //プラグインcobweb-pluginーcameraの機能
    navigator.camera.getPicture(success, fail, { 
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        //destinationType: Camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        //sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM
    });
    return true;
};

//―――――――――――――――――――――――――――――――――――――――――
// ページ移動
//
my.app.controller('LoadMenu', function($scope, $http) {
    if(my.page == null) {
        if(my.style == my.STYLE_USER) {
            my.page = 'user/index';
        }
        else {
            my.page = 'doctor/index';
        }
        my.tab_page(0);
        return true;
    }
    my.tab_load('html/home/'+my.page+'.html');
    my.loading_end();
    return true;
});

my.page_statup = function(page) {
    my.navi.resetToPage('html/startup/'+page+'.html', {animation:"none"});
};

my.page_home = function(page) {
    // ページ設定
    my.page = page;
    // １ページ前の情報を保持
    my.page_prev = my.page_now;
    my.page_now = my.page;
    // 移動指定
    switch(my.style) {
    case my.STYLE_NONE:
    case my.STYLE_LOGIN:
        break;
    case my.STYLE_USER:
        switch (page) {
        case 'user/index':
            my.tab_page(0);
            break;
        case 'user/room':
            my.tab_page(1);
            break;
        case 'user/search':
            my.tab_page(2);
            break;
        default:
            my.loading();
            //my.navi.replacePage('html/user/menu.html', {animation:"none"});
            //my.navi.replacePage('html/user/menu.html');
            my.navi.resetToPage('html/home/user/menu.html', {animation:"none"});
            break;
        }
        break;
    case my.STYLE_DOCTOR:
        switch (page) {
        case 'doctor/index':
            my.tab_page(0);
            break;
        case 'doctor/room':
            my.tab_page(1);
            break;
        default:
            my.loading();
            my.navi.resetToPage('html/home/doctor/menu.html', {animation:"none"});
            break;
        }
        break;
    }
};
my.page_home_user = function(page) {
    my.page_home('user/'+page);
};
my.page_home_doctor = function(page) {
    my.page_home('doctor/'+page);
};
my.page_home_setting = function(page) {
    if(page == 'index') {
        if(my.style == my.STYLE_USER) {
            my.tab_page(3);
        }
        else {
            my.tab_page(2);
        }
    }
    else {
        my.page_home('setting/'+page);
    }
};

my.tab_page = function(no) {
    my.is_page_home = false;
    my.is_page_chat = false;
    if(my.tabbar != null) {
        //my.log('setActiveTab:'+no);
        my.tabbar.setActiveTab(no);
        return true;
    }
    return false;

};
my.tab_load = function(page) {
    my.is_page_home = false;
    my.is_page_chat = false;
    if(my.tabbar != null) {
        //my.log(page);
        my.tabbar.loadPage(page);
        return true;
    }
    return false;
};

//―――――――――――――――――――――――――――――――――――――――――
// push通知
//
my.notification = function(data) {
    if(data && data.message) {
        my.message(data.message);
        my.timer_function(); // プッシュ通知を受け取ったら更新する
    }
};

//―――――――――――――――――――――――――――――――――――――――――
// タイマー処理
//
my.timer_start = function($timeout) {
    my.$timeout = $timeout;
    my.timer = my.$timeout(my.timer_main, my.reload_time);
};
my.timer_stop = function() {
    my.$timeout.cancel(my.timer);
};
my.timer_main = function() {
    var reload_time = my.reload_time;
    if(!reload_time) {
        reload_time = 10000;
    }
    if(reload_time <= 3000) {
        reload_time = 3000;
    }
    if(my.is_network_ok()) {
        try {
            my.network_timer_check();
            my.timer_function();
        }
        catch (e) {
            my.log(e);
        }
    }
    my.$timeout(my.timer_main, reload_time);
};
my.timer_function = function() {
    if(!my.$http) {
        return false;
    }
    if(!my.user_id && !my.doctor_id) {
        return false;
    }
    if(my.is_timer) {
        return false;
    }
    my.is_timer = true;
    try {
        // ホーム画面表示
        if(my.is_page_home) {
            my.api_chat_state_get(
                my.$http,
                function(result, status, headers, config) {
                    my.chat_state = result.param;
                },
                function(result, status, headers, config) {
                }
            );
        }
        // チャット画面表示
        if(my.is_page_chat) {
            if(my.msgs && my.msgs.length >= 1 && my.msgs[my.msgs.length-1].id) {
                // 新着メッセージ読み込み
                var id = my.msgs[my.msgs.length-1].id;
                my.api_chat_room_message_new_get(
                    id,
                    my.$http,
                    function(result, status, headers, config) {
                        if(result.param && result.param.length > 0) {
                            $.each(result.param, function(i, value) {
                                my.msgs.push(value);
                            });
                        }
                    },
                    function(result, status, headers, config) {
                    }
                );
            }
        }
    }
    catch (e) {
        my.log(e);
    }
    my.is_timer = false;
    return true;
};

// タイマーメイン処理
my.network_timer_check = function() {
    if(!my.$http) {
        return false;
    }
    if(my.locked == 1) {
        return false;
    }
    if(my.user_id) {
        my.api_users_timer_get(
            my.$http,
            function(result, status, headers, config) {
                my.reload_time = result.param.reload_time;
                my.locked = result.param.locked;
            },
            function(result, status, headers, config) {
                my.network_unknown();
                my.message(result.status.message, function(){ my.open_url(result.param.url);} );
            }
        );
    }
    else if(my.doctor_id) {
        my.api_doctors_timer_get(
            my.$http,
            function(result, status, headers, config) {
                my.reload_time = result.param.reload_time;
                my.locked = result.param.locked;
            },
            function(result, status, headers, config) {
                my.network_unknown();
                my.message(result.status.message, function(){ my.open_url(result.param.url);} );
            }
        );
    }
    return true;
};

//―――――――――――――――――――――――――――――――――――――――――
// ユーザー情報を更新
//
my.update_mydate = function($http) {
    if(!$http) {
        return false;
    }
    if(my.user_id) {
        my.loading();
        my.api_users_get(
            $http,
            function(result, status, headers, config) {
                my.setup_user(result.param);
                my.loading_end();
            },
            function(result, status, headers, config) {
                my.loading_end();
                my.message(result.param.message);
            }
        );
        return true;
    }
    else if(my.doctor_id) {
        my.loading();
        my.api_doctors_get(
            $http,
            function(result, status, headers, config) {
                my.setup_doctor(result.param);
                my.loading_end();
            },
            function(result, status, headers, config) {
                my.loading_end();
                my.message(result.param.message);
            }
        );
        return true;
    }
    return false;
};

// サーバーログイン
my.login_server = function($http) {
    if(!$http) {
        return false;
    }
    if(my.is_login) {
        return true;
    }
    if(my.user_id != null && my.user_id > 0) {
        // ユーザーの場合
        my.api_users_get(
            $http,
            function(result, status, headers, config) {
                my.setup_user(result.param);
                my.set_style(my.STYLE_USER);
                if(my.locked == 0) {
                    my.set_stage(1);
                }
                else {
                    my.set_stage(0);
                }
                my.is_login = true;
                my.loading_end();
            },
            function(result, status, headers, config) {
                my.set_style(0);
                my.set_stage(0);
                my.loading_end();
                my.debug_reset();
            }
        );
        return true;
    }
    else if(my.doctor_id != null && my.doctor_id > 0) {
        // 医師の場合
        my.api_doctors_get(
            $http,
            function(result, status, headers, config) {
                my.setup_doctor(result.param);
                my.set_style(my.STYLE_DOCTOR);
                if(my.locked == 0) {
                    my.set_stage(1);
                }
                else {
                    my.set_stage(0);
                }
                my.is_login = true;
                my.loading_end();
            },
            function(result, status, headers, config) {
                my.set_style(0);
                my.set_stage(0);
                my.loading_end();
                my.debug_reset();
            }
        );
        return true;
    }
    return false;
};

//―――――――――――――――――――――――――――――――――――――――――
// 開始処理
//

ons.ready(function() {
    if (StatusBar.isVisible)
        console.log('true');
    else
        console.log('false');
    
    console.log(StatusBar);

    // Push通知受け取り
    monaca.cloud.Push.setHandler(my.notification);

    // ディバイスＩＤ
    monaca.getDeviceId( function(deviceId) { 
        my.device_id = deviceId;
        my.save(my.SAVEKEY_DEVICE_ID, my.device_id);
        if(monaca.isIOS) {
            my.os_type = my.OS_IOS;
        }
        if(monaca.isAndroid) {
            my.os_type = my.OS_ANDROID;
        }
    });

});

my.app.controller('AppController', function($scope, $http, $timeout) {
//     my.$scope = $scope;
//     my.$http = $http;
//     my.$timeout = $timeout;
// 
//     $scope.my = my;
//     my.loading();
// 
//     // データ読み込み
//     my.user_id = my.load(my.SAVEKEY_USER_ID);
//     my.doctor_id = my.load(my.SAVEKEY_DOCTOR_ID);
//     my.device_id = my.load(my.SAVEKEY_DEVICE_ID);
//     if(!my.device_id) {
//         my.device_id = 0;
//     }
// 
//     // サーバーにログイン
//     if(my.login_server($http) == false) {
//         my.set_style(0);
//         my.set_stage(0);
//         my.loading_end();
//     }
//     // タイマー処理開始
//     my.timer_start($timeout);

    // 直でAPIコールができない場合
    //$timeout(my.sleep_loading, 1000);

});


// 直でAPIコールができない場合
/*my.sleep_loading = function() {
    // サーバーにログイン
    if(my.login_server(my.$http) == false) {
        my.set_style(0);
        my.set_stage(0);
        my.loading_end();
    }
    // タイマー処理開始
    my.timer_start(my.$timeout);
};
*/