import { Container, inject } from "inversify";

namespace ioc_demo {

    interface Weapon {
        tryHit(fromDistance: number): boolean;
    }

    class Katana implements Weapon {
        public tryHit(fromDistance: number) {
            return fromDistance <= 2;
        }
    }

    class Ninja {
        public constructor(
            @inject("Weapon") private _weapon: Weapon
        ) {}
        public fight(fromDistance: number) {
            return this._weapon.tryHit(fromDistance);
        }
    }

    const container = new Container();
    container.bind<Weapon>("Weapon").to(Katana);
    container.bind<Ninja>("Ninja").toSelf();

    const ninja = container.get<Ninja>("Ninja");
    ninja.fight(2); // true
    ninja.fight(5); // false

}
