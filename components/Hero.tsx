import Link from "next/link";

const Hero = () => {
  return (
    <section className="heroBg flex items-center justify-center py-5" id="heroSection">
      <h1 className="text-5xl">Get your faulty Computer fixed today with ease.</h1>
      <p className="text-3xl">Tell us what happened to your computer, we will help you fix it.</p>
      <div className="flex items-center gap-4 flex-wrap">
        <Link
          href="/Signin"
          className="inline-flex h-9 items-center border justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-950 shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Sign In
        </Link>
        <Link
          href="/Signup"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default Hero;
