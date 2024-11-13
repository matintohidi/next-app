export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <nav>Navbar for dashboard</nav>
            {children}
        </section>
    );
}