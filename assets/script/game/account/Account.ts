import { Session } from "./../../../../node_modules/@heroiclabs/nakama-js/session";
/*
 * @Author: dgflash
 * @Date: 2021-11-11 17:45:23
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-01 13:49:37
 */
import { ecs } from "../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS";
import { AccountModelComp } from "./model/AccountModelComp";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";

/** 账号模块 */
@ecs.register("Account")
export class Account extends ecs.Entity {
  AccountModel!: AccountModelComp;

  protected init() {
    this.addComponents<ecs.Comp>(AccountModelComp);
  }

  public login(session: Session) {
    oops.log.logModel(session.user_id, "user id");
  }
}
