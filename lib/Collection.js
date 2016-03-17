/**
 * Created by MacBookPro on 17/03/16.
 */
Photos = new Mongo.Collection("photos");

PhotosImages = new FS.Collection("PhotosImages",{
    stores: [new FS.Store.GridFS("PhotosImages")]
});