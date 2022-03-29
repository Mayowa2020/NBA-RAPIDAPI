const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./index');

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log('Database Connection Successful!');
  });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`now listening for requests on port ${port}`));
