import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-[#0f1424] py-20 font-Rubik">
      <Head>
        <title>Time Tracking Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Dashboard />
      </main>
    </div>
  )
}
