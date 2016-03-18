/**
 * Created by MacBookPro on 18/03/16.
 */
this.Pages = new Meteor.Pagination(Photos, {
    router: "iron-router",
    routerTemplate: "home",
    routerLayout: "layout",
    sort: {
        id: 1
    },
    perPage: 3,
    templateName : 'home',
    itemTemplate : 'photos',

});