import Account from "@/components/Charity/Account";
import Dashnav from "@/components/Charity/Dashnav";
import worldImage from "../../assets/world2.jpg";
import Password from "@/components/Charity/Password";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div className="flex flex-col gap-8 relative min-h-screen w-[1050px] ml-64 "
      style={{ backgroundImage: `url(${worldImage})` }}>
      <Dashnav title="Settings" />
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Account />{" "}
        </TabsContent>
        <TabsContent value="password">
          <Password />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;