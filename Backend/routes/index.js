import  Router from 'express';


const routes = Router();

//Hello
routes.get('/', (req, res) => {
    res.send('Boas! Está tudo a funcionar!');
});
    




export default routes;
