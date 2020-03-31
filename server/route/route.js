const express=require('express');
const routes=express.Router();
const dataModel= require('../model/dataModel');
const moment = require('moment');


routes.post('/data/view', (req, res)=>{

	const arr= Object.keys(req.body)
	

	const dataObj=arr.find((value, index)=> {
		if(value == 'Value_Date'){

		req.body['Value_Date']= new Date(moment(req.body['Value_Date'], 'DD-MM-YYYY'))
		return({
			value,
			index
		})
	}
	})

	const val= Object.values(req.body)
	console.log(val)
	
	if(arr.length == 0){
		const obj={}
		console.log(obj)
		dataModel.aggregate([
			 {$match: obj},
			{$sort: {'Value_Date': -1}}
			]).then(data=>{
			res.send(data)
		})
		/*dataModel.find(obj).then(data=>{
			res.send(data)
		})*/
	}


	if(arr.length == 1){
		const obj={}
		obj[arr[0]]=val[0];
		console.log(obj)
		dataModel.aggregate([
			 {$match: obj},
			{$sort: {'Value_Date': -1}}
			]).then(data=>{
			res.send(data)
		})
	}

	if(arr.length == 2){
		const obj={}
		obj[arr[0]]=val[0];
		obj[arr[1]]=val[1];
		dataModel.aggregate([
			 {$match: obj},
			{$sort: {'Value_Date': -1}}
			]).then(data=>{
			res.send(data)
		})
	}
	
	if(arr.length == 3){
		const obj={}
		obj[arr[0]]=val[0];
		obj[arr[1]]=val[1];
		obj[arr[2]]=val[2];
		console.log(obj)
		dataModel.aggregate([
			 {$match: obj},
			{$sort: {'Value_Date': -1}}
			]).then(data=>{
			res.send(data)
		})
	}

	if(arr.length == 4){
		const obj={}
		obj[arr[0]]=val[0];
		obj[arr[1]]=val[1];
		obj[arr[2]]=val[2];
		obj[arr[3]]=val[3];
		dataModel.aggregate([
			 {$match: obj},
			{$sort: {'Value_Date': -1}}
			]).then(data=>{
			res.send(data)
		})
	}

	if(arr.length == 5){
		const obj={}
		obj[arr[0]]=val[0];
		obj[arr[1]]=val[1];
		obj[arr[2]]=val[2];
		obj[arr[3]]=val[3];
		obj[arr[4]]=val[4];
		dataModel.aggregate([
			 {$match: obj},
			{$sort: {'Value_Date': -1}}
			]).then(data=>{
			res.send(data)
		})
	}
})

routes.post('/data/upload', async (req, res)=>{
	console.log(req.body['Value_Date'])
	req.body['Value_Date']= new Date(moment(req.body['Value_Date']))
	const { Dataset_Name, Value_Date, Business_Line, Valuation_Profile, Dataset_Group} = req.body;
	console.log('upload')
	console.log(Dataset_Name)
	console.log(Dataset_Group)
	console.log(Value_Date)
	console.log(Business_Line)
	console.log(Valuation_Profile)


	
	const model = new dataModel({Dataset_Name, Dataset_Group, Value_Date, Valuation_Profile, Business_Line})
	model.save().then((data)=>{
		console.log(data)
		res.send({upload: 'success'})
	}).catch((error)=>{
		res.send(error)
	})
	
})

module.exports=routes;