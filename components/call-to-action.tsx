import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="
            relative
            py-16 md:py-32
            overflow-hidden
            bg-background
        ">
            {/* subtle gradient glow */}
            <div className="
                pointer-events-none
                absolute inset-0
                bg-[radial-gradient(60%_40%_at_50%_30%,rgba(120,90,255,0.12),transparent_70%)]
                dark:bg-[radial-gradient(60%_40%_at_50%_30%,rgba(120,90,255,0.18),transparent_70%)]
            " />

            <div className="relative mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Ready to think clearer?
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Join other writers and thinkers who have found their home.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/">
                                Get Started for Free
                            </Link>
                        </Button>

                        <Button asChild size="lg" variant="outline">
                            <Link href="/">
                                Watch demo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
