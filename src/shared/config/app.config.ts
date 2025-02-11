import { registerAs } from "@nestjs/config"

export default registerAs('config', ()=>{
    return {
        port: process.env.APP_PORT || 3000,
    }
})