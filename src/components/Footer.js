import {
  TWITTER_LINK,
  DISCORD_LINK,
  INSTAGRAM_LINK,
  MEDIUM_LINK,
} from "../constants/Socials";
import {
  TwitterIcon,
  DiscordIcon,
  InstagramIcon,
  MediumIcon,
} from "../assets/icons";
export default function Footer() {
  return (
    <div class="bg-primary">
      <div class="w-full flex flex-wrap items-center justify-between px-4">
        <div class="flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto">
          <img
            src={`${process.env.PUBLIC_URL}/images/footer/footer-left.png`}
            class="w-full max-w-[200px] aspect-square hidden md:block"
            alt="Monkeez Logo"
          />
          <div class="flex flex-col justify-center items-center">
            <span class="text-center text-xl lg:text-2xl">
              Monkeez Media is made with <br />
              <strong>♥</strong> by the tribe, for the tribe
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center">
              <a
                href={TWITTER_LINK}
                target="_blank"
                class="text-black hover:text-white"
                rel="noreferrer"
              >
                <TwitterIcon />
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href={DISCORD_LINK}
                target="_blank"
                class="text-black hover:text-white"
                rel="noreferrer"
              >
                <DiscordIcon />
                <span class="sr-only">Discord account</span>
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                class="text-black hover:text-white"
                rel="noreferrer"
              >
                <InstagramIcon />
                <span class="sr-only">Instagram page</span>
              </a>
              <a
                href={MEDIUM_LINK}
                target="_blank"
                class="text-black hover:text-white"
                rel="noreferrer"
              >
                <MediumIcon />
                <span class="sr-only">Medium page</span>
              </a>
            </div>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/images/footer/footer-right.png`}
            class="w-full max-w-[200px] aspect-square hidden md:block "
            alt="Monkeez Logo"
          />
          <div class="md:hidden flex flex-row justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/footer/footer-left.png`}
              class="md:hidden w-full max-w-[200px] aspect-square block"
              alt="Monkeez Logo"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/footer/footer-right.png`}
              class="w-full max-w-[200px] aspect-square block "
              alt="Monkeez Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
