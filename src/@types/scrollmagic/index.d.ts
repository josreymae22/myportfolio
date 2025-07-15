declare module "scrollmagic" {
  export class Controller {
    addScene(scene: Scene): Controller;
    destroy(reset?: boolean): void; // 
  }

  export class Scene {
    constructor(options?: any);
    setTween(tween: any): Scene;
    setPin(element: HTMLElement | string, settings?: any): Scene;
    addTo(controller: Controller): Scene;
    addIndicators(options?: any): Scene;
  }
}
