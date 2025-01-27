import billion from "../assets/images/svg/billion.svg"
import sale from "../assets/images/svg/sale.svg"
import nft from "../assets/images/svg/nft.svg"
import holder from "../assets/images/svg/holder.svg"
import engine from "../assets/images/png/engine.png";
import uniswap from "../assets/images/png/uniswap.png";
import polygon from "../assets/images/png/polygon.png";
import coin from "../assets/images/png/coin.png";

export const NAV_DATA = [
    { title: 'About', id: '#about' },
    { title: 'Presale $GILD', id: '#earn' },
    { title: 'Staking $GILD', id: '#games' },
    { title: '$GILD Nodes', id: '#token' },
];

export const UNISWAP_LIST = [
    "100,000+ Airdrop", "NFT $GILD giveaway", "Announcement and Games"
]
export const POWERED_LIST = [
    {
        image: engine,
        imageAlt: "engine",
        sizeClass: "h-20 max-lg:h-14"
    },
    {
        image: uniswap,
        imageAlt: "uniswap",
        sizeClass: "h-24 max-lg:h-16"
    },
    {
        image: coin,
        imageAlt: "coin-gecko",
        sizeClass: "h-[65px] max-lg:h-12"
    },
    {
        image: polygon,
        imageAlt: "polygon",
    },
];
export const TOKEN_INFO_LIST = [
    {
        image: billion,
        imageAlt: "token",
        title: "3 Billion",
        description: "GILD Token Info"
    },
    {
        image: sale,
        imageAlt: "sale-token",
        title: "Pre Sale Token",
        description: ""
    },
    {
        image: holder,
        imageAlt: "holders",
        title: "100,000+",
        description: "Holders"
    },
    {
        image: nft,
        imageAlt: "nft",
        title: "2,500+",
        description: "NFT Sold"
    },
]

