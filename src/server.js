import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
const app = express()

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app.use(express.urlencoded())
app.use(express.json())

app.use(
	compression({ threshold: 0 }),
	sirv('static', {dev}),	
	sapper.middleware()
)
	// .get('/', (req, res) => {
	// 	res.end('Hello world :D')
	// })
	// .get('/users/', (req, res) => {
	// 	res.end('List All Users')
	// })
	// .get('/users/:id', (req, res) => {
	// 	res.end(`reading user ${req.params.id} info`)
	// })
	// .post('/users/:id', (req, res) => {
	// 	res.end('Creating a user')
	// })
	// .put('/users/:id', (req, res) => {
	// 	res.end(`Updating user ${req.params.id} info`)
	// })
	// .delete('/users/:id', (req, res) => {
	// 	res.end(`Destroying user ${req.params.id}`)
	// })
app.listen(PORT, err => {
		if (err) console.log('error', err);
	})
