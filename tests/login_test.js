module.exports = {
  //Test case of valid login
  'Valid Login': function (client) {
    //Initiate default page from signup_page.js
    const defaultPage = client.page.signup_page();
    //Initiate login page from login_page.js
    const loginPage = client.page.login_page();
    //Initiate home page from home_page.js
    const homePage = client.page.home_page();

    //Navigate to default page
    defaultPage.navigate()
      //Wait sign up form until visible, maximum 10000 ms
      .waitForElementVisible('@signUpForm', 10000,
        'Sign up form visible')
      //Verify login link href attribute has /accounts/login
      .verify.attributeContains('@loginLink', 'href', '/accounts/login',
        'Attribute href of login link contains "/accounts/login"');
    //Click login link from default page
    defaultPage.click('@loginLink');

    //Wait login form until visible on login page, maximum 10000 ms
    loginPage
      .waitForElementVisible('@loginForm', 10000,
        'Login form visible')
      //Verify <main> element contains Log in text
      .verify.containsText('main', 'Log in',
        'Element <main> contains text: "Log in"');

    //Verify login button has not present or disabled
    loginPage
      .verify.elementNotPresent('@loginButton',
        'Login button disabled');

    //Input value on username field
    loginPage
      .setValue('@usernameInput', 'YOUR_VALID_USERNAME')
      //Verify username field value equal with expected input
      .getValue('@usernameInput', function (result) {
        this.verify.equal(result.value, 'YOUR_EXPECTED_USERNAME');
      });

    //Input value on password field
    loginPage
      .setValue('@passwordInput', 'YOUR_VALID_PASSWORD')
      //Verify password field value equal with expected input
      .getValue('@passwordInput', function (result) {
        this.verify.equal(result.value, 'YOUR_EXPECTED_PASSWORD');
      });

    //Verify login button has present or enabled
    loginPage
      .verify.elementPresent('@loginButton',
        'Login button enabled');
    //Verify login button has cursor: pointer css property
    loginPage
      .verify.cssProperty('@loginButton', 'cursor', 'pointer',
        'Login button has css property "cursor: pointer"');

    //Click login button from login page
    loginPage
      .click('@loginButton');

    //Wait profile icon until visible on home page, maximum 10000 ms
    homePage
      .waitForElementVisible('@profileIcon', 10000,
        'Profile icon visible');

    //End connection
    client.end();
  }
};