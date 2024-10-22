function DeployTask() {
  this.deploy = function() {
    console.log('Deploying...');
  };

    this.run = function() {
        this.deploy();
    };

    return this;

}