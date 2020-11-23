import Sequilize from 'sequelize';

export const sequelize = new Sequilize(
    'test',                    // db name
    'test',                    // user
    'Osmar1995',          // For AWS RDS Postgrtesql instance
    {
        host : 'catsuite-semagen-stock.c7pv1aw1xwps.us-east-1.rds.amazonaws.com',
        dialect : 'postgres',
        pool : {
            max : 5,
            min : 0,
            require : 30000,
            idle : 10000
        },
        logging : false
    }
)