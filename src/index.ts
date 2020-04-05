import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import db from '../config/db';

// Start the server
const port = Number(process.env.PORT || 3000);

mongoose.connect(db.url, {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.once('open', () => {
  app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
  });
});


