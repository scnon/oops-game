import { _decorator } from "cc";
import { ecs } from "../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS";
import { CCComp } from "../../../../../extensions/oops-plugin-framework/assets/module/common/CCComp";
import { oops } from "../../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { ModuleUtil } from "../../../../../extensions/oops-plugin-framework/assets/module/common/ModuleUtil";
import { smc } from "../../common/SingletonModuleComp";
import { LobbyView } from "./LobbyView";
import { UIID } from "../../common/config/GameUIConfig";

const { ccclass, property } = _decorator;

/** 视图层对象 */
@ccclass("LoginView")
@ecs.register("LoginView", false)
export class LoginView extends CCComp {
  start() {}

  async login() {
    let res = await smc.network.login();
    oops.log.logView("login result:", res?.user_id);
    return;
    await ModuleUtil.addViewUiAsync(smc.account, LobbyView, UIID.Lobby);
    ModuleUtil.removeViewUi(this.ent, LoginView, UIID.Login);
  }

  reset() {
    this.node.destroy();
  }
}
