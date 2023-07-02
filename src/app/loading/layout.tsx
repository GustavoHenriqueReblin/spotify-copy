import '../globals.css'

export const metadata = {
  title: 'Loading...',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<section>{children}</section>)
}
