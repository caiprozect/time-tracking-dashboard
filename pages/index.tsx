import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Time Tracking Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-screen flex min-h-screen items-center justify-center bg-[#0f1424] py-20 font-Rubik">
        <Dashboard />
      </main>
    </div>
  )
}
