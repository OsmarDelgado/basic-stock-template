const { Op } = require("sequelize");
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
            for( let i in supplies ) {
                const supplyBrands = await SupplyBrands.findAll( {
                    where : {
                        id_supply : supplies[i].id,
                        active : true
                    }
                } );
                // console.log(supplyBrands);
            }
            return res.status(200).json( {
                message : "Supplies",
                data : {
                    supplies,
                    // supplyBrands
                }
            } );
        }
    } catch (error) {
        console.log(error);
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
            for( let i in supplies ) {
                const supplyBrandsDeactivated = await SupplyBrands.findAll( {
                    where : {
                        id_supply : supplies[i].id,
                        active : false
                    }
                } );
                // console.log(supplyBrands);
            }
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
    const supplyBrands = await SupplyBrands.findAll( {
        where : {
            id_supply,
            active : true
        }
    } );
    if( supply != null ) {
        return res.status(200).json( {
            message : "Supply",
            data : {
                supply,
                supplyBrands
            }
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

    try {
        const supply = await Supply.findOne( {
            attributes : [ 'name', 'id_unit_measure', 'id_category', 'id_type_supply', 'active' ],
            where : {
                name
            }
        } );

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

            for( let i in ids_brands ) {
                const newSupplyBrands = await SupplyBrands.create( {
                    id_supply : newSupply.id,
                    id_brand : ids_brands[i].id
                }, {
                    fields : [ 'id_supply' ,'id_brand', 'active' ]
                } );
            }

            // ids_brands.forEach( async ( ids_brand ) => {
            //     const newSupplyBrands = await SupplyBrands.create( {
            //         id_supply : newSupply.id,
            //         id_brand : ids_brand.id
            //     }, {
            //         fields : [ 'id_supply' ,'id_brand', 'active' ]
            //     } );
            // } );
            
            const supplyBrands = await SupplyBrands.findAll( {
                where : {
                    id_supply : newSupply.id
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
    const { name, id_unit_measure, id_category, id_type_supply } = req.body;
    const { id_brand } = req.body;
    const id_brands = JSON.stringify(id_brand);
    const ids_brands = JSON.parse(id_brands);

    try {
        const supply = await Supply.findOne( {
            attributes : [ 'name', 'id_unit_measure', 'id_category', 'id_type_supply' ],
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
                id_type_supply
            }, {
                attributes : [ 'name', 'id_unit_measure', 'id_category', 'id_type_supply' ],
                where : {
                    id : id_supply
                }
            } );

            const supplyBrandsToUpdate = await SupplyBrands.findAll( {
                where : {
                    id_supply
                }
            } );
            // for(let i in supplyBrandsToUpdate) {
            //     console.log( supplyBrandsToUpdate[i].id );
            //     console.log( supplyBrandsToUpdate[i].id_brand );
            //     console.log( supplyBrandsToUpdate[i].id_supply );
            // }

            for( let i in ids_brands ) {
                for( let j in supplyBrandsToUpdate ) {
                    console.log(ids_brands[i].id);
                    console.log(supplyBrandsToUpdate[j].id_brand);
                    const updatingSupplyBrands = await SupplyBrands.update( {
                        id_brand : ids_brands[i].id
                    }, {
                        attributes : [ 'id_brand' ],
                        where : {
                            id_supply,
                            id_brand : supplyBrandsToUpdate[j].id_brand
                            
                        }
                    } );
                }
            }

            const updateSupplyBrands = await SupplyBrands.findAll( {
                where : {
                    id_supply
                }
            } );
            // for(let i in updateSupplyBrands) {
            //     console.log( updateSupplyBrands[i].id );
            //     console.log( updateSupplyBrands[i].id_brand );
            //     console.log( updateSupplyBrands[i].id_supply );
            // }
    
            return res.status(200).json( {
                message : "Supply updated succesfully",
                data : {
                    updateSupply,
                    updateSupplyBrands
                }
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
