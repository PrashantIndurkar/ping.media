import React from "react";
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

const extra = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {" "}
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
      <div className="flex flex-col">
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
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">Feed</div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          minus et eius perspiciatis in pariatur praesentium minima commodi
          officiis cupiditate! Assumenda rerum animi vel obcaecati dolores
          veritatis explicabo delectus vitae voluptates recusandae, excepturi
          eum corrupti eveniet consequatur, quae omnis ad facilis, ab
          exercitationem eaque accusamus! Officiis animi impedit temporibus
          ducimus quibusdam quos eum debitis. Sint placeat nesciunt cumque nemo
          molestiae libero, modi dolorum odio culpa quos suscipit minus et harum
          enim labore necessitatibus quod voluptates. Blanditiis, laborum?
          Maiores, deleniti fugit architecto praesentium, autem aliquid eum
          eaque assumenda iste provident inventore animi quibusdam eveniet
          maxime veniam modi eligendi at dolorem nobis saepe! Magnam sit enim
          pariatur nisi repellat unde, repudiandae corporis dolorum minima
          delectus harum distinctio esse aut? Commodi enim iusto, nam,
          laboriosam itaque necessitatibus cum eligendi excepturi praesentium
          dolor, adipisci non pariatur fuga sed asperiores expedita! Consectetur
          at ipsum nihil cupiditate quo in quas enim culpa quos amet dolores
          dignissimos molestiae, aperiam incidunt error nam unde repellat,
          ratione modi ad deleniti totam similique nostrum voluptas. Nulla,
          autem excepturi ea laboriosam consequuntur veritatis maiores totam
          architecto illum ipsa. Repudiandae exercitationem deleniti corporis
          officia voluptas et, ad eum, quas sapiente praesentium beatae atque
          enim dolor aperiam ratione necessitatibus ex nam eius placeat alias
          natus doloremque amet! Ad tenetur nemo deserunt cumque voluptas
          eveniet, ipsa suscipit soluta cupiditate a adipisci fugit sequi minima
          quo! Alias quidem aperiam voluptatibus officia tempora optio modi nisi
          veritatis suscipit commodi, quas facilis, in laborum distinctio aut
          molestias enim omnis amet sint maxime beatae quam consequuntur
          repellendus culpa. Consequatur eaque fugit voluptatum! Iste ipsam
          velit impedit ullam beatae sint ad quod, quidem molestias laboriosam.
          Magnam porro voluptas voluptatem numquam, ipsum eos labore, distinctio
          libero modi, quidem dolorum accusamus quae. Eligendi quis illum
          explicabo, sint unde cumque recusandae iure culpa. Iure ducimus, nam
          beatae necessitatibus quia reiciendis. Dolore tempora, aliquam
          perspiciatis numquam nulla voluptatem alias vero facere voluptates
          rerum laudantium earum eveniet, mollitia, sequi ullam saepe nisi.
          Provident pariatur odio saepe soluta nam tenetur accusamus obcaecati
          quas minima neque. Soluta laborum voluptas reiciendis quia facere
          suscipit voluptatibus commodi officiis, illum numquam, placeat saepe
          sint tempore distinctio non dicta. Aliquam distinctio ipsa nisi
          consequuntur aliquid corrupti earum optio pariatur minus placeat.
          Corporis dignissimos accusantium architecto dolor maiores placeat
          reiciendis ducimus repellat, qui suscipit molestias? Amet libero error
          laudantium ipsam porro voluptate illum at sequi enim omnis quisquam
          magni hic accusantium temporibus nesciunt tenetur labore voluptates
          voluptatibus placeat, id eveniet obcaecati fugit. Exercitationem harum
          culpa tempore debitis possimus, minima quibusdam dolorem soluta
          nesciunt quo ipsa quod dicta sed quia incidunt perspiciatis earum?
          Iste rerum rem assumenda, recusandae culpa quia mollitia fugit eveniet
          velit dolorum cupiditate, consequuntur temporibus non id distinctio
          nemo ipsa earum modi quaerat odit. Reiciendis rem incidunt
          consequuntur aperiam excepturi iusto, delectus totam nam, vitae,
          perspiciatis minima repudiandae blanditiis. Accusantium quasi vero cum
          corrupti neque ab rem architecto voluptatem, aut magni sapiente
          voluptas veritatis laborum repellendus repudiandae quia obcaecati.
          Voluptas veritatis neque, dolor laborum possimus quae, magni omnis
          minima doloribus consectetur maxime labore corrupti velit sed harum.
          Nobis laudantium amet quisquam alias at quia corporis maiores
          consequatur dicta ducimus, repellendus libero velit repudiandae
          aliquam soluta iste quae a recusandae dolorum fugiat ipsa dignissimos
          nisi numquam. Nihil quia tenetur totam atque odit exercitationem minus
          dolor iure corporis perspiciatis, nisi esse, rerum quasi. Expedita ea
          itaque nihil tempore vel in sequi velit, aspernatur ipsa aut. Odit
          repellat repudiandae incidunt modi temporibus ipsam voluptas quibusdam
          praesentium, error sint assumenda iusto, perferendis maiores neque
          nesciunt tempora quod. Ad nam quibusdam molestiae cum alias magnam,
          ipsum, dolores laborum repellat aspernatur fugit illum? A quia
          aspernatur ea optio odit laudantium molestias, deserunt minus aut ipsa
          labore harum mollitia! Cupiditate blanditiis fugiat beatae, at
          consequuntur fuga neque tempora, dolore dolorum voluptate
          necessitatibus. Sit omnis, animi obcaecati dicta delectus
          exercitationem illum recusandae voluptatum eos perspiciatis non. Iusto
          ad quidem provident reprehenderit ipsam quaerat modi assumenda sint
          placeat, quos ut, aliquam quasi sit at temporibus esse dolore
          voluptatibus fuga itaque earum odit enim accusamus vel? Excepturi
          praesentium amet quo ea! Nisi iure error velit commodi asperiores qui
          atque odit reprehenderit porro sed architecto, a animi molestiae
          eligendi exercitationem maxime deleniti magnam saepe eius at maiores
          fugit necessitatibus. Ipsum placeat optio commodi rerum, ea reiciendis
          ex voluptatibus, vero a labore at possimus eaque debitis veniam
          dolorem sequi sit recusandae nemo earum tenetur laboriosam praesentium
          quaerat excepturi aspernatur. Ut delectus, placeat nostrum ipsum at
          fugit quos temporibus, porro suscipit non ducimus quidem quam? Beatae
          dolore eligendi quasi suscipit fugit dolor impedit temporibus, et rem
          eveniet, nam iste architecto cupiditate sunt rerum id nemo quae. Odio
          optio libero quos inventore molestiae recusandae, culpa, adipisci ipsa
          numquam nobis amet cum? Voluptas quisquam corrupti, nulla, provident
          aliquid illum minus aut ratione magni ab distinctio dolores porro
          deleniti impedit sit cum fuga. Possimus nulla saepe aspernatur quae
          perferendis consectetur amet obcaecati corrupti impedit nostrum
          mollitia nobis eos, optio recusandae quasi laborum ipsa perspiciatis
          quos a quaerat corporis alias iste? Totam officia praesentium iusto!
          Laborum minus rem voluptas neque, ullam vel mollitia sapiente, eum
          voluptatibus quos iure quam maiores recusandae. Vero nemo et quibusdam
          perferendis repudiandae deleniti dolore ipsum aliquam saepe, mollitia
          cupiditate perspiciatis tempora, iusto eligendi porro ut at ratione
          dignissimos, sit ipsa architecto placeat! Rerum, voluptates. Earum
          totam consequuntur distinctio quo nobis deleniti voluptas facilis!
          Harum est ullam exercitationem, animi eius voluptates perspiciatis
          obcaecati fugiat corporis minima autem. Obcaecati eligendi ex in enim
          vero? Ipsa, ullam distinctio eum architecto numquam ipsam illum libero
          perferendis, nulla eos facilis, ratione alias placeat. Perspiciatis,
          laudantium cum consequatur minima esse reprehenderit, sint odit autem
          quaerat rem architecto, dolorem delectus! Iusto tenetur illum, quis
          repellat necessitatibus aperiam consectetur reiciendis quae fuga
          laudantium ut dicta porro quidem, commodi ducimus, quia nostrum ullam.
          Dolorum cumque quo quod aspernatur voluptatum, dolorem illo officia
          assumenda, fugit ea corrupti vel culpa doloribus velit pariatur,
          veniam saepe ipsa dignissimos libero consectetur? Necessitatibus eius
          expedita iusto quas sapiente reiciendis maiores laboriosam alias
          magnam voluptatibus iste enim, neque eaque voluptatem, nam dolores
          veritatis architecto id cupiditate est culpa ad eum et animi? Saepe
          autem praesentium perspiciatis, quo harum veniam. Laborum a deserunt
          culpa amet doloribus similique eaque vitae? Consectetur voluptatibus
          omnis, saepe dignissimos vitae eum distinctio voluptatem quam sint
          placeat nobis corporis iste nostrum. Quasi doloribus aliquam quod
          suscipit perferendis architecto ducimus. Eum tempora magni quidem
          molestias repudiandae minima, modi quaerat? Sunt nisi, esse
          necessitatibus repellat sequi officiis dolores debitis laborum
          tempore. Aliquid illo fuga eveniet, optio animi voluptates beatae quis
          cum placeat minima, perspiciatis ducimus dolores aliquam? Mollitia,
          placeat. Placeat, temporibus quae quod ducimus delectus asperiores
          provident inventore excepturi debitis ex ea voluptatum maiores
          molestiae molestias optio qui sequi libero ab esse voluptate animi.
          Possimus voluptatum commodi, facere harum, error eligendi est at vel
          saepe unde enim voluptas aperiam numquam accusantium laudantium nisi.
          Voluptate, quibusdam vitae ad ducimus doloribus inventore omnis?
          Adipisci nulla earum, doloribus sequi aperiam reprehenderit hic illo?
          Nihil mollitia tenetur atque. Beatae ut nesciunt harum qui? Ipsam,
          earum quasi. Ea odio quos aut, commodi tempora vitae, iure accusamus
          enim quibusdam reprehenderit magni exercitationem voluptatibus
          consequatur modi ab minus! Voluptatem eaque vel fuga molestias
          voluptate, asperiores rerum eos consequatur autem exercitationem
          reiciendis doloribus minima repellendus sint sed neque alias nulla
          aliquid perspiciatis veritatis. Animi exercitationem adipisci sequi
          accusantium rerum? Delectus recusandae est error repudiandae dolore
          sapiente excepturi, non animi nobis facere eligendi quam
          necessitatibus eius ad rerum veniam nihil voluptatibus iure et maiores
          quia deserunt molestias. Voluptatum sed iusto, omnis totam ratione
          praesentium labore officiis minima id. Quia consequatur eligendi
          quibusdam molestias laborum! Magni provident corporis, similique alias
          neque nihil quia dolore eveniet id ab nobis, necessitatibus
          asperiores? Eos impedit deleniti, optio quos nulla debitis pariatur
          ducimus. Aut perspiciatis ipsam ullam repudiandae earum aperiam ea
          voluptates dolores eaque, non, vero accusantium reiciendis. Illo
          consequuntur, mollitia hic ullam molestias ut eos nemo maxime aliquam
          quasi beatae perspiciatis architecto quis, quo, iusto deserunt id
          nostrum atque cupiditate aspernatur quam similique iste ab provident?
          Beatae blanditiis quas aspernatur fugiat veritatis alias odit quasi
          dicta iusto enim. Quas ipsum sunt explicabo commodi amet eveniet autem
          id quod at est, et libero doloremque nulla numquam aliquid voluptate
          quo itaque eaque. Doloribus autem voluptates alias facilis corrupti
          error? Rerum necessitatibus ad harum! Qui a ab neque non fugiat
          recusandae quia! Accusantium nostrum ut minus ducimus dignissimos eius
          iure aperiam placeat ratione dicta, eligendi assumenda quas molestiae,
          aliquam provident! Hic, temporibus? Corporis, eos accusantium unde
          necessitatibus numquam enim maxime sit error distinctio fugit
          assumenda iure saepe, et odit? Tempore, iure obcaecati. Autem maiores
          porro, aperiam sit nihil exercitationem nemo odio repudiandae earum
          deserunt eaque similique rerum ad dolorem tempore accusantium est
          laboriosam qui magni ipsam. Corrupti distinctio asperiores perferendis
          laborum, aperiam expedita facilis velit et, quasi laudantium eveniet
          magnam libero illum architecto veritatis delectus quis numquam porro
          iste impedit? Corrupti eaque ab harum id sint debitis provident quasi,
          recusandae quas itaque soluta nisi autem quod iure aperiam velit.
          Facilis eligendi culpa excepturi. Sit, accusamus. Laborum obcaecati
          nam cum ab possimus provident illo iste. Veritatis voluptatum quos
          adipisci perferendis quasi. Atque sunt dolore magnam quasi maiores
          repellendus aut reiciendis, iusto officia doloribus inventore
          doloremque quaerat eveniet cupiditate culpa odit modi ut autem
          deserunt placeat. Maiores, qui eos eius ratione, velit magni ea
          voluptates, non commodi ut provident totam accusantium! Voluptatibus
          minus error velit veritatis maxime commodi distinctio alias explicabo.
          Ut nihil aliquid similique. Harum blanditiis totam veniam perferendis,
          quasi quis possimus iusto in debitis natus velit tempore recusandae
          commodi excepturi. Aliquid vel possimus fugiat deleniti. Iure ab
          provident non dicta quidem aspernatur quia. Enim, maxime. Quasi
          praesentium rerum quo dolor commodi excepturi aperiam iure quod, iste
          laborum magnam, ipsum ab quae. Iure similique atque sed repudiandae
          officia commodi, iusto voluptatibus eligendi vitae fugit, est
          consequatur. Quos nemo eos cupiditate harum perspiciatis sapiente vel
          eligendi quas enim illum pariatur quidem adipisci eveniet, consequatur
          iure error asperiores iusto commodi? Beatae, repellendus. A quisquam
          obcaecati laudantium dignissimos consequatur odio nihil, error, non
          cumque magnam in tempore excepturi, quia labore nam quidem nobis fugit
          aut iusto reprehenderit? Et similique dolor delectus esse molestiae
          cumque earum quis nam inventore aut mollitia aspernatur explicabo id
          veritatis sapiente, sequi quisquam quae aliquam accusamus. Modi
          repudiandae ipsum voluptatem, inventore ducimus consectetur, libero
          voluptate, quam vero eos optio. Laudantium, inventore nostrum suscipit
          ratione explicabo maxime impedit ut nisi iure labore obcaecati.
          Veritatis quis totam fugiat corporis distinctio dolorem sed illo amet.
          Facere perferendis ipsa quae dolor officia minima similique delectus
          excepturi, obcaecati asperiores architecto corporis veniam beatae
          ratione suscipit, aperiam laboriosam laudantium iusto aliquam sint
          repellendus consequuntur nam possimus illum? Saepe eaque illo rem
          optio voluptate deleniti blanditiis ad sed nostrum, libero adipisci
          quos inventore veritatis porro eum assumenda minus! Sequi recusandae
          assumenda autem, deserunt iure odit corporis reiciendis iste sunt
          obcaecati dolore inventore suscipit voluptates placeat atque, porro
          dignissimos dolorum libero rerum ab? Esse ratione neque eius animi
          accusantium qui voluptatem possimus quo! Accusantium expedita, vel
          ullam corrupti iusto aliquid? Minus consequuntur dolorum facilis
          consequatur placeat, ducimus sapiente mollitia saepe quis, temporibus
          laborum! Reiciendis ullam, id fuga dolor necessitatibus qui eaque
          alias nostrum dolorum eum quae quisquam eos rerum hic veritatis iusto
          mollitia suscipit. Odit praesentium nemo ratione saepe voluptas ut
          voluptatibus molestiae tenetur illo, perspiciatis id minus corporis
          error ea exercitationem, voluptatum, quis accusantium inventore iusto
          dolore laboriosam omnis beatae commodi. Alias distinctio nihil
          doloribus repellendus facilis vel fugit ratione animi maxime? Deleniti
          labore alias distinctio sit ad nisi earum, amet commodi iure assumenda
          ipsum ipsam odit quia voluptas ut libero neque cum asperiores quisquam
          iusto reiciendis? Facilis nostrum officiis mollitia fuga enim voluptas
          illo maiores maxime tempora. Alias rerum distinctio beatae
          perspiciatis quisquam. Optio dolor id tempora ipsam sit magnam sequi
          quae minima voluptate animi in, tenetur officia veritatis iusto sed
          enim neque veniam nihil totam quos iure soluta voluptas ad recusandae?
          Quibusdam quos aliquid facilis vero expedita dicta consequuntur? Error
          omnis expedita, nostrum voluptate possimus quo consectetur maxime at
          nesciunt magnam dolore numquam aliquam aperiam placeat culpa officiis
          consequatur harum ipsa dolorem ad cum quod fuga velit dicta? Ipsa
          minus dolor sed ullam eaque doloremque repudiandae aliquid. Eligendi
          cumque inventore maiores nesciunt vel aperiam blanditiis incidunt.
        </main>
      </div>
    </div>
  );
};

export default extra;
