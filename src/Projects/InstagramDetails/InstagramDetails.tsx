import { useState, useEffect } from "react";
import Tile from "../../Components/Tile";

type User = {
  id: number;
  name: string;
  username: string;
};

function InstagramDetails() {
  const usersDetails = [
    {
      pk: "6081034689",
      pk_id: "6081034689",
      id: "6081034689",
      full_name: "Aishwarya Bhattacharya",
      fbid_v2: "17841406080680129",
      third_party_downloads_enabled: 0,
      strong_id__: "6081034689",
      profile_pic_id: "3664779276957582761_6081034689",
      profile_pic_url:
        "https://instagram.fjai2-7.fna.fbcdn.net/v/t51.2885-19/513868595_18330358096202690_5565770478795761075_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=instagram.fjai2-7.fna.fbcdn.net\u0026_nc_cat=102\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=OyN1ArsHj6oQ7kNvwG-DrZ7\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AffsYAaJVzBKqjqTnZ-UeYvPrxn_PACNqam8XwRbD99Org\u0026oe=68EAE819\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "aishwarya__bhattacharya",
      is_private: true,
      has_anonymous_profile_picture: false,
      reel_media_seen_timestamp: 1759764884,
      account_badges: [],
      latest_reel_media: 1759764884,
    },
    {
      pk: "8118614263",
      pk_id: "8118614263",
      id: "8118614263",
      full_name: "Manasi Singh",
      fbid_v2: "17841408107914826",
      third_party_downloads_enabled: 0,
      strong_id__: "8118614263",
      profile_pic_id: "3737302062775509512_8118614263",
      profile_pic_url:
        "https://instagram.fjai2-1.fna.fbcdn.net/v/t51.2885-19/561360975_18298919992270264_3257482795483239063_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby42NTkuYzIifQ\u0026_nc_ht=instagram.fjai2-1.fna.fbcdn.net\u0026_nc_cat=104\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=ZKPuJNyc8-kQ7kNvwHBKxoW\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afdq7auQFhYjjAPNNwDD09c5c7fCxyksuIJ47Qw9xMQ2Og\u0026oe=68EAC0A7\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "mansi_musing",
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      pk: "8250755381",
      pk_id: "8250755381",
      id: "8250755381",
      full_name: "Lily",
      fbid_v2: "17841408261441344",
      third_party_downloads_enabled: 0,
      strong_id__: "8250755381",
      profile_pic_id: "3726188937330105788_8250755381",
      profile_pic_url:
        "https://instagram.fjai2-5.fna.fbcdn.net/v/t51.2885-19/552660157_18283535122275382_2476190181393918457_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NjAuYzIifQ\u0026_nc_ht=instagram.fjai2-5.fna.fbcdn.net\u0026_nc_cat=110\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=dXs88gwDhfQQ7kNvwFLWhy6\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfdzejI0aX8WL0sfqGUNXQiRjL2ilAzENgqSeG7RSfUsmQ\u0026oe=68EAC78D\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "lilymauio",
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      pk: "6899365530",
      pk_id: "6899365530",
      id: "6899365530",
      full_name: "somyaaa.",
      fbid_v2: "17841406885922420",
      third_party_downloads_enabled: 0,
      strong_id__: "6899365530",
      profile_pic_id: "3734728150497758515_6899365530",
      profile_pic_url:
        "https://instagram.fjai2-3.fna.fbcdn.net/v/t51.2885-19/559099553_18330133252229531_8705914420971730015_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NjYuYzIifQ\u0026_nc_ht=instagram.fjai2-3.fna.fbcdn.net\u0026_nc_cat=111\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=gMbSU3daRrEQ7kNvwGTNi1j\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Afew5veKTuBrQldR1mjJ0dCObZ-n7hn-kLG6suYFlAB53w\u0026oe=68EAEA14\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "somya.pvt.ig",
      is_private: true,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      pk: "40259862584",
      pk_id: "40259862584",
      id: "40259862584",
      full_name: "Aakriti Yadhuvanshi 🖤",
      fbid_v2: "17841440277542482",
      third_party_downloads_enabled: 2,
      strong_id__: "40259862584",
      profile_pic_id: "3736493728145275535_40259862584",
      profile_pic_url:
        "https://instagram.fjai2-5.fna.fbcdn.net/v/t51.2885-19/559854473_18066408539342585_6981454379073416624_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=instagram.fjai2-5.fna.fbcdn.net\u0026_nc_cat=105\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=LkWcpNscBRUQ7kNvwF3GKGV\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfcNYINmHCv42NYuWmTbABDLNRKd84jiBbdvTUt8wdRYDA\u0026oe=68EAF061\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "aakritiyadhuvanshi_",
      is_private: true,
      has_anonymous_profile_picture: false,
      reel_media_seen_timestamp: 1759812519,
      account_badges: [],
      latest_reel_media: 1759836519,
    },
    {
      pk: "77228077702",
      pk_id: "77228077702",
      id: "77228077702",
      full_name: "Vishwas Smile \u0026 Spine Centre",
      fbid_v2: "17841477211083509",
      third_party_downloads_enabled: 0,
      strong_id__: "77228077702",
      profile_pic_id: "3733154517463815947_77228077702",
      profile_pic_url:
        "https://instagram.fjai2-6.fna.fbcdn.net/v/t51.2885-19/554823203_17847268332573703_8623001208987089691_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=instagram.fjai2-6.fna.fbcdn.net\u0026_nc_cat=107\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=QtIFpDIZWfwQ7kNvwGNIbCF\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfefkIdQFfKyHIQLhyCHLzvK0olh7tuHT3gzEp-ZYZ3zGg\u0026oe=68EAED15\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "vishwassmileandspinecentre",
      is_private: false,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      pk: "58139966743",
      pk_id: "58139966743",
      id: "58139966743",
      full_name: "Vishal Dhiman | Mountain Soul",
      fbid_v2: "17841458282297495",
      third_party_downloads_enabled: 1,
      strong_id__: "58139966743",
      profile_pic_id: "3660566037621543607_58139966743",
      profile_pic_url:
        "https://instagram.fjai2-7.fna.fbcdn.net/v/t51.2885-19/502343792_17959928174942744_7531279865763043168_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=instagram.fjai2-7.fna.fbcdn.net\u0026_nc_cat=108\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=fP2mJdCB7LoQ7kNvwGoxJTs\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_Affo5sJOxt3QjCEJt83PvQ32bcRP8mtS8cyU1k4DLPiLmg\u0026oe=68EAD44A\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "travelwithvishii",
      is_private: false,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 1759753815,
    },
    {
      pk: "48900303878",
      pk_id: "48900303878",
      id: "48900303878",
      full_name: "Nitesh Pahalwan",
      fbid_v2: "17841448956362537",
      third_party_downloads_enabled: 1,
      strong_id__: "48900303878",
      profile_pic_id: "3707589738485565346_48900303878",
      profile_pic_url:
        "https://instagram.fjai2-6.fna.fbcdn.net/v/t51.2885-19/539371342_18048505430631879_6802922642296334457_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=instagram.fjai2-6.fna.fbcdn.net\u0026_nc_cat=103\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=axNWvNvifuUQ7kNvwGEKN8N\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AffLGXrujFepXCvBBd5fY0Y9UedJLTlQg6DdvR8GxORuJw\u0026oe=68EAC138\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "pahalwan_nitesh",
      is_private: false,
      has_anonymous_profile_picture: false,
      reel_media_seen_timestamp: 1759819637,
      account_badges: [],
      latest_reel_media: 1759819637,
    },
    {
      pk: "32019619068",
      pk_id: "32019619068",
      id: "32019619068",
      full_name: "Simran Gupta",
      fbid_v2: "17841432012052452",
      third_party_downloads_enabled: 1,
      strong_id__: "32019619068",
      profile_pic_id: "3590910463249020962_32019619068",
      profile_pic_url:
        "https://instagram.fjai2-6.fna.fbcdn.net/v/t51.2885-19/485182643_2144111936042479_8177762717843669193_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=instagram.fjai2-6.fna.fbcdn.net\u0026_nc_cat=107\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=FyvZNdlSUXYQ7kNvwGcAg5v\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfcjG9RQphe7yiz7k0B44j_EZvEr8qqnzC4DkzdfmLD2cg\u0026oe=68EADE60\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "makeup_my_glamorous",
      is_private: false,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      pk: "2537093469",
      pk_id: "2537093469",
      id: "2537093469",
      full_name: "Nakhs Rao",
      fbid_v2: "17841402564087136",
      third_party_downloads_enabled: 1,
      strong_id__: "2537093469",
      profile_pic_id: "3711948128435451404_2537093469",
      profile_pic_url:
        "https://instagram.fjai2-5.fna.fbcdn.net/v/t51.2885-19/541255819_18353534608085470_6703112151326915728_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=instagram.fjai2-5.fna.fbcdn.net\u0026_nc_cat=110\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=kWOIEntPsxAQ7kNvwHPVMUA\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfckgkDFAozD9GHBIMfwk-ZL9jQB7WsnU7MGZu8QKMxAvA\u0026oe=68EAEDE8\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "nakhsraoo",
      is_private: false,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
    {
      pk: "2549146862",
      pk_id: "2549146862",
      id: "2549146862",
      full_name: "Ravinesh Mishra",
      fbid_v2: "17841402485878643",
      third_party_downloads_enabled: 1,
      strong_id__: "2549146862",
      profile_pic_id: "3520001331589792211_2549146862",
      profile_pic_url:
        "https://instagram.fjai2-7.fna.fbcdn.net/v/t51.2885-19/470037653_1151791496379974_2851427911291779126_n.jpg?stp=dst-jpg_s150x150_tt6\u0026efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0\u0026_nc_ht=instagram.fjai2-7.fna.fbcdn.net\u0026_nc_cat=102\u0026_nc_oc=Q6cZ2QFMii5MxL0Qvvjt5GbOYRsNO7EeVQb7m_FpJKsvjuQNK-oZzQH1nR1AFTtuSo426BSLh31M10LuN6sT74vNayFg\u0026_nc_ohc=QBtKGKNrWW8Q7kNvwESKh8-\u0026_nc_gid=Hk4XZ6Azm4iXEXBvu1Ts0g\u0026edm=APQMUHMBAAAA\u0026ccb=7-5\u0026oh=00_AfeUwUo3cMPgd-orFGkktyIQBkiAsqndrov6o6lGiI3ZkQ\u0026oe=68EABEBE\u0026_nc_sid=6ff7c8",
      is_verified: false,
      username: "ravinesh_fitness",
      is_private: false,
      has_anonymous_profile_picture: false,
      account_badges: [],
      latest_reel_media: 0,
    },
  ];

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await res.json();
        setUsers([...data, ...data]);
        console.log("data received", data);
        if (data.length != 30) {
        //   await fetchUsers();
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div
      className="d-flex bg-dark justify-content-center align-items-center"
      style={{ height: "100vh", width: "30%" }}
    >
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="bg-light" style={{ height: "90%", width: "90%" }}>
          <h1>{`Followers: ${users.length}`}</h1>
          <ul className="list-group overflow-scroll" style={{ height: "90%" }}>
            {users.map((user) => (
              <Tile
                // fullName={user.full_name}
                fullName={user.name}
                userName={user.username}
                // profilePicUrl={user.profile_pic_url}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default InstagramDetails;
