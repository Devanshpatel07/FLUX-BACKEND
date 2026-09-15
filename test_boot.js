try {
  require('./server.js');
  console.log('Server file loaded cleanly.');
} catch (err) {
  console.error('Server boot error:', err);
}
