/**
 * Created by MacBookPro on 17/03/16.
 */
Template.home.helpers({
   photos : function(){
       return Photos.find();
   }
});