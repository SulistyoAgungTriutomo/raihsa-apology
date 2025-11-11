import { useMemo } from 'react'

export default function App(){
  const today = useMemo(() => {
    try {
      const opts = { day:'2-digit', month:'long', year:'numeric', timeZone:'Asia/Jakarta' }
      return new Intl.DateTimeFormat('id-ID', opts).format(new Date())
    } catch {
      return new Date().toLocaleDateString()
    }
  }, [])

  return (
    <div className='relative min-h-screen bg-pink-50 text-pink-950 font-sans-soft'>
      {/* Floating heart */}
      <span aria-hidden className='absolute right-5 top-5 heart-pulse'>
        <svg width='22' height='22' viewBox='0 0 24 24' fill='#ec4899'>
          <path d='M12 21s-6.716-4.438-9.164-7.156C.704 11.558 1.06 8.2 3.514 6.6 5.97 5 8.5 6 10 7.8 11.5 6 14.03 5 16.486 6.6 18.94 8.2 19.296 11.558 17.164 13.844 18.5 15.292 12 21 12 21z'/>
        </svg>
      </span>

      <main className='mx-auto flex min-h-screen max-w-sm flex-col px-5'>
        <header className='pt-10 pb-4'>
          <h1 className='text-center text-2xl font-semibold tracking-tight font-serif-soft'>
            Untuk Raisha Nur Sabrina
          </h1>
          <p className='mt-1 text-center text-xs text-pink-800/70'>
            dari Sulistyo Agung · {today}
          </p>
        </header>

        <section className='mt-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pink-100'>
          <p className='text-base leading-relaxed'>
            Maaf ya sayang… Aku tahu aku masih banyak kurangnya dan sedang belajar
            jadi pasangan yang lebih baik buat kamu. Terima kasih sudah tetap ada,
            tetap sabar, dan tetap percaya sama aku. Aku sayang kamu, dan aku mau
            selalu tumbuh bareng kamu.
          </p>
          <p className='mt-4 text-right text-sm'>— Sulistyo Agung</p>
        </section>

        <div className='h-8' />

        <footer className='mt-auto mb-8 pt-8 text-center text-[11px] text-pink-800/60'>
          Untuk Raisha, dengan penuh cinta 💐
        </footer>
      </main>
    </div>
  )
}
