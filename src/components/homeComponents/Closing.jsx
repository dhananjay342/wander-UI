
import { Users } from "lucide-react";
import { Button } from "../ui/button";

const Closing = () => {
  return (
    <>
      <section className="bg-slate-800 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <Users className="mx-auto mb-5 text-orange-800" size={38} />

          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-100">
            The World Is Waiting for You
          </h2>

          <p className="mb-7 leading-7 text-slate-100">
            Pack your curiosity, follow your dreams, and let your next
            adventure begin with WanderLust.
          </p>

          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-900"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }>
            Back to Top ↑
          </Button>
        </div>
      </section>

      <footer className="bg-slate-700 px-6 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} WanderLust. Explore more. Worry less.
      </footer>
    </>
  );
};

export default Closing;