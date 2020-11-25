import { Router } from 'express';
import * as unitMeasureCtrl from '../controllers/unitmeasure.controller';

const router = Router();

// Get all Unit Measures
router.get( '/', unitMeasureCtrl.getUnitMeasures );

// Get a Unit Measures by Id
router.get( '/:id_unit_measure', unitMeasureCtrl.getUnitMeasureById );

// Create a Unit Measures
router.post( '/', unitMeasureCtrl.createUnitMeasure );

// Update a Unit Measures
router.put( '/:id_unit_measure', unitMeasureCtrl.updateUnitMeasure );

// Delete a Unit Measures
router.delete( '/:id_unit_measure', unitMeasureCtrl.deleteUnitMeasure );

export default router;
