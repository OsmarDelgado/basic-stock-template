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
            return res.status(404).json( {
                message : "There are not type supplies yet"
            } );
        } else {
            return res.status(200).json( {
                message : "Type Supplies",
                data : type_supplies
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

// Get all Type Supplies deactivated
export const getTypeSupplyDeactivated = async ( req, res ) => {
    // res.send( 'Get all type supplies deactivated' );
    try {
        const type_supplies = await TypeSupply.findAll( {
            where : {
                active : false
            }
        } );
        if( type_supplies == '' ) {
            return res.status(404).json( {
                message : "There are not type supplies deactivated"
            } );
        } else {
            return res.status(200).json( {
                message : "Type supply deactivated",
                data : type_supplies
            } );
        }
    } catch (error) {
        return res.status(500).json( {
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
        return res.status(404).json( {
            message : "Type Supply does not exist",
            data : {}
        } );
    }
};

// Create a TypeSupply
export const createTypeSupply = async ( req, res ) => {
    // res.send("Create a type supply");
    const { name } = req.body;
    try {
        const type_supply = await TypeSupply.findOne( {
            attributes : [ 'name', 'active' ],
            where : {
                name
            }
        } );
        if( type_supply && type_supply.active === true ) {
            return res.status(409).json( {
                message : "Type supply does exist",
                data : type_supply
            } );
        } else if ( type_supply && type_supply.active === false ) {
            return res.status(409).json( {
                message : "Type supply is inactive",
                data : type_supply
            } );
        } else {
            const newTypeSupply = await TypeSupply.create( {
                name,
            }, {
                fields : [ 'name', 'active' ]
            } );
    
            if( newTypeSupply ) {
                return res.status(201).json( {
                    message : "Type supply created succesfully",
                    data : newTypeSupply
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

// Update a Type Supply
export const updateTypeSupply = async ( req, res ) => {
    // res.send( 'Update a type supply' );
    const { id_type_supply } = req.params;
    const { name } = req.body;

    try {
        const type_supply = await TypeSupply.findOne( {
            attributes : [ 'name' ],
            where : {
                name,
                active : true
            }
        } );

        if( name === type_supply.name ) {
            return res.status(409).json( {
                message : "Type Supply does exist",
                data : type_supply
            } );
        } else {
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
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Deactivate a Type Supply
export const deactivateTypeSupply = async ( req, res ) => {
    // res.send( 'Deactivate a type supply' );
    const { id_type_supply } = req.params;
    const active = false;

    try {
        const type_supply = await TypeSupply.findOne( {
            attributes : [ 'id' ],
            where : {
                id : id_type_supply,
                active : true
            }
        } );

        if( type_supply === null ) {
            return res.status(400).json( {
                message : "Bad request",
                data : {}
            } );
        } else {
            const deleteTypeSupply = await TypeSupply.update( {
                active
            }, {
                attributes : [ 'active' ],
                where : {
                    id : id_type_supply
                }
            } );

            return res.status(204).json( {
                message : "Type supply deleted succesfully",
                data : deleteTypeSupply
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Reactivate a Type Supply
export const reactiveTypeSupply = async ( req, res ) => {
    // res.send('Reactive type supply');
    const { id_type_supply } = req.params;
    const active = true;

    try {
        const type_supply = await TypeSupply.findOne( {
            attributes : [ 'id', 'active' ],
            where : {
                id : id_type_supply,
                active : false
            }
        } );

        if( type_supply === null ) {
            return res.status(400).json( {
                message : "Bad request",
                data : {}
            } );
        } else {
            const reactiveTypeSupply = await TypeSupply.update( {
                active
            }, {
                attributes : [ 'active' ],
                where : {
                    id : id_type_supply
                }
            } );

            return res.status(204).json( {
                message : "Type supply reactivated succesfully",
                data : reactiveTypeSupply
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
