import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

@Injectable()
export class RawBodyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => any) {

        bodyParser.raw({type: '*/*'})(req, res, () => {
            req['rawBody'] = req.body; //extract the raw data
            req.body = JSON.parse(req.body.toString()); //revuild the json object
            next();
        })
       
    }
}