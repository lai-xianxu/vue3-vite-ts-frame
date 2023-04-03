import { Directive, type DirectiveBinding } from 'vue';

/**
 * 点击外部元素触发指令
 */
export const clickOutside: Directive = {
  // 初始化指令
  beforeMount(el: any, binding: DirectiveBinding) {
    function clickHandler(e: any) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (typeof binding.value === 'function') {
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unmounted中可以解除事件监听
    el.__vueClickOutside__ = clickHandler;
    document.addEventListener('click', el.__vueClickOutside__);
  },
  unmounted(el: any) {
    // 解除事件监听
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__; // 删除属性
  },
};
