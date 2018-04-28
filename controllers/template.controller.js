var TemplateService = require("../services/template.service");
var jwt = require('jsonwebtoken');
var User = require("../models/user.model");
_this=this;

exports.getTemplates = async function(req, res, next){
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;
    
    try{
        var templates = await TemplateService.getTemplates({}, page, limit);
        return res.status(200).json({status: 200, data: templates, message: "Successfully Received Templates"});
    }catch(e)
    {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createTemplate = async function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user){

    });
    var template = {
        type: req.body.type,
        logoURL: req.body.logoURL
    }

    try{
        var createdTemplate = await TemplateService.createTemplate(template);
        user.templates.push(createdTemplate);
        user.save();
        return res.status(201).json({status: 201, data:createdTemplate, message: "Successfully Created Template"});
    }
    catch(e)
    {
        return res.status(400).json({status: 400, message: "Template Creation was Unsuccessful"});
    }
}

exports.updateTemplate = async function(req, res, next)
{
    if (!req.body._id){
        return res.status(400).json({status: 400, message: "Id must be present"});
    }

    var id = req.body._id;

    console.log(req.body);

    var template =
    {
        id,
        type: req.body.type ? req.body.type : null,
        logoURL: req.body.logoURL ? req.body.logoURL : null
    }

    try
    {
        var updatedTemplate = await TemplateService.updateTemplate(template);
        return res.status(200).json({status: 200, data: updatedTemplate, message: "Successfully Updated Template"});
    }
    catch(e)
    {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.removeTemplate = async function(req, res, next)
{
    var id = req.params.id;
    try{
        var deleted = await TemplateService.deleteTemplate(id);
        return res.status(204).json({status: 204, message: "Successfully Template Deleted"});
    }
    catch(e)
    {
        return res.status(400).json({status: 400, message: e.message});
    }
}