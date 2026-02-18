import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#f2f0e9]">
            <Header />

            {/* Hero */}
            <section className="bg-zinc-900 px-6 pb-16 pt-36">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        Legal
                    </p>
                    <h1 className="font-serif text-5xl leading-tight text-white sm:text-6xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-sm text-zinc-500">Last updated: February 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="bg-[#f2f0e9] px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-zinc max-w-none">

                        <div className="mb-12 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
                            <p className="text-sm leading-relaxed text-emerald-800">
                                At Last Ventures, we take your privacy seriously. Please read this Privacy
                                Policy to learn how we treat personal data that we collect in relation to our
                                website and its associated services, including email newsletters, associated
                                content distribution platforms, and public Last Ventures social media accounts.
                            </p>
                        </div>

                        <Section title="What This Privacy Policy Covers">
                            <p>
                                This Privacy Policy covers how we treat Personal Data that we gather when you
                                access or use our Services. &ldquo;Personal Data&rdquo; means any information
                                that identifies or relates to a particular individual and also includes
                                information referred to as &ldquo;personally identifiable information&rdquo; or
                                &ldquo;personal information&rdquo; under applicable data privacy laws, rules or
                                regulations. This Privacy Policy does not cover the practices of companies we
                                don&apos;t own or control or people we don&apos;t manage.
                            </p>
                        </Section>

                        <Section title="Personal Data We Collect">
                            <p>We collect the following categories of Personal Data:</p>
                            <ul>
                                <li>Device/IP data (e.g. IP address, browser type)</li>
                                <li>Usage analytics (e.g. interactions with our web properties and newsletters)</li>
                                <li>Geolocation data (e.g. IP-address-based location information)</li>
                                <li>
                                    Other identifying information that you voluntarily provide (e.g. identifying
                                    information in emails or letters you send us)
                                </li>
                            </ul>
                            <p>
                                We collect Personal Data about you from the following sources: directly from
                                you when you provide it, automatically when you use our Services, and from
                                third-party vendors such as analytics providers and advertising partners.
                            </p>
                            <p>
                                The Services use cookies and similar technologies to enable our servers to
                                recognize your web browser and tell us how and when you visit and use our
                                Services. Cookies are small pieces of data placed on your computer, tablet,
                                phone or similar device when you use that device to access our Services.
                            </p>
                        </Section>

                        <Section title="How We Use Your Personal Data">
                            <p>
                                We process Personal Data to operate, improve, understand and personalize our
                                Services. Specifically, we use Personal Data to:
                            </p>
                            <ul>
                                <li>Meet or fulfill the reason you provided the information to us</li>
                                <li>Communicate with you about the Services, including updates or offers</li>
                                <li>Provide support and assistance for the Services</li>
                                <li>Deliver our newsletters and facilitate events</li>
                                <li>Respond to user inquiries and fulfill user requests</li>
                                <li>Improve and develop the Services, including testing and research</li>
                                <li>
                                    Protect against or deter fraudulent, illegal or harmful actions and maintain
                                    the safety, security and integrity of our Services
                                </li>
                                <li>
                                    Comply with our legal or contractual obligations, resolve disputes, and
                                    enforce our Terms of Use
                                </li>
                            </ul>
                            <p>
                                We will not collect additional categories of Personal Data or use the Personal
                                Data we collected for materially different, unrelated, or incompatible purposes
                                without providing you notice.
                            </p>
                        </Section>

                        <Section title="How We Share Your Personal Data">
                            <p>
                                We may share your Personal Data with the following categories of third parties:
                            </p>
                            <ul>
                                <li>
                                    <strong>Service Providers:</strong> Third-party service providers who help us
                                    provide our services and operate our business, including analytics providers,
                                    security providers, hosting and technology providers.
                                </li>
                                <li>
                                    <strong>Successors to Our Business:</strong> Your Personal Data may be
                                    transferred to a third party if we undergo a merger, acquisition, bankruptcy
                                    or other transaction in which that third party assumes control of our
                                    business.
                                </li>
                                <li>
                                    <strong>Legal Requirements:</strong> We may disclose your Personal Data if
                                    required to do so by law or in the good faith belief that such action is
                                    necessary to comply with a legal obligation.
                                </li>
                            </ul>
                        </Section>

                        <Section title="Data Security and Retention">
                            <p>
                                We seek to protect your Personal Data from unauthorized access, use and
                                disclosure using appropriate physical, technical, organizational and
                                administrative security measures based on the type of Personal Data and how we
                                are processing that data. We retain Personal Data about you for as long as
                                necessary to provide you with our Services or to perform our business or
                                commercial purposes for collecting your Personal Data.
                            </p>
                            <p>
                                Although we work to protect the security of your account and other data that we
                                hold in our records, please be aware that no method of transmitting data over
                                the internet or storing data is completely secure.
                            </p>
                        </Section>

                        <Section title="Your Rights and Choices">
                            <p>
                                Depending on your location, you may have certain rights regarding your Personal
                                Data, including the right to access, correct, or delete your data. You may also
                                have the right to object to or restrict certain processing of your Personal
                                Data.
                            </p>
                            <p>
                                If you do not want to receive communications from us, please indicate your
                                preference by emailing us at{" "}
                                <a
                                    href="mailto:privacy@lastventures.com"
                                    className="text-emerald-700 underline hover:text-emerald-900"
                                >
                                    privacy@lastventures.com
                                </a>
                                .
                            </p>
                        </Section>

                        <Section title="Changes to This Privacy Policy">
                            <p>
                                We&apos;re constantly trying to improve our Services, so we may need to change
                                this Privacy Policy from time to time as well, but we will alert you to changes
                                by placing a notice on the Last Ventures website, by sending you an email,
                                and/or by some other means. Please note that if you&apos;ve opted not to
                                receive legal notice emails from us (or you haven&apos;t provided us with your
                                email address), those legal notices will still govern your use of the Services,
                                and you are still responsible for reading and understanding them.
                            </p>
                        </Section>

                        <Section title="Contact Us">
                            <p>
                                If you have any questions or comments about this Privacy Policy, the ways in
                                which we collect and use your Personal Data, your choices and rights regarding
                                such use, please do not hesitate to contact us at:
                            </p>
                            <ul>
                                <li>
                                    Email:{" "}
                                    <a
                                        href="mailto:privacy@lastventures.com"
                                        className="text-emerald-700 underline hover:text-emerald-900"
                                    >
                                        privacy@lastventures.com
                                    </a>
                                </li>
                            </ul>
                        </Section>

                    </div>

                    {/* Related Links */}
                    <div className="mt-16 border-t border-zinc-200 pt-12">
                        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                            Related
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/terms"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-900 hover:text-zinc-900"
                            >
                                Terms of Use
                                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-12">
            <h2 className="mb-4 font-serif text-2xl text-zinc-900">{title}</h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2">
                {children}
            </div>
        </div>
    );
}
