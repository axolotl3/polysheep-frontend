import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x424b48cFfafF9f457e4638B1BD965F39Ef0f3905',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Games (Coming soon)',
    icon: 'IfoIcon',
    href: '/#/games',
  },
  {
    label: 'Lottery (Coming soon)',
    icon: 'TicketIcon',
    href: '/#/lottery',
  },
  {
    label: 'NFTs (Coming Soon)',
    icon: 'NftIcon',
    href: '/#/nft',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0x424b48cFfafF9f457e4638B1BD965F39Ef0f3905',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '',
      },
      {
        label: 'Docs',
        href: '',
      },
    ],
  },
]

export default config
