module.exports = {
    //Visit URl from launch_url on nightwatch.json
    url: function () {
        return this.api.launchUrl;
    },
    //Initiate elements
    elements: {
        signUpForm: 'div.gr27e:nth-child(1)',
        loginLink: 'p.izU2O>a'
    }
};