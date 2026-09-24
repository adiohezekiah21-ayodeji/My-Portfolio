import SiteHeader from "./SiteHeader";

export default function PortfolioLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}
