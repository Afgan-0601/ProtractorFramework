let homePage = function(){

    let firstNumber_input = element(by.model('first'));

    let secondNumber_input = element(by.model('second'));

    let gobutton =  element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
    browser.get(url);};

    //This is method 'SendKeys'
   this.enterFirstNumber = function(firstNumber){
    firstNumber_input.sendKeys(firstNumber);
   };

    //This is method 'SendKeys'
   this.enterSecondNumber = function(secondNumber){
    secondNumber_input.sendKeys(secondNumber);
   };
    //This is method 'click()'
   this.cliskGo = function(){
    gobutton.click();
   };

   this.verifyResult = function(result){
    let output = element(by.cssContainingText('.ng-binding',result));
    expect(output.getText()).toEqual(result);

   };

};

module.exports = new homePage();