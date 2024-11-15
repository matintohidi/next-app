import Link from "next/link"

export default function DashboardLayout({
    children,
    team,
    analytics
}: {
    children: React.ReactNode,
    team: React.ReactNode,
    analytics: React.ReactNode
}) {
    return (
        <section>
            <nav>
                <h2>Dashboard Navbar</h2>
                <Link href="/dashboard/setting">Analytics Setting</Link>
            </nav>
            {children}
            <section>
                {team}
                {analytics}
            </section>
        </section>
    )
}