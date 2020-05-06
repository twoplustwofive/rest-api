// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

/*  This is a sample API route. */
// const Player = require('../models/Player')
// const Team = require('../models/Team')

const controllers = require('../controllers')

router.get('/:resource',(req,res)=>{

	const resource = req.params.resource
	const controller = controllers[resource]
	const filters = req.query
	if(controller == null)
	{
		res.json({
			confirmation:'fail',
			message: 'Invalid Request'
		})
		return
	}

	controller.get(filters)
		.then(data=>{
			res.json({
				confirmation:"success",
				data:data
			})
		})
		.catch(err=>{
			 res.json({
				 confirmation:'fail',
				 message:err.message
			 })
		})

})

router.get('/:resource/:id',(req,res )=>{
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]

	if(controller == null)
	{
		res.json({
			confirmation:'fail',
			message: 'Invalid Request'
		})
		return
	}

	controller.getById(id)
		.then(data=>{
			res.json({
				confirmation:'success',
				data:data
			})
		})
		.catch(err=>{
			res.json({
				confirmation:'fail',
				message:err.message
			})
		})


})

router.post('/:resource',(req,res)=>{
	const resource = req.params.resource
	const controller = controllers[resource]
	if(controller==null)
	{
		res.json({
			confirmation:'fail',
			message:'Invalid Resource'
		})
		return
	}

	controller.post(req.body)
		.then(data=>{
			 res.json({
				 confirmation:'success',
				 data:data
			 })
		})
		.catch(err=>{
			res.json({
				confirmation:'fail',
				message:err.message
			})
		})

})

router.delete('/:resource/:id',(req,res)=>{
	const resource = req.params.resource
	const controller = controllers[resource]
	if(controller==null)
	{
		res.json({
			confirmation:'fail',
			message:'Invalid Resource'
		})
		return
	}
	const id = req.params.id
	controller.delete(id)
		.then(data=>{
			res.json({
				confirmation:'success',
				data:data
			})
		})
		.catch(err=>{
			res.json({
				confirmation:'fail',
				message:err.message
			})
		})

})

router.put('/:resource/:id',(req,res)=>{
	const resource = req.params.resource
	const controller = controllers[resource]
	if(controller==null)
	{
		res.json({
			confirmation:'fail',
			message:'Invalid Resource'
		})
		return
	}
	const id = req.params.id

	controller.put(id,req.body)
		.then(data=>{
			res.json({
				confirmation:'success',
				data:data
			})
		})
		.catch(err=>{
			res.json({
				confirmation:'fail',
				message:err.message
			})
		})

})

module.exports = router
