export default function SkeuoToggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`skeuo-pressable w-20 h-11 rounded-full flex items-center p-1 transition-colors ${
        checked ? 'shadow-skeuo bg-gradient-to-br from-[#e9f7ef] to-[#d3f1e0]' : 'shadow-skeuo bg-gradient-to-br from-[#f4f7fb] to-[#e6ebf4]'
      }`}
    >
      <span
        className={`size-9 rounded-full transition-all ${
          checked
            ? 'translate-x-9 shadow-skeuoSm bg-gradient-to-br from-white to-[#dff5ea]' 
            : 'translate-x-0 shadow-skeuoSm bg-gradient-to-br from-white to-[#e9eef7]'
        }`}
      />
    </button>
  );
}
