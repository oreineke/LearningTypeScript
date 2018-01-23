import { ComponentConstructor } from "./interfaces";

export function render<T>(Component: ComponentConstructor<T>, props: T, node: Element) {
    const componentInstance = new Component(props);
    const html = componentInstance.render();
    node.innerHTML = html;
    componentInstance.componentDidMount();
}
