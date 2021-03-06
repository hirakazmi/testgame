import {RenderBasic} from "./com_render_basic.js";
import {RenderInstanced} from "./com_render_instanced.js";
import {RenderShaded} from "./com_render_shaded.js";

export type Render = RenderBasic | RenderShaded | RenderInstanced;

export const enum RenderKind {
    Basic,
    Shaded,
    Instanced,
}
