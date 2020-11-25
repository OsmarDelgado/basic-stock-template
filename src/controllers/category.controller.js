import Category from '../models/Category';

// Get all Categories
export const getCategories = async ( req, res ) => {
    // res.send("Get categories");
    try {
        const categories = await Category.findAll( {
            where : {
                active : true
            }
        } );
        if( categories == '' ) {
            return res.status(200).json( {
                message : "There are not categories yet"
            } );
        } else {
            return res.status(200).json( {
                message : "Categories",
                data : categories
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

// Get all Categories deactivated
export const getCategoriesDeactivated = async ( req, res ) => {
    // res.send( 'Get all cagegories deactivated' );
    try {
        const categories = await Category.findAll( {
            where : {
                active : false
            }
        } );
        if( categories == '' ) {
            return res.status(200).json( {
                message : "There are not categories deactivated"
            } );
        } else {
            return res.status(200).json( {
                message : "Categories deactivated",
                data : categories
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Somenthing was wrong",
            data : {}
        } );
    }
};

// Get a Category by Id
export const getCategoryById = async ( req, res ) => {
    // res.send("Get category by Id");
    const { id_category } = req.params;
    const category = await Category.findOne( {
        where : {
            id : id_category,
            active : true
        }
    } );

    if( category != null ) {
        return res.status(200).json( {
            message : "Category",
            data : category
        } );
    } else {
        return res.status(404).json( {
            message : "Category does not exist",
            data : {}
        } );
    }
};

// Create a Category
export const createCategory = async ( req, res ) => {
    // res.send("Create a category");
    const { name } = req.body;
    try {
        const category = await Category.findOne( {
            attributes : [ 'name', 'active' ],
            where : {
                name
            }
        } );
        if( category && category.active === true ) {
            return res.status(409).json( {
                message : "Category does exist",
                data : category
            } );
        } else if ( category && category.active === false ) {
            return res.status(409).json( {
                message : "Category is inactive",
                data : category
            } );
        } else {
            const newCategory = await Category.create( {
                name,
            }, {
                fields : [ 'name', 'active' ]
            } );
    
            if( newCategory ) {
                return res.status(201).json( {
                    message : "Category created succesfully",
                    data : newCategory
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

// Update a Category
export const updateCategory = async ( req, res ) => {
    // res.send("Update a category");
    const { id_category } = req.params;
    const { name } = req.body;

    try {
        const category = await Category.findOne( {
            attributes : [ 'name' ],
            where : {
                name,
                active : true
            }
        } );

        if( name === category.name ) {
            return res.status(409).json( {
                message : "Category does exist",
                data : category
            } );
        } else {
            const updateCategory = await Category.update( {
                name
            }, {
                attributes : ['name', 'active'],
                where : {
                    id : id_category
                }
            } );

            return res.status(204).json( {
                message : "Category updated succesfully",
                data : updateCategory
            } );
        }
    } catch(error) {
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Deactivate a Category
export const deactivateCategory = async ( req, res ) => {
    // res.send( 'Deactivate a category' );
    const { id_category } = req.params;
    const active = false;

    try {
        const category = await Category.findOne( {
            attributes : [ 'id' ],
            where : {
                id : id_category,
                active : true
            }
        } );

        if( category === null ) {
            return res.status(400).json( {
                message : "Bad request",
                data : {}
            } );
        } else {
            const deleteCategory = await Category.update( {
                active
            }, {
                attributes : [ 'active' ],
                where : {
                    id : id_category
                }
            } );

            return res.status(204).json( {
                message : "Category deleted succesfully",
                data : deleteCategory
            } );
        }
    } catch (error) {
        return res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};

// Reactivate a Category
export const reactiveCategory = async ( req, res ) => {
    // res.send('Reactive category');
    const { id_category } = req.params;
    const active = true;

    try {
        const category = await Category.findOne( {
            attributes : [ 'id', 'active' ],
            where : {
                id : id_category,
                active : false
            }
        } );

        if( category === null ) {
            return res.status(400).json( {
                message : "Bad request",
                data : {}
            } );
        } else {
            const reactiveCategory = await Category.update( {
                active
            }, {
                attributes : [ 'active' ],
                where : {
                    id : id_category
                }
            } );

            return res.status(204).json( {
                message : "Category reactivated succesfully",
                data : reactiveCategory
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
