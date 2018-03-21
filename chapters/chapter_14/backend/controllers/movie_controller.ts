import express from "express";
import { inject } from "inversify";
import {
    controller,
    httpGet,
    httpPost,
    response,
    queryParam,
    requestBody
} from "inversify-express-utils";
import { Repository } from "typeorm";
import { Movie } from "../entities/movie";
import { TYPE } from "../constants/types";

@controller("/api/v1/movies")
export class MovieController {

    private readonly _movieRepository: Repository<Movie>;

    public constructor(
        @inject(TYPE.MovieRepository)movieRepository: Repository<Movie>
    ) {
        this._movieRepository = movieRepository;
    }

    @httpGet("/")
    public async getByTitle(
        @response() res: express.Response,
        @queryParam("title") titleParam: string | undefined,
        @queryParam("year") yearParam: string | undefined
    ) {
        try {
            const filter  = {
                year: yearParam ? parseInt(yearParam) : undefined,
                title: titleParam
            };
            return await this._movieRepository.find(filter);
        } catch(e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpPost("/")
    public async post(
        @response() res: express.Response,
        @requestBody() newMovie: Movie
    ) {
        if (
            !(typeof newMovie.title === "string") || isNaN(newMovie.year)
        ) {
            res.status(400);
            res.send(`Invalid Movie!`);
        }
        try {
            return await this._movieRepository.save(newMovie);
        } catch(e) {
            res.status(500);
            res.send(e.message);
        }
    }

}
