import TypeSupply from '../models/TypeSupply';

// Get all Type Supplies
export const getTypeSupply = async ( req, res ) => {
    // res.send( 'Get all type supplies' );
    try {
        const type_supplies = await TypeSupply.findAll( {
            where : {
                active : true
            }
        } );
        if( type_supplies == '' ) {
            res.status(200).json( {
                message : "There are not type supplies yet"
            } );
        } else {
            res.status(200).json( {
                message : "Type Supplies",
                data : type_supplies
            } );
        }
    } catch (error) {
        res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

// Get a Type Supply by Id
export const getTypeSupplyById = async ( req, res ) => {
    // res.send( 'Get a type supply by Id' );
    const { id_type_supply } = req.params;
    const type_supply = await TypeSupply.findOne( {
        where : {
            id : id_type_supply,
            active : true
        }
    } );
    
    if( type_supply != null ) {
        return res.status(200).json( {
            message : "Type Supply",
            data : type_supply
        } );
    } else {
        res.status(404).json( {
            message : "Type Supply does not exist",
            data : {}
        } );
    }
};

// Create a Type Supply
export const createTypeSupply = async ( req, res ) => {
    // res.send( 'Create type supply' );
    const { name } = req.body;
    try {
        const newTypeSupply = await TypeSupply.create( {
            name
        }, {
            fields : [ 'name', 'active' ]
        } );

        if( newTypeSupply ) {
            return res.status(201).json( {
                message : "Type Supply created succesfully",
                data : newTypeSupply
            } );
        }
    } catch (error) {
        res.status(500).json( {
            message : "Something goes wrong",
            data : {}
        } );
    }
};

// Update a Type Supply
export const updateTypeSupply = async ( req, res ) => {
    // res.send( 'Update a type supply' );
    const { id_type_supply } = req.params;
    const { name } = req.body;

    try {
        const updateTypeSupply = await TypeSupply.update( {
            name
        }, {
            attributes : ['name', 'active'],
            where : {
                id : id_type_supply
            }
        } );

        return res.status(204).json( {
            message : "Type Supply updated succesfully",
            data : updateTypeSupply
        } );
    } catch (error) {
        res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Delete a Type Supply
export const deleteTypeSupply = async ( req, res ) => {
    // res.send( 'Deactivate a type supply' );
    const { id_type_supply } = req.params;
    const active = false;

    try {
        const deleteTypeSupply = await TypeSupply.update( {
            active
        }, {
            attributes : [ 'active' ],
            where : {
                id : id_type_supply
            }
        } );

        return res.status(204).json( {
            message : "Type Supply deleted succesfully",
            data : deleteTypeSupply
        } );
    } catch (error) {
        res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};
