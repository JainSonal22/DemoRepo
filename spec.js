describe('Enter name feature',function()
{
    it('Should enter name as Tom',function()
    {
        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Sonal');
        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(text.getText()).toEqual('Hello Sonal!');
    });
});

describe('Free CRM Title test', function()
{
    it('get title test', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        element(by.model('first')).sendKeys('100');
        element(by.model('second')).sendKeys('200');
        element(by.id('gobutton')).click;
        browser.driver.sleep(3000);
    });
    
});