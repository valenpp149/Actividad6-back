import {getConnection} from "../database/database";

const getBooks= async (req, res)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM libros");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }  
}

const getBookById= async (req, res)=>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM libros WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }  
}

const newBook = async (req, res)=>{
    try{
        const {name, author, year, pages} = req.body;
        if(name==undefined || author==undefined || year==undefined || pages==undefined){
            res.status(400).json({messaje: "Bad Request. Please fill all fields"});
        }
        const book = {
            name, author, year, pages 
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO libros SET ?", book);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }  
}

const deleteBook = async (req, res)=>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM libros WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }  
}

const updateBook = async (req, res)=>{
    try{
        const {id} = req.params;
        const {name, author, year, pages} = req.body;
        if(id==undefined || name==undefined || author==undefined || year==undefined || pages==undefined){
            res.status(400).json({messaje: "Bad Request. Please fill all fields"});
        }
        const book = {
            name, author, year, pages
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE libros SET ? WHERE id = ?", [book, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }  
}

export const methods = {
    getBooks,
    newBook,
    getBookById,
    deleteBook,
    updateBook
};