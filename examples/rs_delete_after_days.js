const qiniu = require("qiniu");
const proc = require("process");

var accessKey = proc.env.QINIU_ACCESS_KEY;
var secretKey = proc.env.QINIU_SECRET_KEY;
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var config = new qiniu.conf.Config();
//config.useHttpsDomain = true;
config.zone = qiniu.zone.Zone_z0;
var bucketManager = new qiniu.rs.BucketManager(mac, config);
var bucket = proc.env.QINIU_TEST_BUCKET;
var key = "qiniu_new_copy.mp4";
var days = 10;

bucketManager.deleteAfterDays(bucket, key, days, function(err, respBody,
  respInfo) {
  if (err) {
    console.log(err);
    //throw err;
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
});
