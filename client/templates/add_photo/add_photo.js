/**
 * Created by MacBookPro on 17/03/16.
 */
Template.addPhoto.events({
    'submit #frmAddPhoto': function(event){
        var name = event.target.photoname.value;
        var description = event.target.description.value;

        var file = $('#photo').get(0).files[0];

        if(file){
            var fsFile = new FS.File(file);

            PhotosImages.insert(fsFile, function(err, result){
                if(!err){
                    var image = '/cfs/files/PhotosImages/' + result._id;

                    Photos.insert({
                        name: name,
                        description: description,
                        image: image,
                        createdAt: new Date()
                    });
                }
            });

        }

        event.target.photoname.value = "";
        event.target.description.value = "";

        FlashMessages.sendSuccess("Photo Uploaded");
        Router.go('/');

        return false;
    }
});