// 7-load_balancer.js

export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race retourne la valeur de la première promesse résolue
  return Promise.race([chinaDownload, USDownload]);
}
