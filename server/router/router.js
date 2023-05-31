
export default function (router, handle) {
    /** api **/
    router.post("/api/whitelistSale", require("../container/ido.js").whitelistSale)
    router.get("/api/getWhitelistSaleByAddress/:address", require("../container/ido.js").getWhitelistSaleByAddress)
    router.get("/api/getTotalWhitelistSale", require("../container/ido.js").getTotalWhitelistSale)
    router.get("/api/checkWhitelist/:address", require("../container/ido.js").checkWhitelist)

    router.post("/api/publicSale", require("../container/ido.js").publicSale)
    router.get("/api/getPublicSaleByAddress/:address", require("../container/ido.js").getPublicSaleByAddress)
    router.get("/api/getTotalPublicSale", require("../container/ido.js").getTotalPublicSale)

    router.get("/api/earn/:address", require("../container/ido.js").earn)
    router.get("/api/getStakeByAddress/:address", require("../container/ido.js").getStakeByAddress)
    router.get("/api/getInscriptionsByAddress/:address", require("../container/ido.js").getInscriptionsByAddress)
    router.get("/api/getTotalStake", require("../container/ido.js").getTotalStake)
    router.post("/api/stake", require("../container/ido.js").stake)
    router.post("/api/inscription", require("../container/ido.js").inscription)

    router.post("/api/openBox", require("../container/ido.js").openBox)
    router.get("/api/getBoxByAddress/:address/:type", require("../container/ido.js").getBoxByAddress)

    router.post("/api/refundBiso", require("../container/ido.js").refund)
    router.get("/api/getRefundByAddress/:address", require("../container/ido.js").getRefundByAddress)
    
    //project
    router.get("/api/getProjectTotalInfo", require("../container/project.js").getProjectTotalInfo)
    router.get("/api/getProjectInfo/:projectID", require("../container/project.js").getProjectInfo)
    router.post("/api/projectWhitelistSale", require("../container/project.js").whitelistSale)
    router.get("/api/getAmountByAddress/:address/:projectID/:type", require("../container/project.js").getAmountByAddress)
    router.get("/api/getTotalSale/:projectID/:type", require("../container/project.js").getTotalSale)


    
    // Default catch-all handler to allow Next.js to handle all other routes
    router.all("*", (req, res) => handle(req, res))
}