import Logo1 from "../../assets/pictures/Icon1.jpg";
import Logo2 from "../../assets/pictures/Icon 2.jpg";
import Logo3 from "../../assets/pictures/Icon 3.jpg";

export default function Community() {
  const memberships = [
    {
      logo: Logo1,
      heading: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      logo: Logo2,
      heading: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      logo: Logo3,
      heading: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mt-7">
        <div className="text-[#4D4D4D] text-[25px] font-semibold w-[400px] text-center">
          Manage your entire community in a single system
        </div>
        <div className="text-[#717171] mt-[6px]">
          Who is Nextcent suitable for?
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-[89px]">
        {memberships.map((membership, index) => {
          return(
            <div key={index}></div>

          )
        })}

      </div>
    </div>
  );
}
