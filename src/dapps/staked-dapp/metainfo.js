import { ROUTES_WALLET } from '@/core/configs/configRoutes';
import { SUPPORTED_NETWORKS } from './handlers/supportedNetworks';
const layout = () =>
  import(/* webpackChunkName: "dapp-staked" */ './TheStakedLayout');
import { stakedRouterGuard } from '@/core/router/helpers';
export default {
  title: 'Stake on ETH 2.0',
  subtitle: 'Stake your ETH on Ethereum 2.0 and watch your rewards grow',
  tag: '#DeFi',
  rightIconType: 'mew',
  rightIcon: 'stake',
  name: ROUTES_WALLET.STAKED.NAME,
  path: ROUTES_WALLET.STAKED.PATH,
  networks: SUPPORTED_NETWORKS,
  layout,
  release: '04/18/2023',
  meta: {
    noAuth: false
  },
  children: [
    {
      path: ROUTES_WALLET.STAKED_STATUS.PATH,
      name: ROUTES_WALLET.STAKED_STATUS.NAME,
      beforeEnter: stakedRouterGuard
    },
    {
      path: ROUTES_WALLET.STAKED_1.PATH,
      name: ROUTES_WALLET.STAKED_1.NAME,
      beforeEnter: stakedRouterGuard
    },
    {
      path: ROUTES_WALLET.STAKED_2.PATH,
      name: ROUTES_WALLET.STAKED_2.NAME,
      beforeEnter: stakedRouterGuard
    },
    {
      path: ROUTES_WALLET.STAKED_3.PATH,
      name: ROUTES_WALLET.STAKED_3.NAME,
      beforeEnter: stakedRouterGuard
    },
    {
      path: ROUTES_WALLET.STAKED_4.PATH,
      name: ROUTES_WALLET.STAKED_4.NAME,
      beforeEnter: stakedRouterGuard
    }
  ]
};
