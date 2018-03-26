import { ActorInterface } from "../../universal/entities/actor";
import * as mobx from "mobx";
import { provide } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

// don't allow state modifications outside actions
mobx.configure({ enforceActions: true });

const { observable, action, runInAction } = mobx;

@provide(TYPE.ActorStore)
export class ActorStore implements interfaces.ActorStore {

    @observable public actors: ActorInterface[] = [];
    @observable public status: interfaces.Status = "pending";

    @action
    public async getAllActors() {
        this.actors = [];
        this.status = "pending";
        try {
            const response = await fetch("/api/v1/actors/", { method: "GET" });
            const actors: ActorInterface[] = await response.json();
            runInAction(() => {
                this.status = "done";
                this.actors = actors;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    @action
    public async filterActorsByYearOfBirth(year: number) {
        this.actors = [];
        this.status = "pending";
        try {
            const response = await fetch(`/api/v1/actors/${year}`, { method: "GET" });
            const actors: ActorInterface[] = await response.json();
            runInAction(() => {
                this.status = "done";
                this.actors = actors;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    @action
    public async createActor(actor: ActorInterface) {
        this.actors = [];
        this.status = "pending";
        try {
            const requestBody = JSON.stringify(actor);
            const response = await fetch("/api/v1/actors/", { method: "POST", body: requestBody });
            const newActor: ActorInterface = await response.json();
            runInAction(() => {
                this.status = "done";
                this.actors.push(newActor);
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

}
