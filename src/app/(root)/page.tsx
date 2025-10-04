import TradingViewWidget from "@/components/TradingViewWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";

const Page = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;
  return (
    <div className="md:col-span-1 xl:col-span-1">
      <TradingViewWidget
        title="Market Overview"
        scriptUrl={`${scriptUrl}market-overview.js`}
        config={MARKET_OVERVIEW_WIDGET_CONFIG}
        className="custom-chart"
        height={600}
      />
    </div>
  );
};

export default Page;
