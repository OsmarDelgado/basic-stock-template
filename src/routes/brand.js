import { Router } from 'express';
import * as brandCtrl from '../controllers/brand.controller';

const router = Router();

// Get all Brands
router.get( '/', brandCtrl.getBrands );

// Get all Brands deactivated
router.get( '/deactivated/', brandCtrl.getBrandsDeactivated );

// Get a Brand by Id
router.get( '/:id_brand', brandCtrl.getBrandById );

// Create a Brand
router.post( '/', brandCtrl.createBrand );

// Update a Brand
router.put( '/:id_brand', brandCtrl.updateBrand );

// Deactivate a Brand
router.delete( '/:id_brand', brandCtrl.deactivateBrand );

// Reactivate a Brand
router.patch( '/deactivated/:id_brand', brandCtrl.reactiveBrand );

export default router;
