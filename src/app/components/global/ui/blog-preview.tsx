import cn from "@/lib/clsx";
import { calculateReadTime, truncateString } from "@/utils/utilities";
import { Anchor } from "./anchor";
import { H4, P } from "./text";
import { Blog } from "@/types/models";

interface BlogPreviewProps {
  blog: Blog;
  contentThreshold?: number;
}

export function BlogPreview({
  blog,
  contentThreshold,
}: Readonly<BlogPreviewProps>) {
  return (
    <div className={cn("w-full py-10")}>
      <H4 className="mb-[14px] flex items-center gap-1">{blog.title}</H4>
      <P className="mb-3">
        {truncateString(blog.content, contentThreshold ?? 300)}
      </P>
      <div className={cn("flex items-center gap-2")}>
        <Anchor href={"/blog/" + blog.link} variant={"default"}>
          Read more
        </Anchor>
        <span className={cn("h-1 w-1 rounded-full bg-white")}></span>
        <P>{calculateReadTime(blog.content)} min</P>
      </div>
    </div>
  );
}