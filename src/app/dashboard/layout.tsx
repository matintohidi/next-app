import Link from "next/link"

export default function DashboardLayout({
    children,
    team,
    analytics,
    login
}: {
    children: React.ReactNode,
    team: React.ReactNode,
    analytics: React.ReactNode,
    login: React.ReactNode,
}) {
    // In real project you get user or auth user to know isLoggedIn true or flase
    const isLoggedIn = false;

    return isLoggedIn ? (
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
    ) : (
        login
    )
}