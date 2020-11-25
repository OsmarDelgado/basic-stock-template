import { Router } from 'express';
import * as unitMeasureCtrl from '../controllers/unitmeasure.controller';

const router = Router();

// Get all Unit Measures
router.get( '/', unitMeasureCtrl.getUnitMeasures );

// Get all Unit Measures deactivated
router.get( '/deactivated/', unitMeasureCtrl.getUnitMeasuresDeactivated );

// Get a Unit Measures by Id
router.get( '/:id_unit_measure', unitMeasureCtrl.getUnitMeasureById );

// Create a Unit Measures
router.post( '/', unitMeasureCtrl.createUnitMeasure );

// Update a Unit Measures
router.put( '/:id_unit_measure', unitMeasureCtrl.updateUnitMeasure );

// Deactivate a Unit Measure
router.delete( '/:id_unit_measure', unitMeasureCtrl.deactivateUnitMeasure );

// Reactivate a Unit Measure
router.patch( '/deactivated/:id_unit_measure', unitMeasureCtrl.reactiveUnitMeasure );

export default router;
