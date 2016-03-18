Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {

    this.route('home', {
        path: '/home',
        template: 'home',
    });

    this.route('add_photo', {
        path: '/add_photo',
        template: 'addPhoto'
    });

});