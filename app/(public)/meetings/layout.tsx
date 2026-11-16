export default function MeetingsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            {children}
        </div>
    );
}