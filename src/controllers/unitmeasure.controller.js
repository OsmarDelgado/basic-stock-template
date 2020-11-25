import UnitMeasure from '../models/UnitMeasure';

// Get all Unit Measures
export const getUnitMeasures = async ( req, res ) => {
    // res.send( 'Get all unit measures' );
    try {
        const unit_measures = await UnitMeasure.findAll( {
            where : {
                active : true
            }
        } );
        if( unit_measures == '' ) {
            res.status(200).json( {
                message : "There are not unit measure yet"
            } );
        } else {
            res.status(200).json( {
                message : "Unit Measure",
                data : unit_measures
            } );
        }
    } catch (error) {
        res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

// Get a Unit Measures by Id
export const getUnitMeasureById = async ( req, res ) => {
    // res.send( 'Get a unit measure by Id' );
    const { id_unit_measure } = req.params;
    const unit_measure = await UnitMeasure.findOne( {
        where : {
            id : id_unit_measure,
            active : true
        }
    } );
    
    if( unit_measure != null ) {
        return res.status(200).json( {
            message : "Unit Measure",
            data : unit_measure
        } );
    } else {
        res.status(404).json( {
            message : "Unit Measure does not exist",
            data : {}
        } );
    }
};

// Create a Unit Measures
export const createUnitMeasure = async ( req, res ) => {
    // res.send( 'Create unit measure' );
    const { name } = req.body;
    try {
        const newUnitMeasure = await UnitMeasure.create( {
            name
        }, {
            fields : [ 'name', 'active' ]
        } );

        if( newUnitMeasure ) {
            return res.status(201).json( {
                message : "Unit Measure created succesfully",
                data : newUnitMeasure
            } );
        }
    } catch (error) {
        res.status(500).json( {
            message : "Something goes wrong",
            data : {}
        } );
    }
};

// Update a Unit Measures
export const updateUnitMeasure = async ( req, res ) => {
    // res.send( 'Update a unit measure' );
    const { id_unit_measure } = req.params;
    const { name } = req.body;

    try {
        const updateUnitMeasure = await UnitMeasure.update( {
            name
        }, {
            attributes : ['name', 'active'],
            where : {
                id : id_unit_measure
            }
        } );

        return res.status(204).json( {
            message : "Unit Measure updated succesfully",
            data : updateUnitMeasure
        } );
    } catch (error) {
        res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Delete a Unit Measures
export const deleteUnitMeasure = async ( req, res ) => {
    // res.send( 'Deactivate a unit measure' );
    const { id_unit_measure } = req.params;
    const active = false;

    try {
        const deleteUnitMeasure = await UnitMeasure.update( {
            active
        }, {
            attributes : [ 'active' ],
            where : {
                id : id_unit_measure
            }
        } );

        return res.status(204).json( {
            message : "Unit Measure deleted succesfully",
            data : deleteUnitMeasure
        } );
    } catch (error) {
        res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};
