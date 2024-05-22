<script lang="ts">
  interface NavItem {
    id: number;
    name: string;
    image: string;
    alt: string;
  }

  import Logo from "../images/aspireLogo.svg";
  import homeIcon from "../images/Home.svg";
  import cardIcon from "../images/Card.svg";
  import paymentIcon from "../images/Payments.svg";
  import creditIcon from "../images/Credit.svg";
  import settingIcon from "../images/Account.svg";

  let isActive: string = "Cards";

  const navItems: NavItem[] = [
    {
      id: 1,
      name: "Home",
      image: homeIcon,
      alt: "homeIcon",
    },
    {
      id: 2,
      name: "Cards",
      image: cardIcon,
      alt: "cardIcon",
    },
    {
      id: 3,
      name: "Payments",
      image: paymentIcon,
      alt: "paymentIcon",
    },
    {
      id: 4,
      name: "Credit",
      image: creditIcon,
      alt: "creditIcon",
    },
    {
      id: 5,
      name: "Settings",
      image: settingIcon,
      alt: "settingIcon",
    },
  ];
</script>

<div class="bg-[#0C365A] h-screen px-10">
  <div class="pt-10">
    <img src={Logo} alt="Aspire Logo" class="" />
    <p class="text-white opacity-30 mt-5 text-lg">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </p>
  </div>
  <div class="text-white flex flex-col gap-12 mt-24">
    {#each navItems as navButton, index}
      <div class="flex gap-5">
        <img src={navButton.image} alt={navButton.alt} />
        <p
          class="text-lg cursor-pointer {navButton.name == isActive
            ? 'font-bold text-[#01D167]'
            : ''}"
        >
          {navButton.name}
        </p>
      </div>
    {/each}
  </div>
</div>
