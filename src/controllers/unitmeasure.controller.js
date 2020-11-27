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
            return res.status(404).json( {
                message : "There are not unit measure yet"
            } );
        } else {
            return res.status(200).json( {
                message : "Unit Measure",
                data : unit_measures
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

// Get all Unit Measures deactivated
export const getUnitMeasuresDeactivated = async ( req, res ) => {
    // res.send( 'Get all unit measures deactivated' );
    try {
        const unit_measures = await UnitMeasure.findAll( {
            where : {
                active : false
            }
        } );
        if( unit_measures == '' ) {
            return res.status(404).json( {
                message : "There are not unit measures deactivated"
            } );
        } else {
            return res.status(200).json( {
                message : "Unit measure deactivated",
                data : unit_measures
            } );
        }
    } catch (error) {
        return res.status(500).json( {
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
        return res.status(404).json( {
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
        const unit_measure = await UnitMeasure.findOne( {
            attributes : [ 'name', 'active' ],
            where : {
                name
            }
        } );
        if( unit_measure && unit_measure.active === true ) {
            return res.status(409).json( {
                message : "Unit measure does exist",
                data : unit_measure
            } );
        } else if ( unit_measure && unit_measure.active === false ) {
            return res.status(409).json( {
                message : "Unit measure is inactive",
                data : unit_measure
            } );
        } else {
            const newUnitMeasure = await UnitMeasure.create( {
                name,
            }, {
                fields : [ 'name', 'active' ]
            } );
    
            if( newUnitMeasure ) {
                return res.status(201).json( {
                    message : "Unit measure created succesfully",
                    data : newUnitMeasure
                } );
            }
        }
    } catch (error) {
        console.log( error );
        return res.status(500).json( {
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
        const unit_measure = await UnitMeasure.findOne( {
            attributes : [ 'name' ],
            where : {
                name,
                active : true
            }
        } );

        if( name === unit_measure.name ) {
            return res.status(409).json( {
                message : "Unit Measure does exist",
                data : unit_measure
            } );
        } else {
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
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Deactivate a Unit Measure
export const deactivateUnitMeasure = async ( req, res ) => {
    // res.send( 'Deactivate a unit measure' );
    const { id_unit_measure } = req.params;
    const active = false;

    try {
        const unit_measure = await UnitMeasure.findOne( {
            attributes : [ 'id' ],
            where : {
                id : id_unit_measure,
                active : true
            }
        } );

        if( unit_measure === null ) {
            return res.status(400).json( {
                message : "Bad request",
                data : {}
            } );
        } else {
            const deleteUnitMeasure = await UnitMeasure.update( {
                active
            }, {
                attributes : [ 'active' ],
                where : {
                    id : id_unit_measure
                }
            } );

            return res.status(204).json( {
                message : "Unit measure deleted succesfully",
                data : deleteUnitMeasure
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Reactivate a Unit Measure
export const reactiveUnitMeasure = async ( req, res ) => {
    // res.send('Reactive unit measure');
    const { id_unit_measure } = req.params;
    const active = true;

    try {
        const unit_measure = await UnitMeasure.findOne( {
            attributes : [ 'id', 'active' ],
            where : {
                id : id_unit_measure,
                active : false
            }
        } );

        if( unit_measure === null ) {
            return res.status(400).json( {
                message : "Bad request",
                data : {}
            } );
        } else {
            const reactiveUnitMeasure = await UnitMeasure.update( {
                active
            }, {
                attributes : [ 'active' ],
                where : {
                    id : id_unit_measure
                }
            } );

            return res.status(204).json( {
                message : "Unit measure reactivated succesfully",
                data : reactiveUnitMeasure
            } );
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};
