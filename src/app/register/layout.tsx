import '../globals.css'

export const metadata = {
  title: 'Inscrever-se - Spotify',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<section>{children}</section>)
}
