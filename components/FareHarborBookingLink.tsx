const FAREHARBOR_SHORTNAME = "seaspiritfishing";
const FAREHARBOR_FLOW = 139900;
const LINK_CLASS_NAME =
  "mt-auto inline-flex items-center justify-center gap-[9px] bg-coral text-white font-extrabold text-[15px] tracking-[0.01em] px-7 py-[17px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px] w-full";

type FareHarborBookingLinkProps = {
  href: string;
  itemId: number;
  tripName: string;
};

export default function FareHarborBookingLink({
  href,
  itemId,
  tripName,
}: FareHarborBookingLinkProps) {
  const html = `
    <a
      href="${href}"
      onclick="return !(window.FH && FH.open({ shortname: '${FAREHARBOR_SHORTNAME}', fallback: 'simple', fullItems: 'yes', flow: ${FAREHARBOR_FLOW}, view: { item: ${itemId} } }));"
      class="${LINK_CLASS_NAME}"
    >
      Book ${tripName}
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </svg>
    </a>
  `;

  return <div className="mt-auto" dangerouslySetInnerHTML={{ __html: html }} />;
}
