import { ActorInterface } from "../../universal/entities/actor";
import * as mobx from "mobx";
import { provide } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

const { observable, action, runInAction } = mobx;

@provide(TYPE.ActorStore)
export class ActorStore implements interfaces.ActorStore {

    // Contains the actors that have been already loaded from the server
    @observable public actors: ActorInterface[] = [];

    // Used to represent the status of the HTTP GET calls
    @observable public loadStatus: interfaces.Status = "pending";

    // Used to represent the status of the HTTP DELETE call
    @observable public deleteStatus: interfaces.Status = "idle";

    // Used to represent the status of the HTTP POST and HTTP PUT calls
    @observable public saveStatus: interfaces.Status = "idle";

    // Used to display the actor editor: null means new actor,
    // number means existing actor and undefined means no actor
    @observable public editActorId: number | null | undefined = undefined;

    // Used to desplay the confimation dialog before deleting a actor
    // null hides the modal and number displays the modal
    @observable public deleteActorId: null | number = null;

    // Used to hold the values of the actor editor
    @observable public editorValue: Partial<ActorInterface> = {};

    @action
    public focusEditor(id: number | null) {
        runInAction(() => {
            this.editActorId = id;
        });
    }

    @action
    public focusOutEditor() {
        runInAction(() => {
            this.editActorId = undefined;
        });
    }

    @action
    public focusDeleteDialog(id: number) {
        runInAction(() => {
            this.deleteActorId = id;
        });
    }

    @action
    public focusOutDeleteDialog() {
        runInAction(() => {
            this.deleteActorId = null;
        });
    }

    @action
    public async getAll() {
        try {
            const response = await fetch("/api/v1/actors/", { method: "GET" });
            const actors: ActorInterface[] = await response.json();
            runInAction(() => {
                this.loadStatus = "done";
                this.actors = actors;
            });
        } catch (error) {
            runInAction(() => {
                this.loadStatus = "error";
            });
        }
    }

    @action
    public edit<T extends ActorInterface, K extends keyof T>(key: K, val: T[K]) {
        runInAction(() => {
            const actor = {...this.editorValue, ...{[key]: val}};
            this.editorValue = actor;
        });
    }

    @action
    public async create(actor: Partial<ActorInterface>) {
        try {
            const requestBody = JSON.stringify(actor);
            const response = await fetch("/api/v1/actors/", { method: "POST", body: requestBody });
            const newActor: ActorInterface = await response.json();
            runInAction(() => {
                this.loadStatus = "done";
                this.actors.push(newActor);
            });
        } catch (error) {
            runInAction(() => {
                this.loadStatus = "error";
            });
        }
    }

    @action
    public async delete(id: number) {
        try {
            const response = await fetch(`/api/v1/actors/:${id}`, { method: "DELETE" });
            await response.json();
            runInAction(() => {
                this.deleteStatus = "done";
                this.actors = this.actors.filter((m) => m.id !== id);
            });
        } catch (error) {
            runInAction(() => {
                this.deleteStatus = "error";
            });
        }
    }

}
