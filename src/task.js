function DeployTask() {
  this.deploy = function() {
    console.log('Deploying...');
  };

    this.run = function() {
        this.deploy();
    };

    return this;

}

function StartDB(){
    this.start = function(){
        console.log('Starting DB...');
    };

    this.run = function(){
        this.start();
    };

    return this;
}

function Test(){
    this.test = function(){
        console.log('Testing...');
    };

    this.run = function(){
        this.test();
    };

    return this;
}