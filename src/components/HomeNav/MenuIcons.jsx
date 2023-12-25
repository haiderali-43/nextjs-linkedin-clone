import {
  FaUsers,
  FaHome,
  FaEnvelope,
  FaSms,
  FaBell,
  FaUser,
} from "react-icons/fa";

const MenuIcons = () => {
  const HomeIcons = [
    { title: "Home", icon: <FaHome /> },
    { title: "My Network", icon: <FaUsers /> },
    { title: "Jobs", icon: <FaEnvelope /> },
    { title: "Messages", icon: <FaSms /> },
    { title: "Notifications", icon: <FaBell /> },
    { title: "Me", icon: <FaUser /> },
  ];

  return (
    <div className="flex items-center space-x-9">
      {HomeIcons.map((item, index) => (
        <div className="flex flex-col items-center space-x-1 cursor-pointer" key={index}>
          <div className="w-4 h-4">{item.icon}</div>
          <p className="text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuIcons;
