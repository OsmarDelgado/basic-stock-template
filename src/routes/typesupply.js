import { Router } from 'express';
import * as typeSupplyCtrl from '../controllers/typesupply.controller';

const router = Router();

// Get all Type Supply
router.get( '/', typeSupplyCtrl.getTypeSupply );

// Get all Type Supplies deactivated
router.get( '/deactivated/', typeSupplyCtrl.getTypeSupplyDeactivated );

// Get a Type Supply by Id
router.get( '/:id_type_supply', typeSupplyCtrl.getTypeSupplyById );

// Create a Type Supply
router.post( '/', typeSupplyCtrl.createTypeSupply );

// Update a Type Supply
router.put( '/:id_type_supply', typeSupplyCtrl.updateTypeSupply );

// Deactivate a Category
router.delete( '/:id_type_supply', typeSupplyCtrl.deactivateTypeSupply );

// Reactivate a Category
router.patch( '/deactivated/:id_type_supply', typeSupplyCtrl.reactiveTypeSupply );

export default router;
