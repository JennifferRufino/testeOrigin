import { Router, Request, Response } from 'express';
import { data } from '../data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json(data);
});

export default router;
