import express  from 'express';
const router = express.Router();
import { masterControler } from '../controllers/masterControler.js';
import { userControler } from '../controllers/userControler.js';


router.get('/', masterControler)
router.get('/user', userControler)



export default router;