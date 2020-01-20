// contactModel.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Setup schema
var itemSchema = mongoose.Schema(
    {
        title: {
            type: String
        }
    },
    {
        versionKey: false
    }
);
// Export Item model
var Item = (module.exports = mongoose.model('item', itemSchema));
module.exports.get = function(callback, limit) {
    Item.find(callback).limit(limit);
};
