
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
    router.post("/api/stake", require("../container/ido.js").stake)
    
    // Default catch-all handler to allow Next.js to handle all other routes
    router.all("*", (req, res) => handle(req, res))
}