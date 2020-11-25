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
            res.status(200).json( {
                message : "There are not categories yet"
            } );
        } else {
            res.status(200).json( {
                message : "Categories",
                data : categories
            } );
        }
    } catch (error) {
        res.status(500).json( {
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
        res.status(404).json( {
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
        const newCategory = await Category.create( {
            name
        }, {
            fields : [ 'name', 'active' ]
        } );

        if( newCategory ) {
            return res.status(201).json( {
                message : "Category created succesfully",
                data : newCategory
            } );
        }
    } catch (error) {
        res.status(500).json( {
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
        const updateCategory = await Category.update( {
            name
        }, {
            attributes : [ 'name', 'active' ],
            where : {
                id : id_category
            }
        } );

        return res.status(204).json( {
            message : "Category updated succesfully",
            data : updateCategory
        } );
    } catch (error) {
        res.status(500).json( {
            message : "Something goes wrong",
            data : {}
        } );
    }
};

// Delete a Category
export const deleteCategory = async ( req, res ) => {
    // res.send("Delete a category");
    const { id_category } = req.params;
    const active = false;

    try {
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
    } catch (error) {
        res.status(500).json( {
            message : "Something was wrong",
            data : {}
        } );
    }
};
