export const addLimit=(limit)=>{
	return limit+4
}

export const subLimit=(limit)=>{
	if(limit > 0){
	return limit-4
}
	else{
		return 0
	}
}