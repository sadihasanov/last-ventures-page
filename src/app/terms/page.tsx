import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function TermsPage() {
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
                        Terms of Use
                    </h1>
                    <p className="mt-4 text-sm text-zinc-500">Last updated: February 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="bg-[#f2f0e9] px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-zinc max-w-none">

                        <Section title="General">
                            <p>
                                Please read the following terms and conditions (&ldquo;Terms&rdquo;). They govern your
                                use of this website and its associated services, including email newsletters,
                                associated content distribution platforms, and public Last Ventures online social
                                media accounts (collectively, the &ldquo;Services&rdquo;). By using the Services, you
                                agree to be bound by these Terms. We may update these Terms from time to time and
                                any modifications will be effective immediately upon posting unless we indicate
                                otherwise. If you use the Services after any changes to the Terms have been posted,
                                that means you agree to all of the changes. We suggest that you review these Terms
                                periodically for changes.
                            </p>
                            <p>
                                Except as otherwise noted on the Services, all content and material on the
                                Services — including information, photos, blog posts, videos, graphics, icons,
                                code, design, and overall appearance — are the property of Last Ventures and
                                should not be used, modified, or reproduced without our prior written consent.
                                All trademarks, trade names, and logos displayed on the Services are the property
                                of Last Ventures, its affiliates, or their respective third-party owners, and the
                                Services grants no license to them.
                            </p>
                            <p>
                                Certain statements that individual personnel make may constitute
                                &ldquo;forward-looking statements.&rdquo; To the extent any information herein
                                constitutes forward-looking statements, please note that, due to various risks
                                and uncertainties, actual events, results, or performance may differ materially
                                from those reflected or contemplated in such statements. Forward-looking
                                statements are not guarantees and involve risks, uncertainties, and assumptions.
                                Last Ventures expressly disclaims any obligation to update any forward-looking
                                statement in the event it later turns out to be inaccurate.
                            </p>
                        </Section>

                        <Section title="Third-Party Websites">
                            <p>
                                The Services may link to or integrate with other websites operated or content
                                provided by third parties, and such other websites may link to this website.
                                Last Ventures has no control over any such other websites or their content and
                                will have no liability arising out of or related to such websites or their
                                content. The existence of any such link does not constitute an endorsement of
                                such websites, the content of the websites, or the operators of the websites.
                                Last Ventures is providing these links to you only as a convenience. You release
                                and hold Last Ventures harmless from any and all liability arising from your use
                                of any third-party website or service.
                            </p>
                        </Section>

                        <Section title="Submissions to Last Ventures">
                            <p>
                                Unsolicited information or materials submitted through the Services (for
                                example, via general contact forms or email) are not subject to any obligation
                                of confidentiality, non-use, or non-disclosure on our part unless we have agreed
                                otherwise in a signed engagement letter or non-disclosure agreement. Where you
                                engage Last Ventures for services, the confidentiality terms of that engagement
                                will govern the materials you share with us. Outside of such an engagement, by
                                submitting information or materials through the Services you agree that we are
                                free to use it without condition.
                            </p>
                        </Section>

                        <Section title="No Professional Advice">
                            <p>
                                Nothing on the Services constitutes professional advice of any kind (including
                                business, employment, legal, accounting, or tax advice). General content
                                published here is provided for educational purposes only and does not create an
                                advisory, attorney-client, or other professional relationship. Advice from a
                                suitably qualified professional, engaged to address your specific circumstances,
                                should always be sought in relation to any particular matter. Nothing on the
                                Services constitutes an offer to buy or sell any security or interest in any
                                investment vehicle.
                            </p>
                        </Section>

                        <Section title="Disclaimer of Warranties">
                            <p>
                                THE SERVICES AND THE INFORMATION CONTAINED THEREIN ARE PROVIDED &ldquo;AS
                                IS.&rdquo; LAST VENTURES AND ITS AFFILIATES DISCLAIM ALL WARRANTIES AND
                                REPRESENTATIONS OF ANY KIND WITH REGARD TO THE SERVICES, INCLUDING ANY IMPLIED
                                WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD-PARTY RIGHTS, FREEDOM
                                FROM VIRUSES OR OTHER HARMFUL CODE, OR FITNESS FOR A PARTICULAR PURPOSE. LAST
                                VENTURES AND ITS AFFILIATES DO NOT WARRANT THE ACCURACY, ADEQUACY, OR
                                COMPLETENESS OF THE INFORMATION AND MATERIALS CONTAINED ON THE SERVICES AND
                                EXPRESSLY DISCLAIM LIABILITY FOR ERRORS OR OMISSIONS IN THE MATERIALS AND
                                INFORMATION.
                            </p>
                        </Section>

                        <Section title="Limitation of Liability">
                            <p>
                                To the fullest extent allowed by applicable law, under no circumstances and
                                regardless of the form of action, whether in contract, warranty, tort (including
                                negligence), strict liability, or otherwise, will Last Ventures or its
                                affiliates be liable to you or any other person for any consequential,
                                incidental, special, punitive, or exemplary damages, regardless of whether Last
                                Ventures or its affiliates have been apprised of the likelihood of such damages
                                occurring.
                            </p>
                        </Section>

                        <Section title="Governing Law">
                            <p>
                                These Terms are governed by and will be construed under the laws of the
                                applicable jurisdiction, without regard to the conflicts of laws provisions
                                thereof. If any provision of these Terms is found to be unenforceable or
                                invalid, that provision will be limited or eliminated, to the minimum extent
                                necessary, so that these Terms shall otherwise remain in full force and effect
                                and enforceable.
                            </p>
                        </Section>

                    </div>

                    {/* Related Links */}
                    <div className="mt-16 border-t border-zinc-200 pt-12">
                        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                            Related
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/privacy"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-900 hover:text-zinc-900"
                            >
                                Privacy Policy
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
            <div className="space-y-4 text-base leading-relaxed text-zinc-600">{children}</div>
        </div>
    );
}
