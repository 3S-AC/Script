/******************************
脚本功能：FB解锁
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers.+ url script-response-body https://raw.githubusercontent.com/gloryofchina/Script/main/FB.js
[mitm] 
hostname = api.revenuecat.com
*******************************/

var body = $response.body;
var objk = JSON.parse(body);

objk = {
  "request_date_ms" : 416505600000,
  "request_date" : "1983-03-15T00:00:00Z",
  "subscriber" : {
    "non_subscriptions" : {
      "filebox_pro" : [
        {
          "id" : "cs",
          "is_sandbox" : false,
          "purchase_date" : "1983-03-15T00:00:00Z",
          "original_purchase_date" : "1983-03-15T00:00:00Z",
          "store" : "app_store"
        }
      ]
    },
    "first_seen" : "1983-03-15T00:00:00Z",
    "original_application_version" : "170",
    "other_purchases" : {
      "filebox_pro" : {
        "purchase_date" : "1983-03-15T00:00:00Z"
      }
    },
    "management_url" : "null",
    "subscriptions" : {

    },
    "entitlements" : {
      "filebox_pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "1983-03-15T00:00:00Z",
        "product_identifier" : "filebox_pro",
        "expires_date" : "null"
      }
    },
    "original_purchase_date" : "1983-03-15T00:00:00Z",
    "original_app_user_id" : "$RCAnonymousID%3A8e5a11e56b4246f2ab2b17058c01db1e",
    "last_seen" : "1983-03-15T00:00:00Z"
  }
}


body = JSON.stringify(objk);

$done({body});
