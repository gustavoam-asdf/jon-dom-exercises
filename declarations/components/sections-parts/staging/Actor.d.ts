import "@styles/components/staging/Actor.css";
interface Move {
    up(movement?: number): number;
    down(movement?: number): number;
    left(movement?: number): number;
    right(movement?: number): number;
}
export default class Actor {
    self: HTMLDivElement;
    static speed: number;
    move: Move;
    get limits(): DOMRect;
    nextMove: Move;
    static className: string;
    positionX: number;
    positionY: number;
    constructor();
    private template;
    private updateDOMPosition;
}
export {};
