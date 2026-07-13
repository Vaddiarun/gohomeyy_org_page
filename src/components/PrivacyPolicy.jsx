const sections = [
  {
    title: '1. Who this policy covers',
    body: [
      `This policy covers the Gohomeyy Chef app — the app used by home chefs approved to cook on the Gohomeyy platform. It does not cover the separate Gohomeyy customer app, which has its own privacy policy governing how customer data is handled. Where this policy refers to "you," it means the chef using this app.`,
      `Gohomeyy Chef is operated by [Legal Entity Name, e.g. Gohomeyy Technologies Pvt. Ltd.], registered at [Registered Business Address] ("Gohomeyy," "we," "us"). Replace the bracketed placeholders with your registered legal entity details before publishing this policy.`,
    ],
  },
  {
    title: '2. Information we collect',
    body: [
      'We collect information you provide directly, information generated as you use the app to run your kitchen, and a small amount of technical information collected automatically.',
    ],
    subsections: [
      {
        title: '2.1 Account & registration information',
        body: 'When you apply to become a chef, we collect your full name, email address, phone number, and your cuisine specialty. Your phone number is also used to verify your identity at login.',
      },
      {
        title: '2.2 Identity & verification documents',
        body: 'To maintain trust and safety on the platform, we ask you to upload a government-issued ID and a food safety certificate during onboarding. Our concierge team reviews these documents to approve your application.',
      },
      {
        title: '2.3 Kitchen & business information',
        body: 'We collect your kitchen name, kitchen address, seating/cooking capacity, the appliances available in your kitchen, a bio, your areas of expertise, and a photo of your kitchen. This information is shown to customers browsing chefs on the platform.',
      },
      {
        title: '2.4 Location information',
        body: `With your permission, the app reads your device's GPS location in the foreground — for example, to set your kitchen's map coordinates during onboarding, and to match you with nearby "Fuel NOW" instant orders while you're online and available. We do not collect your location in the background when the app is closed or not in use.`,
      },
      {
        title: '2.5 Financial / payout information',
        body: 'To pay you for completed orders, we collect your bank account holder name, bank name, account number, and IFSC code. This information is used exclusively for processing payouts to you.',
      },
      {
        title: '2.6 Photos you take in the app',
        body: `Beyond your kitchen and ID photos, the app asks you to capture a photo of each prepared Fuel meal batch alongside its weight, as proof of preparation before it's marked ready for pickup.`,
      },
      {
        title: '2.7 Orders, subscriptions & fulfillment data',
        body: `To fulfill orders, we share limited customer information with you: the customer's name, phone number, order items, delivery time slot, and delivery status. For Fuel subscriptions, you also see the subscriber's name, phone number, and assigned meal plan. This data is provided so you can prepare and coordinate delivery of an order — it is not yours to use for any other purpose.`,
      },
      {
        title: '2.8 Device & technical information',
        body: 'Like most apps, our backend automatically logs standard technical information with each request — such as timestamps and general request metadata — to operate the service securely and diagnose issues. We do not use third-party advertising or analytics trackers in this app.',
      },
    ],
  },
  {
    title: '3. How we use your information',
    list: [
      'To verify your identity and review your application to cook on the platform',
      'To operate core features: displaying your kitchen profile, managing orders, running Fuel subscriptions and daily fulfillments, and Fuel NOW instant dispatch',
      'To match you with nearby customers for Fuel NOW while you are online',
      'To process payouts for completed orders',
      'To communicate with you about orders, your application status, or support requests',
      'To maintain the safety, security, and integrity of the platform',
    ],
    body: ['We do not sell your personal data. We do not use your information for third-party advertising, and we do not share it with data brokers.'],
  },
  {
    title: '4. How we share your information',
    body: [`We share information only where it's necessary to run the platform:`],
    list: [
      'With customers — your chef profile, kitchen name, rating, and cuisine are visible to customers browsing plans and chefs.',
      `With delivery partners/riders — pickup details necessary to route and deliver an order, such as your kitchen location and the order's delivery details.`,
      'With payment processors — your bank details, solely to process payouts owed to you.',
      'With service providers — infrastructure and mapping providers who help us operate the app (see Section 10).',
      "Where required by law — if we're required to disclose information to comply with a legal obligation, protect our rights, or respond to a valid legal request.",
    ],
    bodyAfter: ['We do not sell your personal information to third parties.'],
  },
  {
    title: '5. Data storage & security',
    body: [
      'Your login session is stored on your device using secure, encrypted on-device storage, not plain text. All communication between the app and our servers is encrypted in transit. Access to chef data on our backend is restricted to what\'s needed to operate the platform and support you.',
      'No method of transmission or storage is 100% secure, but we work to protect your information using industry-standard safeguards appropriate to its sensitivity — particularly for identity documents and bank details.',
    ],
  },
  {
    title: '6. Data retention',
    body: [
      'We retain your account, verification, and financial information for as long as your chef account is active, and for a reasonable period afterward as required for recordkeeping, tax, dispute resolution, and legal compliance purposes. Order and fulfillment records are retained to support accounting and customer support history. You can request deletion of your account as described below.',
    ],
  },
  {
    title: '7. Your rights & choices',
    list: [
      "Access & correction — you can review and update most of your profile, kitchen, and bank details directly in the app's Profile section.",
      "Deletion — you can request deletion of your account and associated personal data by contacting us at the email below, subject to records we're legally required to retain.",
      'Permission controls — you can grant or revoke camera, photo library, and location permissions at any time from your device\'s system settings.',
      'Going offline — toggling yourself offline for Fuel NOW stops the app from being matched to nearby instant orders.',
    ],
  },
  {
    title: '8. Permissions the app requests',
    table: {
      head: ['Permission', 'Used for', 'When'],
      rows: [
        ['Camera', 'Capturing your kitchen photo, ID/certificate photos during onboarding, and meal weigh-in proof photos', 'Only when you tap a capture action'],
        ['Photo library', `Choosing an existing photo instead of taking a new one, for the same onboarding and weigh-in flows`, 'Only when you tap "choose from gallery"'],
        ['Location', 'Setting kitchen coordinates at onboarding; matching you to nearby Fuel NOW orders while online', 'Foreground only, while the app is open'],
      ],
    },
  },
  {
    title: `9. Children's privacy`,
    body: [
      'Gohomeyy Chef is intended for chefs who are adults capable of entering into a legal agreement to run a food business. The app is not directed at children, and we do not knowingly collect personal information from anyone under 18.',
    ],
  },
  {
    title: '10. Third-party services',
    body: [
      'We rely on a small number of infrastructure providers to operate the app, including mapping services (to show kitchen locations and delivery routing) and app-hosting infrastructure. These providers process data only as needed to provide their service to us, under their own privacy and security commitments.',
      '(Update this section to name your specific vendors — e.g. "Google Maps Platform" — before publishing, if your store listing or local law requires naming them explicitly.)',
    ],
  },
  {
    title: '11. Changes to this policy',
    body: [
      `We may update this policy from time to time as the app evolves. If we make material changes, we'll update the effective date above and, where appropriate, notify you in the app. Continuing to use Gohomeyy Chef after an update means you accept the revised policy.`,
    ],
  },
  {
    title: '12. Contact us',
    body: ['Questions about this policy, or requests to access, correct, or delete your data, can be sent to:'],
    contact: 'gohomeyybengaluru@gmail.com',
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-[860px] px-6 pb-[100px] pt-[140px]">
      <div className="mb-2 text-[13px] font-bold uppercase tracking-[0.14em] text-orange">Legal</div>
      <h1 className="mb-3 font-display text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink">
        Privacy Policy
      </h1>
      <p className="mb-1 text-[15px] text-coffee">Effective date: July 8, 2026</p>
      <p className="mb-1 text-[15px] text-coffee">Applies to: the Gohomeyy Chef mobile app</p>
      <p className="mb-10 text-[15px] text-coffee">
        Contact:{' '}
        <a href="mailto:gohomeyybengaluru@gmail.com" className="font-semibold text-orange hover:underline">
          gohomeyybengaluru@gmail.com
        </a>
      </p>

      <p className="mb-12 max-w-[680px] text-[16.5px] leading-[1.7] text-coffee">
        Gohomeyy Chef is the operations app home chefs use to run their kitchen on the Gohomeyy platform —
        accepting orders, cooking Fuel subscription meals, and managing their profile. This policy explains, in
        plain terms, what information the app collects from chefs, why, and what choices you have about it.
      </p>

      <div className="flex flex-col gap-11">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="mb-3 font-display text-[22px] font-bold tracking-[-0.01em] text-ink">{s.title}</h2>

            {s.body?.map((p) => (
              <p key={p} className="mb-3 text-[15.5px] leading-[1.7] text-coffee">
                {p}
              </p>
            ))}

            {s.list && (
              <ul className="mb-3 flex flex-col gap-2 pl-1">
                {s.list.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15.5px] leading-[1.6] text-coffee">
                    <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {s.bodyAfter?.map((p) => (
              <p key={p} className="mb-3 text-[15.5px] leading-[1.7] text-coffee">
                {p}
              </p>
            ))}

            {s.table && (
              <div className="mb-3 overflow-x-auto rounded-2xl border border-ink/10">
                <table className="w-full min-w-[560px] border-collapse text-left text-[14.5px]">
                  <thead>
                    <tr className="bg-cream">
                      {s.table.head.map((h) => (
                        <th key={h} className="border-b border-ink/10 px-4 py-3 font-display font-bold text-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-ink/10 last:border-0">
                        {row.map((cell, i) => (
                          <td key={i} className="px-4 py-3 align-top leading-[1.6] text-coffee">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {s.subsections?.map((sub) => (
              <div key={sub.title} className="mb-4 pl-1">
                <h3 className="mb-1.5 text-[16px] font-bold text-ink">{sub.title}</h3>
                <p className="text-[15.5px] leading-[1.7] text-coffee">{sub.body}</p>
              </div>
            ))}

            {s.contact && (
              <a href={`mailto:${s.contact}`} className="text-[15.5px] font-semibold text-orange hover:underline">
                {s.contact}
              </a>
            )}
          </div>
        ))}
      </div>


    </section>
  );
}
