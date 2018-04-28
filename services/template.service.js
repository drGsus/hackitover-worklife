var Template = require("../models/template.model")
_this = this;

exports.getTemplates = async function(query,page,limit)
{
    var options = 
    {
        page,
        limit
    }

    try
    {
        var templates = await Template.paginate(query, options);
        return templates;
    }
    catch(e)
    {
        throw Error("Error while Paginating Templates");
    }
}

exports.createTemplate = async function(template){
    var newTemplate = new Template({
        type: template.type,
        logoURL: template.logoURL
    })

    try{
        var savedTemplate = await newTemplate.save();
        return savedTemplate;
    }catch(e){
        throw Error("Error while creating Template");
    }
}

exports.updateTemplate = async function(template){
    var id = template.id;
    try{
        var oldTemplate = await Template.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Template");
    }

    if (!oldTemplate){
        return false;
    }

    oldTemplate.type = template.type;
    oldTemplate.logoURL = template.logoURL;

    try{
        var savedTemplate = await oldTemplate.save();
        return savedTemplate;
    }catch(e)
    {
        throw Error("And Error Occurred while updating the Template");
    }
}

exports.deleteTemplate = async function(id){
    try
    {
        var deleted = await Template.remove({_id : id}, function(err){
            if (err){
                throw Error ("There was an Error on deletion");
            }
            return deleted;
        });
    }catch(e)
    {
        throw Error("Error Occured While Deleting the Template");
    }
}