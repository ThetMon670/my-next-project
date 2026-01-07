export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section id="auth-layout">
      {/* optional auth frame: sidebar, header, background */}
      {children}
    </section>
  );
}
