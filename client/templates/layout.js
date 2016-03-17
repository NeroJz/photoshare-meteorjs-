/**
 * Created by MacBookPro on 17/03/16.
 */
Template.layout.events({
    "click .popup" : function(event){
        var imgPath = $(event.currentTarget).data('image');
        if (imgPath) {
            sImageBox.open(imgPath, {
                animation: 'slideInDown',
                originalHeight: true
            });
        }
    }
});