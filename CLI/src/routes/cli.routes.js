import {Router} from 'express'
import {editPage, startPage} from '../controllers/cli.controllers.js'

const router= new Router()

router.get('/', startPage)

router.get('/:id', editPage)

export default router;