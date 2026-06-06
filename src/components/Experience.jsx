// src/components/Experience.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    type: 'internship',
    title: 'AI Engineer & Computer Vision Developer',
    org: 'Torche Indonesia — Kerja Praktik',
    period: 'Juli 2025 – November 2025',
    desc: 'Berkolaborasi dalam tim 3 orang mengembangkan NutriBot, sistem deteksi makanan dan konsultasi gizi berbasis AI untuk program Makan Bergizi Gratis (MBG). Melatih YOLOv8-S untuk 47 kelas makanan (Precision 70.89%, mAP50 63.29%). Mengelola dan anotasi manual 2.400+ citra (7.300+ annotations) di Roboflow. Integrasi dengan FastAPI dan alur kerja Agentic AI (RAG / LLM) menggunakan vector database.',
    tags: ['YOLOv8', 'FastAPI', 'RAG', 'ChromaDB', 'Roboflow', 'Agentic AI'],
    icon: '💼',
    color: '#38bdf8',
  },
    {
    type: 'internship',
    title: 'Costumer Service',
    org: 'PT Bank Syariah Indonesia Tbk. (BSI) — Magang',
    period: 'Jun 2021 – Agu 2021',
    desc: 'Berperan aktif dalam masa transisi penggabungan tiga bank syariah terbesar di Indonesia (BRIS, BSM, dan BNIS) menjadi Bank Syariah Indonesia. Membantu proses migrasi rekening nasabah secara bertahap, termasuk pembukaan rekening baru, aktivasi mobile banking, dan penggantian kartu debit/buku tabungan. Memberikan edukasi dan asistensi langsung kepada nasabah mengenai perubahan sistem operasional dan kebijakan produk pasca-merger. Memastikan kelancaran administrasi dokumen nasabah untuk menjamin keamanan data selama proses migrasi berlangsung.',
    tags: ['Customer Service', 'Banking', 'Merger Transition', 'BSI'],
    icon: '🏦',
    color: '#22c55e',
  },
  {
    type: 'organization',
    title: 'Ketua Pelaksana',
    org: 'Arafah Scouting Competition',
    period: '25 Juli – 5 Agustus 2020',
    desc: 'Memimpin seluruh rangkaian kegiatan kompetisi pramuka tingkat regional dengan lebih dari 200 peserta. Bertanggung jawab atas perencanaan, koordinasi tim, manajemen anggaran, dan kelancaran acara. Berhasil menyelenggarakan acara tepat waktu dan mendapat apresiasi dari peserta dan Pembina.',
    tags: ['Leadership', 'Event Management', 'Team Coordination'],
    icon: '🏆',
    color: '#f59e0b',
  },
  {
    type: 'organization',
    title: 'Koordinator Bidang Ta\'lim',
    org: 'Organisasi Pelajar Pondok Modern',
    period: '2019 – 2021',
    desc: 'Bertanggung jawab atas perencanaan dan pelaksanaan kegiatan belajar santri di luar jam pelajaran formal. Menyusun jadwal mengaji, halaqah, dan kajian kitab bersama pengajar atau santri senior. Berperan aktif dalam peningkatan kualitas pembelajaran dan motivasi belajar santri.',
    tags: ['Leadership', 'Education', 'Organization'],
    icon: '📚',
    color: '#a78bfa',
  },
]

const ExperienceCard = ({ exp, index, inView }) => (
  <motion.div
    className="flex gap-6"
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  >
    {/* Timeline node */}
    <div className="flex-shrink-0 relative flex flex-col items-center">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl z-10"
        style={{
          background: `${exp.color}15`,
          border: `2px solid ${exp.color}40`,
        }}
      >
        {exp.icon}
      </div>
      {index < experiences.length - 1 && (
        <div className="flex-1 w-px mt-2 timeline-line opacity-20" style={{ minHeight: 40 }} />
      )}
    </div>

    {/* Card */}
    <div
      className="card-glass flex-1 p-6 mb-6"
      style={{ borderColor: `${exp.color}20` }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <div className="font-display text-base font-bold" style={{ color: 'var(--text-primary)' }}>
            {exp.title}
          </div>
          <div className="font-body text-sm mt-0.5" style={{ color: exp.color }}>
            {exp.org}
          </div>
        </div>
        <span
          className="font-mono text-xs px-3 py-1 rounded-full flex-shrink-0"
          style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
        >
          {exp.period}
        </span>
      </div>

      <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {exp.desc}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map(tag => (
          <span key={tag} className="tag text-[10px]">{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
)

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" className="relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

      <div className="section-container" ref={ref}>
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="tag mb-4 inline-flex">Pengalaman</div>
          <h2 className="section-title mb-4">
            Perjalanan <span className="glow-text">Saya</span>
          </h2>
          <p className="section-subtitle">
            Kerja praktik, pengalaman organisasi, dan proyek yang membentuk keahlian saya di bidang AI.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
