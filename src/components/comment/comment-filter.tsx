import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CommentFilter = () => {
  return (
    <Select defaultValue="newest">
      <SelectTrigger className="w-fit space-x-2 border-none focus:ring-0 focus:outline-none ml-auto focus:ring-offset-0 text-zinc-500 dark:text-zinc-400 font-semibold">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CommentFilter;
