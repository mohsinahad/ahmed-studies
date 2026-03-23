interface Props {
  onBack: () => void;
}

export default function SocialStudies({ onBack }: Props) {
  return (
    <div className="flex flex-col" style={{ height: '100vh' }}>
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-900 border-b border-slate-800 shrink-0">
        <button
          onClick={onBack}
          className="text-slate-400 hover:text-white text-sm flex items-center gap-1 transition"
        >
          ← Back
        </button>
        <span className="text-white font-semibold text-sm">Social Studies</span>
      </div>
      <iframe
        src="/social-studies/index.html"
        className="flex-1 w-full border-none"
        title="Social Studies"
      />
    </div>
  );
}
