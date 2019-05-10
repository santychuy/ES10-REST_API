import {Router} from 'express';
const router = Router();

//DB Connection
import {connect} from '../db';
import {ObjectID} from 'mongodb';

router.get('/', async (req, res) =>{
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result);
});

router.post('/', async (req, res) =>{
    const db = await connect();
    const tasks = {
        title: req.body.title,
        description: req.body.description
    };
    const result = await db.collection('tasks').insertOne(tasks);
    res.json(result);
});

router.get('/:id', async (req, res) =>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({ _id: ObjectID(id)});
    res.json(result);
});

router.delete('/:id', async (req, res) =>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('tasks').deleteOne({_id: ObjectID(id)});
    res.json({
        message: `Task: ${id} eliminada`,
        result
    });
});

export default router;