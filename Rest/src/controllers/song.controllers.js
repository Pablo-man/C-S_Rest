import songs from '../../cuartetoSongs.json' assert{type:"json"};
import _ from 'underscore';

export const createSong= (req, res)=>{
    try{
        const id= songs.length + 1;
        const {title, albun}= req.body;
        if(title && albun){
            const newSong= {...req.body, id};
            songs.push(newSong);
            res.redirect('http://localhost:3000/cli')
        }
        else{
            res.status(500).json({error: "There was an error"})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const listSong= (req, res)=>{
    res.json(songs)
}

export const updateSong= (req, res)=>{
    try{
        const {id}= req.params;
        const {title, albun}= req.body;
        if(id && title && albun){
            _.each(songs,(song, i)=>{
                if(song.id == id){
                    song.title=title;
                    song.albun=albun;
                }
            });
            res.json(songs);
        }
        else{
            res.status(500).json({error: "There was an error"});
        }
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

export const deleteSong= (req, res)=>{
    try{
        const {id} = req.params;
        if(id){
            _.each(songs ,(song,i)=>{
                if(song.id == id){
                    songs.splice(i,1);
                };
            });
            res.status(200).json({"message":"deleted song"})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const editSong= (req, res)=>{
    try{
        const {id} = req.params;
        let obSong
        if(id){
            _.each(songs ,(song,i)=>{
                if(song.id == id){
                    obSong= song
                };
            });
            res.json(obSong)
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}