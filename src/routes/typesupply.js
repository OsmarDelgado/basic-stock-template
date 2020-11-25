import { Router } from 'express';
import * as typeSupplyCtrl from '../controllers/typesupply.controller';

const router = Router();

// Get all Type Supply
router.get( '/', typeSupplyCtrl.getTypeSupply );

// Get a Type Supply by Id
router.get( '/:id_type_supply', typeSupplyCtrl.getTypeSupplyById );

// Create a Type Supply
router.post( '/', typeSupplyCtrl.createTypeSupply );

// Update a Type Supply
router.put( '/:id_type_supply', typeSupplyCtrl.updateTypeSupply );

// Delete a Type Supply
router.delete( '/:id_type_supply', typeSupplyCtrl.deleteTypeSupply );

export default router;
