import { SeedRandom } from "../../../../../extensions/oops-plugin-framework/assets/core/common/random/SeedRandom";
import { oops } from "../../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { ecs } from "../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS";
import { Client, Session, Socket } from "@heroiclabs/nakama-js";

/**
 * 游戏进入初始化模块
 * 1、热更新
 * 2、加载默认资源
 */
@ecs.register("Network")
export class Network extends ecs.Entity {
  private client: Client | null = null;
  private session: Session | null = null;
  private socket: Socket | null = null;

  protected init() {
    this.client = new Client("defaultkey", "127.0.0.1", "7350", false, 5000);
    oops.log.logNet("init finish");
  }

  public async login() {
    this.session = await this.client!.authenticateDevice(
      "test-device-id",
      true,
      "tester"
    ).catch((err) => {
      console.log(err);
      oops.log.logNet("auth failed: ", JSON.stringify(err));
      return null;
    });
    if (this.session != null) {
      const res = await this.beginConnect();
      if (res != undefined) {
        this.session = res;
      }
    }
    return this.session;
  }

  protected async beginConnect() {
    if (!this.client) return;
    if (!this.session) return;
    this.socket = this.client.createSocket(false, true);
    this.socket.ondisconnect = this.onDisConnect;
    return await this.socket.connect(this.session, true);
  }

  private onDisConnect(event: any) {
    oops.log.logNet("socket disconnect:", event);
  }
}
