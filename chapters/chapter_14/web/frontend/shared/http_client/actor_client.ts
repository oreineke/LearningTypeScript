import { Actor } from "../../universal/entities/actor";

export class ActorClient {
    static async getAllActors(): Promise<Actor[]> {
        const response = await fetch("/api/v1/actors/", { method: "GET" });
        const json = await response.json();
        return json as Actor[];
    }

    static async filterActorsByYearOfBirth(year: number): Promise<Actor[]> {
        const response = await fetch(`/api/v1/actors/${year}`, { method: "GET" });
        const json = await response.json();
        return json as Actor[];
    }

    static async createActor(actor: Actor) {
        const requestBody = JSON.stringify(actor);
        const response = await fetch("/api/v1/actors/", { method: "POST", body: requestBody });
        const json = await response.json();
        return json as Actor;
    }
}
