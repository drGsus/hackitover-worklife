var express = require('express');

var router = express.Router();

var TemplateController = require("../../controllers/template.controller");

var jwt = require('jsonwebtoken');

router.get('/', TemplateController.getTemplates);
// router.use('/',function(req,res,next){
//     jwt.verify(req.query.token, 'secret', function(err, decoded){
//         if (err){
//             return res.status(401).json({
//                 title: "Not Authenticated",
//                 error: err
//             });
//         }
//         next();
//     })
// });
router.post('/', TemplateController.createTemplate);
router.put('/', TemplateController.updateTemplate);
router.delete('/:id', TemplateController.removeTemplate);

module.exports = router;