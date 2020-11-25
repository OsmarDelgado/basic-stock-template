import { Router } from 'express';
import * as supplyCtrl from '../controllers/supply.controller';

const router = Router();

// Get all Supplies
router.get( '/', supplyCtrl.getSupplies );

// Get all Supplies deactivated
router.get( '/deactivated/', supplyCtrl.getSuppliesDeactivated );

// Get a Supply by Id
router.get( '/:id_supply', supplyCtrl.getSupplyById );

// Create a Supply
router.post( '/', supplyCtrl.createSupply );

// Update a Supply
router.put( '/:id_supply', supplyCtrl.updateSupply );

// Deactivate a Supply
router.delete( '/:id_supply', supplyCtrl.deactivateSupply );

// Reactivate a Supply
router.patch( '/deactivated/:id_supply', supplyCtrl.reactiveSupply );

export default router;