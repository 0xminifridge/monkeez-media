import { useState } from "react";
import { MONKEEZ_THUMBNAIL_URL_LG } from "../../constants/Metadata";
import { TwitterIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

export default function MVPCard({ item }) {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      class={`bg-primary border-4 relative rounded-2xl border-solid border-black  hover:cursor-pointer hover:-rotate-2 duration-200 w-full shadow-2xl box-shadow-custom-hoverable`}
      //   onClick={() => navigate(`/landz/${item?.id}`)}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div class="inline-block overflow-hidden m-0 relative rounded-t-xl">
        <img
          class={`m-0 max-w-[800x] w-[100%] aspect-square transition-all duration-500 ${
            hovering ? "scale-110" : ""
          } block`}
          src={`${MONKEEZ_THUMBNAIL_URL_LG}/${item?.monkeeId}.png`}
          alt="Card"
        />
      </div>
      <div class="pb-5 px-5 flex flex-col">
        <div class="overflow-hidden flex justify-center flex-row items-center text-center">
          <span class="text-xl lg:text-2xl xl:text-3xl font-bold mr-2">
            {item?.name}
          </span>
          <Link
            to={`https://twitter.com/${item?.twitter}`}
            target="_blank"
            class="hover:text-mnkz-tan"
          >
            <TwitterIcon width="30" height="30" />
          </Link>
        </div>
        {/* <div>
          <div>
            <span>1</span>
            <img
              src={`${process.env.PUBLIC_URL}/images/resource-extractor.png`}
              class="w-10"
            />
          </div>
          <span class="align-center px-1">1: extractor</span>
        </div> */}
      </div>
    </div>
  );
}
