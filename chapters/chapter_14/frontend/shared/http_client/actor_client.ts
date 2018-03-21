import { ActorInterface } from "../../../universal/entities/actor";

export class ActorClient {
    static async getAllActors(): Promise<ActorInterface[]> {
        const response = await fetch("/api/v1/actors/", { method: "GET" });
        const json = await response.json();
        return json as ActorInterface[];
    }

    static async filterActorsByYearOfBirth(year: number): Promise<ActorInterface[]> {
        const response = await fetch(`/api/v1/actors/${year}`, { method: "GET" });
        const json = await response.json();
        return json as ActorInterface[];
    }

    static async createActor(actor: ActorInterface) {
        const requestBody = JSON.stringify(actor);
        const response = await fetch("/api/v1/actors/", { method: "POST", body: requestBody });
        const json = await response.json();
        return json as ActorInterface;
    }
}
