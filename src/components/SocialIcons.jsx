import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcons({ img, src }) {
  return (
    <>
      <a href={src} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="m-1" color="#2F3A8F" size="1x" icon={img} />
      </a>
    </>
  );
}