export default function SettingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>title for dashboard/setting</h1>
            <section>{children}</section>
        </>
    );
}