import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import { makeProvideDecorator } from "inversify-binding-decorators";
import { MovieStore } from "../stores/movie_store";
import { ActorStore } from "../stores/actor_store";

const container = new Container();
const { lazyInject } = getDecorators(container);
const provide = makeProvideDecorator(container);

export { lazyInject, provide };
