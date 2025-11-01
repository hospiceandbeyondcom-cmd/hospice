"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";

export default function BlogPost() {
  const router = useRouter();

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[38vh] sm:h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/blog01.png"
          alt="When You Start Noticing They’re Getting Weaker What to Do Next"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-3xl leading-snug md:leading-tight drop-shadow-md">
            When You Start Noticing They’re Getting Weaker What to Do Next
          </h1>
        </div>
      </section>

      {/* ===== Blog Content ===== */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
        <article className="space-y-8 text-[17px] leading-relaxed">
          <p>
            It usually begins with something small. They start sleeping more.
            Their appetite fades. You notice they don’t have the same strength
            to get out of bed or walk to the kitchen like before.
          </p>

          <p>
            And then your heart starts asking the question you don’t want to say
            out loud: <em>“Is this the beginning of the end?”</em>
          </p>

          <p>
            If you’ve started noticing your loved one getting weaker, please
            know this — you’re not alone, and you don’t have to figure this out
            by yourself. At <strong>HospiceandBeyond Palliative Care</strong>,
            we walk with families through moments exactly like this when
            uncertainty feels heavy, and you just want to make sure your loved
            one is safe, comfortable, and cared for with dignity.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-black">
            1. Weakness Doesn’t Always Mean Giving Up Hope
          </h2>
          <p>
            One of the hardest parts of illness is not knowing what each change
            means. Sometimes weakness is a side effect of medication, sometimes
            it’s part of the body naturally slowing down. But either way, it’s a{" "}
            <strong>signal</strong> not a verdict.
          </p>

          <p>
            Instead of rushing to conclusions, this is the time to{" "}
            <strong>observe, ask, and reach out</strong>. Write down small
            patterns such as how they eat, sleep, breathe, or move. And most
            importantly, don’t face it alone. Early conversations with a{" "}
            <strong>palliative care team</strong> can make a world of
            difference. It’s about helping your loved one live as well as
            possible for as long as possible.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-black">
            2. Comfort Is the New Form of Care
          </h2>
          <p>
            When strength starts fading, comfort becomes the priority. This
            doesn’t mean you stop caring it means you start caring{" "}
            <strong>differently</strong>.
          </p>
          <p>
            You might notice they eat less, sleep longer, or speak less. At this
            stage, focus on <strong>comfort over correction</strong>. Instead of
            trying to make them eat or stay awake, create calm surroundings:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Play gentle music.</li>
            <li>Keep their hands warm.</li>
            <li>Sit beside them and hold their hand.</li>
          </ul>
          <p>
            These small acts of presence bring peace both to them and to you.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-black">
            3. Talk About Hospice Sooner Not Later
          </h2>
          <p>
            Many families think hospice means the end has come. In truth,{" "}
            <strong>
              hospice care begins when life still has moments worth cherishing
            </strong>{" "}
            laughter, shared memories, quiet mornings.
          </p>
          <p>
            Hospice isn’t about giving up it’s about giving control back to the
            family and focusing on peace over procedures. When hospice begins
            early, pain and symptoms are better managed, family members receive
            emotional support, and your loved one feels more dignity and calm.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-black">
            4. Let Yourself Feel What You Feel
          </h2>
          <p>
            It’s okay to feel sad, scared, or even angry. Watching someone you
            love get weaker is one of life’s deepest pains. You might find
            yourself torn between hope and heartbreak. That’s normal. Give
            yourself permission to breathe, rest, and ask for help.
          </p>
          <p>
            At HospiceandBeyond, we remind every caregiver that{" "}
            <strong>your feelings matter too</strong>. Compassion starts with
            caring for yourself.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-black">
            5. You Don’t Have to Do This Alone
          </h2>
          <p>
            If you’ve noticed changes even small ones reach out for guidance.
            HospiceandBeyond’s team is trained to help families understand what’s
            happening, make informed decisions, and find emotional stability
            through it all.
          </p>
          <p>
            Whether it’s palliative care to manage pain or hospice care for
            emotional and physical support, our goal is simple{" "}
            <strong>
              to help you and your loved one find peace in the midst of change.
            </strong>
          </p>

          <hr className="my-10 border-gray-300" />

          <p className="text-gray-700 italic">
            At <strong>HospiceandBeyond Palliative Care</strong>, we’re here to
            guide, comfort, and remind you that compassion is still the
            strongest form of medicine.
          </p>

          {/* ===== CTA Button ===== */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => router.push("/hospice-eligibility-questionnaire")}
              className="px-8 py-3 rounded-full font-semibold text-white text-lg transition hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
              }}
            >
              Take Your Eligibility Questionnaire
            </button>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  );
}
