import * as express from "express";
import { inject } from "inversify";
import {
    controller,
    httpGet,
    httpPost,
    requestBody,
    requestParam,
    response
} from "inversify-express-utils";
import { Repository } from "typeorm";
import { TYPE } from "../constants/types";
import { Actor } from "../entities/actor";

@controller("/api/v1/actors")
export class ActorController {

    private readonly _ActorRepository: Repository<Actor>;

    public constructor(
        @inject(TYPE.ActorRepository)ActorRepository: Repository<Actor>
    ) {
        this._ActorRepository = ActorRepository;
    }

    @httpGet("/")
    public async get(
        @response() res: express.Response
    ) {
        try {
            return await this._ActorRepository.find();
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpPost("/")
    public async post(
        @response() res: express.Response,
        @requestBody() newActor: Actor
    ) {
        if (
            !(typeof newActor.name === "string") || isNaN(newActor.yearBorn)
        ) {
            res.status(400);
            res.send("Invalid Actor!");
        }
        try {
            return await this._ActorRepository.save(newActor);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

}
