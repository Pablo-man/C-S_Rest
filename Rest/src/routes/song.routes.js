import {Router} from 'express'
import {listSong, createSong, updateSong, deleteSong, editSong} from '../controllers/song.controllers.js'
import { last } from 'underscore'

const router= new Router()

router.get('/', listSong)

router.get('/token', async(req, res)=>{
    const {name, lastname}= await req.params
    console.log(name, lastname)
})

router.post('/', createSong)

router.put('/:id', updateSong)

router.delete('/:id', deleteSong)

router.get('/:id', editSong)

router.get('/token/', (req, res)=>{
    const {name}= req.body
    console.log(name)
})

export default router;