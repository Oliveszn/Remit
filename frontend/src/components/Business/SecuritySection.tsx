type SecurityCardProps = {
  image: string;
  title: string;
  description: string;
};

function SecurityCard({ image, title, description }: SecurityCardProps) {
  return (
    <div className="bg-[#F7F7FC] rounded-3xl p-6 flex flex-col gap-6 items-start w-full h-full  shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-50"> */}
      <div className="flex flex-col items-start gap-4 self-stretch h-fit ">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-contain object-center"
        />
        <h3 className="text-lg lg:text-2xl font-semibold text-black leading-[1.4]">
          {title}
        </h3>
      </div>

      <p className="text-base font-normal tracking-normal leading-[1.5] text-zinc-600">
        {description}
      </p>
    </div>
  );
}

export default function SecuritySection() {
  return (
    <section className="bg-[#FFFFFF] py-20 px-6">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-black leading-[1.1] text-center max-w-3xl mx-auto">
          Built on Security, Backed by Compliance
        </h2>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <SecurityCard
              image="/ndpr.png"
              title="NDPR Compliant"
              description="Your business and employee data is protected under Nigerian Data Protection Regulations."
            />

            <SecurityCard
              image="/pci_dss.png"
              title="PCI DSS Certified"
              description="Every card transaction is processed with PCI DSS-compliant systems."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
