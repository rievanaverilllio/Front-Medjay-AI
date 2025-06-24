"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Modal component
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
	if (!open) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div className="bg-white rounded-3xl shadow-2xl px-6 py-8 max-w-2xl w-full relative animate-fadeInUp border border-[#e3eefd]">
				<button
					className="absolute top-4 right-5 text-gray-400 hover:text-[#e6007a] text-3xl font-bold focus:outline-none"
					onClick={onClose}
					aria-label="Tutup"
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
}

const solutions = [
	{ name: "Chat dengan Dokter", icon: "/next.svg" },
	{ name: "Toko Kesehatan", icon: "/vercel.svg" },
	{ name: "Homecare", icon: "/globe.svg" },
	{ name: "Asuransiku", icon: "/window.svg" },
];

const promos = [
	{
		img: "/Gemini_Generated_Image_i6nyp3i6nyp3i6ny-removebg-preview.png",
		alt: "Promo 1",
	},
	{ img: "/Gemini_Generated_Image_i6nyp3i6nyp3i6ny.png", alt: "Promo 2" },
	{ img: "/globe.svg", alt: "Promo 3" },
];

const specialties = [
	{ key: "umum", name: "Dokter Umum", icon: "/rievan1.png" },
	{ key: "anak", name: "Dokter Anak", icon: "/rievan1.png" },
	{ key: "gigi", name: "Dokter Gigi", icon: "/rievan1.png" },
	{ key: "kulit", name: "Dokter Kulit", icon: "/rievan1.png" },
	{ key: "mata", name: "Dokter Mata", icon: "/rievan1.png" },
	{ key: "bedah", name: "Dokter Bedah", icon: "/rievan1.png" },
	{ key: "jiwa", name: "Dokter Jiwa", icon: "/rievan1.png" },
	{ key: "kandungan", name: "Dokter Kandungan", icon: "/rievan1.png" },
];

const doctors = {
	umum: [
		{ name: "dr. Andi Pratama", img: "/rievan1.png", desc: "Dokter Umum" },
		{ name: "dr. Siti Rahmawati", img: "/rievan1.png", desc: "Dokter Umum" },
	],
	anak: [
		{ name: "dr. Budi Santoso, Sp.A", img: "/rievan1.png", desc: "Spesialis Anak" },
		{ name: "dr. Lestari Dewi, Sp.A", img: "/rievan1.png", desc: "Spesialis Anak" },
	],
	gigi: [
		{ name: "drg. Rina Mulyani", img: "/rievan1.png", desc: "Dokter Gigi" },
		{ name: "drg. Dimas Saputra", img: "/rievan1.png", desc: "Dokter Gigi" },
	],
	kulit: [
		{ name: "dr. Sari Wulandari, Sp.KK", img: "/rievan1.png", desc: "Spesialis Kulit" },
	],
	mata: [
		{ name: "dr. Fajar Nugroho, Sp.M", img: "/rievan1.png", desc: "Spesialis Mata" },
	],
	bedah: [
		{ name: "dr. Rudi Hartono, Sp.B", img: "/rievan1.png", desc: "Spesialis Bedah" },
	],
	jiwa: [
		{ name: "dr. Maya Putri, Sp.KJ", img: "/rievan1.png", desc: "Spesialis Jiwa" },
	],
	kandungan: [
		{ name: "dr. Dewi Lestari, Sp.OG", img: "/rievan1.png", desc: "Spesialis Kandungan" },
	],
};

const products = [
	{ name: "Aspirin 4mg 4 Kaplet", img: "/file.svg", price: "Rp 10.000" },
	{ name: "Blackmores", img: "/file.svg", price: "Rp 60.000" },
	{ name: "Imboost Force 10 Kaplet", img: "/file.svg", price: "Rp 45.000" },
];

const articles = [
	{ title: "Cacar Air pada Balita: Gejala, Pencegahan, Pengobatan", img: "/rievan1.png" },
	{ title: "Sunscreen Aman untuk Ibu Hamil: Tips Pilih yang Tepat", img: "/rievan1.png" },
	{ title: "Review Vaksinasi Influenza dan Pneumonia", img: "/rievan1.png" },
];

const healthChecks = [
	{ name: "Cek Stres", icon: "/file.svg" },
	{ name: "Kalkulator BMI", icon: "/file.svg" },
	{ name: "Risiko Diabetes", icon: "/file.svg" },
	{ name: "Tes Depresi", icon: "/file.svg" },
	{ name: "Tipe Kepribadian", icon: "/file.svg" },
];

// Animasi dan varian seperti di page utama
const slowFadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1.5 } },
};
const slowSlideInUp = {
	hidden: { y: 100, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
};
const staggerContainer = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.5,
		},
	},
};
const itemSlowFadeIn = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function KontakDokter() {
	const [selected, setSelected] = useState<string | null>(null);
	const [promoIndex, setPromoIndex] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalSpec, setModalSpec] = useState<string | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setPromoIndex((prev) => (prev + 1) % promos.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const handleSpecClick = (key: string) => {
		setModalSpec(key);
		setModalOpen(true);
	};

	return (
		<div className="bg-[#f0f7ff] min-h-screen w-full font-sans">
			{/* Header ala Halodoc */}
			<header className="w-full bg-white shadow-sm z-50 px-4 py-3 flex flex-col">
				<div className="max-w-7xl mx-auto w-full flex items-center justify-between">
					<div className="flex items-center gap-4">
						<a href="/" className="flex items-center gap-4">
							<Image src="/Gemini_Generated_Image_i6nyp3i6nyp3i6ny-removebg-preview.png" alt="Medjay Logo" width={38} height={38} />
							<span className="text-2xl font-bold text-[#3570ff] tracking-tight">Medjay</span>
						</a>
					</div>
					{/* Hapus menu horizontal dan badge Kemenkes */}
					<button className="ml-auto bg-[#3570ff] text-white font-bold px-5 py-2 rounded-lg shadow hover:bg-[#b8005a] transition">Masuk</button>
				</div>
				{/* Shortcut menu ala Halodoc */}
				{/* <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-4 mt-4 pb-1 overflow-x-auto">
					{[
						{ name: "Solusi", icon: "/next.svg" },
						{ name: "Konsultasi", icon: "/vercel.svg" },
						{ name: "Testimoni", icon: "/globe.svg" },
						{ name: "Artikel", icon: "/window.svg" },
					].map((item, i) => (
						<div key={i} className="flex items-center gap-2 bg-white border border-[#e3eefd] rounded-full px-4 py-2 shadow hover:shadow-md transition min-w-[180px]">
							<Image src={item.icon} alt={item.name} width={32} height={32} />
							<span className="font-medium text-[#222] text-base">{item.name}</span>
						</div>
					))}
				</div> */}
			</header>

			{/* Hero / Promo Carousel */}
			<section className="w-full flex justify-center bg-gradient-to-r from-[#f0f7ff] to-[#e3eefd] py-8 ">
				<div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
					{/* Left Promo Image */}
					<div className="flex-1 bg-white rounded-2xl shadow-lg flex justify-center items-center overflow-hidden border border-[#e3eefd] p-6 min-h-[220px]">
						<Image
							src={promos[promoIndex % promos.length].img}
							alt={promos[promoIndex % promos.length].alt}
							width={320}
							height={180}
							className="object-contain"
							priority
						/>
					</div>
					{/* Right Promo Image */}
					<div className="flex-1 bg-white rounded-2xl shadow-lg flex justify-center items-center overflow-hidden border border-[#e3eefd] p-6 min-h-[220px]">
						<Image
							src={promos[(promoIndex + 1) % promos.length].img}
							alt={promos[(promoIndex + 1) % promos.length].alt}
							width={320}
							height={180}
							className="object-contain"
							priority
						/>
					</div>
				</div>
			</section>

			{/* Solusi Kesehatan di Tanganmu */}
			<section className="relative w-full bg-gradient-to-b from-[#f6f2fa] to-transparent pb-16 pt-8">
				{/* Decorative curve */}
				<div
					className="absolute left-0 top-0 w-full h-32 bg-gradient-to-r from-[#f6f2fa] to-[#f0f7ff] rounded-b-[80%] z-0"
					style={{ zIndex: 0 }}
				/>
				<div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-8 px-4">
					<div className="flex-1 min-w-[260px] mb-6 md:mb-0">
						<h2 className="text-3xl md:text-4xl font-bold text-[#222] leading-tight">
							Solusi Kesehatan di
							<br />
							Tanganmu
						</h2>
					</div>
					<div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
						{/* Card 1 */}
						<div className="bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition">
							<Image src="/next.svg" alt="Chat dengan Dokter" width={36} height={36} />
							<div className="flex-1">
								<div className="font-bold text-base text-[#222] leading-tight">
									Chat dengan Dokter
								</div>
								<div className="text-gray-600 text-xs leading-tight">
									Lebih dari 50 spesialis tersedia 24 jam
								</div>
							</div>
							<span className="text-[#e6007a] text-xl font-bold">&rarr;</span>
						</div>
						{/* Card 2 */}
						<div className="bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition">
							<Image src="/vercel.svg" alt="Toko Kesehatan" width={36} height={36} />
							<div className="flex-1">
								<div className="font-bold text-base text-[#222] leading-tight">
									Toko Kesehatan
								</div>
								<div className="text-gray-600 text-xs leading-tight">
									100% produk asli, 1 jam sampai
								</div>
							</div>
							<span className="text-[#e6007a] text-xl font-bold">&rarr;</span>
						</div>
						{/* Card 3 */}
						<div className="bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition">
							<Image src="/globe.svg" alt="Homecare" width={36} height={36} />
							<div className="flex-1">
								<div className="font-bold text-base text-[#222] leading-tight">
									Homecare
								</div>
								<div className="text-gray-600 text-xs leading-tight">
									Tes lab, vaksin, vitamin booster & dokter ke rumah
								</div>
							</div>
							<span className="text-[#e6007a] text-xl font-bold">&rarr;</span>
						</div>
						{/* Card 4 */}
						<div className="bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition">
							<Image src="/window.svg" alt="Asuransiku" width={36} height={36} />
							<div className="flex-1">
								<div className="font-bold text-base text-[#222] leading-tight">
									Asuransiku
								</div>
								<div className="text-gray-600 text-xs leading-tight">
									Bayar menggunakan asuransimu
								</div>
							</div>
							<span className="text-[#e6007a] text-xl font-bold">&rarr;</span>
						</div>
						{/* Card 5 */}
						<div className="bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition">
							<Image src="/file.svg" alt="Haloskin" width={36} height={36} />
							<div className="flex-1">
								<div className="font-bold text-base text-[#222] leading-tight">
									Haloskin
								</div>
								<div className="text-gray-600 text-xs leading-tight">
									Formulasi dermatologis untuk kulit cantik & sehat
								</div>
							</div>
							<span className="text-[#e6007a] text-xl font-bold">&rarr;</span>
						</div>
						{/* Card 6 */}
						<div className="bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition">
							<Image src="/file.svg" alt="Halofit" width={36} height={36} />
							<div className="flex-1">
								<div className="font-bold text-base text-[#222] leading-tight">
									Halofit
								</div>
								<div className="text-gray-600 text-xs leading-tight">
									Program tubuh fit dipersonalisasi klinis
								</div>
							</div>
							<span className="text-[#e6007a] text-xl font-bold">&rarr;</span>
						</div>
					</div>
				</div>
			</section>

			{/* Promo & Penawaran Hari Ini */}
			<section className="max-w-5xl mx-auto py-8">
				<h2 className="text-2xl font-bold text-[#3570ff] text-center mb-6">
					Promo & Penawaran Hari Ini
				</h2>
				<div
					className="relative overflow-hidden w-full rounded-2xl"
					style={{ height: 220 }}
				>
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{
							width: `${promos.length * 100}%`,
							transform: `translateX(-${promoIndex * (100 / promos.length)}%)`,
						}}
					>
						{promos.map((p, i) => (
							<div
								key={i}
								className="flex-shrink-0 w-full flex justify-center items-center bg-white border border-[#e3eefd] mx-2 rounded-2xl shadow-lg"
								style={{ height: 220 }}
							>
								<Image
									src={p.img}
									alt={p.alt}
									width={400}
									height={180}
									className="object-contain"
									priority
								/>
							</div>
						))}
					</div>
					{/* Bullets */}
					<div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-10">
						{promos.map((_, i) => (
							<span
								key={i}
								className={`w-3 h-3 rounded-full ${
									promoIndex === i ? "bg-[#e6007a]" : "bg-[#e3eefd]"
								} block border border-[#e6007a]`}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Konsultasi Spesialis Terpercaya */}
			<section className="max-w-7xl mx-auto py-8 px-2">
				<h2 className="text-3xl font-bold text-[#222] mb-6">
					Konsultasi Spesialis Terpercaya
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{/* Card Spesialis */}
					{Object.entries({
						mata: "Sp. Mata",
						kulit: "Sp. Kulit",
						kandungan: "Sp. Kandungan",
						tht: "Sp. THT",
						anak: "Sp. Anak",
						penyakitdalam: "Sp. Penyakit Dalam",
						saraf: "Sp. Saraf",
						paru: "Sp. Paru",
						jantung: "Sp. Jantung",
						gizi: "Sp. Gizi",
						urologi: "Sp. Urologi",
						orthopedi: "Sp. Orthopedi",
						psikiatri: "Sp. Psikiatri",
						geriatri: "Sp. Geriatri",
						gigimulut: "Sp. Gigi & Mulut",
						gizi_klinik: "Sp. Gizi Klinik",
					}).map(([key, name]) => (
						<button
							key={key}
							className={`flex flex-col items-center bg-white border border-[#e3eefd] rounded-lg shadow px-2 py-4 min-h-[90px] hover:shadow-lg transition group text-center ${selected === key ? "ring-2 ring-[#3570ff]" : ""}`}
							style={{ minWidth: 0 }}
							onClick={() => handleSpecClick(key)}
						>
							<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#f6f2fa] rounded-full mb-2">
								<Image src="/file.svg" alt={name} width={36} height={36} />
							</div>
							<span className="text-sm font-semibold text-[#222] leading-tight">
								{name}
							</span>
						</button>
					))}
				</div>

				{/* Modal dokter spesialis */}
				<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
					{modalSpec && (
						<div>
							<h3 className="text-2xl font-extrabold text-[#3570ff] mb-8 text-center tracking-tight">
								Daftar Dokter {Object.entries({
									mata: "Sp. Mata",
									kulit: "Sp. Kulit",
									kandungan: "Sp. Kandungan",
									tht: "Sp. THT",
									anak: "Sp. Anak",
									penyakitdalam: "Sp. Penyakit Dalam",
									saraf: "Sp. Saraf",
									paru: "Sp. Paru",
									jantung: "Sp. Jantung",
									gizi: "Sp. Gizi",
									urologi: "Sp. Urologi",
									orthopedi: "Sp. Orthopedi",
									psikiatri: "Sp. Psikiatri",
									geriatri: "Sp. Geriatri",
									gigimulut: "Sp. Gigi & Mulut",
									gizi_klinik: "Sp. Gizi Klinik",
								}).find(([k]) => k === modalSpec)?.[1]}
							</h3>
							<div className="flex flex-col gap-6">
								{Array.isArray(doctors[modalSpec as keyof typeof doctors]) ? (
									(doctors[modalSpec as keyof typeof doctors] as { name: string; img: string; desc: string }[]).map((d, i) => (
										<div key={i} className="flex bg-white rounded-2xl shadow border border-[#e3eefd] p-4 gap-4 items-center">
											<Image src={d.img} alt={d.name} width={80} height={80} className="rounded-xl object-cover border border-[#e3eefd] bg-white" />
											<div className="flex-1 min-w-0">
												<div className="flex items-center gap-2 mb-1">
													<span className="font-bold text-[#222] text-lg leading-tight truncate">{d.name}</span>
												</div>
												<div className="text-[#3570ff] font-semibold text-sm mb-2">{d.desc}</div>
												<div className="flex flex-wrap gap-2 mb-2">
													<span className="flex items-center gap-1 px-2 py-0.5 bg-[#f6f6f6] rounded text-xs text-gray-700 border border-gray-200"><svg width='16' height='16' fill='currentColor' className='inline'><path d='M8 2a6 6 0 100 12A6 6 0 008 2zm0 1.5A4.5 4.5 0 118 14.5 4.5 4.5 0 018 3.5zm.75 2.25v2.25l1.75 1.05-.75 1.23-2-1.23V5.75h1z'/></svg>8 tahun</span>
													<span className="flex items-center gap-1 px-2 py-0.5 bg-[#f6f6f6] rounded text-xs text-gray-700 border border-gray-200"><svg width='16' height='16' fill='currentColor' className='inline'><path d='M8 12a4 4 0 100-8 4 4 0 000 8zm0 1.5A5.5 5.5 0 118 1.5a5.5 5.5 0 010 11zm2.5-6.5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0110.5 6zm-5 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 015.5 6z'/></svg>96%</span>
												</div>
												<div className="flex items-center gap-2 mb-2">
													<span className="bg-[#fff7ea] text-[#b88900] px-3 py-1 rounded text-xs flex items-center gap-1 border border-[#ffe5a3]"><svg width='16' height='16' fill='currentColor' className='inline'><path d='M8 3.25a.75.75 0 01.75.75v3.19l2.47 1.43a.75.75 0 01-.74 1.3l-2.73-1.58A.75.75 0 017.25 7V4a.75.75 0 01.75-.75z'/></svg>Tersedia kembali Rabu, 14:00 - 18:00</span>
												</div>
												<div className="flex items-center gap-4 mt-2">
													<span className="font-bold text-[#222] text-base">Rp 59.000</span>
													<span className="bg-[#e6f4ff] text-[#3570ff] px-4 py-1 rounded-lg text-sm font-semibold select-none cursor-pointer hover:bg-[#d0eaff] transition">Chat</span>
												</div>
											</div>
										</div>
									))
								) : (
									<div className="text-center text-gray-500 col-span-2">Belum ada data dokter untuk spesialis ini.</div>
								)}
							</div>
						</div>
					)}
				</Modal>
			</section>

			{/* Testimoni Dokter Terbaik 2025 */}
			<section className="max-w-6xl mx-auto py-12 px-2">
				<h2 className="text-3xl font-extrabold text-[#3570ff] text-center mb-10 tracking-tight">
					Testimoni Dokter Terbaik 2025
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-white rounded-3xl shadow-xl border border-[#e3eefd] p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
						<div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#3570ff] shadow">
							<Image
								src="/rievan1.png"
								alt="dr. Andi Pratama"
								width={96}
								height={96}
								className="object-cover w-full h-full"
							/>
						</div>
						<span className="font-bold text-[#3570ff] text-xl mb-1 text-center">
							dr. Andi Pratama
						</span>
						<span className="text-gray-500 text-base text-center mb-3">
							Dokter Umum
						</span>
						<p className="text-gray-700 text-center italic text-base leading-relaxed">
							"Selalu mengutamakan pasien dan memberikan solusi terbaik. Terima kasih
							atas kepercayaan Anda di tahun 2025!"
						</p>
					</div>
					<div className="bg-white rounded-3xl shadow-xl border border-[#e3eefd] p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
						<div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#3570ff] shadow">
							<Image
								src="/rievan1.png"
								alt="dr. Sari Wulandari, Sp.KK"
								width={96}
								height={96}
								className="object-cover w-full h-full"
							/>
						</div>
						<span className="font-bold text-[#3570ff] text-xl mb-1 text-center">
							dr. Sari Wulandari, Sp.KK
						</span>
						<span className="text-gray-500 text-base text-center mb-3">
							Spesialis Kulit
						</span>
						<p className="text-gray-700 text-center italic text-base leading-relaxed">
							"Kepuasan pasien adalah prioritas utama. Semoga selalu sehat di tahun
							2025!"
						</p>
					</div>
					<div className="bg-white rounded-3xl shadow-xl border border-[#e3eefd] p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
						<div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#3570ff] shadow">
							<Image
								src="/rievan1.png"
								alt="dr. Fajar Nugroho, Sp.M"
								width={96}
								height={96}
								className="object-cover w-full h-full"
							/>
						</div>
						<span className="font-bold text-[#3570ff] text-xl mb-1 text-center">
							dr. Fajar Nugroho, Sp.M
						</span>
						<span className="text-gray-500 text-base text-center mb-3">
							Spesialis Mata
						</span>
						<p className="text-gray-700 text-center italic text-base leading-relaxed">
							"Terima kasih atas kepercayaan pasien selama 2025. Kami akan terus
							berinovasi untuk kesehatan Anda."
						</p>
					</div>
				</div>
			</section>

			{/* Baca Artikel Kesehatan Terkini */}
			<section className="max-w-5xl mx-auto py-8">
				<h2 className="text-2xl font-bold text-[#3570ff] text-center mb-6">
					Baca Artikel Kesehatan Terkini
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
					{articles.map((a, i) => (
						<div
							key={i}
							className="bg-white rounded-xl shadow border border-[#e3eefd] p-4 flex flex-col items-center"
						>
							<Image src={a.img} alt={a.title} width={80} height={80} className="rounded-xl" />
							<span className="mt-2 text-[#3570ff] font-bold text-center">
								{a.title}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* Footer modern ala page utama */}
			<footer className="bg-[#1a2a3a] text-white py-12 px-4 mt-20">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
					<div>
						<h4 className="font-extrabold text-2xl mb-4 text-[#6ad7e5]">Medjay</h4>
						<p className="text-sm text-white/70 leading-relaxed">
							Mitra tepercaya Anda dalam keunggulan layanan kesehatan, berkomitmen
							memberikan layanan medis terbaik.
						</p>
					</div>
					<div>
						<h5 className="font-bold text-lg mb-4 text-[#6ad7e5]">Layanan</h5>
						<ul className="space-y-2 text-sm text-white/70">
							<li>Vaksinasi</li>
							<li>Darurat</li>
							<li>Pusat Medis</li>
							<li>Dokter Spesialis</li>
							<li>Konsultasi Online</li>
						</ul>
					</div>
					<div>
						<h5 className="font-bold text-lg mb-4 text-[#6ad7e5]">Kontak</h5>
						<ul className="space-y-2 text-sm text-white/70">
							<li>Telepon: (123) 456-7890</li>
							<li>Email: info@medjay.com</li>
							<li>Alamat: Jl. Kesehatan 123, Kota Medis, 12345</li>
						</ul>
					</div>
					<div>
						<h5 className="font-bold text-lg mb-4 text-[#6ad7e5]">Ikuti Kami</h5>
						<div className="flex gap-4 text-white/70">
							<a
								href="#"
								className="hover:text-[#6ad7e5] transition"
							>
								FB
							</a>
							<a
								href="#"
								className="hover:text-[#6ad7e5] transition"
							>
								TW
							</a>
							<a
								href="#"
								className="hover:text-[#6ad7e5] transition"
							>
								IG
							</a>
							<a
								href="#"
								className="hover:text-[#6ad7e5] transition"
							>
								LI
							</a>
						</div>
					</div>
				</div>
				<div className="text-center text-xs text-white/50 mt-12 pt-6 border-t border-white/10">
					© 2025 Medjay. Seluruh hak cipta dilindungi.
				</div>
			</footer>
		</div>
	);
}
