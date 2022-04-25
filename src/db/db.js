import Sequilize from 'sequelize';

export const sequelize = new Sequilize(
    'DBname',                    // db name
    'DBuser',                    // user
    'DBpassword',          // For AWS RDS Postgrtesql instance
    {
        host : 'host',
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