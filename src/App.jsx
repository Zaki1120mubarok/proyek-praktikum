// Komponen utama aplikasi restoran
import MenuCard from './components/MenuCard.jsx';

export default function App() {
  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Katalog Menu Restoran</h1>
      <p>Pilihan menu makanan dan minuman terbaik</p>

      {/* Tombol filter sederhana */}
      <div style={{ marginBottom: '15px', marginTop: '10px' }}>
        <button style={{ marginRight: '5px', padding: '5px 10px', cursor: 'pointer' }}>Semua</button>
        <button style={{ marginRight: '5px', padding: '5px 10px', cursor: 'pointer' }}>Makanan</button>
        <button style={{ padding: '5px 10px', cursor: 'pointer' }}>Minuman</button>
      </div>

      <MenuCard nama="Nasi Goreng Special" harga={25000} kategori="Makanan" tersedia={true} />
      <MenuCard nama="Es Teh Manis" harga={5000} kategori="Minuman" tersedia={true} />
      <MenuCard nama="Ayam Bakar Jumbo" harga={35000} kategori="Makanan" tersedia={false} />
    </main>
  );
}