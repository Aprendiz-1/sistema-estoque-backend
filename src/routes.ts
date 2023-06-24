import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { EditProductController } from "./controllers/product/EditProductController";
import { EditUserController } from "./controllers/user/EditUserController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { DetailProductController } from "./controllers/product/DetailProductController";
import { ListProductsController } from "./controllers/product/ListProductsController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { RegisterSaleController } from "./controllers/historic/RegisterSaleController";
import { ListHistoricController } from "./controllers/historic/ListHistoricController";
import { CountItemsController } from "./controllers/user/CountItemsController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import uploadConfig from './config/multer';
import multer from "multer";

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

router.post('/signup', upload.single('file'), new CreateUserController().handle);

router.post('/signin', new AuthUserController().handle);

router.put('/user/edit', isAuthenticated, upload.single('file'), new EditUserController().handle);

router.get('/user/detail', isAuthenticated, new DetailUserController().handle);

router.get('/count', isAuthenticated, new CountItemsController().handle);


router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);

router.put('/product/edit', isAuthenticated, upload.single('file'), new EditProductController().handle);

router.delete('/product/delete', isAuthenticated, new DeleteProductController().handle);

router.get('/product/detail', isAuthenticated, new DetailProductController().handle);

router.get('/products', isAuthenticated, new ListProductsController().handle);


router.post('/category', isAuthenticated, new CreateCategoryController().handle);

router.delete('/category/delete', isAuthenticated, new DeleteCategoryController().handle);

router.get('/categories', isAuthenticated, new ListCategoriesController().handle);


router.post('/sale', isAuthenticated, new RegisterSaleController().handle);

router.get('/historic', isAuthenticated, new ListHistoricController().handle);

export { router };