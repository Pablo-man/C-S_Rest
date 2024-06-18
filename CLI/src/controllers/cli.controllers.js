

export const startPage= async (req, res)=>{
    const rows = await fetch('http://localhost:8080/rest/songs',{
        method: 'GET'
    })
    const data= await rows.json();
    res.render('index',{
        data
    })
}

export const editPage= async(req, res)=>{
    const {id}= req.params;
    const rows = await fetch(`http://localhost:8080/rest/songs/${id}`,{
        method: 'GET'
    })
    const data= await rows.json()
    res.render('updateSong',{
        data
    })
}