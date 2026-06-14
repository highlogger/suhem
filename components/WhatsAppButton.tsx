"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20randevu%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile randevu al"
      id="whatsapp-floating-btn"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl wa-pulse group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full">
        <FaWhatsapp size={28} />
      </div>
      <span className="pr-5 text-sm font-semibold tracking-wide whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-out">
        Randevu Al
      </span>
    </motion.a>
  );
}
