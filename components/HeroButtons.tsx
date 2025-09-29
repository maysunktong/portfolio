import MenuButton from "./ui/MenuButton";

export default function HeroButtons({
  setShowEmailForm,
}: {
  setShowEmailForm: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 py-4">
      <MenuButton
        href="https://www.linkedin.com/in/may-sunktong-276b53143/"
        label="LinkedIn"
        bg="black"
        textColor="white"
      />
      <MenuButton
        href="https://discord.gg/ss7tn39GPJ"
        label="Discord"
        bg="black"
        textColor="white"
      />
      <MenuButton
        href="https://github.com/maysunktong"
        label="Github"
        bg="black"
        textColor="white"
      />
      <button
        type="button"
        onClick={setShowEmailForm}
        className="cursor-pointer w-fit flex gap-2 justify-center items-center bg-black text-white font-mono px-6 py-3 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] border border-white active:translate-y-1 dark:border-white hover:border-dashed"
      >
        Email me
      </button>
    </div>
  );
}
