import sub from '../sub.js'; 

describe('Test sub function', function() {
  it('Test sub', function(done) {
    sub(function(){
       done();
    });
  });
});


