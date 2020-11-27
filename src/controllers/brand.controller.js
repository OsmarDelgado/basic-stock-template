import Brand from '../models/Brand';

// Get all Brands
export const getBrands = async ( req, res ) => {
    // res.send( 'Get all brands' );
    try {
        const brands = await Brand.findAll( {
            where : {
                active : true
            }
        } );
        if( brands == '' ) {
            return res.status(404).json( {
                message : "There are not brands yet"
            } );
        } else {
            return res.status(200).json( {
                message : "Brands",
                data : brands
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

// Get all Brands deactivated
export const getBrandsDeactivated = async ( req, res ) => {
    // res.send( 'Get all brands deactivated' );
    try {
        const brands = await Brand.findAll( {
            where : {
                active : false
            }
        } );
        if( brands == '' ) {
            return res.status(404).json( {
                message : "There are not brands deactivated"
            } );
        } else {
            return res.status(200).json( {
                message : "Brands deactivated",
                data : brands
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

// Get a Brand by Id
export const getBrandById = async ( req, res ) => {
    // res.send( 'Get a brand by Id' );
    const { id_brand } = req.params;
    const brand = await Brand.findOne( {
        where : {
            id : id_brand,
            active : true
        }
    } );
    
    if( brand != null ) {
        return res.status(200).json( {
            message : "Brand",
            data : brand
        } );
    } else {
        return res.status(404).json( {
            message : "Brand does not exist",
            data : {}
        } );
    }
};

// Create a Brand
export const createBrand = async ( req, res ) => {
    // res.send( 'Create brand' );
    const { name } = req.body;
    try {
        const brand = await Brand.findOne( {
            attributes : [ 'name', 'active' ],
            where : {
                name
            }
        } );
        if( brand && brand.active === true ) {
            return res.status(409).json( {
                message : "Brand does exist",
                data : brand
            } );
        } else if ( brand && brand.active === false ) {
            return res.status(409).json( {
                message : "Brand is inactive",
                data : brand
            } );
        } else {
            const newBrand = await Brand.create( {
                name,
            }, {
                fields : [ 'name', 'active' ]
            } );
    
            if( newBrand ) {
                return res.status(201).json( {
                    message : "Brand created succesfully",
                    data : newBrand
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

// Update a Brand
export const updateBrand = async ( req, res ) => {
    // res.send( 'Update a brand' );
    const { id_brand } = req.params;
    const { name } = req.body;

    try {
        const brand = await Brand.findOne( {
            attributes : [ 'name' ],
            where : {
                name,
                active : true
            }
        } );

        if( name === brand.name ) {
            return res.status(409).json( {
                message : "Brand does exist",
                data : brand
            } );
        } else {
            const updateBrand = await Brand.update( {
                name
            }, {
                attributes : ['name', 'active'],
                where : {
                    id : id_brand
                }
            } );
    
            return res.status(204).json( {
                message : "Brand updated succesfully",
                data : updateBrand
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Deactivate a Brand
export const deactivateBrand = async ( req, res ) => {
    // res.send( 'Deactivate a brand' );
    const { id_brand } = req.params;
    const active = false;

    try {
        const brand = await Brand.findOne( {
            attributes : [ 'id' ],
            where : {
                id : id_brand,
                active : true
            }
        } );

        if( brand === null ) {
            return res.status(400).json( {
                message : "Bad request",
                data : {}
            } );
        } else {
            const deleteBrand = await Brand.update( {
                active
            }, {
                attributes : [ 'active' ],
                where : {
                    id : id_brand
                }
            } );

            return res.status(204).json( {
                message : "Brand deleted succesfully",
                data : deleteBrand
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Reactivate a Brand
export const reactiveBrand = async ( req, res ) => {
    // res.send('Reactive brand');
    const { id_brand } = req.params;
    const active = true;

    try {
        const brand = await Brand.findOne( {
            attributes : [ 'id', 'active' ],
            where : {
                id : id_brand,
                active : false
            }
        } );

        if( brand === null ) {
            return res.status(400).json( {
                message : "Bad request",
                data : {}
            } );
        } else {
            const reactiveBrand = await Brand.update( {
                active
            }, {
                attributes : [ 'active' ],
                where : {
                    id : id_brand
                }
            } );

            return res.status(204).json( {
                message : "Brand reactivated succesfully",
                data : reactiveBrand
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
