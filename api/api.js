import axios from 'axios'



export const checkWhitelist = async (adress) => {
    try {
        const {
            data
        } = await axios.get(`/api/checkWhitelist/${adress}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getTotalPublicSale = async () => {
    try {
        const {
            data
        } = await axios.get(`/api/getTotalPublicSale`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getPublicSaleByAddress = async (adress) => {
    try {
        const {
            data
        } = await axios.get(`/api/getPublicSaleByAddress/${adress}`)
        return data
    } catch (error) {
        console.log(error)
    }
}


export const publicSale = async (address, tx, amount) => {
    try {
        const {data} = await axios.post(`/api/publicSale`, {
                address: address,
                tx: tx,
                amount: amount,
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
    
}

export const getTotalWhitelistSale = async () => {
    try {
        const {
            data
        } = await axios.get(`/api/getTotalWhitelistSale`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getWhitelistSaleByAddress = async (adress) => {
    try {
        const {
            data
        } = await axios.get(`/api/getWhitelistSaleByAddress/${adress}`)
        return data
    } catch (error) {
        console.log(error)
    }
}


export const whitelistSale = async (address, tx, whitelist_amount) => {
    try {
        const {data} = await axios.post(`/api/whitelistSale`, {
                address: address,
                tx: tx,
                whitelist_amount: whitelist_amount,
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
    
}
