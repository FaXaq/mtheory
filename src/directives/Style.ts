import { DirectiveFunction, VNode } from 'vue';
import { DirectiveBinding } from 'vue/types/options';

// expects style as object in binding.value
const MStyle: DirectiveFunction = (el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) => {
  const styleObj: { [key: string]: any } = binding.value;
  for (const p in styleObj) {
    if ((el.style as { [key: string]: any })[p] !== undefined) {
      (el.style as { [key: string]: any })[p] = styleObj[p];
    }
  }
};

export default MStyle;
