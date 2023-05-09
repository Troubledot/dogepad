const fs = require('fs')
const axios = require('axios')
const data = fs.readFileSync(`./Investment2.json`, 'utf8');
const json = JSON.parse(data)
console.log(json)



var index = 0
var finnal_array = []

function getAddress(){
    console.log(json[index])
    axios.request({
        url: `https://www.oklink.com/api/explorer/v1/bsc/transactions/${json[index]}?t=1659032915499`,
        method: `get`,
        headers: {
            'x-apiKey': 'LWIzMWUtNDU0Ny05Mjk5LWI2ZDA3Yjc2MzFhYmEyYzkwM2NjfDI3NzAxNDQwMjk3ODg5NjQ='
        },
    })
    .then(result=>{
        const { code, data } = result.data
        // console.log(data,code)
        if(code == 0){
            finnal_array.push({
                "txhash":json[index],
                "account": data.from,
                "inviter": "0x" + data.inputHex.substr(34, 40)
            })
        }
        console.log(finnal_array)
        console.log("index", index)
        fs.writeFileSync('./inviter2.json', JSON.stringify(finnal_array))
        if(index == 964){
            // console.log(JSON.stringify(finnal_array))
            fs.writeFileSync('./inviter2.json', JSON.stringify(finnal_array))
            return
        }
        index += 1
        getAddress()
    })
}

getAddress()
