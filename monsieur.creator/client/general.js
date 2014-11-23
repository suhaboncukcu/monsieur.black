if (Meteor.isClient) {
  Router.route('/', function(){
    this.render('monsieur');
  });
  

  
  
  Accounts.ui.config({
    passwordSignupFields: "EMAIL_ONLY"
  });
}