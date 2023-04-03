<template>
  <div v-click-outside="onOutside">
    <span><Demo /></span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { getIconList } from '@/api/demo';
import useJudgePcOrApp from '@/hooks/useJudgePcOrApp';
import { useDemoStore } from '@/store/modules/demo';
/* props demo */
interface Props {
  modelValue: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});
console.log(props.modelValue, 'props demo');

/* emit demo */
const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();
emit('update:modelValue', false);

/* axios demo */
const axiosDemo = () => {
  getIconList({
    type: 1,
  }).then((res: VIconData) => {
    console.log(res, 'axios demo');
  });
};

/* watch demo */
const visible = ref(false);
watch(
  () => props.modelValue,
  (val: boolean) => {
    visible.value = val;
  },
  {
    immediate: true,
  },
);

/* computed demo */
const computedVal = computed(() => {
  return visible.value;
});
console.log(computedVal.value, 'computed demo');

/* pinia状态管理demo */
const demoStore = useDemoStore();
console.log(demoStore.state_count, 'pinia demo');

/* 路由使用demo */
const router = useRouter();
const onJump = () => {
  router.push('/my');
};

/* hooks demo */
console.log(useJudgePcOrApp(), 'hooks');

/* 指令 demo */
const onOutside = () => {
  console.log('触发了指令');
};
</script>
<style scoped lang="scss">
div {
  span {
    @extend %ov1;

    color: $theme-color;
  }
}
// vue3深度作用选择器示例 :deep(){}
:deep(span) {
  background: skyblue;
}
</style>
