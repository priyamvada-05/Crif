const express=require('express');
const mongoose = require('mongoose');
const dataModel = require('./model/dataModel');
//const excel = require('Book1.csv');
const csvjson = require('csvjson');
const fs = require('fs');
const config=require('./config');
var moment = require('moment');
const routeData= require('./route/route');
//const app= express();
const path=require('path');

mongoose.connect(config.connection_string , {useNewUrlParser: true, useUnifiedTopology: true}).then((client)=>{

		
	
		})
app= express();
app.use(express.json({ limit: '10MB' }));
app.use('/api/v1/application', routeData);

const appPath=path.join(__dirname, '..', 'build');
app.use(express.static(appPath));

app.get('*', function(req, res){
		res.sendFile(path.resolve(appPath, 'index.html'));
});

app.listen(process.env.PORT || 3001, function(){
		console.log('Server is avaiable and listening to port');

});
		
/*fs.readFile('./data.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
    const dataJson = csvjson.toObject(fileContent);
    //console.log(dataJson)
    const newData= dataJson.map(item=>{
    	const date= item['Value_Date'];
    	const newDate= new moment(date, "DD-MM-YYYY")
    	return({
    		...item,
    		Value_Date: newDate
    	})
    })
    //console.log(newData)
    newData.forEach(async (row)=>{
			
			const model=new dataModel(row);
			await model.save(err=>{
				if(err){
					console.log(err)
				}
				console.log('data is saved to db')
			})
		})
});*/


/*mongoose.connect(config.connection_string , {useNewUrlParser: true, useUnifiedTopology: true}).then((client)=>{

		
		// -------- Below is for saving data to MongoDB
		excel.data.forEach(row=>{
			
			const model=new dataModel(row);
			model.save(err=>{
				if(err){
					console.log(err)
				}
				console.log('data is saved to db')
			})
		})
		})*/