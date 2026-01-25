"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { FaHeart, FaCopy, FaCheck } from "react-icons/fa6";
import { SiTether } from "react-icons/si";

interface SponsorPopupProps {
  address?: string;
}

const SponsorPopup = ({ address = "0x3b9d44e43f04f43c0e397968543975dfb2893eb9" }: SponsorPopupProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sponsor Button */}
      <div className="group relative flex flex-col gap-1 rounded-[2rem] border border-white/20 bg-white/40 p-6 shadow-xl backdrop-blur-3xl dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 text-rose-500">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart className="text-lg" />
            </motion.div>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Sponsor</span>
          </div>
          <SiTether className="text-emerald-500 text-xl" title="USDT (ERC20)" />
        </div>
        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Sponsor my work</p>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 mb-4 w-80 -translate-x-1/2 rounded-[2.5rem] border border-white/20 bg-white/40 p-8 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-white/5 z-20"
          >
            <div className="flex flex-col items-center gap-5">
              {/* QR Code Container */}
              <div className="relative rounded-2xl bg-white p-4 shadow-inner">
                <QRCodeSVG
                  value={address}
                  size={180}
                  level="H"
                  includeMargin={false}
                  imageSettings={{
                    src: "https://cryptologos.cc/logos/tether-usdt-logo.png",
                    x: undefined,
                    y: undefined,
                    height: 36,
                    width: 36,
                    excavate: true,
                  }}
                />
              </div>

              {/* Info */}
              <div className="text-center space-y-3">
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  USDT (ERC20)
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Plasma
                  </span>
                  <span className="rounded-full bg-yellow-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400">
                    BSC
                  </span>
                  <span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Polygon
                  </span>
                </div>
              </div>

              {/* Address with Copy */}
              <button
                onClick={handleCopy}
                className="group relative flex w-full items-center justify-between rounded-2xl bg-slate-100/50 px-4 py-3.5 transition-colors hover:bg-slate-200/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50"
              >
                <code className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[200px]">
                  {address}
                </code>
                {copied ? (
                  <FaCheck className="text-emerald-500 text-lg" />
                ) : (
                  <FaCopy className="text-slate-400 text-lg group-hover:text-slate-600 dark:group-hover:text-slate-200" />
                )}
              </button>

              <p className="text-[10px] font-semibold text-slate-500 italic px-2 text-center leading-relaxed">
                Only send USDT to this address via supported networks.
              </p>
            </div>

            {/* Arrow */}
            <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-white/20 bg-white/80 backdrop-blur-[60px] dark:border-white/10 dark:bg-slate-900/80"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SponsorPopup;
