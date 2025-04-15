import bullEyes from "../assets/bullEyes.png";
import meh from "../assets/meh.webp";
import thumbs from "../assets/thumbs.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: { src: string; alt: string } } = {
    3: { src: meh, alt: "meh" },
    4: { src: bullEyes, alt: "exceptional" },
    5: { src: thumbs, alt: "recommended" },
  };

  return <img {...emojiMap[rating]} className=" h-6 ml-1" />;
};

export default Emoji;
