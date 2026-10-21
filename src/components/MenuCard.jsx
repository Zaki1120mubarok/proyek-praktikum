export default function MenuCard({ nama, harga, kategori, tersedia }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '12px' }}>
      <h3>{nama}</h3>
      <p>Kategori: {kategori} | Harga: Rp{harga}</p>
      {tersedia ? (
        <span style={{ color: 'green', fontWeight: 'bold' }}>Tersedia</span>
      ) : (
        <span style={{ color: 'red', fontWeight: 'bold' }}>Stok Habis</span>
      )}
    </div>
  );
}