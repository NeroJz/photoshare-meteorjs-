/**
 * Created by MacBookPro on 18/03/16.
 */
this.Pages = new Meteor.Pagination(Photos, {
    router: "iron-router",
    routerTemplate: "home",
    routerLayout: "layout",
    perPage: 3,
    templateName : 'home',
    itemTemplate : 'photos',

});
