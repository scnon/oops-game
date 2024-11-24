/*
 * @Date: 2021-08-12 09:33:37
 * @LastEditors: dgflash
 * @LastEditTime: 2023-02-15 09:38:36
 */
import {
  LayerType,
  UIConfig,
} from "../../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum UIID {
  /** 资源加载界面 */
  Loading = 1,
  /** 提示弹出窗口 */
  Alert,
  /** 确认弹出窗口 */
  Confirm,
  /** 登录界面 */
  Login,
  /** 大厅界面 */
  Lobby,
}

/** 打开界面方式的配置数据 */
export var UIConfigData: { [key: number]: UIConfig } = {
  [UIID.Loading]: { layer: LayerType.UI, prefab: "gui/loading/loading" },
  [UIID.Alert]: { layer: LayerType.Dialog, prefab: "common/prefab/alert" },
  [UIID.Confirm]: { layer: LayerType.Dialog, prefab: "common/prefab/confirm" },
  [UIID.Login]: { layer: LayerType.UI, prefab: "gui/login/login" },
  [UIID.Lobby]: { layer: LayerType.UI, prefab: "gui/lobby/lobby" },
};
