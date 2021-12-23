const {Template_Model}    = require('../models');

var Template = {};

Template.list = async function(query){
    return await Template_Model.find(query);
}

Template.create = async function(query){
    return await Template_Model.create(query);
}

Template.view = async function(query){
    return await Template_Model.findOne(query);
}

Template.update = function(id, query){

    // await Template_Model.findByIdAndUpdate(id,{ $push: query },{upsert : false}, (err) => {
    //        if (err) {
    //           return err;
    //        }
    //     }
    // ).exec();

    // Template_Model.findOneAndUpdate(
    //     id,
    //     query,
    //     {upsert : true},
    //     (err, doc)=>{
    //         if (err) {
    //             return err;
    //         }else{
    //             return doc;
    //      } 
    // });

    //return await Template_Model.findOneAndUpdate(id, query, { new: true });

    Template_Model.findByIdAndUpdate(id, query, {new: true}, function(err, doc){
        if(err){
            return err;
        }else{
            return doc;  
        }
    });
}

Template.delete = async function(id){
    return await Template_Model.findOneAndRemove({_id: id});
}

Template.deleteAll = async function(id){
    return await Template_Model.deleteMany({});
}

Template.findTemplateByName = async function(name){
  return await Template_Model.findTemplateByName(name);
}


exports.service = Template;