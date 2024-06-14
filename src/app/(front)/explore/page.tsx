import ExploreCard from "@/components/common/Explore";
import HeaderTitle from "@/components/common/HeaderTitle";
import Logo from "@/components/common/Logo";
import MobileSidebar from "@/components/common/MobileSidebar";
import SearchBar from "@/components/search/search-bar";
import { exploreUsers } from "@/lib/explore/exploreUsers";

const Explore = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const users: Array<UserType> | [] = await exploreUsers(
    searchParams.query ?? ""
  );
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-zinc-900 z-10 flex items-center justify-between w-full space-x-4">
        <div>
          <div className="flex items-center justify-betweens md:hidden">
            <MobileSidebar />
            <Logo />
          </div>
          <div className="hidden md:flex items-center justify-between">
            <HeaderTitle />
          </div>
        </div>
        <SearchBar />
      </header>
      <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
        {users &&
          users?.map((user) => <ExploreCard key={user.id} user={user} />)}
      </section>
    </>
  );
};
export default Explore;
