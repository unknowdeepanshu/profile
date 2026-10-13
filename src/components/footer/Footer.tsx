import RowLineConten from "../rowLineConten/rowLineConten";
import SocialLinks from "../socialLinks/SocialLinks";

function Footer() {
  return (
    <>
      <RowLineConten>
        <div className="flex items-center justify-between">
          <h1 id="instrument-serif-regular" className="text-start text-2xl">
            Designed & Developed by Dipanshu
          </h1>
          <SocialLinks />
        </div>
      </RowLineConten>
    </>
  );
}

export default Footer;
