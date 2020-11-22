import CollectInformationService from "../services/CollectInformationService";

class PromotionJobs {
    static execute(){
        this.promotionRefresh();
    }
    static promotionRefresh() {
        console.log("[DEBUG]Iniciando Jobs de Promoções.");
        const cron = require("node-cron");
        console.log("[DEBUG]Iniciando Job de coleta de promoções.");
        cron.schedule("1 0 * * *", () => CollectInformationService.collect);
    }
};

export default PromotionJobs;