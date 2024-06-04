import Link from "next/link";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Home as HomeIcon,
  Menu,
  MessageCircle,
  Search,
  UserRoundSearch,
} from "lucide-react";
import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex h-screen">
      <div className="hidden border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src="/images/PingLogo.png"
                width={100}
                height={100}
                alt="Ping Logo"
              />
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <HomeIcon className="h-4 w-4" />
                Feed
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Inbox
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                Jobs
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Search className="h-4 w-4" />
                Search
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <UserRoundSearch className="h-4 w-4" />
                My Network
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Bell className="h-4 w-4" />
                Notification
                <Badge
                  variant="outline"
                  className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                >
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Bookmark className="h-4 w-4" />
                Bookmarks
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <ThemeToggleBtn />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col border-gray-300 border-r">
        <header className="">
          <header className="flex h-14 items-center gap-4 border-b  px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Image
                      src="/images/Logo.png"
                      width={30}
                      height={30}
                      alt="Ping Logo"
                    />
                    <span className="sr-only">Ping media</span>
                  </Link>

                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <HomeIcon className="h-5 w-5" />
                    Feed
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Inbox
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <BriefcaseBusiness className="h-5 w-5" />
                    Jobs
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Search className="h-5 w-5" />
                    Search
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <UserRoundSearch className="h-5 w-5" />
                    My Network
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <Bell className="h-5 w-5" />
                    Notification
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge>
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Bookmark className="h-5 w-5" />
                    Bookmarks
                  </Link>
                </nav>
                <div className="mt-auto p-4">
                  <ThemeToggleBtn />
                </div>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">Feed</div>
          </header>
        </header>
        <main className="flex-1 overflow-y-auto hide-scrollbar">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quam
          iusto accusantium suscipit voluptas, incidunt nihil soluta quod odio
          delectus aliquid, autem animi enim. Omnis cum harum ratione numquam
          placeat. Consequuntur quia aspernatur facilis officiis, in minus
          adipisci ducimus sapiente quae neque amet ipsa a provident dicta vel
          sed facere ipsam quis iusto. Provident assumenda aperiam harum
          molestiae earum incidunt est ab corporis nihil laborum. Nesciunt, quo!
          Aliquam, adipisci. Voluptatum, sequi, sunt nihil dolorum facere
          asperiores cumque nemo dignissimos alias eaque hic, ipsa at! Qui sit
          incidunt debitis, distinctio ipsam perspiciatis at recusandae nostrum!
          Modi laudantium laboriosam, sunt veniam praesentium tempore ab ullam
          beatae aliquid vero velit, optio asperiores vel blanditiis sapiente ex
          rem hic odit. Quasi magni nisi animi iusto vel pariatur assumenda iure
          eos in modi eaque praesentium, blanditiis quisquam fuga eum unde
          inventore quo beatae, debitis numquam voluptate atque dolores sint?
          Corrupti harum vitae, laborum non, facilis incidunt omnis possimus
          deleniti porro recusandae aliquid consectetur impedit culpa repellat
          accusamus ducimus dolor quam dicta tempora, unde nulla ad architecto!
          Officiis, et veniam? Obcaecati, quia. Culpa error possimus fugiat,
          nisi officiis sint repellendus! Cumque vero explicabo, veritatis
          eligendi temporibus debitis provident tempora maiores neque modi
          quisquam voluptas animi blanditiis excepturi alias deserunt placeat
          perferendis minus facilis culpa ipsam iure, voluptates magnam
          distinctio? Reiciendis consequuntur cum, pariatur assumenda numquam et
          atque nemo, nihil adipisci quo quisquam qui culpa voluptatibus sunt
          suscipit. Possimus, perferendis. Consequuntur, hic. Nisi deleniti,
          cupiditate tenetur sit at necessitatibus vel praesentium repudiandae
          fugit asperiores minima officia in. Eaque exercitationem quos nesciunt
          pariatur ea, tempore autem culpa dolor mollitia! Dolore, deserunt modi
          at necessitatibus officia inventore sed, ipsum a excepturi, adipisci
          libero in minima cupiditate quos atque voluptatum! Incidunt ducimus
          beatae, nisi eos quod soluta. Magnam necessitatibus delectus sequi
          nihil cum, numquam nemo debitis unde doloremque accusamus fuga
          molestias. A repudiandae necessitatibus animi voluptas maiores
          voluptates vero officia laudantium quos! Sequi nisi rerum ipsum
          incidunt itaque facere libero dolor numquam! Libero at repellat,
          tempore fugit ratione adipisci molestiae. Vitae eum, reprehenderit
          placeat optio rerum perspiciatis fuga porro voluptatem nostrum,
          exercitationem laudantium numquam quo, dicta repudiandae maiores nisi.
          Officiis ipsa quidem dolore quod velit saepe delectus suscipit
          consectetur, unde, officia adipisci explicabo rerum ad voluptatem
          harum veritatis tempore ullam aliquid, nostrum ex neque. Distinctio
          amet, animi voluptates quaerat quis eum. Nobis velit, iste nam quidem
          optio magni totam odit tempore inventore illum? Neque quo at ab
          reprehenderit perspiciatis esse? Eaque quae facilis quas placeat.
          Magni nesciunt cupiditate nisi alias aut, assumenda labore, eos
          eveniet dolorum, necessitatibus voluptatum veritatis distinctio!
          Mollitia repudiandae quos atque tenetur quis suscipit pariatur vero
          rem fugiat labore eveniet cum nobis, eligendi delectus necessitatibus
          perferendis dolorum aliquid in voluptate. Animi accusantium sunt
          ducimus in, voluptas exercitationem neque maxime facilis expedita
          libero, sapiente natus ullam eveniet voluptates, quidem facere
          quibusdam dolor ad quaerat. Ex dolorem iste, quasi possimus
          reprehenderit soluta vero dolorum maiores rerum officiis ipsa
          similique omnis numquam facere cupiditate provident. Libero officia
          architecto fugit officiis vero accusantium nemo? Quia explicabo, iure
          sint excepturi ut sunt fuga voluptatum dignissimos sequi quibusdam
          cupiditate, ipsum ratione maiores officiis corporis velit.
          Reprehenderit at cumque, veniam error voluptatibus perferendis nobis
          deserunt a ipsam quae deleniti consequatur, blanditiis labore
          laudantium ullam officia quaerat ab optio obcaecati? Optio fugiat et
          eveniet tempora perspiciatis facilis, commodi qui fugit voluptas quo,
          natus vero nulla maiores quia in ipsam impedit eaque id omnis,
          assumenda odio? Non nulla et veniam pariatur optio atque deserunt
          minima laudantium. Repellendus id error harum impedit veritatis
          assumenda repellat fugiat earum officia aliquid, vero perspiciatis
          quos asperiores sunt laboriosam, quia quibusdam iusto dolorum. Quaerat
          suscipit aperiam natus eligendi ad voluptatum accusamus exercitationem
          dicta saepe aut reiciendis nihil quidem cupiditate voluptas tenetur
          provident soluta reprehenderit, placeat necessitatibus eaque! Nisi
          cupiditate cum exercitationem sit labore id pariatur eius. Voluptatum,
          totam! Labore repellendus dolor pariatur? Facere, molestias rem,
          tempore omnis perspiciatis distinctio enim placeat eligendi quos quis
          dignissimos libero. Quod soluta aut repellendus minus veritatis iure
          ipsa autem ut eius harum et possimus consectetur, iusto assumenda
          dolore temporibus vitae quas porro culpa perspiciatis? Quae fugit
          magni id, mollitia est autem omnis, dolore, dignissimos cumque rem
          consequuntur repellat nesciunt expedita ratione nihil dolorem
          voluptatibus ipsum vero necessitatibus aspernatur? Accusantium
          repellat ut rerum sequi esse, adipisci sit nemo. Nam, dolorem.
          Adipisci eos delectus saepe nisi officiis soluta similique asperiores?
          Voluptatem, eos eveniet explicabo dolores laborum ad praesentium in
          voluptas voluptates labore eaque facilis minus architecto vero tempore
          at pariatur ea vitae, debitis temporibus dolor? Velit, atque autem
          consequuntur nam veritatis delectus ullam sint consequatur vel,
          explicabo architecto dolorem eveniet nemo porro eos alias officiis,
          molestiae sit culpa? Nobis quos sapiente incidunt omnis? Quibusdam ad
          illo incidunt omnis sunt provident nulla. Repellat suscipit illum
          accusamus laudantium quasi! Error omnis doloribus adipisci, dolorum
          autem quidem quibusdam modi obcaecati perspiciatis ea, illo amet,
          perferendis voluptatum magnam veritatis soluta! Sequi nostrum
          voluptatum maiores dolorem architecto nulla natus odio quae sit
          eveniet, maxime voluptas explicabo. Illo nihil non porro temporibus
          alias perferendis eos ipsum, veritatis quas id possimus necessitatibus
          maiores. Enim ab nostrum quam reprehenderit, ea quasi nam tenetur
          quibusdam illo, consectetur ad dolorum corporis expedita praesentium
          deleniti eum commodi tempora impedit amet. Quae sed neque quia ullam
          harum voluptatem quasi perferendis. Iste, tempore enim! Quia
          repellendus architecto optio velit in, aut, nihil soluta quam
          laboriosam voluptas consequuntur. Praesentium, placeat illum beatae
          quasi repellendus quod, obcaecati quibusdam aliquam veniam animi
          tenetur at architecto sapiente libero pariatur possimus recusandae
          aspernatur commodi quidem qui quam esse sed voluptatibus? Illo, sint!
          Id velit suscipit unde voluptas maxime, beatae vero aliquid quibusdam
          nulla tenetur temporibus eos ratione, expedita mollitia adipisci
          illum! Voluptatum ducimus itaque unde provident fuga sunt? Nostrum ad
          quo non quidem eaque eveniet, iure autem harum reiciendis porro totam
          distinctio eligendi unde amet, tempora magni iste sit eos atque?
          Itaque ex quaerat laborum porro pariatur ratione ducimus aliquid
          voluptatibus et, dicta officiis excepturi deserunt at corporis
          explicabo illum quidem nisi, id incidunt nobis voluptates facilis
          consectetur nostrum molestiae. Natus excepturi tenetur, sint ex harum
          nobis voluptates dignissimos minus ullam voluptatibus. Excepturi culpa
          dolore eius deleniti voluptates quod, sequi iste, iusto sint maxime,
          facere molestias illum voluptate animi quaerat quo. Neque laboriosam,
          fugiat inventore veniam cumque, ipsa reiciendis praesentium, illo
          eaque doloribus accusantium assumenda vel rerum voluptate. Ducimus
          laudantium, exercitationem corporis nesciunt ea quidem? Veritatis
          laboriosam nulla facere voluptatum, dolore eaque saepe sed deserunt
          quam assumenda quisquam magnam nisi. Inventore est quod maiores. Optio
          esse aliquam mollitia temporibus fuga repellat maiores laboriosam,
          sunt suscipit, vitae provident ullam excepturi dicta, nostrum ipsum
          voluptates nemo magnam odio animi quasi! Dolorum id fugit culpa
          deserunt impedit eius commodi quam sequi in facere! Consequatur quasi
          magni dolorum sequi ipsa doloremque iusto modi ratione eos,
          exercitationem corrupti molestias! Deserunt, culpa enim officiis
          possimus a rem omnis quae incidunt dolorem cum, necessitatibus harum
          libero dolorum quas ab id tempore at voluptatum ad. Quidem reiciendis
          ducimus modi similique? Corporis deleniti perferendis quaerat
          similique eum facere, aliquid fugit, aliquam neque sequi minus.
          Incidunt autem placeat ut! Neque non, numquam impedit voluptatem
          repudiandae, ducimus dolorum velit ratione voluptas quidem blanditiis
          ex illo. Accusantium sequi vel fuga veniam nostrum natus animi commodi
          a accusamus est incidunt dolor ad atque, voluptatibus enim harum eum
          recusandae sit. Quidem libero nisi, et ex veritatis eaque! Sed vero
          inventore enim corporis blanditiis tempore a necessitatibus. Fugit
          quia culpa doloremque accusamus pariatur fugiat deleniti aspernatur.
          Corporis, perferendis. A omnis nulla ipsa earum incidunt odio modi
          commodi ratione! Nemo id sapiente facilis aliquam delectus voluptatum
          iusto voluptates neque animi! Sed, eius voluptatibus qui vero minima
          maiores unde ea reiciendis quo suscipit itaque in obcaecati rem
          asperiores voluptates ullam earum quam! Tempora repellat at
          perspiciatis deserunt fugiat delectus, quaerat voluptatum dignissimos
          placeat modi in quis quia doloremque ex nisi rerum expedita itaque
          magnam labore ea, sed assumenda recusandae beatae culpa? Deleniti
          inventore rerum aliquam veritatis facere. Deleniti expedita aperiam
          consequatur nisi culpa ratione libero, saepe nam repellat qui id
          accusantium? Id quaerat praesentium at. Corporis iure repellendus
          culpa? Quaerat repellat officia illo quis error incidunt? Sunt
          similique blanditiis nemo in repellendus tempore, nobis assumenda
          aliquid voluptatum. Maxime modi porro cupiditate, quaerat vitae vero
          necessitatibus, reprehenderit adipisci quod iusto rerum blanditiis
          delectus dolorum ratione explicabo voluptatibus, accusantium eligendi
          ullam! A hic, libero maxime nisi earum reiciendis illo, cum eaque
          molestiae, placeat deleniti quis aliquam. Dicta ratione adipisci sed
          sunt? Hic ea temporibus quia omnis atque praesentium rem qui sapiente
          soluta assumenda deleniti architecto, sed quod asperiores? Iure in
          assumenda dolore praesentium maiores sunt sit, nisi quia, deserunt
          neque dolores eos tempora laborum nemo ratione ipsum autem quo?
          Molestiae eveniet dolor dignissimos ipsum deleniti modi, deserunt
          voluptates similique eaque excepturi ducimus ex in ipsa, quaerat
          asperiores eos debitis amet aliquid, est dolores vel dicta vero?
          Exercitationem, laboriosam quam assumenda culpa, adipisci blanditiis
          molestias qui dolorum, ut modi magni aut animi libero repellendus
          asperiores dicta voluptates. Eos rerum, neque corrupti, ex voluptas
          est a nulla architecto voluptate qui consectetur laborum alias at
          perspiciatis reprehenderit necessitatibus in nemo provident! Dolorem
          obcaecati velit magnam modi eius voluptatum eos aut facere similique
          mollitia, laboriosam ex assumenda ea. Ullam, cum minus modi eius quas
          accusamus culpa similique voluptates aspernatur perspiciatis commodi
          adipisci totam facere, veniam accusantium eligendi vero. Eaque
          nesciunt soluta nostrum voluptatum ad dolores. Et non eaque reiciendis
          eum sapiente qui, tenetur voluptatibus facere quam earum quo enim ipsa
          architecto suscipit laborum rem quibusdam natus doloremque voluptas!
          Optio quia consectetur ullam nostrum earum quasi hic totam sint,
          maxime voluptate repellendus eum laborum quam nulla. Voluptatum eius
          atque rem perferendis ratione porro quia assumenda dolores maiores ab
          beatae unde officiis laudantium sapiente id et temporibus ullam earum,
          aliquam distinctio aperiam ipsum sunt omnis? Voluptates, explicabo.
          Adipisci nulla vitae eveniet porro itaque pariatur recusandae aliquam
          corporis maiores alias, rerum aliquid nostrum, repudiandae eaque
          dolore reiciendis illo explicabo. A, ex possimus illum commodi ipsum
          odio alias ducimus at deserunt harum perspiciatis. Harum, corrupti
          minima. Expedita incidunt nihil aperiam libero porro doloribus magni
          in assumenda fuga adipisci minima sunt enim commodi neque placeat
          voluptatibus reprehenderit blanditiis magnam ratione, consequuntur
          facere, deleniti nulla. Culpa, assumenda incidunt nihil, impedit neque
          consequatur dignissimos deserunt debitis sed quos accusamus totam
          exercitationem magnam, modi quasi! Alias, sint voluptatum nam delectus
          sapiente itaque illo ex quod dicta ipsa. Reprehenderit deleniti quod
          cupiditate aliquid obcaecati consequatur reiciendis, maiores atque
          necessitatibus maxime eius minima totam debitis animi rerum est,
          tempore eveniet aspernatur architecto itaque consectetur mollitia esse
          aut! Officiis provident totam adipisci ex vero quos consequatur sit,
          ad, non impedit architecto maiores quaerat quae? Cum, debitis laborum
          cupiditate optio labore odio quisquam deserunt voluptatem, ad
          reprehenderit libero sint aliquam, tempora pariatur dolorem officiis!
          Reiciendis perspiciatis in mollitia iste impedit rem est atque rerum
          provident ea necessitatibus deserunt sed laudantium qui assumenda
          repellat, labore officia id quibusdam nam repudiandae quam! Aut,
          veritatis itaque. Nostrum culpa totam at, aspernatur adipisci
          repellat. Aut ab quod cum aliquid delectus non ullam veniam sint
          adipisci eaque, nam temporibus voluptate quasi facere beatae eveniet
          itaque, asperiores explicabo consequuntur, incidunt dignissimos!
          Accusamus, eaque ab delectus, ratione excepturi amet deserunt eum
          quasi ipsa porro eveniet aspernatur voluptate recusandae? Iusto
          reiciendis alias ex! Laboriosam tempore eaque hic aut consequuntur
          sequi quas, amet inventore, cum, esse mollitia facilis obcaecati dicta
          earum recusandae vero magnam quod eum! Assumenda asperiores eos
          repellat saepe modi magni quas nulla nobis ullam, maiores similique
          consequatur libero nostrum quisquam hic quam fugit ipsum iste tempora
          sequi repellendus fugiat quos maxime possimus! Cupiditate repellat
          deleniti quam, quo nisi vitae dignissimos, corporis quaerat beatae
          numquam commodi amet fugit ab tempora sunt. Eos quasi blanditiis id
          velit architecto laboriosam hic itaque quisquam beatae eum similique
          ipsa provident odio maiores, exercitationem quia temporibus,
          perspiciatis earum corrupti accusantium distinctio voluptates dicta
          qui! Exercitationem blanditiis nihil tempore suscipit eum praesentium.
          Aspernatur, quam! Id perspiciatis quas laborum fugiat deleniti.
          Mollitia adipisci, dignissimos in earum natus possimus voluptatum
          eligendi fugiat fuga pariatur impedit delectus. Tempora, soluta quod
          recusandae, ipsam distinctio sed omnis nisi id voluptas nostrum eos
          nulla alias itaque, accusantium aut fuga sunt vel velit? Aut unde
          quasi voluptatum eos saepe quidem recusandae hic tenetur velit sit,
          voluptas rerum. Voluptate, architecto blanditiis!
        </main>
      </div>
      <div className="hidden md:block">Top picks</div>
    </div>
  );
}
