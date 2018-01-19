// This is a JavaScript file

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// 初期化
var my = my || {};

/**
 * Ajax通信
 * @param {object} $http : 通信用オブジェクト
 * @param {string} url : apiのurl
 * @param {object} params : 送信パラメータ
 * @param {function} success : 成功時のfunction
 * @param {function} error : 失敗時のfunction
 * @returns {undefined}
 */
my.post = function($http, url, params, success, error, time_out) {
//my.log(url);
    if(!time_out) {
        time_out = my.API_TIMEOUT;
    }

    $http({
        method: 'POST',
        url: url,
        data: params,
        //headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8' },
        //timeout: my.API_TIMEOUT
        timeout: time_out
    })
    // var tmpUrl = url + '?page=1&unique=1';
    //     // var tmpUrl = url + '?page=1';
    // $http({
    //     method: 'GET',
    //     url: tmpUrl,
    //     headers: { 'Content-Type': 'application/json;charset=utf-8' },
    //     timeout: time_out
    // })
    .success(function(result, status, headers, config){
        my.log(result);
        success(result, status, headers, config);
        return true;
        // if(success && result.status && result.status.state) {
        //     if(result.status.state == 'OK') {
        //         success(result, status, headers, config);
        //         return true;
        //     }
        // }
        // if(result.status && result.status.state && result.status.message) {
        //     my.log('post: success to error state:' + result.status.state + ' message:' + result.status.message);
        //     if(error) {
        //         error(result, status, headers, config);
        //     }
        // }
        // else {
        //     my.log('post: success to error');
        //     // ネットワーク不備のためエラー画面に遷移
        //     //my.loading_end();
        //     my.network_unknown();
        // }
        // return false;
    })
    .error(function(result, status, headers, config){
        my.log('post: error');
        my.log(status);
        // // ネットワーク不備のためエラー画面に遷移
        // my.loading_end();
        // my.network_unknown();
    });
//*/
};

/**
 * Ajax通信
 * @param {object} $http : 通信用オブジェクト
 * @param {string} url : apiのurl
 * @param {object} params : 送信パラメータ
 * @param {function} success : 成功時のfunction
 * @param {function} error : 失敗時のfunction
 * @returns {undefined}
 */
my.get = function($http, url, success, error, time_out) {
//my.log(url);
    if(!time_out) {
        time_out = my.API_TIMEOUT;
    }

    $http({
        method: 'GET',
        url: url,
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        timeout: time_out
    })
    .success(function(result, status, headers, config){
        //my.log(result);
        my.log('success');
        my.log(status);
        if (status == '200') {
            success(result, status, headers, config);
            return true;
        } else {
            my.log(result);
            error(result, status, headers, config);
        }
        // if(success && result.status && result.status.state) {
        //     if(result.status.state == 'OK') {
        //         success(result, status, headers, config);
        //         return true;
        //     }
        // }
        // if(result.status && result.status.state && result.status.message) {
        //     my.log('post: success to error state:' + result.status.state + ' message:' + result.status.message);
        //     if(error) {
        //         error(result, status, headers, config);
        //     }
        // }
        // else {
        //     my.log('post: success to error');
        //     // ネットワーク不備のためエラー画面に遷移
        //     //my.loading_end();
        //     my.network_unknown();
        // }
        // return false;
    })
    .error(function(result, status, headers, config){
        my.log('get: error');
        my.log(status);
        error(result, status, headers, config);
        // // ネットワーク不備のためエラー画面に遷移
        // my.loading_end();
        // my.network_unknown();
    });
//*/
};

my.api_noticeList_get = function(page, unique, $http, success, error) {
    my.get($http, my.API_PROTOCOL + my.API_SERVER + my.API_NOTICE_LIST + "?page=" + page + "&unique=" + unique, success, error);
};

my.api_newsList_get = function(language, $http, success, error) {
    // my.get($http, my.API_PROTOCOL + my.API_SERVER + my.API_NEWS_LIST + "?language=" + language, success, error);
        my.get($http, my.API_PROTOCOL + my.API_SERVER + my.API_NEWS_LIST, success, error);
};

my.api_mailsReceiveList_get = function(page, unique, $http, success, error) {
    my.get($http, my.API_PROTOCOL + my.API_SERVER + my.API_MAILS_RECEIVELIST + "?page=" + page + "&unique=" + unique, success, error);
};

my.api_mailsSendList_get = function(page, unique, $http, success, error) {
    my.get($http, my.API_PROTOCOL + my.API_SERVER + my.API_MAILS_SENDLIST + "?page=" + page + "&unique=" + unique, success, error);
};

my.api_mailsView_get = function(unique, mail_id, $http, success, error) {
    my.get($http, my.API_PROTOCOL + my.API_SERVER + my.API_MAILS_VIEW + "?unique=" + unique + "&mail_id=" + mail_id, success, error);
};

my.api_mailsSend_post = function(params, $http, success, error) {
    my.post($http, my.API_PROTOCOL + my.API_SERVER + my.API_MAILS_SEND, params, success, error);
};

my.api_statsJobType_get = function(timestamp, $http, success, error) {
    my.get($http, my.API_PROTOCOL + my.API_SERVER + my.API_STATS_JOBTYPE + "?timestamp=" + timestamp, success, error);
};

my.api_statsEmploymentType_get = function(timestamp, $http, success, error) {
    my.get($http, my.API_PROTOCOL + my.API_SERVER + my.API_STATS_EMPLOYMENTTYPE + "?timestamp=" + timestamp, success, error);
};




