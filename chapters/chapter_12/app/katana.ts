import { Weapon } from "./interfaces";

export class Katana implements Weapon {
    public tryHit(fromDistance: number) {
        return fromDistance <= 2;
    }
}
