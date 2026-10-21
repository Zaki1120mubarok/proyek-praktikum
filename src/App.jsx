import MenuCard from './components/MenuCard.jsx';

export default function App() {
  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Katalog Menu Restoran</h1>
      <p>Pilihan menu makanan dan minuman terbaik</p>
      <MenuCard nama="Nasi Goreng Special" harga={25000} kategori="Makanan" tersedia={true} />
      <MenuCard nama="Es Teh Manis" harga={5000} kategori="Minuman" tersedia={true} />
      <MenuCard nama="Ayam Bakar Jumbo" harga={35000} kategori="Makanan" tersedia={false} />
    </main>
  );
}