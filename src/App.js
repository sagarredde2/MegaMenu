import React from "react";
import MegaMenu from "./MegaMenu";

const App = () => {
  const links = [
    {
      text: "Store 1",
      url: "store1",
      subMenu: [
        { text: "Sub Item 1", url: "subitem1" },
        { text: "Sub Item 2", url: "subitem2" }
      ]
    },
    {
      text: "Store 2",
      url: "store2",
      subMenu: [
        { text: "Sub Item 3", url: "subitem3" },
        { text: "Sub Item 4", url: "subitem4" }
      ]
    },
    {
      text: "Store 3",
      url: "store3",
      subMenu: [
        { text: "Sub Item 1", url: "subitem1" },
        { text: "Sub Item 2", url: "subitem2" }
      ]
    }
    // Add more menu items with sub-menus as needed
  ];

  return <MegaMenu links={links} />;
};

export default App;
