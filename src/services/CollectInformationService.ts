class CollectInformationService {
    static collect(){
        console.log("[DEBUG]Iniciando coleta de Promoções.");
        const webdriver = require('selenium-webdriver')

        const driver = new webdriver.Builder().forBrowser('chrome').build();
        
        console.log(driver.get("https://www.smartproxy.com/"));
        console.log("[DEBUG]Coleta de promoções finalizada.");
    }
};

export default CollectInformationService;