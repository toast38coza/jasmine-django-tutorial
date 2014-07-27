describe("Test hello.js", function() {

  beforeEach(function() {
      jasmine.Ajax.install();
  });

  afterEach(function() {
      jasmine.Ajax.uninstall();
  });


  it("return 'hello'", function () {
  	var result = Hello.world();
  	expect(result).toBe("Hello");
  });

  it ("Logs text from the service to the console", function () {
  	
  	var consoleSpy = spyOn(console, "log");

  	jasmine.Ajax.stubRequest('/some/url').andReturn({
        "status": 200, 
        "contentType": 'text/plain',
        "responseText": 'Hello from the world'
    });

  	var result = Hello.callWorld();
  	expect(consoleSpy).toHaveBeenCalledWith("Hello from the world");
  	expect(consoleSpy).toHaveBeenCalledWith("complete");
  });

  it ("Prints error if the service fails", function () {
  	
  	var consoleSpy = spyOn(console, "log");

  	jasmine.Ajax.stubRequest('/some/url').andReturn({
        "status": 500, 
        "contentType": 'text/plain'
    });

  	var result = Hello.callWorld();
  	expect(consoleSpy).toHaveBeenCalledWith("error");
  	expect(consoleSpy).toHaveBeenCalledWith("complete");
  });
});