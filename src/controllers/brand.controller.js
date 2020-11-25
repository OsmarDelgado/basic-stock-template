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
            res.status(200).json( {
                message : "There are not brands yet"
            } );
        } else {
            res.status(200).json( {
                message : "Brands",
                data : brands
            } );
        }
    } catch (error) {
        res.status(500).json( {
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
        res.status(404).json( {
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
        const newBrand = await Brand.create( {
            name
        }, {
            fields : [ 'name', 'active' ]
        } );

        if( newBrand ) {
            return res.status(201).json( {
                message : "Brand created succesfully",
                data : newBrand
            } );
        }
    } catch (error) {
        res.status(500).json( {
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
    } catch (error) {
        res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Delete a Brand
export const deleteBrand = async ( req, res ) => {
    // res.send( 'Deactivate a brand' );
    const { id_brand } = req.params;
    const active = false;

    try {
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
    } catch (error) {
        res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};
