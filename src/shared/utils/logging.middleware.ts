import { Logger, NestMiddleware } from "@nestjs/common";


export class LogginMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        res.on('finish', () => {
            Logger.log(`Requested route: ${req.route.path} | method: ${req.method} | status: ${res.statusCode}`, 'LogginMiddleware');
        });
        next();       
    }
}