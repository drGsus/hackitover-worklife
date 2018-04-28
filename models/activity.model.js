var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ActivitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    //templates: [{type: Schema.Types.ObjectId, ref: "Template"}]
})

ActivitySchema.plugin(mongoosePaginate);
const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;