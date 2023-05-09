import axios from 'axios'


export const getInvite = async (account) => {
    try {
        const {
            data
        } = await axios.get(`/api/invite/${account}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getInviteRank = async () => {
    try {
        const {
            data
        } = await axios.get(`/api/invite_rank`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createInvite = async (account,invite) => {
    try {
        const {data} = await axios.post(`/api/create_invite`, {
                account: account,
                invite: invite
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
    
}

export const getIdoData = async () => {
    try {
        const { data } = await axios.get(`/api/get_ido_data`)
        return data
    } catch (error) {
        console.log(error)
    }
    // return {
    //   alreadyMint: ['0', '0', '0', '0'],
    //   publicSaleStartTime: [
    //     '1669505362',
    //     '1669605362',
    //     '1669705362',
    //     '1669805362',
    //     '1669905362',
    //     '1669995362'
    //   ],
    //   freeMintStartTime: '1669305362',
    //   whiteListMintStartTime: '1669405362',
    //   totalSupply: '0',
    //   round: 0
    // }
    
}

