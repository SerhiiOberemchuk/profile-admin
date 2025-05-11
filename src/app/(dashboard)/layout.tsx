import AsideDshboard from "@/components/AsideDshboard";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen">
      <AsideDshboard />
      <div className="flex-1 overflow-y-scroll p-2 md:p-6">{children}</div>
    </main>
  );
}
