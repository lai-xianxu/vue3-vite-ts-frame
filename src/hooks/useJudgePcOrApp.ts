/**
 * 用于判断是pc，还是h5
 */
const useJudgePcOrApp = () => {
  const userAgentInfo = navigator.userAgent;
  const agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
    'BlackBerry',
    'webOS',
  ];
  const flag = agents.find((e: string) => userAgentInfo.indexOf(e) === -1);
  return flag ? 'H5' : 'PC';
};
export default useJudgePcOrApp;
