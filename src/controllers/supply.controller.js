import Supply from '../models/Supply';

// Get all Supplies
export const getSupplies = async ( req, res ) => {
    // res.send( 'Get supplies' );
    try {
        const supplies = await Supply.findAll( {
            where : {
                active : true
            }
        } );
        if( supplies == '' ) {
            return res.status(200).json( {
                message : "There are not supplies yet"
            } );
        } else {
            return res.status(200).json( {
                message : "Supplies",
                data : supplies
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

export const getSuppliesDeactivated = async ( req, res ) => {
    res.send( 'Supplies deactivated' );
};

// Get a Supply by Id
export const getSupplyById = async ( req, res ) => {
    // res.send( 'Get a supply by Id' );
    const { id_supply } = req.params;
    const supply = await Supply.findOne( {
        where : {
            id : id_supply,
            active : true
        }
    } );
    
    if( supply != null ) {
        return res.status(200).json( {
            message : "Supply",
            data : supply
        } );
    } else {
        return res.status(404).json( {
            message : "Supply does not exist",
            data : {}
        } );
    }
};

// Create a Supply
export const createSupply = async ( req, res ) => {
    res.send( 'Create a supply' );
};

// Update a Supply
export const updateSupply = async ( req, res ) => {
    res.send( 'Update a supply' );
};

// Deactivate a Supply
export const deactivateSupply = async ( req, res ) => {
    res.send( 'Delete a supply' );
};

// Reactivate a Supply
export const reactiveSupply = async ( req, res ) => {
    res.send( 'Reactivate a Supply' );
};
