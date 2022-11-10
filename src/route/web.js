import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {


    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/edit-user/:id', homeController.getEditPage)
    router.post('/update-user', homeController.postUpdateUser)
    // router.get('/about', (req, res) => {
    //     res.send(`I'm Nuong and i am a student!!`)
    // })
    // router.get('/about', homeController.getHomepageabout);

    return app.use('/', router)
}
// module.exports = initWebRoute;
export default initWebRoute;