const mongoose=require('mongoose');

const DataSchema= new mongoose.Schema({
	Dataset_Name:{type: String,  require: true, uppercase: true},
	Valuation_Profile:{type: String,  require: true, uppercase: true},
	Dataset_Group:{type: String,  require: true, uppercase: true},
	Business_Line:{type: String,  require: true, uppercase: true},
	Value_Date:{ type: Date, default:Date.now},
	created_At: { type: Date, default:Date.now}
})

module.exports=mongoose.model('DataModelCRIF', DataSchema);