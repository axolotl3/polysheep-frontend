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
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xD29dF1E66b33ded18A39D4fc3ED48222eC8A4a1b  ',
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
        href: 'https://info.quickswap.exchange/pair/0x689A567702107E8d6f9f9901c917D060e202b8b7',
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
