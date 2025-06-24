(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/kontak-dokter/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>KontakDokter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Modal component
function Modal({ open, onClose, children }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl shadow-2xl px-6 py-8 max-w-2xl w-full relative animate-fadeInUp border border-[#e3eefd]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-4 right-5 text-gray-400 hover:text-[#e6007a] text-3xl font-bold focus:outline-none",
                    onClick: onClose,
                    "aria-label": "Tutup",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                    lineNumber: 13,
                    columnNumber: 5
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/kontak-dokter/page.tsx",
            lineNumber: 12,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/kontak-dokter/page.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
}
_c = Modal;
const solutions = [
    {
        name: "Chat dengan Dokter",
        icon: "/next.svg"
    },
    {
        name: "Toko Kesehatan",
        icon: "/vercel.svg"
    },
    {
        name: "Homecare",
        icon: "/globe.svg"
    },
    {
        name: "Asuransiku",
        icon: "/window.svg"
    }
];
const promos = [
    {
        img: "/Gemini_Generated_Image_i6nyp3i6nyp3i6ny-removebg-preview.png",
        alt: "Promo 1"
    },
    {
        img: "/Gemini_Generated_Image_i6nyp3i6nyp3i6ny.png",
        alt: "Promo 2"
    },
    {
        img: "/globe.svg",
        alt: "Promo 3"
    }
];
const specialties = [
    {
        key: "umum",
        name: "Dokter Umum",
        icon: "/rievan1.png"
    },
    {
        key: "anak",
        name: "Dokter Anak",
        icon: "/rievan1.png"
    },
    {
        key: "gigi",
        name: "Dokter Gigi",
        icon: "/rievan1.png"
    },
    {
        key: "kulit",
        name: "Dokter Kulit",
        icon: "/rievan1.png"
    },
    {
        key: "mata",
        name: "Dokter Mata",
        icon: "/rievan1.png"
    },
    {
        key: "bedah",
        name: "Dokter Bedah",
        icon: "/rievan1.png"
    },
    {
        key: "jiwa",
        name: "Dokter Jiwa",
        icon: "/rievan1.png"
    },
    {
        key: "kandungan",
        name: "Dokter Kandungan",
        icon: "/rievan1.png"
    }
];
const doctors = {
    umum: [
        {
            name: "dr. Andi Pratama",
            img: "/rievan1.png",
            desc: "Dokter Umum"
        },
        {
            name: "dr. Siti Rahmawati",
            img: "/rievan1.png",
            desc: "Dokter Umum"
        }
    ],
    anak: [
        {
            name: "dr. Budi Santoso, Sp.A",
            img: "/rievan1.png",
            desc: "Spesialis Anak"
        },
        {
            name: "dr. Lestari Dewi, Sp.A",
            img: "/rievan1.png",
            desc: "Spesialis Anak"
        }
    ],
    gigi: [
        {
            name: "drg. Rina Mulyani",
            img: "/rievan1.png",
            desc: "Dokter Gigi"
        },
        {
            name: "drg. Dimas Saputra",
            img: "/rievan1.png",
            desc: "Dokter Gigi"
        }
    ],
    kulit: [
        {
            name: "dr. Sari Wulandari, Sp.KK",
            img: "/rievan1.png",
            desc: "Spesialis Kulit"
        }
    ],
    mata: [
        {
            name: "dr. Fajar Nugroho, Sp.M",
            img: "/rievan1.png",
            desc: "Spesialis Mata"
        }
    ],
    bedah: [
        {
            name: "dr. Rudi Hartono, Sp.B",
            img: "/rievan1.png",
            desc: "Spesialis Bedah"
        }
    ],
    jiwa: [
        {
            name: "dr. Maya Putri, Sp.KJ",
            img: "/rievan1.png",
            desc: "Spesialis Jiwa"
        }
    ],
    kandungan: [
        {
            name: "dr. Dewi Lestari, Sp.OG",
            img: "/rievan1.png",
            desc: "Spesialis Kandungan"
        }
    ]
};
const products = [
    {
        name: "Aspirin 4mg 4 Kaplet",
        img: "/file.svg",
        price: "Rp 10.000"
    },
    {
        name: "Blackmores",
        img: "/file.svg",
        price: "Rp 60.000"
    },
    {
        name: "Imboost Force 10 Kaplet",
        img: "/file.svg",
        price: "Rp 45.000"
    }
];
const articles = [
    {
        title: "Cacar Air pada Balita: Gejala, Pencegahan, Pengobatan",
        img: "/rievan1.png"
    },
    {
        title: "Sunscreen Aman untuk Ibu Hamil: Tips Pilih yang Tepat",
        img: "/rievan1.png"
    },
    {
        title: "Review Vaksinasi Influenza dan Pneumonia",
        img: "/rievan1.png"
    }
];
const healthChecks = [
    {
        name: "Cek Stres",
        icon: "/file.svg"
    },
    {
        name: "Kalkulator BMI",
        icon: "/file.svg"
    },
    {
        name: "Risiko Diabetes",
        icon: "/file.svg"
    },
    {
        name: "Tes Depresi",
        icon: "/file.svg"
    },
    {
        name: "Tipe Kepribadian",
        icon: "/file.svg"
    }
];
// Animasi dan varian seperti di page utama
const slowFadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
};
const slowSlideInUp = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
};
const staggerContainer = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5
        }
    }
};
const itemSlowFadeIn = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
};
function KontakDokter() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [promoIndex, setPromoIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalSpec, setModalSpec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KontakDokter.useEffect": ()=>{
            const interval = setInterval({
                "KontakDokter.useEffect.interval": ()=>{
                    setPromoIndex({
                        "KontakDokter.useEffect.interval": (prev)=>(prev + 1) % promos.length
                    }["KontakDokter.useEffect.interval"]);
                }
            }["KontakDokter.useEffect.interval"], 3000);
            return ({
                "KontakDokter.useEffect": ()=>clearInterval(interval)
            })["KontakDokter.useEffect"];
        }
    }["KontakDokter.useEffect"], []);
    const handleSpecClick = (key)=>{
        setModalSpec(key);
        setModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#f0f7ff] min-h-screen w-full font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full bg-white shadow-sm z-50 px-4 py-3 flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Gemini_Generated_Image_i6nyp3i6nyp3i6ny-removebg-preview.png",
                                        alt: "Medjay Logo",
                                        width: 38,
                                        height: 38
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold text-[#3570ff] tracking-tight",
                                        children: "Medjay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 151,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                            lineNumber: 150,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "ml-auto bg-[#3570ff] text-white font-bold px-5 py-2 rounded-lg shadow hover:bg-[#b8005a] transition",
                            children: "Masuk"
                        }, void 0, false, {
                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                            lineNumber: 157,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                    lineNumber: 149,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                lineNumber: 148,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full flex justify-center bg-gradient-to-r from-[#f0f7ff] to-[#e3eefd] py-8 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl flex flex-col md:flex-row gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-white rounded-2xl shadow-lg flex justify-center items-center overflow-hidden border border-[#e3eefd] p-6 min-h-[220px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: promos[promoIndex % promos.length].img,
                                alt: promos[promoIndex % promos.length].alt,
                                width: 320,
                                height: 180,
                                className: "object-contain",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 180,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                            lineNumber: 179,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-white rounded-2xl shadow-lg flex justify-center items-center overflow-hidden border border-[#e3eefd] p-6 min-h-[220px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: promos[(promoIndex + 1) % promos.length].img,
                                alt: promos[(promoIndex + 1) % promos.length].alt,
                                width: 320,
                                height: 180,
                                className: "object-contain",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 191,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                            lineNumber: 190,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                    lineNumber: 177,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                lineNumber: 176,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full bg-gradient-to-b from-[#f6f2fa] to-transparent pb-16 pt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 w-full h-32 bg-gradient-to-r from-[#f6f2fa] to-[#f0f7ff] rounded-b-[80%] z-0",
                        style: {
                            zIndex: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 206,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-8 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-[260px] mb-6 md:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-[#222] leading-tight",
                                    children: [
                                        "Solusi Kesehatan di",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 8
                                        }, this),
                                        "Tanganmu"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 211,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/next.svg",
                                                alt: "Chat dengan Dokter",
                                                width: 36,
                                                height: 36
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-base text-[#222] leading-tight",
                                                        children: "Chat dengan Dokter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-600 text-xs leading-tight",
                                                        children: "Lebih dari 50 spesialis tersedia 24 jam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#e6007a] text-xl font-bold",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/vercel.svg",
                                                alt: "Toko Kesehatan",
                                                width: 36,
                                                height: 36
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-base text-[#222] leading-tight",
                                                        children: "Toko Kesehatan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-600 text-xs leading-tight",
                                                        children: "100% produk asli, 1 jam sampai"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#e6007a] text-xl font-bold",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/globe.svg",
                                                alt: "Homecare",
                                                width: 36,
                                                height: 36
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-base text-[#222] leading-tight",
                                                        children: "Homecare"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-600 text-xs leading-tight",
                                                        children: "Tes lab, vaksin, vitamin booster & dokter ke rumah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#e6007a] text-xl font-bold",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/window.svg",
                                                alt: "Asuransiku",
                                                width: 36,
                                                height: 36
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-base text-[#222] leading-tight",
                                                        children: "Asuransiku"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-600 text-xs leading-tight",
                                                        children: "Bayar menggunakan asuransimu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#e6007a] text-xl font-bold",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/file.svg",
                                                alt: "Haloskin",
                                                width: 36,
                                                height: 36
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-base text-[#222] leading-tight",
                                                        children: "Haloskin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-600 text-xs leading-tight",
                                                        children: "Formulasi dermatologis untuk kulit cantik & sehat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#e6007a] text-xl font-bold",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg border border-[#e3eefd] shadow p-3 flex items-center gap-3 min-h-[72px] hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/file.svg",
                                                alt: "Halofit",
                                                width: 36,
                                                height: 36
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-base text-[#222] leading-tight",
                                                        children: "Halofit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-600 text-xs leading-tight",
                                                        children: "Program tubuh fit dipersonalisasi klinis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#e6007a] text-xl font-bold",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 218,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 210,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                lineNumber: 204,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-5xl mx-auto py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#3570ff] text-center mb-6",
                        children: "Promo & Penawaran Hari Ini"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 303,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden w-full rounded-2xl",
                        style: {
                            height: 220
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex transition-transform duration-700 ease-in-out",
                                style: {
                                    width: `${promos.length * 100}%`,
                                    transform: `translateX(-${promoIndex * (100 / promos.length)}%)`
                                },
                                children: promos.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-full flex justify-center items-center bg-white border border-[#e3eefd] mx-2 rounded-2xl shadow-lg",
                                        style: {
                                            height: 220
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: p.img,
                                            alt: p.alt,
                                            width: 400,
                                            height: 180,
                                            className: "object-contain",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 9
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 8
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 310,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-10",
                                children: promos.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-3 h-3 rounded-full ${promoIndex === i ? "bg-[#e6007a]" : "bg-[#e3eefd]"} block border border-[#e6007a]`
                                    }, i, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 8
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 335,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 306,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                lineNumber: 302,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto py-8 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-[#222] mb-6",
                        children: "Konsultasi Spesialis Terpercaya"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 350,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",
                        children: Object.entries({
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
                            gizi_klinik: "Sp. Gizi Klinik"
                        }).map(([key, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `flex flex-col items-center bg-white border border-[#e3eefd] rounded-lg shadow px-2 py-4 min-h-[90px] hover:shadow-lg transition group text-center ${selected === key ? "ring-2 ring-[#3570ff]" : ""}`,
                                style: {
                                    minWidth: 0
                                },
                                onClick: ()=>handleSpecClick(key),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#f6f2fa] rounded-full mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/file.svg",
                                            alt: name,
                                            width: 36,
                                            height: 36
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-[#222] leading-tight",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 373,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 353,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                        open: modalOpen,
                        onClose: ()=>setModalOpen(false),
                        children: modalSpec && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-extrabold text-[#3570ff] mb-8 text-center tracking-tight",
                                    children: [
                                        "Daftar Dokter ",
                                        Object.entries({
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
                                            gizi_klinik: "Sp. Gizi Klinik"
                                        }).find(([k])=>k === modalSpec)?.[1]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                    lineNumber: 393,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-6",
                                    children: Array.isArray(doctors[modalSpec]) ? doctors[modalSpec].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex bg-white rounded-2xl shadow border border-[#e3eefd] p-4 gap-4 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: d.img,
                                                    alt: d.name,
                                                    width: 80,
                                                    height: 80,
                                                    className: "rounded-xl object-cover border border-[#e3eefd] bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-[#222] text-lg leading-tight truncate",
                                                                children: d.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#3570ff] font-semibold text-sm mb-2",
                                                            children: d.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1 px-2 py-0.5 bg-[#f6f6f6] rounded text-xs text-gray-700 border border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "16",
                                                                            height: "16",
                                                                            fill: "currentColor",
                                                                            className: "inline",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M8 2a6 6 0 100 12A6 6 0 008 2zm0 1.5A4.5 4.5 0 118 14.5 4.5 4.5 0 018 3.5zm.75 2.25v2.25l1.75 1.05-.75 1.23-2-1.23V5.75h1z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                                lineNumber: 424,
                                                                                columnNumber: 201
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                            lineNumber: 424,
                                                                            columnNumber: 134
                                                                        }, this),
                                                                        "8 tahun"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1 px-2 py-0.5 bg-[#f6f6f6] rounded text-xs text-gray-700 border border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "16",
                                                                            height: "16",
                                                                            fill: "currentColor",
                                                                            className: "inline",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M8 12a4 4 0 100-8 4 4 0 000 8zm0 1.5A5.5 5.5 0 118 1.5a5.5 5.5 0 010 11zm2.5-6.5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0110.5 6zm-5 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 015.5 6z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                                lineNumber: 425,
                                                                                columnNumber: 201
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                            lineNumber: 425,
                                                                            columnNumber: 134
                                                                        }, this),
                                                                        "96%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                    lineNumber: 425,
                                                                    columnNumber: 14
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-[#fff7ea] text-[#b88900] px-3 py-1 rounded text-xs flex items-center gap-1 border border-[#ffe5a3]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "16",
                                                                        height: "16",
                                                                        fill: "currentColor",
                                                                        className: "inline",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M8 3.25a.75.75 0 01.75.75v3.19l2.47 1.43a.75.75 0 01-.74 1.3l-2.73-1.58A.75.75 0 017.25 7V4a.75.75 0 01.75-.75z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                            lineNumber: 428,
                                                                            columnNumber: 201
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 134
                                                                    }, this),
                                                                    "Tersedia kembali Rabu, 14:00 - 18:00"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4 mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-[#222] text-base",
                                                                    children: "Rp 59.000"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                    lineNumber: 431,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-[#e6f4ff] text-[#3570ff] px-4 py-1 rounded-lg text-sm font-semibold select-none cursor-pointer hover:bg-[#d0eaff] transition",
                                                                    children: "Chat"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                                    lineNumber: 432,
                                                                    columnNumber: 14
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 12
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 11
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-gray-500 col-span-2",
                                        children: "Belum ada data dokter untuk spesialis ini."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                            lineNumber: 392,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 390,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                lineNumber: 349,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto py-12 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-extrabold text-[#3570ff] text-center mb-10 tracking-tight",
                        children: "Testimoni Dokter Terbaik 2025"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 448,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-3xl shadow-xl border border-[#e3eefd] p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#3570ff] shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/rievan1.png",
                                            alt: "dr. Andi Pratama",
                                            width: 96,
                                            height: 96,
                                            className: "object-cover w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[#3570ff] text-xl mb-1 text-center",
                                        children: "dr. Andi Pratama"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 text-base text-center mb-3",
                                        children: "Dokter Umum"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 text-center italic text-base leading-relaxed",
                                        children: '"Selalu mengutamakan pasien dan memberikan solusi terbaik. Terima kasih atas kepercayaan Anda di tahun 2025!"'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 452,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-3xl shadow-xl border border-[#e3eefd] p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#3570ff] shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/rievan1.png",
                                            alt: "dr. Sari Wulandari, Sp.KK",
                                            width: 96,
                                            height: 96,
                                            className: "object-cover w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 474,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[#3570ff] text-xl mb-1 text-center",
                                        children: "dr. Sari Wulandari, Sp.KK"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 483,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 text-base text-center mb-3",
                                        children: "Spesialis Kulit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 text-center italic text-base leading-relaxed",
                                        children: '"Kepuasan pasien adalah prioritas utama. Semoga selalu sehat di tahun 2025!"'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 473,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-3xl shadow-xl border border-[#e3eefd] p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#3570ff] shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/rievan1.png",
                                            alt: "dr. Fajar Nugroho, Sp.M",
                                            width: 96,
                                            height: 96,
                                            className: "object-cover w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 495,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[#3570ff] text-xl mb-1 text-center",
                                        children: "dr. Fajar Nugroho, Sp.M"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 text-base text-center mb-3",
                                        children: "Spesialis Mata"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 507,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 text-center italic text-base leading-relaxed",
                                        children: '"Terima kasih atas kepercayaan pasien selama 2025. Kami akan terus berinovasi untuk kesehatan Anda."'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 494,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 451,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                lineNumber: 447,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-5xl mx-auto py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#3570ff] text-center mb-6",
                        children: "Baca Artikel Kesehatan Terkini"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 520,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
                        children: articles.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow border border-[#e3eefd] p-4 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: a.img,
                                        alt: a.title,
                                        width: 80,
                                        height: 80,
                                        className: "rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 text-[#3570ff] font-bold text-center",
                                        children: a.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 525,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 523,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                lineNumber: 519,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-[#1a2a3a] text-white py-12 px-4 mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-extrabold text-2xl mb-4 text-[#6ad7e5]",
                                        children: "Medjay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/70 leading-relaxed",
                                        children: "Mitra tepercaya Anda dalam keunggulan layanan kesehatan, berkomitmen memberikan layanan medis terbaik."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 543,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 541,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "font-bold text-lg mb-4 text-[#6ad7e5]",
                                        children: "Layanan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-white/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Vaksinasi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Darurat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Pusat Medis"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 553,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Dokter Spesialis"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Konsultasi Online"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 555,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 548,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "font-bold text-lg mb-4 text-[#6ad7e5]",
                                        children: "Kontak"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 559,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-white/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Telepon: (123) 456-7890"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Email: info@medjay.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 562,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Alamat: Jl. Kesehatan 123, Kota Medis, 12345"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 558,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "font-bold text-lg mb-4 text-[#6ad7e5]",
                                        children: "Ikuti Kami"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 567,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 text-white/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-[#6ad7e5] transition",
                                                children: "FB"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 569,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-[#6ad7e5] transition",
                                                children: "TW"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-[#6ad7e5] transition",
                                                children: "IG"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 581,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-[#6ad7e5] transition",
                                                children: "LI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                        lineNumber: 568,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                                lineNumber: 566,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 540,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-xs text-white/50 mt-12 pt-6 border-t border-white/10",
                        children: "© 2025 Medjay. Seluruh hak cipta dilindungi."
                    }, void 0, false, {
                        fileName: "[project]/src/app/kontak-dokter/page.tsx",
                        lineNumber: 596,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kontak-dokter/page.tsx",
                lineNumber: 539,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/kontak-dokter/page.tsx",
        lineNumber: 146,
        columnNumber: 3
    }, this);
}
_s(KontakDokter, "9On91qrdT8rZMiqx2brbrrdO7hk=");
_c1 = KontakDokter;
var _c, _c1;
__turbopack_context__.k.register(_c, "Modal");
__turbopack_context__.k.register(_c1, "KontakDokter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_kontak-dokter_page_tsx_b84aa6f1._.js.map