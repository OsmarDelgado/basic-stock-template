import { Router } from 'express';
import * as categoryCtrl from '../controllers/category.controller';

const router = Router();

// Get all Categories
router.get( '/', categoryCtrl.getCategories );

// Get a Category by Id
router.get( '/:id_category', categoryCtrl.getCategoryById );

// Create a Category
router.post( '/', categoryCtrl.createCategory );

// Update a Category
router.put( '/:id_category', categoryCtrl.updateCategory );

// Delete a Category
router.delete( '/:id_category', categoryCtrl.deleteCategory );

export default router;
