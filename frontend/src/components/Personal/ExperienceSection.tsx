export function ExperienceSection() {
  return (
    <div>
      <section className="p-28">
        <div className="flex flex-col gap-14 w-full">
          <p className="text-3xl  lg:text-6xl leading-[114%] font-medium text-[#000000] capitalize text-center tracking-[-2%] ">
            Money shouldn't <br /> feel messy
          </p>

          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[220px] relative w-full overflow-hidden rounded-3xl">
              <img
                src="/public/pp1.webp"
                alt="You get paid, you promise yourself this month will be diffrent."
                className="border-none"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
