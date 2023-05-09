
export default function (router, handle) {
    /** api **/
    router.get("/api/get_ido_data", require("../container/ido.js").getIDOData)
    router.get("/api/get_card_by_id/:id", require("../container/ido.js").getCardById)
    
    // Default catch-all handler to allow Next.js to handle all other routes
    router.all("*", (req, res) => handle(req, res))
}