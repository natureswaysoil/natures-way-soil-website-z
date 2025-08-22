import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      style={{
        background: '#144135',
        position: 'relative',
        minHeight: 300,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '2rem 0 0 2rem'
      }}
      className="hero-section"
    >
      {/* (optional) Add headline/content here later */}
      <div
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '2rem',
          width: 160,
          height: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Nature's Way Soil Logo"
          width={160}
          height={160}
          style={{
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))'
          }}
          priority
        />
      </div>
    </section>
  );
}