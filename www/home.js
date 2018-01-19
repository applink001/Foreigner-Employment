// This is a JavaScript file
var cur_tab_index = 1;
window.fn = {};

window.fn.loadView = function (index) {
  document.getElementById('appTabbar').setActiveTab(index);
};

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

window.fn.pushPage = function (index, page, anim) {
    cur_tab_index = index;
  if (anim) {
    document.getElementById('appNavigator' + index).pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document.getElementById('appNavigator' + index).pushPage(page.id, { data: { title: page.title } });
  }
};

my.app.controller('InitHome', function($scope, $http) {
    // ページが表示された時の処理
    $scope.ShowPage = function() {
        console.log("pageshow", $http);
        my.api_noticeList_get(
            1,
            1,
            $http,
            function(result, status, headers, config) {
                $scope.notice_list = result;
                my.$scope = $scope;
                //console.log(result);
                //my.loading_end();
                //my.page_home_user('search_result');
            },
            function(result, status, headers, config) {
                //my.loading_end();
                //my.message(result);
            }
            
        );
        
        my.api_newsList_get(
            1,
            $http,
            function(result, status, headers, config) {
                $scope.news_list = result;
                my.$scope = $scope;
                //console.log(result);
                //my.loading_end();
                //my.page_home_user('search_result');
            },
            function(result, status, headers, config) {
                //my.loading_end();
                my.message(status);
            }
            
        );
    };
    
    $scope.NextButton = function() {
        my.api_noticeList_get(
            1,
            1,
            $http,
            function(result, status, headers, config) {
                console.log(result);
                console.log(status);
                console.log(headers);
                console.log(config);

                $scope.notice_list = result;
                my.$scope = $scope;
                //my.loading_end();
                //my.page_home_user('search_result');
            },
            function(result, status, headers, config) {
                //my.loading_end();
                //my.message(result.status.message);
            }
        );
        
        my.api_newsList_get(
            1,
            1,
            $http,
            function(result, status, headers, config) {
                $scope.news_list = result;
                my.$scope = $scope;
                console.log(result);
                //my.loading_end();
                //my.page_home_user('search_result');
            },
            function(result, status, headers, config) {
                //my.loading_end();
                //my.message(result.status.message);
            }
            
        );
    };
});

//init mails list
my.app.controller('InitMailsList', function($scope, $http) {
    // ページが表示された時の処理
    $scope.ShowPage = function() {
        console.log("initMailsList.Pageshow");
        my.api_mailsReceiveList_get(
            1,
            1,
            $http,
            function(result, status, headers, config) {
                $scope.mails_receive_list = result;
                my.$scope = $scope;
            },
            function(result, status, headers, config) {
            }
            
        );
        
        my.api_mailsSendList_get(
            1,
            1,
            $http,
            function(result, status, headers, config) {
                $scope.mails_send_list = result;
                my.$scope = $scope;
            },
            function(result, status, headers, config) {
            }
        );
    };
});

//send Mail list
my.app.controller('SendMailsList', function($scope, $http) {
    // ページが表示された時の処理
    console.log("sendMailsList.Pageshow");

    my.api_mailsSendList_get(
        1,
        1,
        $http,
        function(result, status, headers, config) {
            $scope.mails_send_list1 = result;
            my.$scope = $scope;
        },
        function(result, status, headers, config) {
        }
    );
});

//receive Mail list
my.app.controller('ReceiveMailsList', function($scope, $http) {
    // ページが表示された時の処理
    console.log("receiveMailsList.Pageshow");

    my.api_mailsReceiveList_get(
        1,
        1,
        $http,
        function(result, status, headers, config) {
            $scope.mails_receive_list1 = result;
            my.$scope = $scope;
        },
        function(result, status, headers, config) {
        }
        
    );
});

//receive Mail detail
my.app.controller('ReceiveMailDetail', function($scope, $http) {
    // ページが表示された時の処理
    console.log("ReceiveMailDetail.Pageshow");

    my.api_mailsView_get(
        1,
        1,
        $http,
        function(result, status, headers, config) {
            $scope.mail_detail_info = result;
            my.$scope = $scope;
        },
        function(result, status, headers, config) {
        }
        
    );
    
    $scope.SendMail = function(){
        var mail_title = document.getElementById("mail_title").value;
        var mail_body = document.getElementById("mail_body").value;
        var company_id = $scope.mail_detail_info.company_id;
        console.log("ReceiveMailDetail.SendMail", mail_title, mail_body, company_id);
        
        var params = params || {};
        params.unique = 1;
        params.title = mail_title;
        params.body = mail_body;
        params.company_id = company_id;
        
        my.api_mailsSend_post(
            params,
            $http,
            function(result, status, headers, config) {
                console.log("OK!")
            },
            function(result, status, headers, config) {
                conole.log(status);
            }
        
        );
    }
});

//send Mail detail
my.app.controller('SendMailDetail', function($scope, $http) {
    // ページが表示された時の処理
    console.log("SendMailDetail.Pageshow");

    my.api_mailsView_get(
        1,
        1,
        $http,
        function(result, status, headers, config) {
            $scope.mail_detail_info = result;
            my.$scope = $scope;
        },
        function(result, status, headers, config) {
        }
        
    );
});
