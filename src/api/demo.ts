import { Http } from '@/utils/request';

const api = import.meta.env.VITE_APP_API;

/**
 * 图标查询
 */
export function getIconList(params?: VIconParams) {
  return Http.get<VIconData>(`${api}/jeecg-boot/tax/taxIcon/appList`, params);
}
