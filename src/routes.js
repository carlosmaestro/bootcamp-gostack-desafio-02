import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('server running...');
});

export default routes;
