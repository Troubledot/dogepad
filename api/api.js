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

export const getTotalStake = async () => {
    try {
        const {
            data
        } = await axios.get(`/api/getTotalStake`)
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


export const stake = async (address, tx, amount, inscriptionId) => {
    try {
        const {data} = await axios.post(`/api/stake`, {
                address: address,
                tx: tx,
                amount: amount,
                inscriptionId: inscriptionId
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
}

export const inscription = async (address, amount, inscriptionId) => {
    try {
        const {data} = await axios.post(`/api/inscription`, {
                address: address,
                amount: amount,
                inscriptionId: inscriptionId
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
}

export const earned = async (adress) => {
    try {
        const {
            data
        } = await axios.get(`/api/earn/${adress}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getStakeByAddress = async (adress) => {
    try {
        const {
            data
        } = await axios.get(`/api/getStakeByAddress/${adress}`)
        return data
    } catch (error) {
        console.log(error)
    }
}


export const getInscriptionsByAddress = async (adress) => {
    try {
        const {
            data
        } = await axios.get(`/api/getInscriptionsByAddress/${adress}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const openBox = async (address, tx, type) => {
    try {
        const {data} = await axios.post(`/api/openBox`, {
                address: address,
                tx: tx,
                type: type
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getBoxByAddress = async (adress,type) => {
    try {
        const {
            data
        } = await axios.get(`/api/getBoxByAddress/${adress}/${type}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const refundBiso = async (address, tx) => {
    try {
        const {data} = await axios.post(`/api/refundBiso`, {
                address: address,
                tx: tx
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getRefundByAddress = async (adress) => {
    try {
        const {
            data
        } = await axios.get(`/api/getRefundByAddress/${adress}`)
        return data
    } catch (error) {
        console.log(error)
    }
}






export const mintSale = async (address, tx, type, amount, projectID) => {
    try {
        const {data} = await axios.post(`/api/mintSale`, {
                address: address,
                tx: tx,
                type: type,
                amount:amount,
                projectID:projectID
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAmountByAddress = async (addresss, projectID,type) => {
    try {
        const {
            data
        } = await axios.get(`/api/getAmountByAddress/${addresss}/${projectID}/${type}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getTotalSale = async (projectID,type) => {
    try {
        const {
            data
        } = await axios.get(`/api/getTotalSale/${projectID}/${type}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const projectCheckWhitelist = async (adress) => {
    try {
        const {
            data
        } = await axios.get(`/api/projectCheckWhitelist/${adress}`)
        return data
    } catch (error) {
        console.log(error)
    }
}


