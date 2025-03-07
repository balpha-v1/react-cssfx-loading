/// <reference types="react" />
import "../../css/Coin.css";
interface CoinProps {
    className?: string;
    color?: string;
    width?: number | string;
    height?: number | string;
    duration?: string;
}
declare const Coin: React.FC<CoinProps & React.HTMLProps<HTMLDivElement>>;
export default Coin;
//# sourceMappingURL=index.d.ts.map