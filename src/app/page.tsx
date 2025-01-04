export default function Home() {
  return (
    <div className="min-h-svh flex items-center justify-center bg-background">
      <div className="container">
        <h1 className="text-[12vw] md:text-[6.5vw] lg:text-[7.75vw] lg:leading-tight font-semibold font-onest">
          Crafting{" "}
          <span className="text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text animate-heroTextGradient bg-[length:200%_auto]">
            Digital{" "}
          </span>
          Experiences
        </h1>
      </div>
    </div>
  );
}
