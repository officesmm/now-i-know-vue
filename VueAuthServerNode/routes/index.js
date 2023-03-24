var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  
  var authenticationData = {
    Username : 'test',
    Password : 'password',
  };
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  var poolData = {
      UserPoolId : 'ap-northeast-1_3UORQIdHF',
      ClientId : '430p7s6tvg98grqddofojvlbi6'
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var userData = {
      Username : 'test',
      Pool : userPool
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
          var accessToken = result.getAccessToken().getJwtToken();
          
          /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
          var idToken = result.idToken.jwtToken;

          AWS.config.region = 'ap-northeast-1';
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId: 'ap-northeast-1_3UORQIdHF',
              Logins: {
                  'cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_3UORQIdHF': idToken
              }
          });

          AWS.config.credentials.get(function(err) {
              if (err) return console.error(err);
              else console.log(AWS.config.credentials);
                                                                                                                                                                                                              
              var s3 = new AWS.S3({
                  apiVersion: '2006-03-01',
                  params: {Bucket: 'foo-test-bucket'}
              });

              s3.listObjects({Delimiter: '/'}, function(err, data) {
                  console.log(err, data)
              });
          });
      },

      onFailure: function(err) {
          alert(err);
      },

  });

  res.send('login in process');
});

router.get('/signup', function(req, res, next) {

  var poolData = { UserPoolId : 'ap-northeast-1_3UORQIdHF',
      ClientId : '430p7s6tvg98grqddofojvlbi6'
  };
  var userPool = AWSCognitoIdentity.CognitoUserPool(poolData);

  var attributeList = [];

  var dataEmail = {
      Name : 'email',
      Value : 'jococ76353@terkoer.com'
  };

  var attributeEmail = AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

  attributeList.push(attributeEmail);

  userPool.signUp('animal', 'password', attributeList, null, function(err, result){
      if (err) return alert(err);
      cognitoUser = result.user;
      console.log('user name:', cognitoUser.getUsername());
      console.log('Welcome! you are one step away to login to our system, please ask your admin to confirm your account');
  });

  res.send('signup in process');
});


router.get('/test', function(req, res, next) {
    res.send('nothing');
});
module.exports = router;
