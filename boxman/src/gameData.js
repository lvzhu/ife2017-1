var gameData = [{
	name: 'level 1',
	size: { width: 8, height: 8},
	mpoint: { x: 4, y: 4},
	map: [
		[00,00,05,05,05,00,00,00],
		[00,00,05,20,05,00,00,00],
		[00,00,05,10,05,05,05,05],
		[05,05,05,80,10,80,20,05],
		[05,20,10,80,60,05,05,05],
		[05,05,05,05,80,05,00,00],
		[00,00,00,05,20,05,00,00],
		[00,00,00,05,05,05,00,00]
	]
},
{
	name: 'level 2',
	size: { width: 9, height: 9},
	mpoint: { x: 3, y: 3},
	map: [
		[05,05,05,05,05,00,00,00,00],
		[05,10,10,10,05,00,00,00,00],
		[05,10,80,10,05,00,05,05,05],
		[05,10,80,60,05,00,05,20,05],
		[05,05,05,80,05,05,05,20,05],
		[00,05,05,10,10,10,10,20,05],
		[00,05,10,10,10,05,10,10,05],
		[00,05,10,10,10,05,05,05,05],
		[00,05,05,05,05,05,00,00,00]
	]
},
{
	name: 'level 3',
	size: { width: 10, height: 7},
	mpoint: { x: 3, y: 3},
	map: [
		[00,05,05,05,05,05,05,05,00,00],
		[00,05,10,10,10,10,10,05,05,05],
		[05,05,80,05,05,05,10,10,10,05],
		[05,10,10,60,80,10,10,80,10,05],
		[05,10,20,20,05,10,80,10,05,05],
		[05,05,20,20,05,10,10,10,05,00],
		[00,05,05,05,05,05,05,05,05,00]
	]
},
{
	name: 'level 4',
	size: { width: 6, height: 8},
	mpoint: { x: 4, y: 3},
	map: [
		[00,05,05,05,05,00],
		[05,05,10,10,05,00],
		[05,10,10,80,05,00],
		[05,05,10,10,05,05],
		[05,05,80,60,10,05],
		[05,20,80,80,10,05],
		[05,20,20,90,20,05],
		[05,05,05,05,05,05]
	]
},
{
	name: 'level 5',
	size: { width: 8, height: 8},
	mpoint: { x: 1, y: 3},
	map: [
		[00,05,05,05,05,05,00,00],
		[00,05,10,60,05,05,05,00],
		[00,05,10,80,10,10,05,00],
		[05,05,05,10,05,10,05,05],
		[05,20,05,10,05,10,10,05],
		[05,20,80,10,10,05,10,05],
		[05,20,10,10,10,80,10,05],
		[05,05,05,05,05,05,05,05]
	]
},
{
	name: 'level 6',
	size: { width: 13, height: 11},
	mpoint: { x: 8, y: 11},
	map: [
		[00,00,00,05,05,05,05,05,05,05,00,00,00],
		[05,05,05,05,10,10,10,10,10,05,00,00,00],
		[05,10,10,10,20,05,05,05,10,05,00,00,00],
		[05,10,05,10,05,10,10,10,10,05,05,00,00],
		[05,10,05,10,80,10,80,05,20,10,05,00,00],
		[05,10,05,10,10,90,10,10,05,10,05,00,00],
		[05,10,20,05,80,10,80,10,05,10,05,00,00],
		[05,05,10,10,10,10,05,10,05,10,05,05,05],
		[00,05,10,05,05,05,20,10,10,10,10,60,05],
		[00,05,10,10,10,10,10,05,05,10,10,10,05],
		[00,05,05,05,05,05,05,05,05,05,05,05,05]
	]
},
{
	name: 'level 7',
	size: { width: 10, height: 8},
	mpoint: { x: 1, y: 8},
	map: [
		[00,00,00,05,05,05,05,05,05,05],
		[00,00,05,05,10,10,05,10,60,05],
		[00,00,05,10,10,10,05,80,10,05],
		[00,00,05,80,10,10,80,10,10,05],
		[00,00,05,10,80,05,05,10,10,05],
		[05,05,05,10,80,10,05,10,05,05],
		[05,20,20,20,20,20,10,10,05,00],
		[05,05,05,05,05,05,05,05,05,00]
	]
},
{
	name: 'level 8',
	size: { width: 10, height: 7},
	mpoint: { x: 3, y: 8},
	map: [
		[00,00,00,05,05,05,05,05,05,00],
		[00,05,05,05,10,10,10,10,05,00],
		[05,05,20,10,80,05,05,10,05,05],
		[05,20,20,80,10,80,10,10,60,05],
		[05,20,20,10,80,10,80,10,05,05],
		[05,05,05,05,05,05,10,10,05,00],
		[00,00,00,00,00,05,05,05,05,00]
	]
},
{
	name: 'level 9',
	size: { width: 11, height: 9},
	mpoint: { x: 7, y: 9},
	map: [
		[00,05,05,05,05,05,05,05,05,05,00],
		[00,05,10,10,05,05,10,10,10,05,00],
		[00,05,10,10,10,80,10,10,10,05,00],
		[00,05,80,10,05,05,05,10,80,05,00],
		[00,05,10,05,20,20,20,05,10,05,00],
		[05,05,10,05,20,20,20,05,10,05,05],
		[05,10,80,10,10,80,10,10,80,10,05],
		[05,10,10,10,10,10,05,10,10,60,05],
		[05,05,05,05,05,05,05,05,05,05,05]
	]
},
{
	name: 'level 10',
	size: { width: 8, height: 7},
	mpoint: { x: 3, y: 1},
	map: [
		[00,00,05,05,05,05,05,05],
		[00,00,05,10,10,10,10,05],
		[05,05,05,80,80,80,10,05],
		[05,60,10,80,20,20,10,05],
		[05,10,80,20,20,20,05,05],
		[05,05,05,05,10,10,05,00],
		[00,00,00,05,05,05,05,00]
	]
},
{
	name: 'level 11',
	size: { width: 12, height: 6},
	mpoint: { x: 4, y: 8},
	map: [
		[00,05,05,05,05,00,00,05,05,05,05,05],
		[05,05,10,10,05,00,00,05,10,10,10,05],
		[05,10,80,10,05,05,05,05,80,10,10,05],
		[05,10,10,80,20,20,20,20,10,80,10,05],
		[05,05,10,10,10,10,05,10,60,10,05,05],
		[00,05,05,05,05,05,05,05,05,05,05,00]
	]
},
{
	name: 'level 12',
	size: { width: 8, height: 7},
	mpoint: { x: 1, y: 5},
	map: [
		[00,00,05,05,05,05,05,00],
		[05,05,05,10,10,60,05,00],
		[05,10,10,80,20,10,05,05],
		[05,10,10,20,80,20,10,05],
		[05,05,05,10,90,80,10,05],
		[00,00,05,10,10,10,05,05],
		[00,00,05,05,05,05,05,00]
	]
},
{
	name: 'level 13',
	size: { width: 8, height: 8},
	mpoint: { x: 6, y: 3},
	map: [
		[00,00,05,05,05,05,00,00],
		[00,00,05,20,20,05,00,00],
		[00,05,05,10,20,05,05,00],
		[00,05,10,10,80,20,05,00],
		[05,05,10,80,10,10,05,05],
		[05,10,10,05,80,80,10,05],
		[05,10,10,60,10,10,10,05],
		[05,05,05,05,05,05,05,05]
	]
},
{
	name: 'level 14',
	size: { width: 8, height: 7},
	mpoint: { x: 3, y: 1},
	map: [
		[05,05,05,05,05,05,05,05],
		[05,10,10,05,10,10,10,05],
		[05,10,80,20,20,80,10,05],
		[05,60,80,20,90,10,05,05],
		[05,10,80,20,20,80,10,05],
		[05,10,10,05,10,10,10,05],
		[05,05,05,05,05,05,05,05]
	]
},
{
	name: 'level 15',
	size: { width: 8, height: 7},
	mpoint: { x: 5, y: 4},
	map: [
		[00,05,05,05,05,05,05,00],
		[05,05,10,10,10,10,05,05],
		[05,10,80,10,80,80,10,05],
		[05,20,20,20,20,20,20,05],
		[05,10,80,80,10,80,10,05],
		[05,05,05,10,60,05,05,05],
		[00,00,05,05,05,05,00,00]
	]
}];