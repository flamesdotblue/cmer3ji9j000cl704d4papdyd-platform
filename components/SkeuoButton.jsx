export default function SkeuoButton({ label, onClick, icon, active = false }) {
  return (
    <button
      onClick={onClick}
      className={`skeuo-pressable flex items-center gap-2 px-4 py-2 rounded-xl select-none ${
        active ? 'shadow-skeuoInset bg-gradient-to-br from-[#eef2f8] to-[#dfe6f1]' : 'shadow-skeuo bg-gradient-to-br from-[#f4f7fb] to-[#e6ebf4]'
      }`}
      aria-pressed={active}
    >
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg shadow-skeuoSm bg-gradient-to-br from-white to-[#e9eef7]">
        {icon}
      </span>
      <span className="font-medium text-clay-800">{label}</span>
    </button>
  );
}
