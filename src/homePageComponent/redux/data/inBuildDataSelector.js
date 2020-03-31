import { createSelector} from 'reselect';

const inBuildDataState= (rootReducer)=> rootReducer.inBuildData

export const inBuildDataHeader= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.header
	)

export const inBuildDataLoading= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.loading
	)

export const inBuildDataBivariateGetCol1= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateChose1
	)

export const inBuildDataBivariateGetCol2= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateChose2
	)

export const inBuildDataBivariateGetCol3= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateChose3
	)

export const inBuildDataBivariateGetCol4= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateChose4
	)

export const inBuildDataBivariateGetCol5= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateChose5
	)

export const inBuildDataBivariateGetCol6= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateChose6
	)

export const inBuildDataBivariateBoxPlotData= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateBoxPlotData
	)

export const inBuildDataBivariateQuantitativeData= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateQuantitativeData
	)

export const inBuildDataBivariateQualitativeData= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.bivariateQualitativeData
	)

export const inBuildDataGeographicalChoose= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.geographicalChose
	)

export const inBuildDataGeographicalData= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.geograhicalData
	)

export const inBuildDataStateGeoChoose= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.stateGeoChose
	)

export const inBuildDataStateGeographicalData= createSelector(
	[inBuildDataState],
	(inBuildData)=> inBuildData.stateGeoData
	)


