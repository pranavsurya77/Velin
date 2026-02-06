import { Cpu, Lock, Sparkles, Zap, Square } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-semibold lg:text-5xl">The Ultimate writing environment</h2>
                    <p className="mt-6 text-md">Crafted with precesion to help you enter a flow state and stay there longer.</p>
                </div>
                <br />

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Loads instantly and stays responsive, even with large notes.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Write in Markdown, add code blocks, and structure ideas the way developers think.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Secure</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Your notes stay private and protected, with security built into every layer.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Square className="size-4" />

                            <h3 className="text-sm font-medium">Pure Minimalism</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">A clean, distraction-free interface designed for focus and clarity.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
