
let homePage = require('../pages/homePage');

describe('demo calculator tests', function () {
  it('addition test', function () {
    //browser.get('http://juliemr.github.io/protractor-demo/');
    homePage.get('http://juliemr.github.io/protractor-demo/');

    //element(by.model('first')).sendKeys('36');
    homePage.enterFirstNumber('36')

    //element(by.model('second')).sendKeys('6');
    homePage.enterSecondNumber('6')

    //element(by.css('[ng-click="doAddition()"]')).click();
    homePage.clickGo();

    //let result = element(by.cssContainingText('.ng-binding','42'));

    //expect(result.getText()).toEqual('42');

    homePage.verifyResult('42');


    browser.sleep(2000);


  });


  it('subtraction test', function () {
    //browser.get('http://juliemr.github.io/protractor-demo/');
    homePage.get('http://juliemr.github.io/protractor-demo/');

    //element(by.model('first')).sendKeys('36');
    homePage.enterFirstNumber('36')

    //element(by.model('second')).sendKeys('6');
    homePage.enterSecondNumber('6')

    //element(by.css('[ng-click="doAddition()"]')).click();
    homePage.cliskGo();

    //let result = element(by.cssContainingText('.ng-binding','42'));

    //expect(result.getText()).toEqual('42');

    homePage.verifyResult('42');


    browser.sleep(3000);


  });




});