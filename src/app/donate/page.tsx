export default function DonatePage() {
  return (
    <section className="py-14">
      <h1 className="text-4xl font-bold mb-4">Donate</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        Your gift helps cover medical care, supplies, and safe placement for animals who need it most.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href="#"
          className="rounded-2xl border p-6 hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Donate online</h2>
          <p className="text-gray-700">
            We’ll connect this to your preferred platform (Donorbox, PayPal, Stripe, etc.).
          </p>
        </a>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">Other ways to help</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Supplies & wish list</li>
            <li>Monthly giving</li>
            <li>Sponsorships</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
