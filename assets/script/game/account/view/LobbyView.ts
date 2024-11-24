import { _decorator } from "cc";
import { ecs } from "../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS";
import { CCComp } from "../../../../../extensions/oops-plugin-framework/assets/module/common/CCComp";
import { oops } from "../../../../../extensions/oops-plugin-framework/assets/core/Oops";

const { ccclass, property } = _decorator;

/** 视图层对象 */
@ccclass("LobbyView")
@ecs.register("LobbyView", false)
export class LobbyView extends CCComp {
  start() {}

  login() {}

  reset() {
    this.node.destroy();
  }
}
