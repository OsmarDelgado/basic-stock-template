import Supply from '../models/Supply';
import Brand from '../models/Brand';
import SupplyBrands from '../models/SupplyBrands';
import SupplyPrices from '../models/SupplyPrices';

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
            return res.status(404).json( {
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
    // res.send( 'Supplies deactivated' );
    try {
        const supplies = await Supply.findAll( {
            where : {
                active : false
            }
        } );
        if( supplies == '' ) {
            return res.status(404).json( {
                message : "There are not supplies deactivated"
            } );
        } else {
            return res.status(200).json( {
                message : "Suppplies deactivated",
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
    // res.send( 'Create a supply' );
    const { name, id_unit_measure, id_category, id_type_supply } = req.body;
    const { id_brand } = req.body;
    const id_brands = JSON.stringify(id_brand);
    const ids_brands = JSON.parse(id_brands);

    // ids_brands.forEach( (ids_brand) => {
    //     console.log(ids_brand.id);
    // });

    // res.send('Hello');

    try {
        const supply = Supply.findOne( {
            attributes : [ 'name', 'id_unit_measure', 'id_category', 'id_type_supply' ],
            where : {
                name,
                id_unit_measure,
                id_category,
                id_type_supply
            }
        } );
        
        // const brands = await Brand.findAll( {
        //     where : {
        //         id : id_brand
        //     }
        // } );

        if( supply && supply.active === true ) {
            return res.status(409).json( {
                message : "Supply does exist",
                data : supply
            } );
        } else if ( supply && supply.active === false ) {
            return res.status(409).json( {
                message : "Supply is inactive",
                data : supply
            } );
        } else {
            const newSupply = await Supply.create( {
                name,
                id_unit_measure,
                id_category,
                id_type_supply
            }, {
                fields : [ 'name', 'id_unit_measure', 'id_category', 'id_type_supply', 'active' ]
            } );

            const relations = ids_brands.forEach( async ( ids_brand ) => {
                const newSupplyBrands = await SupplyBrands.create( {
                    id_supply : newSupply.id,
                    id_brand : ids_brand.id
                }, {
                    fields : [ 'id_supply' ,'id_brand', 'active' ]
                } );
            } );

            const newSupplyId = newSupply.id;

            const supplyBrands = await SupplyBrands.findAll( {
                where : {
                    id_supply : newSupplyId
                    // id_supply : 44
                }
            } );

            console.log(`Supply Brands: ${ supplyBrands }`);
            
            if( newSupply ) {
                return res.status(201).json( {
                    message : "Supply created succesfully",
                    data : {
                        newSupply,
                        supplyBrands
                    }
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

// Update a Supply
export const updateSupply = async ( req, res ) => {
    // res.send( 'Update a supply' );
    const { id_supply } = req.params;
    const { name, id_unit_measure, id_category, id_brand, id_type_supply } = req.body;

    try {
        const supply = await Supply.findOne( {
            attributes : [ 'name', 'id_unit_measure', 'id_category', 'id_brand', 'id_type_supply' ],
            where : {
                id : id_supply,
                active : true
            }
        } );

        if( name === supply.name ) {
            return res.status(409).json( {
                message : "Supply does exist",
                data : supply
            } );
        } else {
            const updateSupply = await Supply.update( {
                name,
                id_unit_measure,
                id_category,
                id_brand,
                id_type_supply
            }, {
                attributes : [ 'name', 'id_unit_measure', 'id_category', 'id_brand', 'id_type_supply' ],
                where : {
                    id : id_supply
                }
            } );
    
            return res.status(204).json( {
                message : "Supply updated succesfully",
                data : updateSupply
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

// Deactivate a Supply
export const deactivateSupply = async ( req, res ) => {
    res.send( 'Delete a supply' );
};

// Reactivate a Supply
export const reactiveSupply = async ( req, res ) => {
    res.send( 'Reactivate a Supply' );
};
