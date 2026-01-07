export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="dashboard-layout">
      {children}
    </section>
  );
}
