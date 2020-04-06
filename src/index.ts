import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';


import mongoose from 'mongoose';
import db from '../config/db';
import autoIncrement from 'mongoose-auto-increment';

// Start the server
const port = Number(process.env.PORT || 3000);

mongoose.connect(db.url, {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.once('open', () => {
  app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
  });
});


