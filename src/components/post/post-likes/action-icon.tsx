import { Button, ButtonProps } from "@/components/ui/button";

type Props = Partial<ButtonProps> & {
  children: React.ReactNode;
};

function ActionIcon({ children, ...buttonProps }: Props) {
  return (
    <div className="bg-gray-50 dark:bg-zinc-800/50 text-zinc-500 px-3 py-1 rounded-full flex items-center transition duration-100 ease-in-out group">
      <button type="submit" {...buttonProps}>
        {children}
      </button>
    </div>
  );
}

export default ActionIcon;
