import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const app = polka()

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app
	// .get('/', (req, res) => {
	// 	res.end('Hello world :D')
	// })
	.get('/users/', (req, res) => {
		res.end('List All Users')
	})
	.get('/users/:id', (req, res) => {
		res.end(`reading user ${req.params.id} info`)
	})
	.post('/users/:id', (req, res) => {
		res.end('Creating a user')
	})
	.put('/users/:id', (req, res) => {
		res.end(`Updating user ${req.params.id} info`)
	})
	.delete('/users/:id', (req, res) => {
		res.end(`Destroying user ${req.params.id}`)
	})
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
